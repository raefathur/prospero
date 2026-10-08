import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function HappyRetirement() {
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
            durationValue: '3 hari',

            locationLabel: 'Lokasi',
            locationValue:
                'Public Seminar / In-House Program',

            register: 'Registrasi',
            registerNow: 'Hubungi Kami',

            heroTagline:
                'Kiat Efektif Mempersiapkan Masa Pensiun Mandiri dan Sejahtera',

            heroDescription:
                'Happy Retirement merupakan program pengembangan kesiapan masa pensiun dari Prospero Management yang membantu peserta mempersiapkan mental, finansial, fisik, sosial, dan rencana aktivitas agar dapat menjalani masa pensiun secara mandiri, produktif, bahagia, dan bermakna.',

            overviewTitle:
                'Ringkasan',

            summary:
                'Happy Retirement dirancang untuk membantu peserta memahami tantangan kehidupan pensiunan di Indonesia, mengidentifikasi tingkat kesiapan diri menghadapi masa pensiun, membangun sikap mental positif, menyusun Individual Retirement Plan (IRP), memilih strategi yang tepat untuk memenuhi kebutuhan fisik, psikis, finansial dan sosial, serta menyusun rencana kegiatan sebelum memasuki masa pensiun.',

            noteTitle:
                'Mengapa Program Ini Penting?',

            note:
                'Jangan menunggu pensiun untuk mulai mempersiapkan pensiun. Semakin dini direncanakan, semakin besar peluang menikmati masa pensiun mandiri, produktif, dan bahagia. Pensiun bukan akhir dari produktivitas, tetapi awal dari kesempatan untuk menjalani hidup yang lebih bermakna sesuai impian dan pilihan Anda. Karena itu, masa pensiun perlu dirancang, bukan sekadar ditunggu.',

            problemTitle:
                'Jadwal Public Seminar',

            problemDescription:
                'Program Happy Retirement tersedia dalam beberapa jadwal public seminar pada tahun 2026 di Bandung dan Yogyakarta.',

            signsTitle:
                'Jadwal Public Seminar',

            signs: [
                '19–21 Agustus 2026 — Hotel Ibis Trans Studio Bandung',
                '23–25 September 2026 — Hotel Grand Zuri Malioboro Yogyakarta',
                '28–30 Oktober 2026 — Hotel Ibis Trans Studio Bandung',
                '25–27 November 2026 — Hotel Grand Zuri Malioboro Yogyakarta',
            ],

            keyQuestion:
                'Investasi & Fasilitas',

            organizationStatement:
                'Investasi Rp. 6.500.000,- netto per peserta • Rp. 10.000.000,- netto plus pasangan',

            healthyEmployeeStatement:
                'Fasilitas: Coffee Break • Lunch • Makan & Training Kit • Training Module (E-Book) • Souvenir • Networking',

            objectivesTitle:
                'Tujuan Program',

            objectives: [
                'Memahami tantangan kehidupan pensiunan di Indonesia.',
                'Mengidentifikasi tingkat kesiapan diri menghadapi masa pensiun.',
                'Memiliki sikap mental positif dalam menyongsong masa pensiun.',
                'Menyusun Individual Retirement Plan (IRP) yang praktis dan aplikatif.',
                'Memilih strategi yang tepat guna memenuhi kebutuhan fisik, psikis, finansial dan sosial di masa pensiun.',
                'Menyusun rencana kegiatan sebelum memasuki masa pensiun.',
            ],

            learningJourneyTitle:
                'Metode Pelatihan',

            learningJourney: [
                {
                    number: '01',
                    title: 'Pre Training',
                    description:
                        'Survey online untuk menggali kondisi dan kesiapan peserta.',
                },
                {
                    number: '02',
                    title: 'In Class Training',
                    description:
                        'Seminar, diskusi, workshop & studi kasus interaktif.',
                },
                {
                    number: '03',
                    title: 'Workshop & Simulation',
                    description:
                        'Praktik, role play, games & simulasi penerapan strategi.',
                },
                {
                    number: '04',
                    title: 'Consultation & Coaching',
                    description:
                        'Konsultasi & coaching personal terkait rencana pensiun.',
                },
                {
                    number: '05',
                    title: 'Post Training',
                    description:
                        'Pendampingan & konsultasi pasca program untuk implementasi rencana pensiun.',
                },
            ],

            materialsTitle:
                'Manfaat yang Akan Diperoleh',

            materials: [
                {
                    title:
                        'Retirement Readiness Assessment',
                    items: [
                        'Mengetahui tingkat kesiapan pensiun dan area yang perlu dipersiapkan.',
                    ],
                },
                {
                    title:
                        'Individual Retirement Plan (IRP)',
                    items: [
                        'Menyusun rencana pensiun pribadi yang terstruktur, realistis dan aplikatif.',
                    ],
                },
                {
                    title:
                        'Financial Check Up & Strategy Pengelolaan Pasangan',
                    items: [
                        'Analisa kondisi keuangan saat ini dan strategi optimal mengelola pasangan secara bijak dan produktif.',
                    ],
                },
                {
                    title:
                        'Pendampingan & Coaching One on One',
                    items: [
                        'Sesi pendampingan personal untuk menjawab kebutuhan dan tantangan unik peserta.',
                    ],
                },
            ],

            takeHomeTitle:
                'Pakar Perencanaan Masa Pensiun',

            takeHomeTools: [
                'Certified Qualified Wealth Planner (QWP)',
                'Berpengalaman memfasilitasi Training Happy Retirement sebanyak 113 angkatan',
                'Lebih dari 4.000 orang peserta',
                'Penulis E-book “BLUEPRINT MASA PENSIUN”',
                'Praktis dan aplikatif untuk persiapan masa pensiun',
                'Pendampingan dan coaching personal terkait rencana pensiun',
            ],

            benefitsTitle:
                'Informasi Program',

            benefits: [
                'Happy Retirement',
                'Public Seminar & In-House Program',
                'Program dirancang untuk mempersiapkan masa pensiun sejak dini',
                'Pembelajaran mencakup aspek mental, fisik, psikis, finansial dan sosial',
            ],

            expertsTitle:
                'Fasilitator',

            facilitatorName:
                'ADE AHMAD ROZI, MBA, Ph.D, QWP',

            facilitatorRole:
                'Pakar Perencanaan Masa Pensiun',

            facilitatorBio1:
                'Certified Qualified Wealth Planner (QWP) dan berpengalaman memfasilitasi Training Happy Retirement sebanyak 113 angkatan dengan lebih dari 4.000 orang peserta.',

            facilitatorBio2:
                'Beliau juga merupakan penulis E-book “BLUEPRINT MASA PENSIUN” dan berpengalaman memberikan pembelajaran serta pendampingan terkait kesiapan masa pensiun.',

            metrics: [
                '113 Angkatan Happy Retirement',
                '4.000+ Peserta',
                'Certified Qualified Wealth Planner (QWP)',
                'Penulis E-book “BLUEPRINT MASA PENSIUN”',
            ],

            participantsTitle:
                'Target Peserta',

            participants: [
                'Peserta yang sedang mempersiapkan masa pensiun.',
                'Karyawan yang ingin meningkatkan kesiapan mental, finansial, fisik, psikis dan sosial sebelum memasuki masa pensiun.',
                'Peserta yang ingin menyusun Individual Retirement Plan (IRP) dan rencana aktivitas masa pensiun.',
                'Pasangan peserta yang ingin mempersiapkan masa pensiun bersama.',
            ],

            ctaTitle:
                'Jangan Menunggu Pensiun untuk Mulai Mempersiapkan Pensiun.',

            ctaButton:
                'Semakin Dini Direncanakan, Semakin Besar Peluang Menikmati Masa Pensiun Mandiri, Produktif, Bahagia.',

            ctaProgram:
                'HAPPY RETIREMENT',

            ctaAudience:
                'Program Persiapan Masa Pensiun — Public Seminar & In-House Program',

            contactPhone:
                '0856-4248-5189 (Nurul)',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'www.prospero.co.id • prospero.retirement',

            contactAddress:
                'Informasi Lebih Lanjut Silahkan Hubungi',
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
            durationValue: '3 days',

            locationLabel: 'Location',
            locationValue:
                'Public Seminar / In-House Program',

            register: 'Registration',
            registerNow: 'Contact Us',

            heroTagline:
                'Effective Strategies to Prepare for a Happy, Independent & Prosperous Retirement',

            heroDescription:
                'Happy Retirement is Prospero Management’s retirement readiness development program designed to help participants prepare mentally, financially, physically, socially, and through meaningful activity planning so they can experience an independent, productive, happy, and meaningful retirement.',

            overviewTitle:
                'Overview',

            summary:
                'Happy Retirement is designed to help participants understand the challenges of retirement life in Indonesia, identify their level of retirement readiness, develop a positive mindset, prepare an Individual Retirement Plan (IRP), choose appropriate strategies to meet physical, psychological, financial and social needs, and develop an activity plan before entering retirement.',

            noteTitle:
                'Why Is This Program Important?',

            note:
                'Do not wait until retirement to start preparing for retirement. The earlier it is planned, the greater the opportunity to enjoy an independent, productive and happy retirement. Retirement is not the end of productivity, but the beginning of an opportunity to live a more meaningful life according to your dreams and choices. Therefore, retirement needs to be designed, not simply waited for.',

            problemTitle:
                'Public Seminar Schedule',

            problemDescription:
                'Happy Retirement is available through several 2026 public seminar schedules in Bandung and Yogyakarta.',

            signsTitle:
                'Public Seminar Schedule',

            signs: [
                '19–21 August 2026 — Hotel Ibis Trans Studio Bandung',
                '23–25 September 2026 — Hotel Grand Zuri Malioboro Yogyakarta',
                '28–30 October 2026 — Hotel Ibis Trans Studio Bandung',
                '25–27 November 2026 — Hotel Grand Zuri Malioboro Yogyakarta',
            ],

            keyQuestion:
                'Investment & Facilities',

            organizationStatement:
                'Investment: Rp. 6,500,000 net per participant • Rp. 10,000,000 net including spouse',

            healthyEmployeeStatement:
                'Facilities: Coffee Break • Lunch • Meals & Training Kit • Training Module (E-Book) • Souvenir • Networking',

            objectivesTitle:
                'Program Objectives',

            objectives: [
                'Understand the challenges of retirement life in Indonesia.',
                'Identify personal readiness for retirement.',
                'Develop a positive mindset toward retirement.',
                'Prepare a practical and applicable Individual Retirement Plan (IRP).',
                'Choose appropriate strategies to meet physical, psychological, financial and social needs in retirement.',
                'Develop an activity plan before entering retirement.',
            ],

            learningJourneyTitle:
                'Training Methods',

            learningJourney: [
                {
                    number: '01',
                    title: 'Pre Training',
                    description:
                        'Online survey to explore participants’ condition and readiness.',
                },
                {
                    number: '02',
                    title: 'In Class Training',
                    description:
                        'Seminars, discussions, workshops & interactive case studies.',
                },
                {
                    number: '03',
                    title: 'Workshop & Simulation',
                    description:
                        'Practice, role plays, games & strategy application simulations.',
                },
                {
                    number: '04',
                    title: 'Consultation & Coaching',
                    description:
                        'Personal consultation & coaching related to retirement planning.',
                },
                {
                    number: '05',
                    title: 'Post Training',
                    description:
                        'Post-program assistance & consultation to support retirement plan implementation.',
                },
            ],

            materialsTitle:
                'Benefits Participants Will Receive',

            materials: [
                {
                    title:
                        'Retirement Readiness Assessment',
                    items: [
                        'Understand retirement readiness levels and areas that need preparation.',
                    ],
                },
                {
                    title:
                        'Individual Retirement Plan (IRP)',
                    items: [
                        'Develop a structured, realistic and applicable personal retirement plan.',
                    ],
                },
                {
                    title:
                        'Financial Check Up & Spouse Management Strategy',
                    items: [
                        'Analyze current financial conditions and develop optimal strategies to manage finances wisely and productively with a spouse.',
                    ],
                },
                {
                    title:
                        'One-on-One Guidance & Coaching',
                    items: [
                        'Personal guidance sessions to address participants’ unique needs and challenges.',
                    ],
                },
            ],

            takeHomeTitle:
                'Retirement Planning Expert',

            takeHomeTools: [
                'Certified Qualified Wealth Planner (QWP)',
                'Experienced in facilitating 113 Happy Retirement training batches',
                'More than 4,000 participants',
                'Author of the “BLUEPRINT MASA PENSIUN” E-book',
                'Practical and applicable retirement preparation',
                'Personal consultation and coaching related to retirement planning',
            ],

            benefitsTitle:
                'Program Information',

            benefits: [
                'Happy Retirement',
                'Public Seminar & In-House Program',
                'Designed to help participants prepare for retirement early',
                'Learning covers mental, physical, psychological, financial and social aspects',
            ],

            expertsTitle:
                'Facilitator',

            facilitatorName:
                'ADE AHMAD ROZI, MBA, Ph.D, QWP',

            facilitatorRole:
                'Retirement Planning Expert',

            facilitatorBio1:
                'Certified Qualified Wealth Planner (QWP) with experience facilitating 113 Happy Retirement training batches and more than 4,000 participants.',

            facilitatorBio2:
                'He is also the author of the “BLUEPRINT MASA PENSIUN” E-book and has experience delivering learning and guidance related to retirement readiness.',

            metrics: [
                '113 Happy Retirement Batches',
                '4,000+ Participants',
                'Certified Qualified Wealth Planner (QWP)',
                'Author of “BLUEPRINT MASA PENSIUN” E-book',
            ],

            participantsTitle:
                'Target Participants',

            participants: [
                'Participants who are preparing for retirement.',
                'Employees who want to strengthen their mental, financial, physical, psychological and social readiness before retirement.',
                'Participants who want to prepare an Individual Retirement Plan (IRP) and retirement activity plan.',
                'Participants and spouses who want to prepare for retirement together.',
            ],

            ctaTitle:
                'Do Not Wait Until Retirement to Start Preparing for Retirement.',

            ctaButton:
                'The Earlier It Is Planned, the Greater the Opportunity to Enjoy an Independent, Productive and Happy Retirement.',

            ctaProgram:
                'HAPPY RETIREMENT',

            ctaAudience:
                'Retirement Preparation Program — Public Seminar & In-House Program',

            contactPhone:
                '0856-4248-5189 (Nurul)',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'www.prospero.co.id • prospero.retirement',

            contactAddress:
                'For More Information, Please Contact Us',
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
            id="happy-retirement"
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
                                    Happy Retirement
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
                                Happy Retirement
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


                        {/* RIGHT VISUAL — BROSUR HAPPY RETIREMENT */}
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
                                src="/images/brochures/brosurpurnabakti.png"
                                alt={
                                    isEnglish
                                        ? 'Happy Retirement brochure'
                                        : 'Brosur Happy Retirement'
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
                        defaultValue="/training/happy-retirement"
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

export default HappyRetirement;
