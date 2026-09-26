// Edit this list to add, change or remove roles. The entries below are examples.
const JOBS = [
    { id: 'data-analyst', title: 'Data Analyst', category: 'Data', type: 'Full-time', location: 'Hybrid, UK',
      summary: 'Turn business data into clear reports using SQL and Power BI.',
      skills: ['SQL', 'Power BI', 'Excel'] },
    { id: 'junior-python-dev', title: 'Junior Python Developer', category: 'Software', type: 'Full-time', location: 'Remote, UK',
      summary: 'Build and maintain internal tools and automation with Python.',
      skills: ['Python', 'Git', 'APIs'] },
    { id: 'cloud-support', title: 'Cloud Support Engineer', category: 'Cloud', type: 'Full-time', location: 'On-site, UK',
      summary: 'Monitor and support cloud infrastructure and respond to incidents.',
      skills: ['AWS or Azure', 'Linux', 'Monitoring'] }
];

function initJobs() {
    const list = document.getElementById('roles-list');
    const filters = document.getElementById('role-filters');
    const roleSelect = document.getElementById('c-role');
    if (!list) return;

    const categories = ['All'].concat([...new Set(JOBS.map(j => j.category))]);
    let current = 'All';

    JOBS.forEach(j => {
        const o = document.createElement('option');
        o.value = j.title;
        o.textContent = j.title;
        roleSelect.appendChild(o);
    });
    const other = document.createElement('option');
    other.value = 'General application';
    other.textContent = 'General application (no specific role)';
    roleSelect.appendChild(other);

    function render() {
        const shown = JOBS.filter(j => current === 'All' || j.category === current);
        list.innerHTML = '';

        if (!shown.length) {
            list.innerHTML = '<p class="section-intro">No roles listed in this category right now.</p>';
            return;
        }

        shown.forEach(j => {
            const card = document.createElement('article');
            card.className = 'role-card';

            const head = document.createElement('div');
            head.className = 'role-main';
            const h3 = document.createElement('h3');
            h3.textContent = j.title;
            const meta = document.createElement('p');
            meta.className = 'role-meta';
            meta.textContent = [j.category, j.type, j.location].join('  ·  ');
            const sum = document.createElement('p');
            sum.textContent = j.summary;
            const tags = document.createElement('div');
            tags.className = 'role-tags';
            j.skills.forEach(s => {
                const t = document.createElement('span');
                t.textContent = s;
                tags.appendChild(t);
            });
            head.append(h3, meta, sum, tags);

            const apply = document.createElement('a');
            apply.className = 'btn btn-secondary';
            apply.href = '#candidates';
            apply.textContent = 'Apply';
            apply.addEventListener('click', () => { roleSelect.value = j.title; });

            card.append(head, apply);
            list.appendChild(card);
        });
    }

    categories.forEach(cat => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip' + (cat === current ? ' active' : '');
        b.textContent = cat;
        b.addEventListener('click', () => {
            current = cat;
            filters.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
            render();
        });
        filters.appendChild(b);
    });

    render();
}

document.addEventListener('DOMContentLoaded', initJobs);
