// SANGANAK course catalogue and the pages that read it (tabs, course detail, booking prefill)

const LEVELS = {
    it: {
        label: 'IT Training',
        tab: 'IT Training',
        intro: 'Professional IT, data, cloud and systems training, taught one-to-one through practical, project-based sessions.',
        audience: 'Career changers, graduates and working professionals',
        style: 'Project-based, at your pace'
    },
    gcse: {
        label: 'GCSE',
        tab: 'GCSE',
        intro: 'Exam-focused tuition for Years 10 and 11 across AQA, OCR and Edexcel: topic mastery, required practicals and exam technique.',
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
    },
    cbse: {
        label: 'CBSE',
        tab: 'CBSE',
        intro: 'Board-exam preparation for CBSE Class 11 and 12 Computer Science and Informatics Practices, including practical file support.',
        audience: 'Students in Class 11 and 12 (CBSE)',
        style: 'CBSE syllabus aligned'
    }
};

const COURSES = [
    {
        "id": "it-agile-data-governance",
        "level": "it",
        "icon": "👥",
        "title": "Agile & Data Governance",
        "blurb": "Scrum ceremonies, sprint planning, GDPR compliance, data quality validation, audit trails.",
        "syllabus": [
            "Agile fundamentals and the Scrum framework",
            "Sprint planning and backlog management",
            "Daily standups and retrospectives",
            "Introduction to data governance",
            "GDPR compliance essentials",
            "Data quality validation processes",
            "Maintaining audit trails",
            "Balancing agile delivery with governance requirements"
        ]
    },
    {
        "id": "it-nagios-xi",
        "level": "it",
        "icon": "🛰️",
        "title": "Nagios XI",
        "blurb": "Enterprise infrastructure monitoring - install, configure, dashboard, alerting, and capacity planning.",
        "syllabus": [
            "Introduction to Nagios XI",
            "Nagios XI architecture",
            "Installing and configuring Nagios XI",
            "Nagios XI dashboard",
            "Monitoring hosts and services",
            "Monitoring with Nagios plugins",
            "Remote monitoring",
            "Notifications and alerts",
            "Reporting in Nagios XI",
            "Capacity planning",
            "Graphing and visualisations",
            "Advanced configuration",
            "User management and security",
            "Integrating Nagios XI with third-party tools",
            "High availability and failover",
            "Troubleshooting and maintenance",
            "Automation with Nagios XI",
            "Best practices for monitoring with Nagios XI"
        ]
    },
    {
        "id": "it-nagios-log-server",
        "level": "it",
        "icon": "📜",
        "title": "Nagios Log Server",
        "blurb": "Centralised log collection, searching, dashboards, alerting, and compliance monitoring at scale.",
        "syllabus": [
            "Introduction to Nagios Log Server",
            "Nagios Log Server architecture",
            "Installing Nagios Log Server",
            "Configuring data sources for log collection",
            "Centralised log collection",
            "Searching and analysing logs",
            "Creating and customising dashboards",
            "Alerts and notifications",
            "Log retention and archiving",
            "Reporting in Nagios Log Server",
            "Security and compliance monitoring",
            "Performance tuning and optimisation",
            "High availability and redundancy",
            "User management and role-based access control (RBAC)",
            "Integration with other tools",
            "Automation and API usage",
            "Troubleshooting and maintenance"
        ]
    },
    {
        "id": "it-nagios-network-analyzer",
        "level": "it",
        "icon": "🌐",
        "title": "Nagios Network Analyzer",
        "blurb": "Network traffic analysis, visualisation, security monitoring, and performance tuning.",
        "syllabus": [
            "Introduction to Nagios Network Analyzer",
            "Nagios Network Analyzer architecture",
            "Installation and configuration",
            "Configuring network traffic sources",
            "Understanding probes and network data collection",
            "Traffic analysis and visualisation",
            "Filtering and querying Network Analyzer",
            "Network security monitoring",
            "Notifications and alerts",
            "Reporting in Nagios Network Analyzer",
            "Integrating with Nagios XI",
            "Performance tuning and optimisation",
            "High availability and failover setup",
            "User management and security",
            "Automation with Nagios Network Analyzer",
            "Best practices for network traffic monitoring"
        ]
    },
    {
        "id": "it-ubuntu-systems-administrator-usa",
        "level": "it",
        "icon": "🖧",
        "title": "Ubuntu Systems Administrator (USA)",
        "blurb": "Filesystems, system resources, security, networking, and application management on Ubuntu Desktop.",
        "syllabus": [
            "Navigating files and filesystems",
            "Navigating and manipulating directories and files via the terminal",
            "Searching, comparing and modifying files with regex, pipes and redirection",
            "Managing system resources",
            "Locating system logs and configuring log rotation",
            "Working with disk partitions and filesystems (fdisk, fsck, parted)",
            "Crontab format and scheduling",
            "Interpreting system logs during troubleshooting",
            "Securing filesystem access",
            "Creating and managing SSH keys",
            "System-wide and user-specific security settings",
            "Password complexity and expiry rules",
            "Interpreting sudo configuration policies",
            "Managing user and group accounts, access and membership",
            "Managing directory and file ownership and access",
            "Networking configuration",
            "Layer 2 networking: MAC addresses, ARP resolution, broadcast/multicast",
            "Open-source community concepts: LTS release cycles and versioning",
            "The Ubuntu community and its governance",
            "Interpreting common open-source licenses",
            "Installing Ubuntu Desktop",
            "Fixing boot issues (GRUB2, Initramfs)",
            "Upgrading Ubuntu LTS releases",
            "Creating a bootable USB drive for Ubuntu",
            "Creating and managing LVM volumes, filesystems and snapshots",
            "Managing applications: listing and upgrading packages",
            "Deb vs snap packages",
            "Installing packages from multiple sources",
            "Finding and interpreting package descriptions",
            "Managing package updates (apt-get, unattended upgrades, Synaptic, Aptitude)",
            "Securing desktop systems: PKI components and use-cases",
            "Assigning permissions to directories using ACL attributes"
        ]
    },
    {
        "id": "it-ubuntu-server-professional-usp",
        "level": "it",
        "icon": "🗄️",
        "title": "Ubuntu Server Professional (USP)",
        "blurb": "Deploying, securing, and monitoring production Ubuntu servers - services, containers, and automation.",
        "syllabus": [
            "Configuring servers and services via systemd",
            "Automated remote backups and restores (systemd timers, cron)",
            "Setting up a fileserver with NFS or Samba",
            "Setting up a web application with Apache/Nginx and MySQL, PostgreSQL or MongoDB",
            "Deploying Ubuntu Server with various installation methods",
            "Validating a system against deployment requirements",
            "Booting into single-user mode",
            "Configuring remote SSH access",
            "Regular vs system users",
            "Installing and configuring a firewall with ufw",
            "Identifying and managing system processes and services",
            "Listing running, disabled and inactive systemd units",
            "Writing and maintaining automation scripts in Bash or Python with git",
            "Using automation tools such as cloud-init and Ansible",
            "Applying system updates",
            "Managing containerised web and database apps with Docker or LXD",
            "Provisioning virtualised environments with virsh, virt-manager or LXD",
            "Analysing the impact of configuration on compute and network performance",
            "Troubleshooting with tcpdump, dig, ss and ip",
            "Responding to real-time system degradation from resource contention",
            "Monitoring and automatically detecting connectivity and load issues"
        ]
    },
    {
        "id": "it-ai-data-engineering-analyst",
        "level": "it",
        "icon": "🧠",
        "title": "AI - Data Engineering Analyst",
        "blurb": "Data pipelines, ETL processes, database management, data quality, and visualization for business intelligence.",
        "syllabus": [
            "Data pipeline design and ETL fundamentals",
            "Extracting, transforming and loading data from multiple sources",
            "Database design and management for analytics",
            "Data quality checks and validation",
            "Data visualisation for business intelligence",
            "Automating recurring data workflows",
            "Working with structured and unstructured data",
            "Introduction to AI-assisted data analysis"
        ]
    },
    {
        "id": "it-power-bi",
        "level": "it",
        "icon": "📊",
        "title": "Power BI",
        "blurb": "DAX, Power Query, semantic models, row-level security, deployment pipelines, workspace administration.",
        "syllabus": [
            "Power BI Desktop fundamentals and data import",
            "Power Query for data shaping and transformation",
            "DAX formulas and calculated measures",
            "Building semantic models and relationships",
            "Row-level security and access control",
            "Interactive dashboards and report design",
            "Publishing and deployment pipelines",
            "Workspace and tenant administration"
        ]
    },
    {
        "id": "it-sql-advanced",
        "level": "it",
        "icon": "💾",
        "title": "SQL (Advanced)",
        "blurb": "CTEs, window functions, stored procedures, query optimisation across PostgreSQL, MySQL, SQL Server, AWS Athena.",
        "syllabus": [
            "Core SQL refresher: joins, aggregation, subqueries",
            "Common Table Expressions (CTEs)",
            "Window functions for analytics",
            "Writing and optimising stored procedures",
            "Query performance tuning and indexing",
            "Working across PostgreSQL, MySQL and SQL Server",
            "Querying data in AWS Athena",
            "Real-world query optimisation case studies"
        ]
    },
    {
        "id": "it-cloud-platforms",
        "level": "it",
        "icon": "☁️",
        "title": "Cloud Platforms",
        "blurb": "Azure, Google Cloud, AWS - cloud-native data querying, storage, and data engineering services.",
        "syllabus": [
            "Cloud fundamentals: compute, storage, networking",
            "Introduction to Azure for data workloads",
            "Introduction to Google Cloud Platform",
            "Introduction to AWS for data engineering",
            "Cloud-native data storage services",
            "Cloud-native data querying and warehousing",
            "Setting up and securing cloud data pipelines",
            "Choosing the right cloud service for a use case"
        ]
    },
    {
        "id": "it-python",
        "level": "it",
        "icon": "🐍",
        "title": "Python",
        "blurb": "Pandas, NumPy, pipeline scripting, data transformation, automation, REST API development.",
        "syllabus": [
            "Python fundamentals for data work",
            "Data manipulation with Pandas",
            "Numerical computing with NumPy",
            "Building and scripting data pipelines",
            "Data cleaning and transformation techniques",
            "Automating repetitive tasks with Python",
            "Building REST APIs",
            "Testing and debugging Python scripts"
        ]
    },
    {
        "id": "it-data-modelling",
        "level": "it",
        "icon": "📈",
        "title": "Data Modelling",
        "blurb": "Star schema, fact/dimension design, semantic layers, relationship management, performance tuning.",
        "syllabus": [
            "Introduction to dimensional modelling",
            "Star schema vs snowflake schema",
            "Fact and dimension table design",
            "Building semantic layers for reporting",
            "Managing relationships between tables",
            "Slowly changing dimensions",
            "Performance tuning for large models",
            "Documenting and maintaining data models"
        ]
    },
    {
        "id": "it-fastapi",
        "level": "it",
        "icon": "⚡",
        "title": "FastAPI",
        "blurb": "Modern REST API development, async programming, data validation, automatic documentation.",
        "syllabus": [
            "FastAPI fundamentals and project setup",
            "Building REST endpoints",
            "Async programming in Python",
            "Request/response data validation with Pydantic",
            "Automatic interactive API documentation",
            "Authentication and authorization basics",
            "Connecting FastAPI to a database",
            "Deploying a FastAPI application"
        ]
    },
    {
        "id": "it-github",
        "level": "it",
        "icon": "🔀",
        "title": "GitHub",
        "blurb": "Version control, branching strategy, pull requests, repository management for data workflows.",
        "syllabus": [
            "Git and GitHub fundamentals",
            "Branching strategies for team projects",
            "Creating and reviewing pull requests",
            "Resolving merge conflicts",
            "Repository structure for data workflows",
            "Using GitHub Actions for automation",
            "Managing issues and project boards",
            "Best practices for commit history"
        ]
    },
    {
        "id": "gcse-computer-science-aqa",
        "level": "gcse",
        "icon": "💻",
        "title": "Computer Science (AQA)",
        "blurb": "AQA 8525 specification - algorithms, Python programming, and computer systems.",
        "syllabus": [
            "Fundamentals of algorithms",
            "Programming fundamentals in Python",
            "Data representation: binary, hex, images, sound",
            "Computer systems: CPU, memory, storage",
            "Networks and topologies",
            "Cyber security fundamentals",
            "Databases and SQL basics",
            "Impact of technology on society, law and ethics",
            "Non-exam assessment: programming project",
            "Exam technique for Paper 1 and Paper 2"
        ]
    },
    {
        "id": "gcse-computer-science-ocr",
        "level": "gcse",
        "icon": "💻",
        "title": "Computer Science (OCR)",
        "blurb": "OCR J277 specification - systems architecture, networks, and programming.",
        "syllabus": [
            "Systems architecture",
            "Memory and storage",
            "Networks, connections and protocols",
            "Network security",
            "Systems software",
            "Ethical, legal and environmental impacts",
            "Algorithms and programming fundamentals",
            "Programming techniques in Python",
            "Producing robust programs",
            "Boolean logic and computational logic",
            "Exam technique for Paper 1 and Paper 2"
        ]
    },
    {
        "id": "gcse-computer-science-edexcel",
        "level": "gcse",
        "icon": "💻",
        "title": "Computer Science (Edexcel)",
        "blurb": "Pearson Edexcel 1CP2 specification - computational thinking and programming.",
        "syllabus": [
            "Problem solving with computers",
            "Computational thinking and algorithms",
            "Programming in Python",
            "Data representation",
            "Computer networks",
            "Cyber security threats and prevention",
            "Data structures and databases",
            "Legal, moral and ethical issues in computing",
            "Programming project preparation",
            "Exam technique for both papers"
        ]
    },
    {
        "id": "gcse-physics",
        "level": "gcse",
        "icon": "⚡",
        "title": "Physics",
        "blurb": "Energy, electricity, forces, and waves - with full required-practical coverage.",
        "syllabus": [
            "Energy stores and transfers",
            "Electricity and circuits",
            "Particle model of matter",
            "Atomic structure and radioactivity",
            "Forces and motion",
            "Waves and their properties",
            "Magnetism and electromagnetism",
            "Space physics (triple science)",
            "Required practicals",
            "Exam technique and calculation questions"
        ]
    },
    {
        "id": "gcse-biology",
        "level": "gcse",
        "icon": "🧬",
        "title": "Biology",
        "blurb": "Cells, organisation, inheritance and ecology, with exam-technique for long answers.",
        "syllabus": [
            "Cell biology and cell structure",
            "Organisation: organs and systems",
            "Infection and response",
            "Bioenergetics: photosynthesis and respiration",
            "Homeostasis and response",
            "Inheritance, variation and evolution",
            "Ecology and ecosystems",
            "Required practicals",
            "Exam technique for extended-response questions"
        ]
    },
    {
        "id": "gcse-chemistry",
        "level": "gcse",
        "icon": "⚗️",
        "title": "Chemistry",
        "blurb": "Atomic structure, bonding, reactions, and quantitative chemistry.",
        "syllabus": [
            "Atomic structure and the periodic table",
            "Bonding, structure and properties of matter",
            "Quantitative chemistry and calculations",
            "Chemical changes and reactivity",
            "Energy changes in reactions",
            "Rates of reaction and equilibrium",
            "Organic chemistry basics",
            "Chemical analysis",
            "Required practicals",
            "Exam technique and calculation questions"
        ]
    },
    {
        "id": "gcse-maths",
        "level": "gcse",
        "icon": "🔢",
        "title": "Maths",
        "blurb": "Foundation and Higher tier algebra, geometry and problem solving.",
        "syllabus": [
            "Algebra and equations",
            "Functions and graphs",
            "Trigonometry",
            "Statistics and probability",
            "Geometry",
            "Problem-solving"
        ]
    },
    {
        "id": "gcse-english",
        "level": "gcse",
        "icon": "📝",
        "title": "English",
        "blurb": "Language analysis, literature texts and essays that hit the mark scheme.",
        "syllabus": [
            "Poetry analysis",
            "Prose and drama",
            "Language techniques",
            "Essay structure",
            "Reading comprehension",
            "Spoken language"
        ]
    },
    {
        "id": "alevel-computer-science",
        "level": "alevel",
        "icon": "💻",
        "title": "Computer Science",
        "blurb": "Advanced programming, data structures, algorithms, and computer architecture.",
        "syllabus": [
            "Programming paradigms and advanced Python/Java",
            "Data structures: stacks, queues, trees, graphs",
            "Algorithms and complexity (Big O)",
            "Computer systems architecture",
            "Databases and advanced SQL",
            "Networking and the internet",
            "Functional programming",
            "Legal, ethical and cultural issues in computing",
            "Non-exam assessment: programming project",
            "Exam technique for Paper 1 and Paper 2"
        ]
    },
    {
        "id": "alevel-it",
        "level": "alevel",
        "icon": "🖥️",
        "title": "IT",
        "blurb": "Information systems, databases, networking, and systems analysis for organisations.",
        "syllabus": [
            "Information systems in organisations",
            "Database design and management",
            "Networking and communications",
            "Systems analysis and design",
            "Legal and ethical issues in IT",
            "Project management for IT solutions",
            "Spreadsheet and data modelling",
            "Web development fundamentals",
            "Coursework/project preparation",
            "Exam technique"
        ]
    },
    {
        "id": "alevel-biology",
        "level": "alevel",
        "icon": "🧬",
        "title": "Biology",
        "blurb": "Cell biology, genetics, physiology and ecology, through to A-Level depth and rigour.",
        "syllabus": [
            "Cell structure and biological molecules",
            "Cell membranes and transport",
            "Enzymes and biochemical reactions",
            "DNA, genetics and inheritance",
            "Energy and respiration",
            "Photosynthesis",
            "Homeostasis and the nervous system",
            "Ecology, populations and evolution",
            "Required practicals and data analysis",
            "Exam technique for extended-response questions"
        ]
    },
    {
        "id": "alevel-chemistry",
        "level": "alevel",
        "icon": "⚗️",
        "title": "Chemistry",
        "blurb": "Physical, inorganic and organic chemistry at advanced level.",
        "syllabus": [
            "Atomic structure and periodicity",
            "Bonding, structure and properties",
            "States of matter and solutions",
            "Thermodynamics and kinetics",
            "Equilibrium and acid-base reactions",
            "Redox reactions and electrochemistry",
            "Transition metals and complexes",
            "Organic chemistry: nomenclature and mechanisms",
            "Organic synthesis and analysis",
            "Spectroscopy and practical skills"
        ]
    },
    {
        "id": "alevel-physics",
        "level": "alevel",
        "icon": "⚡",
        "title": "Physics",
        "blurb": "Mechanics, thermodynamics, waves, electricity and modern physics at advanced level.",
        "syllabus": [
            "Measurement and uncertainty",
            "Kinematics and dynamics",
            "Forces, energy and momentum",
            "Thermodynamics and gases",
            "Waves and sound",
            "Electricity and magnetism",
            "Electromagnetic induction",
            "Quantum physics and relativity",
            "Astrophysics",
            "Practical skills and data analysis"
        ]
    },
    {
        "id": "alevel-maths",
        "level": "alevel",
        "icon": "🔢",
        "title": "Maths",
        "blurb": "Pure maths, statistics and mechanics for advanced learners.",
        "syllabus": [
            "Proof and mathematical reasoning",
            "Algebra and functions",
            "Sequences and series",
            "Trigonometry and circular measure",
            "Exponentials and logarithms",
            "Calculus: differentiation",
            "Calculus: integration",
            "Numerical methods",
            "Statistics and probability",
            "Mechanics: motion and forces"
        ]
    },
    {
        "id": "alevel-further-maths",
        "level": "alevel",
        "icon": "➕",
        "title": "Further Maths",
        "blurb": "Advanced pure mathematics, matrices, complex numbers and proof.",
        "syllabus": [
            "Complex numbers and argand diagrams",
            "Matrices and transformations",
            "Systems of linear equations",
            "Vectors and 3D geometry",
            "Further calculus and differential equations",
            "Series and summation",
            "Mathematical proof and logic",
            "Graph theory and networks",
            "Polar coordinates",
            "Hyperbolic functions"
        ]
    },
    {
        "id": "y59-maths",
        "level": "y59",
        "icon": "🔢",
        "title": "Maths",
        "blurb": "Number, algebra, geometry, statistics and reasoning for UK primary and early secondary.",
        "syllabus": [
            "Number and place value",
            "Addition and subtraction",
            "Multiplication and division",
            "Fractions, decimals and percentages",
            "Algebra and algebraic reasoning",
            "Ratio and proportion",
            "Geometry: shape and space",
            "Measurement and units",
            "Statistics and data handling",
            "Mathematical reasoning and problem-solving"
        ]
    },
    {
        "id": "y59-science",
        "level": "y59",
        "icon": "🔬",
        "title": "Science",
        "blurb": "Biology, chemistry and physics for UK primary and early secondary: life, matter and forces.",
        "syllabus": [
            "Life processes and living things",
            "Materials and their properties",
            "Physical processes: forces and motion",
            "Earth and space",
            "Cells and organisation",
            "Nutrition and digestion",
            "Respiration and photosynthesis",
            "States of matter",
            "Chemical reactions",
            "Energy transfer and waves"
        ]
    },
    {
        "id": "y59-english",
        "level": "y59",
        "icon": "📖",
        "title": "English",
        "blurb": "Reading, writing, speaking and listening for UK primary and early secondary.",
        "syllabus": [
            "Phonics and word reading",
            "Comprehension of fiction and non-fiction",
            "Composition and writing skills",
            "Grammar, punctuation and spelling",
            "Speaking and listening",
            "Oracy and presentation",
            "Poetry and verse",
            "Drama and performance",
            "Author study",
            "Media and digital literacy"
        ]
    },
    {
        "id": "cbse-computer-science-class-12",
        "level": "cbse",
        "icon": "💻",
        "title": "Computer Science (Class 12)",
        "blurb": "Python, data structures, databases and networking for CBSE board exams.",
        "syllabus": [
            "Python revision and advanced concepts",
            "Data structures: stacks, queues",
            "File handling in Python",
            "Database concepts and SQL (MySQL)",
            "Computer networks",
            "Boolean algebra and logic",
            "Python-database connectivity",
            "Practical file preparation",
            "Exam technique for board exams"
        ]
    },
    {
        "id": "cbse-informatics-practices-class-12",
        "level": "cbse",
        "icon": "📊",
        "title": "Informatics Practices (Class 12)",
        "blurb": "Data handling with Pandas, visualisation, SQL, and data-driven decision making.",
        "syllabus": [
            "Data handling using Pandas and NumPy",
            "Data visualisation with Matplotlib",
            "Database query language (SQL)",
            "Data-driven decision making",
            "Introduction to big data and data science concepts",
            "Societal impacts of IT",
            "Practical file preparation",
            "Exam technique for board exams"
        ]
    },
    {
        "id": "cbse-computer-science-class-11",
        "level": "cbse",
        "icon": "💻",
        "title": "Computer Science (Class 11)",
        "blurb": "Python fundamentals, flow of control, and an introduction to databases.",
        "syllabus": [
            "Computer fundamentals and system software",
            "Introduction to Python programming",
            "Flow of control and conditional statements",
            "Lists, tuples and dictionaries in Python",
            "String manipulation",
            "Introduction to databases",
            "Society, law and ethics in computing",
            "Practical file preparation"
        ]
    },
    {
        "id": "cbse-informatics-practices-class-11",
        "level": "cbse",
        "icon": "📊",
        "title": "Informatics Practices (Class 11)",
        "blurb": "Computer basics, Python, data handling and an introduction to SQL.",
        "syllabus": [
            "Computer system basics",
            "Introduction to Python",
            "Data handling with Python",
            "Database concepts",
            "Introduction to SQL",
            "Society, law and ethics",
            "Practical file preparation"
        ]
    }
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
                (c.outcomes ? '<h2 class="left">What you will be able to do</h2>' +
                '<ul class="syllabus">' + c.outcomes.map(s => '<li>' + s + '</li>').join('') + '</ul>' : '') +
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

// booking.html: course picker (IT Training first), optionally pre-selected by ?course=
function initBookingPrefill() {
    const banner = document.getElementById('course-banner');
    const picker = document.getElementById('course-picker');
    const subjectInput = document.getElementById('selected-subject');
    const courseInput = document.getElementById('selected-course');
    if (!picker || !subjectInput) return;

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select a course';
    picker.appendChild(placeholder);

    Object.keys(LEVELS).forEach(key => {
        const group = document.createElement('optgroup');
        group.label = LEVELS[key].label;
        COURSES.filter(c => c.level === key).forEach(c => {
            const o = document.createElement('option');
            o.value = c.id;
            o.textContent = c.title;
            group.appendChild(o);
        });
        picker.appendChild(group);
    });

    function apply(id) {
        const c = findCourse(id);
        const label = c ? LEVELS[c.level].label + ' ' + c.title : '';
        subjectInput.value = label;
        if (courseInput) courseInput.value = c ? c.id : '';
        if (banner) {
            banner.hidden = !c;
            banner.textContent = c ? 'You are booking: ' + label : '';
        }
    }

    picker.addEventListener('change', () => apply(picker.value));

    const preset = new URLSearchParams(location.search).get('course');
    if (findCourse(preset)) {
        picker.value = preset;
        apply(preset);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initCourseTabs();
    initCourseDetail();
    initBookingPrefill();
});
