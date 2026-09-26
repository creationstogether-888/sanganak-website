// SANGANAK course catalogue and the pages that read it (tabs, course detail, booking prefill)

const LEVELS = {
    it: {
        label: 'IT Training',
        tab: 'IT Training',
        intro: 'Job-ready technical skills, taught through practical projects with an expert one-to-one.',
        audience: 'Career changers, graduates and working professionals',
        style: 'Project-based, at your pace'
    },
    gcse: {
        label: 'GCSE',
        tab: 'GCSE',
        intro: 'Exam-focused tuition for Years 10 and 11: topic mastery, past papers and technique for top grades.',
        audience: 'Students in Years 10 and 11',
        style: 'Exam-board aligned'
    },
    alevel: {
        label: 'A-Level',
        tab: 'A-Level',
        intro: 'In-depth subject guidance for Years 12 and 13, built around university entry requirements.',
        audience: 'Students in Years 12 and 13',
        style: 'Exam-board aligned'
    },
    y59: {
        label: 'Years 5-9',
        tab: 'Years 5-9',
        intro: 'Confidence-building lessons in the core subjects, so the foundations are solid before GCSE.',
        audience: 'Students in Years 5 to 9',
        style: 'National Curriculum aligned'
    }
};

const COURSES = [
    // IT Training
    { id: 'python', level: 'it', icon: '🐍', title: 'Python Programming',
      blurb: 'From core fundamentals to scripting, data work and small web apps.',
      syllabus: ['Python fundamentals', 'Object-oriented programming', 'Data analysis with Pandas', 'Web frameworks (Django, Flask)', 'Machine learning basics', 'Real-world projects'],
      outcomes: ['Write clean, working Python programs', 'Automate everyday tasks and analyse data', 'Finish with portfolio projects you can show employers'] },
    { id: 'sql', level: 'it', icon: '💾', title: 'SQL & Database Management',
      blurb: 'Learn to query, design and manage the databases behind real businesses.',
      syllabus: ['SQL fundamentals', 'Database design', 'Queries and optimisation', 'Stored procedures', 'MySQL and PostgreSQL', 'Data warehousing'],
      outcomes: ['Write confident queries across multiple tables', 'Design a sensible database schema', 'Speed up slow queries'] },
    { id: 'powerbi', level: 'it', icon: '📊', title: 'Power BI',
      blurb: 'Turn raw data into dashboards and reports that people actually use.',
      syllabus: ['Power BI basics', 'Data visualisation', 'DAX formulas', 'Creating dashboards', 'Real-time analytics', 'Report publishing'],
      outcomes: ['Build interactive dashboards from scratch', 'Write DAX measures for real questions', 'Publish and share reports'] },
    { id: 'cloud', level: 'it', icon: '☁️', title: 'Cloud Computing',
      blurb: 'Understand cloud architecture, deployment and security from the ground up.',
      syllabus: ['AWS or Azure basics', 'Cloud architecture', 'Virtual machines and storage', 'Databases in the cloud', 'Security and compliance', 'Cost optimisation'],
      outcomes: ['Explain how cloud services fit together', 'Deploy and secure a simple cloud setup', 'Keep cloud costs under control'] },
    { id: 'data-analysis', level: 'it', icon: '📈', title: 'Data Analysis',
      blurb: 'Collect, clean and analyse data, then explain what it means.',
      syllabus: ['Data collection and cleaning', 'Statistical analysis', 'Advanced Excel', 'Python for data science', 'Data visualisation', 'Business intelligence'],
      outcomes: ['Clean messy data quickly', 'Choose the right analysis for the question', 'Present findings clearly to non-experts'] },
    { id: 'web-dev', level: 'it', icon: '🌐', title: 'Web Development',
      blurb: 'Build and launch real websites, front end to back end.',
      syllabus: ['HTML, CSS, JavaScript', 'Frontend frameworks', 'Backend development', 'Database integration', 'Deployment and DevOps', 'Portfolio projects'],
      outcomes: ['Build responsive websites', 'Connect a front end to a database', 'Deploy a live project'] },

    // GCSE
    { id: 'gcse-cs', level: 'gcse', icon: '💻', title: 'Computer Science',
      blurb: 'Algorithms, programming, networks and the logic behind the machine.',
      syllabus: ['Programming fundamentals (Python and more)', 'Data representation', 'Networks and cybersecurity', 'Hardware and software', 'Algorithms and logic', 'Exam practice and coding projects'],
      outcomes: ['Write and trace programs under exam conditions', 'Explain how computers store and move data', 'Approach the coding project with confidence'] },
    { id: 'gcse-biology', level: 'gcse', icon: '🧪', title: 'Biology',
      blurb: 'Cells, genetics, ecology and the human body, with plenty of exam practice.',
      syllabus: ['Cell biology and transport', 'Genetics and inheritance', 'Evolution and natural selection', 'Ecology and ecosystems', 'Organ systems', 'Exam technique and revision'],
      outcomes: ['Recall key content accurately', 'Handle required practicals and data questions', 'Write full-mark extended answers'] },
    { id: 'gcse-chemistry', level: 'gcse', icon: '⚛️', title: 'Chemistry',
      blurb: 'Atoms, bonding, reactions and calculations made clear.',
      syllabus: ['Atomic structure and bonding', 'Chemical reactions', 'Periodic table properties', 'Organic chemistry', 'Thermochemistry', 'Quantitative analysis'],
      outcomes: ['Balance equations and do chemical calculations', 'Link structure to properties', 'Answer multi-step exam questions'] },
    { id: 'gcse-physics', level: 'gcse', icon: '⚡', title: 'Physics',
      blurb: 'Forces, energy, waves and electricity, from equations to explanations.',
      syllabus: ['Forces and motion', 'Energy transfers', 'Waves and sound', 'Electricity and magnetism', 'Particle model', 'Nuclear physics'],
      outcomes: ['Rearrange and apply key equations', 'Explain concepts in exam language', 'Tackle practical and graph questions'] },
    { id: 'gcse-maths', level: 'gcse', icon: '🔢', title: 'Maths',
      blurb: 'Foundation and Higher tier algebra, geometry and problem solving.',
      syllabus: ['Algebra and equations', 'Functions and graphs', 'Trigonometry', 'Statistics and probability', 'Geometry', 'Problem-solving'],
      outcomes: ['Fill gaps from earlier years', 'Work faster and more accurately', 'Handle unfamiliar problem-solving questions'] },
    { id: 'gcse-english', level: 'gcse', icon: '📝', title: 'English',
      blurb: 'Language analysis, literature texts and essays that hit the mark scheme.',
      syllabus: ['Poetry analysis', 'Prose and drama', 'Language techniques', 'Essay structure', 'Reading comprehension', 'Spoken language'],
      outcomes: ['Plan and write structured essays', 'Analyse language and structure with evidence', 'Manage time across both papers'] },

    // A-Level
    { id: 'alevel-cs', level: 'alevel', icon: '💻', title: 'Computer Science',
      blurb: 'Advanced programming, theory and the coursework project.',
      syllabus: ['Programming (Python, Java)', 'Data structures and algorithms', 'Software engineering', 'Networks and security', 'Artificial intelligence', 'Project development'],
      outcomes: ['Implement and analyse core algorithms', 'Understand theory topics deeply', 'Plan and deliver the coursework project'] },
    { id: 'alevel-it', level: 'alevel', icon: '🖥️', title: 'Information Technology',
      blurb: 'Practical IT skills, data, systems and project work.',
      syllabus: ['Information systems and data', 'Databases and spreadsheets', 'Networks and communications', 'Cybersecurity and legislation', 'Project planning and delivery', 'Exam technique'],
      outcomes: ['Apply IT concepts to real scenarios', 'Produce well-documented project work', 'Answer scenario-based exam questions'] },
    { id: 'alevel-maths', level: 'alevel', icon: '🧮', title: 'Maths',
      blurb: 'Pure, statistics and mechanics, with a focus on university readiness.',
      syllabus: ['Pure mathematics', 'Calculus (differentiation and integration)', 'Complex numbers', 'Statistics and probability', 'Mechanics', 'University preparation'],
      outcomes: ['Master calculus and algebraic technique', 'Model real situations with statistics and mechanics', 'Build fluency for university-level maths'] },
    { id: 'alevel-further-maths', level: 'alevel', icon: '➕', title: 'Further Maths',
      blurb: 'Advanced pure maths, matrices and proof for the strongest mathematicians.',
      syllabus: ['Advanced pure mathematics', 'Linear algebra', 'Vectors and matrices', 'Differential equations', 'Complex analysis', 'Proof techniques'],
      outcomes: ['Work comfortably with abstract methods', 'Construct and follow rigorous proofs', 'Prepare for maths, engineering and physics degrees'] },
    { id: 'alevel-biology', level: 'alevel', icon: '🧬', title: 'Biology',
      blurb: 'Molecular biology, physiology and ecology with practical endorsement support.',
      syllabus: ['Molecular biology', 'Cell structure and function', 'Genetics and evolution', 'Ecology', 'Physiology', 'Practical investigations'],
      outcomes: ['Explain complex processes step by step', 'Analyse data and design investigations', 'Write high-scoring essay answers'] },
    { id: 'alevel-chemistry', level: 'alevel', icon: '⚗️', title: 'Chemistry',
      blurb: 'Physical, organic and inorganic chemistry, with mechanisms that finally make sense.',
      syllabus: ['Atomic structure', 'Bonding and structure', 'Kinetics and equilibrium', 'Organic chemistry', 'Thermodynamics', 'Redox reactions'],
      outcomes: ['Master organic mechanisms and synthesis routes', 'Handle equilibrium and kinetics calculations', 'Approach practical-based questions confidently'] },
    { id: 'alevel-physics', level: 'alevel', icon: '🔭', title: 'Physics',
      blurb: 'Mechanics to modern physics, with worked problems and clear explanations.',
      syllabus: ['Mechanics', 'Waves and oscillations', 'Electricity and magnetism', 'Thermal physics', 'Modern physics', 'Nuclear physics'],
      outcomes: ['Solve multi-step quantitative problems', 'Link concepts across topics', 'Write precise explanations for long-answer questions'] },

    // Years 5-9
    { id: 'y59-maths', level: 'y59', icon: '➗', title: 'Maths',
      blurb: 'Number, algebra and reasoning, taught so it clicks.',
      syllabus: ['Number systems and operations', 'Algebraic expressions and equations', 'Functions and graphs', 'Geometry and trigonometry', 'Data handling and probability', 'Problem-solving techniques'],
      outcomes: ['Build fast, accurate arithmetic', 'Get comfortable with early algebra', 'Grow confidence ahead of GCSE'] },
    { id: 'y59-science', level: 'y59', icon: '🔬', title: 'Science',
      blurb: 'Biology, chemistry and physics through clear explanations and examples.',
      syllabus: ['Cell structure and function', 'Chemical reactions', 'Forces and motion', 'Energy and heat', 'Waves and sound', 'Atoms and elements'],
      outcomes: ['Understand the big ideas in each science', 'Get used to scientific vocabulary and method', 'Stay ahead in class'] },
    { id: 'y59-english', level: 'y59', icon: '📖', title: 'English',
      blurb: 'Reading, writing and speaking skills that carry into every subject.',
      syllabus: ['Reading comprehension', 'Creative writing', 'Grammar and punctuation', 'Poetry analysis', 'Spoken English', 'Essay writing'],
      outcomes: ['Read closely and respond with evidence', 'Write with clarity and variety', 'Speak with more confidence'] }
];

function courseUrl(id) {
    return 'course.html?id=' + encodeURIComponent(id);
}

function findCourse(id) {
    return COURSES.find(c => c.id === id);
}

function tileHtml(c) {
    return '<a class="course-tile" href="' + courseUrl(c.id) + '">' +
        '<span class="tile-icon" aria-hidden="true">' + c.icon + '</span>' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.blurb + '</p>' +
        '<span class="tile-link">View course &rarr;</span>' +
    '</a>';
}

// Tabbed course browser: used on the homepage and the courses page
function initCourseTabs() {
    const root = document.getElementById('course-tabs');
    if (!root) return;

    const keys = Object.keys(LEVELS);
    const tablist = root.querySelector('.tab-buttons');
    const panels = root.querySelector('.tab-panels');

    keys.forEach((key, i) => {
        const level = LEVELS[key];
        const courses = COURSES.filter(c => c.level === key);

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tab-btn';
        btn.id = 'tab-btn-' + key;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-controls', 'tab-' + key);
        btn.dataset.tab = key;
        btn.textContent = level.tab;
        tablist.appendChild(btn);

        const panel = document.createElement('div');
        panel.className = 'tab-content';
        panel.id = 'tab-' + key;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', btn.id);
        panel.innerHTML =
            '<h3>' + level.label + '</h3>' +
            '<p class="tab-intro">' + level.intro + '</p>' +
            '<div class="tile-grid">' + courses.map(tileHtml).join('') + '</div>';
        panels.appendChild(panel);
    });

    function show(key, updateHash) {
        if (!LEVELS[key]) key = keys[0];
        root.querySelectorAll('.tab-btn').forEach(b => {
            const on = b.dataset.tab === key;
            b.classList.toggle('active', on);
            b.setAttribute('aria-selected', on ? 'true' : 'false');
            b.tabIndex = on ? 0 : -1;
        });
        root.querySelectorAll('.tab-content').forEach(p => {
            p.classList.toggle('active', p.id === 'tab-' + key);
        });
        if (updateHash && history.replaceState) {
            history.replaceState(null, '', '#' + key);
        }
    }

    tablist.addEventListener('click', e => {
        const b = e.target.closest('.tab-btn');
        if (b) show(b.dataset.tab, true);
    });

    tablist.addEventListener('keydown', e => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const current = keys.indexOf(root.querySelector('.tab-btn.active').dataset.tab);
        const next = (current + (e.key === 'ArrowRight' ? 1 : keys.length - 1)) % keys.length;
        show(keys[next], true);
        document.getElementById('tab-btn-' + keys[next]).focus();
    });

    // Links like training.html#gcse open the matching tab
    function fromHash() {
        const key = location.hash.replace('#', '');
        show(LEVELS[key] ? key : keys[0], false);
    }
    window.addEventListener('hashchange', fromHash);
    fromHash();
}

// course.html?id=... renders one course
function initCourseDetail() {
    const root = document.getElementById('course-detail');
    if (!root) return;

    const params = new URLSearchParams(location.search);
    const c = findCourse(params.get('id'));

    if (!c) {
        root.innerHTML =
            '<div class="container narrow"><h1>Course not found</h1>' +
            '<p>We could not find that course. Browse everything we teach on the courses page.</p>' +
            '<a class="btn btn-secondary" href="training.html">See all courses</a></div>';
        document.title = 'Course not found - SANGANAK';
        return;
    }

    const level = LEVELS[c.level];
    document.title = level.label + ' ' + c.title + ' - SANGANAK';

    const bookHref = 'booking.html?course=' + encodeURIComponent(c.id);
    const related = COURSES.filter(x => x.level === c.level && x.id !== c.id);

    root.innerHTML =
        '<section class="course-hero"><div class="container">' +
            '<a class="crumb" href="training.html#' + c.level + '">&larr; ' + level.label + ' courses</a>' +
            '<span class="course-hero-icon" aria-hidden="true">' + c.icon + '</span>' +
            '<h1>' + level.label + ' ' + c.title + '</h1>' +
            '<p>' + c.blurb + '</p>' +
            '<a class="btn btn-primary btn-large" href="' + bookHref + '">Book this course &rarr;</a>' +
        '</div></section>' +

        '<section><div class="container"><div class="detail-layout">' +
            '<div class="detail-main">' +
                '<h2 class="left">What you will cover</h2>' +
                '<ul class="syllabus">' + c.syllabus.map(s => '<li>' + s + '</li>').join('') + '</ul>' +
                '<h2 class="left">What you will be able to do</h2>' +
                '<ul class="syllabus">' + c.outcomes.map(s => '<li>' + s + '</li>').join('') + '</ul>' +
            '</div>' +
            '<aside class="detail-side">' +
                '<h3>At a glance</h3>' +
                '<dl>' +
                    '<dt>Level</dt><dd>' + level.label + '</dd>' +
                    '<dt>Best suited to</dt><dd>' + level.audience + '</dd>' +
                    '<dt>Format</dt><dd>One-to-one, online or in person</dd>' +
                    '<dt>Approach</dt><dd>' + level.style + '</dd>' +
                    '<dt>First session</dt><dd>Free 20-minute trial</dd>' +
                '</dl>' +
                '<a class="btn btn-primary" href="' + bookHref + '">Book a free trial</a>' +
            '</aside>' +
        '</div></div></section>' +

        (related.length
            ? '<section class="alternate"><div class="container"><h2>More ' + level.label + ' courses</h2>' +
              '<div class="tile-grid">' + related.map(tileHtml).join('') + '</div></div></section>'
            : '');
}

// booking.html?course=... pre-selects the chosen course
function initBookingPrefill() {
    const banner = document.getElementById('course-banner');
    const subjectInput = document.getElementById('selected-subject');
    const courseInput = document.getElementById('selected-course');
    if (!banner || !subjectInput) return;

    const c = findCourse(new URLSearchParams(location.search).get('course'));
    if (!c) return;

    const label = LEVELS[c.level].label + ' ' + c.title;
    subjectInput.value = label;
    if (courseInput) courseInput.value = c.id;

    banner.hidden = false;
    banner.innerHTML = 'You are booking: <strong></strong> <a href="training.html#' + c.level + '">Change course</a>';
    banner.querySelector('strong').textContent = label;
}

document.addEventListener('DOMContentLoaded', function () {
    initCourseTabs();
    initCourseDetail();
    initBookingPrefill();
});
