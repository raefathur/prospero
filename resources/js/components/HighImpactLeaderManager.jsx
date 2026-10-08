import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function HighImpactLeaderManager() {
    const { t, i18n } = useTranslation();

    const isEnglish = i18n.language === 'en';

    const [activeTab, setActiveTab] = useState('details');

    const content = {
        id: {
            home: 'Beranda',
            services: 'Layanan',
            programDetails: 'Detail Program',
            ourExperts: 'Para Ahli Kami',
            targetParticipants: 'Target Peserta',

            programs: 'Programs',
            programLabel: 'Program',

            durationLabel: 'Durasi',
            durationValue: '2 hari',

            locationLabel: 'Lokasi',
            locationValue:
                'In-House / Sesuai kebutuhan organisasi',

            register: 'Registrasi',
            registerNow: 'Hubungi Kami',

            heroTagline:
                'Memimpin Tim, Menggerakkan Kinerja & Memberi Dampak Nyata',

            heroDescription:
                'WORKSHOP HIGH IMPACT LEADER & MANAGER adalah program pengembangan kepemimpinan dan manajerial yang berfokus pada kemampuan memimpin tim, menggerakkan kinerja, dan menghasilkan dampak nyata di organisasi.',

            overviewTitle: 'Ringkasan',

            summary:
                'High Impact Leader & Manager merupakan workshop 2 hari yang dirancang untuk membantu peserta memahami peran dan tanggung jawab leader & manager yang efektif, mengelola tim secara produktif dan mencapai target organisasi, menggunakan data, KPI, dan monitoring untuk menghasilkan kinerja tinggi, serta menjadi pemimpin yang berpengaruh dan memberi dampak nyata. Program ini mencakup foundational leadership, performance management, execution, problem solving & decision making, delegation & monitoring, hingga action plan individual dan unit.',

            noteTitle:
                'Output Kelas',

            note:
                '1. Lead Dengan Arah — Memahami peran dan tanggung jawab leader & manager yang efektif. 2. Manage Dengan Hasil — Mengelola tim secara produktif & mencapai target organisasi. 3. Drive Performance — Menggunakan data, KPI, dan monitoring untuk menghasilkan kinerja tinggi. 4. Create Impact — Menjadi pemimpin yang berpengaruh & memberi dampak nyata.',

            problemTitle:
                'Agenda Kelas (2 Hari)',

            problemDescription:
                'Hari 1 berfokus pada Foundational Leadership. Hari 2 berfokus pada Performance & Execution.',

            signsTitle:
                'Target Audiens',

            signs: [
                'Manager Baru (0–2 Tahun Pengalaman)',
                'Supervisor/Asisten Manager',
                'Staff Senior Calon Pimpinan',
                'Pimpinan Unit Kerja',
            ],

            keyQuestion:
                'Benefit Kelas',

            organizationStatement:
                'Pemateri Profesional & Berpengalaman • Networking Dengan Praktisi & Sejawat • Sertifikat Partisipasi • Relevan, Praktis & Langsung Diterapkan',

            healthyEmployeeStatement:
                'Metode pelatihan menggunakan pembelajaran interaktif, diskusi kelompok, studi kasus, bermain peran, dan lokakarya rencana aksi.',

            objectivesTitle:
                'Agenda Kelas',

            objectives: [
                'Hari 1 — Individual Contributor Menjadi Leader',
                'Hari 1 — Mindset High-Impact Leader',
                'Hari 1 — Peran & Fungsi Manager (P–O–L–C)',
                'Hari 1 — Mengelola Tim Secara Efektif',
                'Hari 1 — Refleksi & Diskusi',
                'Hari 2 — Performance Management & KPI',
                'Hari 2 — Delegation & Monitoring',
                'Hari 2 — Problem Solving & Decision Making',
                'Hari 2 — Action Plan (Individual & Unit)',
                'Hari 2 — Penutupan',
            ],

            learningJourneyTitle:
                'Agenda Detail',

            learningJourney: [
                {
                    number: '01',
                    title: 'Foundational Leadership',
                    description:
                        'Individual Contributor Menjadi Leader',
                },
                {
                    number: '02',
                    title: 'High-Impact Leader',
                    description:
                        'Mindset High-Impact Leader',
                },
                {
                    number: '03',
                    title: 'Managerial Role',
                    description:
                        'Peran & Fungsi Manager (P–O–L–C)',
                },
                {
                    number: '04',
                    title: 'Team Management',
                    description:
                        'Mengelola Tim Secara Efektif',
                },
                {
                    number: '05',
                    title: 'Reflection & Discussion',
                    description:
                        'Refleksi & Diskusi',
                },
                {
                    number: '06',
                    title: 'Performance Management & KPI',
                    description:
                        'Performance Management & KPI',
                },
                {
                    number: '07',
                    title: 'Delegation & Monitoring',
                    description:
                        'Delegation & Monitoring',
                },
                {
                    number: '08',
                    title: 'Problem Solving',
                    description:
                        'Problem Solving & Decision Making',
                },
                {
                    number: '09',
                    title: 'Action Plan',
                    description:
                        'Action Plan (Individual & Unit)',
                },
                {
                    number: '10',
                    title: 'Closing',
                    description:
                        'Penutupan',
                },
            ],

            materialsTitle:
                'Metode Pelatihan',

            materials: [
                {
                    title:
                        'Kuliah Interaktif',
                    items: [
                        'Pembelajaran dua arah melalui presentasi ahli & sesi tanya jawab.',
                    ],
                },
                {
                    title:
                        'Diskusi Kelompok',
                    items: [
                        'Kolaborasi & pertukaran ide untuk pemecahan masalah bersama.',
                    ],
                },
                {
                    title:
                        'Studi Kasus',
                    items: [
                        'Analisis mendalam kasus nyata untuk solusi praktis.',
                    ],
                },
                {
                    title:
                        'Bermain Peran',
                    items: [
                        'Simulasi situasi kepemimpinan & manajerial untuk latihan langsung.',
                    ],
                },
                {
                    title:
                        'Lokakarya Rencana Aksi',
                    items: [
                        'Penyusunan rencana aksi & implementasi pasca seminar untuk unit kerja.',
                    ],
                },
            ],

            takeHomeTitle:
                'Nilai Tambah Program',

            takeHomeTools: [
                'Practical Leadership Toolkit — Framework, template, dan tools kepemimpinan yang siap digunakan dalam pekerjaan sehari-hari.',
                'Performance-Oriented Approach — Membantu pemimpin meningkatkan engagement tim, produktivitas, dan pencapaian KPI organisasi.',
                'Cross-Industry Insights — Belajar dari studi kasus dan praktik terbaik berbagai sektor industri untuk memperluas perspektif kepemimpinan.',
                'Measurable Action Plan — Setiap peserta menghasilkan rencana aksi yang konkret, terukur, dan selaras dengan target bisnis organisasi.',
            ],

            benefitsTitle:
                'Benefit Kelas',

            benefits: [
                'Pemateri Profesional & Berpengalaman',
                'Networking Dengan Praktisi & Sejawat',
                'Sertifikat Partisipasi',
                'Relevan, Praktis & Langsung Diterapkan',
            ],

            expertsTitle:
                'Fasilitator',

            facilitatorName:
                'ADE AHMAD ROZI, MBA, Ph.D',

            facilitatorRole:
                'Managing Partner of Havpro Group',

            facilitatorBio1:
                'Ph.D in Management Science – Technology University of Philippines. Master of Business Administration (MBA) – Philippine Christian University. Berpengalaman ±25 tahun di bidang manajemen.',

            facilitatorBio2:
                'Telah menangani lebih dari 1.000 program konsultasi, pelatihan, workshop dan advisory. Expert di Leadership Management, Performance Management and Strategic Management.',

            metrics: [
                'Workshop 2 Hari',
                'Maks. 24 Peserta Per Batch',
                '±25 Tahun Pengalaman Manajemen',
                '1.000+ Program Konsultasi, Pelatihan, Workshop & Advisory',
            ],

            participantsTitle:
                'Target Peserta',

            participants: [
                'Manager Baru (0–2 Tahun Pengalaman)',
                'Supervisor/Asisten Manager',
                'Staff Senior Calon Pimpinan',
                'Pimpinan Unit Kerja',
            ],

            ctaTitle:
                'INVESTASI PROGRAM 2 HARI',

            ctaButton:
                'Maks. 24 Peserta Per Batch',

            ctaProgram:
                'HIGH IMPACT LEADER & MANAGER',

            ctaAudience:
                'Telah terlaksana ± 1.000 program pelatihan',

            contactPhone:
                '+62 852-1275-0832 (Sultan) • +62 856-4248-5189 (Nurul) • Office: 021-4786.0056',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'www.prospero.co.id',

            contactAddress:
                'Jl. Paus No. 90 G, Jati, Pulo Gadung, Jakarta Timur',
        },

        en: {
            home: 'Home',
            services: 'Services',
            programDetails: 'Program Details',
            ourExperts: 'Our Experts',
            targetParticipants: 'Target Participants',

            programs: 'Programs',
            programLabel: 'Program',

            durationLabel: 'Duration',
            durationValue: '2 days',

            locationLabel: 'Location',
            locationValue:
                'In-House / Based on organizational needs',

            register: 'Registration',
            registerNow: 'Contact Us',

            heroTagline:
                'Leading Teams, Driving Performance & Creating Real Impact',

            heroDescription:
                'HIGH IMPACT LEADER & MANAGER is a two-day leadership and management workshop focused on leading teams, driving performance, and creating real organizational impact.',

            overviewTitle: 'Overview',

            summary:
                'High Impact Leader & Manager is a two-day workshop designed to help participants understand the roles and responsibilities of effective leaders and managers, manage teams productively and achieve organizational targets, use data, KPIs, and monitoring to drive high performance, and become influential leaders who create real impact. The program covers foundational leadership, performance management, execution, problem solving & decision making, delegation & monitoring, and action planning for both individuals and business units.',

            noteTitle:
                'Class Outcomes',

            note:
                '1. Lead with Direction — Understand the roles and responsibilities of effective leaders and managers. 2. Manage for Results — Manage teams productively and achieve organizational targets. 3. Drive Performance — Use data, KPIs, and monitoring to generate high performance. 4. Create Impact — Become an influential leader who creates real impact.',

            problemTitle:
                'Class Agenda (2 Days)',

            problemDescription:
                'Day 1 focuses on Foundational Leadership. Day 2 focuses on Performance & Execution.',

            signsTitle:
                'Target Audience',

            signs: [
                'New Managers (0–2 Years of Experience)',
                'Supervisors/Assistant Managers',
                'Senior Staff / Prospective Leaders',
                'Unit Leaders',
            ],

            keyQuestion:
                'Class Benefits',

            organizationStatement:
                'Professional & Experienced Facilitator • Networking with Practitioners & Peers • Participation Certificate • Relevant, Practical & Immediately Applicable',

            healthyEmployeeStatement:
                'The training methods include interactive learning, group discussions, case studies, role plays, and action planning workshops.',

            objectivesTitle:
                'Class Agenda',

            objectives: [
                'Day 1 — Individual Contributor to Leader',
                'Day 1 — High-Impact Leader Mindset',
                'Day 1 — Managerial Roles & Functions (P–O–L–C)',
                'Day 1 — Managing Teams Effectively',
                'Day 1 — Reflection & Discussion',
                'Day 2 — Performance Management & KPI',
                'Day 2 — Delegation & Monitoring',
                'Day 2 — Problem Solving & Decision Making',
                'Day 2 — Action Plan (Individual & Unit)',
                'Day 2 — Closing',
            ],

            learningJourneyTitle:
                'Detailed Agenda',

            learningJourney: [
                {
                    number: '01',
                    title: 'Foundational Leadership',
                    description:
                        'Individual Contributor to Leader',
                },
                {
                    number: '02',
                    title: 'High-Impact Leader',
                    description:
                        'High-Impact Leader Mindset',
                },
                {
                    number: '03',
                    title: 'Managerial Role',
                    description:
                        'Managerial Roles & Functions (P–O–L–C)',
                },
                {
                    number: '04',
                    title: 'Team Management',
                    description:
                        'Managing Teams Effectively',
                },
                {
                    number: '05',
                    title: 'Reflection & Discussion',
                    description:
                        'Reflection & Discussion',
                },
                {
                    number: '06',
                    title: 'Performance Management & KPI',
                    description:
                        'Performance Management & KPI',
                },
                {
                    number: '07',
                    title: 'Delegation & Monitoring',
                    description:
                        'Delegation & Monitoring',
                },
                {
                    number: '08',
                    title: 'Problem Solving',
                    description:
                        'Problem Solving & Decision Making',
                },
                {
                    number: '09',
                    title: 'Action Plan',
                    description:
                        'Action Plan (Individual & Unit)',
                },
                {
                    number: '10',
                    title: 'Closing',
                    description:
                        'Closing',
                },
            ],

            materialsTitle:
                'Training Methods',

            materials: [
                {
                    title:
                        'Interactive Lecture',
                    items: [
                        'Two-way learning through expert presentations & Q&A sessions.',
                    ],
                },
                {
                    title:
                        'Group Discussion',
                    items: [
                        'Collaboration & exchange of ideas for collective problem solving.',
                    ],
                },
                {
                    title:
                        'Case Study',
                    items: [
                        'In-depth analysis of real cases for practical solutions.',
                    ],
                },
                {
                    title:
                        'Role Play',
                    items: [
                        'Simulation of leadership & managerial situations for hands-on practice.',
                    ],
                },
                {
                    title:
                        'Action Plan Workshop',
                    items: [
                        'Developing action plans & post-seminar implementation for the work unit.',
                    ],
                },
            ],

            takeHomeTitle:
                'Program Added Value',

            takeHomeTools: [
                'Practical Leadership Toolkit — Frameworks, templates, and leadership tools ready for everyday use.',
                'Performance-Oriented Approach — Helping leaders improve team engagement, productivity, and organizational KPI achievement.',
                'Cross-Industry Insights — Learning from case studies and best practices across industries to broaden leadership perspectives.',
                'Measurable Action Plan — Each participant produces a concrete, measurable action plan aligned with organizational business targets.',
            ],

            benefitsTitle:
                'Class Benefits',

            benefits: [
                'Professional & Experienced Facilitator',
                'Networking with Practitioners & Peers',
                'Participation Certificate',
                'Relevant, Practical & Immediately Applicable',
            ],

            expertsTitle:
                'Facilitator',

            facilitatorName:
                'ADE AHMAD ROZI, MBA, Ph.D',

            facilitatorRole:
                'Managing Partner of Havpro Group',

            facilitatorBio1:
                'Ph.D in Management Science – Technology University of Philippines. Master of Business Administration (MBA) – Philippine Christian University. ±25 years of management experience.',

            facilitatorBio2:
                'Has handled more than 1,000 consulting, training, workshop, and advisory programs. Expert in Leadership Management, Performance Management and Strategic Management.',

            metrics: [
                '2-Day Workshop',
                'Maximum 24 Participants Per Batch',
                '±25 Years of Management Experience',
                '1,000+ Consulting, Training, Workshop & Advisory Programs',
            ],

            participantsTitle:
                'Target Participants',

            participants: [
                'New Managers (0–2 Years of Experience)',
                'Supervisors/Assistant Managers',
                'Senior Staff / Prospective Leaders',
                'Unit Leaders',
            ],

            ctaTitle:
                '2-DAY PROGRAM INVESTMENT — Rp.60,000,000,-',

            ctaButton:
                'Maximum 24 Participants Per Batch',

            ctaProgram:
                'HIGH IMPACT LEADER & MANAGER',

            ctaAudience:
                'More than ±1,000 training programs delivered',

            contactPhone:
                '+62 852-1275-0832 (Sultan) • +62 856-4248-5189 (Nurul) • Office: 021-4786.0056',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'www.prospero.co.id',

            contactAddress:
                'Jl. Paus No. 90 G, Jati, Pulo Gadung, East Jakarta',
        },
    };

    const text = isEnglish ? content.en : content.id;

    const serviceOptions = [
        {
            value: '/training/work-smarter-with-artificial-intelligence',
            label: 'Work Smarter with Artificial Intelligence (AI)',
        },
        {
            value: '/training/high-impact-leader-manager',
            label: 'High Impact Leader & Manager',
        },
        {
            value: '/training/happy-retirement',
            label: 'Happy Retirement',
        },
        {
            value: '/training/smart-money-management',
            label: 'Smart Money Management',
        },
    ];

    const tabs = [
        {
            id: 'details',
            label: text.programDetails,
        },
        {
            id: 'experts',
            label: text.ourExperts,
        },
        {
            id: 'participants',
            label: text.targetParticipants,
        },
    ];

    return (
        <section
            id="high-impact-leader-manager"
            className="relative overflow-hidden bg-white"
        >

            {/* =========================================================
                HERO
            ========================================================== */}
            <div
                className="
                    relative
                    border-b
                    border-gray-100
                    bg-[#f8fafc]
                    py-10
                    sm:py-12
                    lg:py-14
                "
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div
                        className="
                            grid
                            items-center
                            gap-10
                            lg:grid-cols-[1fr_320px]
                            lg:gap-14
                        "
                    >

                        {/* LEFT CONTENT */}
                        <div>

                            {/* BREADCRUMB */}
                            <div
                                className="
                                    mb-6
                                    flex
                                    flex-wrap
                                    items-center
                                    gap-2
                                    text-sm
                                    text-gray-700
                                "
                            >
                                <a
                                    href="/"
                                    className="
                                        transition-colors
                                        hover:text-blue-600
                                    "
                                >
                                    {text.home}
                                </a>

                                <span>/</span>

                                <a
                                    href="/services"
                                    className="
                                        transition-colors
                                        hover:text-blue-600
                                    "
                                >
                                    {text.services}
                                </a>

                                <span>/</span>

                                <span className="text-gray-700">
                                    High Impact Leader & Manager
                                </span>
                            </div>


                            {/* TITLE */}
                            <h1
                                className="
                                    max-w-3xl
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    tracking-tight
                                    text-gray-900
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                High Impact Leader & Manager
                            </h1>


                            {/* TAGLINE */}
                            <p
                                className="
                                    mt-3
                                    max-w-3xl
                                    text-lg
                                    font-semibold
                                    text-blue-600
                                    sm:text-xl
                                "
                            >
                                {text.heroTagline}
                            </p>


                            {/* DESCRIPTION */}
                            <p
                                className="
                                    mt-5
                                    max-w-4xl
                                    text-sm
                                    leading-7
                                    text-gray-600
                                    sm:text-base
                                "
                            >
                                {text.heroDescription}
                            </p>


                            {/* BUTTON */}
                            <div className="mt-7">

                                <a
                                    href="#program-details"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        rounded-md
                                        bg-emerald-500
                                        px-6
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition
                                        duration-300
                                        hover:bg-emerald-600
                                    "
                                >
                                    {text.register}

                                    <span className="ml-2">
                                        →
                                    </span>
                                </a>

                            </div>

                        </div>


                        {/* RIGHT VISUAL — BROSUR AI */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                bg-white
                                shadow-lg
                            "
                        >
                            <img
                                src="/images/brochures/brosurleader.png"
                                alt={
                                    isEnglish
                                        ? 'High Impact Leader & Manager brochure'
                                        : 'Brosur High Impact Leader & Manager'
                                }
                                className="
                                    block
                                    h-auto
                                    w-full
                                    object-contain
                                "
                            />
                        </div>

                    </div>

                </div>
            </div>


            {/* =========================================================
                TABS
            ========================================================== */}
            <div
                className="
                    border-b
                    border-gray-100
                    bg-gray-50
                "
            >
                <div
                    className="
                        grid
                        w-full
                        grid-cols-1
                        md:grid-cols-3
                    "
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                relative
                                px-6
                                py-4
                                text-sm
                                font-medium
                                transition-all
                                duration-300
                                ${
                                    activeTab === tab.id
                                        ? 'bg-white text-gray-900'
                                        : 'text-gray-500 hover:bg-white/70 hover:text-gray-800'
                                }
                            `}
                        >
                            {tab.label}

                            {activeTab === tab.id && (
                                <span
                                    className="
                                        absolute
                                        inset-x-0
                                        top-0
                                        h-[2px]
                                        bg-blue-600
                                    "
                                ></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>


            {/* =========================================================
                MAIN PROGRAM AREA
            ========================================================== */}
            <div
                id="program-details"
                className="
                    mx-auto
                    grid
                    max-w-7xl
                    grid-cols-1
                    lg:grid-cols-[250px_1fr]
                "
            >

                {/* SIDEBAR */}
                <aside
                    className="
                        border-b
                        border-gray-200
                        bg-white
                        p-5
                        lg:border-b-0
                        lg:border-r
                        lg:p-6
                    "
                >

                    <p
                        className="
                            mb-3
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-blue-600
                        "
                    >
                        {text.programs}
                    </p>

                    <div
                        className="
                            mb-6
                            h-[2px]
                            w-11
                            bg-emerald-500
                        "
                    ></div>


                    {/* PROGRAM */}
                    <label
                        className="
                            block
                            text-sm
                            font-medium
                            text-gray-500
                        "
                    >
                        {text.programLabel}
                    </label>

                    <select
                        defaultValue="/training/high-impact-leader-manager"
                        onChange={(event) => {

                            const targetUrl =
                                event.target.value;

                            if (targetUrl) {
                                window.location.href =
                                    targetUrl;
                            }

                        }}
                        className="
                            mt-2
                            w-full
                            rounded-md
                            border
                            border-gray-300
                            bg-white
                            px-3
                            py-2
                            text-sm
                            text-gray-700
                            outline-none
                            focus:border-blue-500
                            focus:ring-1
                            focus:ring-blue-500
                        "
                    >
                        {serviceOptions.map((service) => (
                            <option
                                key={service.value}
                                value={service.value}
                            >
                                {service.label}
                            </option>
                        ))}
                    </select>


                    {/* DURATION */}
                    <div className="mt-7">

                        <p
                            className="
                                text-sm
                                font-medium
                                text-gray-500
                            "
                        >
                            {text.durationLabel}
                        </p>

                        <p
                            className="
                                mt-1
                                text-base
                                text-gray-700
                            "
                        >
                            {text.durationValue}
                        </p>

                    </div>


                    {/* LOCATION */}
                    <div className="mt-6">

                        <p
                            className="
                                text-[11px]
                                font-medium
                                text-gray-400
                            "
                        >
                            {text.locationLabel}
                        </p>

                        <p
                            className="
                                mt-1
                                text-base
                                text-gray-700
                            "
                        >
                            {text.locationValue}
                        </p>

                    </div>


                    {/* REGISTER */}
                    <div
                        className="
                            mt-7
                            border-t
                            border-gray-200
                            pt-5
                        "
                    >
                        <a
                            href="/contact"
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                rounded-md
                                bg-emerald-500
                                px-4
                                py-2.5
                                text-base
                                font-semibold
                                text-white
                                transition
                                duration-300
                                hover:bg-emerald-600
                            "
                        >
                            {text.registerNow}
                        </a>
                    </div>

                </aside>


                {/* TAB CONTENT */}
                <main
                    id="program-overview"
                    className="
                        min-h-[430px]
                        bg-white
                        px-6
                        py-8
                        sm:px-8
                        lg:px-10
                    "
                >

                    {/* =================================================
                        PROGRAM DETAILS
                    ================================================== */}
                    {activeTab === 'details' && (

                        <div>

                            {/* RINGKASAN */}
                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-blue-600
                                    sm:text-3xl
                                "
                            >
                                {text.overviewTitle}
                            </h2>

                            <div
                                className="
                                    mt-4
                                    h-[1px]
                                    w-full
                                    bg-gray-200
                                "
                            ></div>

                            <p
                                className="
                                    mt-6
                                    max-w-5xl
                                    text-sm
                                    leading-7
                                    text-gray-600
                                    sm:text-base
                                "
                            >
                                {text.summary}
                            </p>


                            {/* PROGRAM NOTE */}
                            <div
                                className="
                                    mt-8
                                    rounded-2xl
                                    border
                                    border-amber-100
                                    bg-amber-50
                                    px-5
                                    py-5
                                "
                            >

                                <p
                                    className="
                                        text-base
                                        font-bold
                                        leading-7
                                        text-gray-900
                                        sm:text-lg
                                    "
                                >
                                    {text.noteTitle}
                                </p>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-7
                                        text-gray-700
                                        sm:text-base
                                    "
                                >
                                    {text.note}
                                </p>

                            </div>


                            {/* CHALLENGE */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        leading-7
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.problemTitle}
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        leading-7
                                        text-gray-600
                                        sm:text-base
                                    "
                                >
                                    {text.problemDescription}
                                </p>

                            </div>


                            {/* SIGNS */}
                            <div className="mt-8">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.signsTitle}
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        grid
                                        gap-3
                                    "
                                >
                                    {text.signs.map(
                                        (
                                            sign,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-gray-200
                                                    bg-gray-50
                                                    px-5
                                                    py-4
                                                "
                                            >

                                                <p
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-gray-700
                                                        sm:text-base
                                                    "
                                                >
                                                    • {sign}
                                                </p>

                                            </div>

                                        )
                                    )}
                                </div>

                            </div>


                            {/* KEY MESSAGE */}
                            <div
                                className="
                                    mt-10
                                    rounded-2xl
                                    border
                                    border-blue-100
                                    bg-[#f4f8ff]
                                    px-6
                                    py-6
                                "
                            >

                                <p
                                    className="
                                        text-base
                                        font-semibold
                                        leading-8
                                        text-blue-900
                                        sm:text-lg
                                    "
                                >
                                    {text.keyQuestion}
                                </p>

                            </div>


                            {/* ORGANIZATION STATEMENT */}
                            <div
                                className="
                                    mt-5
                                    rounded-2xl
                                    border
                                    border-cyan-100
                                    bg-cyan-50/50
                                    px-6
                                    py-6
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        leading-7
                                        text-gray-700
                                        sm:text-base
                                    "
                                >
                                    {text.organizationStatement}
                                </p>

                            </div>


                            {/* WORKFORCE STATEMENT */}
                            <div
                                className="
                                    mt-5
                                    rounded-2xl
                                    border
                                    border-emerald-100
                                    bg-emerald-50/50
                                    px-6
                                    py-6
                                "
                            >

                                <p
                                    className="
                                        text-sm
                                        leading-7
                                        text-gray-700
                                        sm:text-base
                                    "
                                >
                                    {text.healthyEmployeeStatement}
                                </p>

                            </div>


                            {/* FOKUS PROGRAM */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.objectivesTitle}
                                </h3>

                                <div className="mt-4 space-y-3">

                                    {text.objectives.map(
                                        (
                                            objective,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-gray-200
                                                    bg-gray-50
                                                    px-5
                                                    py-4
                                                "
                                            >

                                                <p
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-gray-700
                                                        sm:text-base
                                                    "
                                                >
                                                    {index + 1}. {objective}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* KEY INSIGHTS */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.learningJourneyTitle}
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        h-[1px]
                                        w-full
                                        bg-gray-200
                                    "
                                ></div>

                                <div
                                    className="
                                        mt-5
                                        grid
                                        gap-4
                                        sm:grid-cols-2
                                        lg:grid-cols-3
                                    "
                                >

                                    {text.learningJourney.map(
                                        (journey) => (

                                            <div
                                                key={journey.number}
                                                className="
                                                    rounded-2xl
                                                    border
                                                    border-gray-200
                                                    bg-white
                                                    p-5
                                                    shadow-sm
                                                "
                                            >

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-3
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            inline-flex
                                                            h-9
                                                            w-9
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-blue-600
                                                            text-xs
                                                            font-bold
                                                            text-white
                                                        "
                                                    >
                                                        {journey.number}
                                                    </span>

                                                    <h4
                                                        className="
                                                            text-sm
                                                            font-bold
                                                            uppercase
                                                            leading-5
                                                            text-blue-800
                                                        "
                                                    >
                                                        {journey.title}
                                                    </h4>

                                                </div>

                                                <p
                                                    className="
                                                        mt-4
                                                        text-sm
                                                        leading-6
                                                        text-gray-600
                                                    "
                                                >
                                                    {journey.description}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* MATERI / KONTEN */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.materialsTitle}
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        h-[1px]
                                        w-full
                                        bg-gray-200
                                    "
                                ></div>

                                <div className="mt-5 space-y-5">

                                    {text.materials.map(
                                        (
                                            material,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                            >

                                                <p
                                                    className="
                                                        text-sm
                                                        font-bold
                                                        leading-7
                                                        text-gray-900
                                                        sm:text-base
                                                    "
                                                >
                                                    {material.title}
                                                </p>

                                                <div
                                                    className="
                                                        mt-1
                                                        space-y-1
                                                    "
                                                >

                                                    {material.items.map(
                                                        (
                                                            item,
                                                            itemIndex
                                                        ) => (

                                                            <p
                                                                key={
                                                                    itemIndex
                                                                }
                                                                className="
                                                                    text-sm
                                                                    leading-7
                                                                    text-gray-600
                                                                    sm:text-base
                                                                "
                                                            >
                                                                • {item}
                                                            </p>

                                                        )
                                                    )}

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* TAKE HOME */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        leading-7
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.takeHomeTitle}
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        h-[1px]
                                        w-full
                                        bg-gray-200
                                    "
                                ></div>

                                <div
                                    className="
                                        mt-5
                                        grid
                                        gap-3
                                        sm:grid-cols-2
                                        lg:grid-cols-3
                                    "
                                >

                                    {text.takeHomeTools.map(
                                        (
                                            tool,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                                className="
                                                    rounded-xl
                                                    border
                                                    border-gray-200
                                                    bg-gray-50
                                                    px-5
                                                    py-4
                                                "
                                            >

                                                <p
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-gray-700
                                                    "
                                                >
                                                    • {tool}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* BENEFITS / IMPACT */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.benefitsTitle}
                                </h3>

                                <div
                                    className="
                                        mt-4
                                        h-[1px]
                                        w-full
                                        bg-gray-200
                                    "
                                ></div>

                                <div className="mt-5 space-y-3">

                                    {text.benefits.map(
                                        (
                                            benefit,
                                            index
                                        ) => (

                                            <div
                                                key={index}
                                                className="
                                                    flex
                                                    gap-3
                                                    rounded-xl
                                                    border
                                                    border-gray-200
                                                    bg-white
                                                    px-5
                                                    py-4
                                                    shadow-sm
                                                "
                                            >

                                                <span
                                                    className="
                                                        mt-0.5
                                                        flex
                                                        h-6
                                                        w-6
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-emerald-100
                                                        text-xs
                                                        font-bold
                                                        text-emerald-700
                                                    "
                                                >
                                                    ✓
                                                </span>

                                                <p
                                                    className="
                                                        text-sm
                                                        leading-6
                                                        text-gray-700
                                                        sm:text-base
                                                    "
                                                >
                                                    {benefit}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* CLOSING CTA */}
                            <div
                                className="
                                    mt-10
                                    overflow-hidden
                                    rounded-2xl
                                    bg-[#0b4775]
                                    px-6
                                    py-7
                                    sm:px-8
                                "
                            >

                                <h3
                                    className="
                                        max-w-3xl
                                        text-xl
                                        font-bold
                                        uppercase
                                        leading-tight
                                        text-white
                                        sm:text-2xl
                                    "
                                >
                                    {text.ctaTitle}
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        font-semibold
                                        text-emerald-300
                                        sm:text-base
                                    "
                                >
                                    {text.ctaButton}
                                </p>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-medium
                                        text-white
                                    "
                                >
                                    {text.ctaProgram}
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        leading-6
                                        text-white/75
                                        sm:text-sm
                                    "
                                >
                                    {text.ctaAudience}
                                </p>

                                <div
                                    className="
                                        mt-5
                                        space-y-1
                                        text-xs
                                        text-white/85
                                        sm:text-sm
                                    "
                                >
                                    <p>{text.contactAddress}</p>
                                    <p>{text.contactPhone}</p>
                                    <p>{text.contactEmail}</p>
                                    <p>{text.contactWebsite}</p>
                                </div>

                            </div>

                        </div>

                    )}


                    {/* =================================================
                        OUR EXPERTS
                    ================================================== */}
                    {activeTab === 'experts' && (

                        <div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-blue-600
                                    sm:text-3xl
                                "
                            >
                                {text.expertsTitle}
                            </h2>

                            <div
                                className="
                                    mt-4
                                    h-[1px]
                                    w-full
                                    bg-gray-200
                                "
                            ></div>

                            <div className="mt-6">

                                <div
                                    className="
                                        grid
                                        gap-6
                                        lg:grid-cols-[280px_1fr]
                                        lg:items-start
                                    "
                                >

                                    {/* PHOTO */}
                                    <div
                                        className="
                                            group
                                            w-full
                                            max-w-[280px]
                                        "
                                    >

                                        <a
                                            href="/director"
                                            aria-label="View Ade Ahmad Rozi profile"
                                            className="block cursor-pointer"
                                        >

                                            <div
                                                className="
                                                    relative
                                                    aspect-[0.78]
                                                    overflow-hidden
                                                    rounded-xl
                                                    bg-gray-200
                                                    shadow-sm
                                                "
                                            >

                                                <img
                                                    src="/images/about/rz.png"
                                                    alt="Ade Ahmad Rozi"
                                                    className="
                                                        absolute
                                                        inset-0
                                                        h-full
                                                        w-full
                                                        object-cover
                                                        transition-transform
                                                        duration-500
                                                        group-hover:scale-105
                                                    "
                                                />

                                                <div
                                                    className="
                                                        absolute
                                                        inset-x-0
                                                        bottom-0
                                                        h-2/5
                                                        bg-gradient-to-t
                                                        from-black/75
                                                        via-black/35
                                                        to-transparent
                                                    "
                                                ></div>

                                            </div>

                                        </a>

                                    </div>


                                    {/* BIO */}
                                    <div>

                                        <p
                                            className="
                                                text-xl
                                                font-bold
                                                text-gray-900
                                            "
                                        >
                                            {text.facilitatorName}
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-semibold
                                                text-blue-600
                                            "
                                        >
                                            {text.facilitatorRole}
                                        </p>

                                        <p
                                            className="
                                                mt-5
                                                text-sm
                                                leading-7
                                                text-gray-600
                                                sm:text-base
                                            "
                                        >
                                            {text.facilitatorBio1}
                                        </p>

                                        <p
                                            className="
                                                mt-4
                                                text-sm
                                                leading-7
                                                text-gray-600
                                                sm:text-base
                                            "
                                        >
                                            {text.facilitatorBio2}
                                        </p>


                                    </div>

                                </div>

                            </div>

                        </div>

                    )}

                    {/* =================================================
                        TARGET PARTICIPANTS
                    ================================================== */}
                    {activeTab === 'participants' && (

                        <div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-blue-600
                                    sm:text-3xl
                                "
                            >
                                {text.participantsTitle}
                            </h2>

                            <div
                                className="
                                    mt-4
                                    h-[1px]
                                    w-full
                                    bg-gray-200
                                "
                            ></div>

                            <div
                                className="
                                    mt-6
                                    space-y-4
                                "
                            >

                                {text.participants.map(
                                    (
                                        participant,
                                        index
                                    ) => (

                                        <div
                                            key={index}
                                            className="
                                                rounded-xl
                                                border
                                                border-gray-200
                                                bg-gray-50
                                                px-5
                                                py-4
                                            "
                                        >

                                            <p
                                                className="
                                                    text-sm
                                                    leading-7
                                                    text-gray-700
                                                    sm:text-base
                                                "
                                            >
                                                • {participant}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}

                </main>

            </div>

        </section>
    );
}

export default HighImpactLeaderManager;
