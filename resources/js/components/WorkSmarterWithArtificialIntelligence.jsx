import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function WorkSmarterWithArtificialIntelligence() {
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
            durationValue: 'Sesuai program',

            locationLabel: 'Lokasi',
            locationValue:
                'In-House / Sesuai kebutuhan organisasi',

            register: 'Registrasi',
            registerNow: 'Hubungi Kami',

            heroTagline:
                'BOOSTING PRODUCTIVITY AT WORK',

            heroDescription:
                'WORK SMARTER WITH ARTIFICIAL INTELLIGENCE (AI) adalah program yang berfokus pada pemanfaatan Artificial Intelligence untuk mendukung produktivitas di dunia kerja.',

            overviewTitle: 'Ringkasan',

            summary:
                'Brosur Work Smarter with Artificial Intelligence (AI) menempatkan AI sebagai bagian penting dari dunia kerja dan peningkatan produktivitas. Materi komunikasi program menyoroti bahwa 60% perusahaan global sudah menggunakan AI (McKinsey, 2024); AI dapat memangkas 20–30% pekerjaan administratif (Deloitte, 2024); AI berpotensi mendorong ekonomi global sebesar +USD 1.5 triliun pada 2030 (PwC, 2024); 73% perusahaan pengguna AI lebih inovatif (Accenture, 2023); dan 44% skill karyawan akan berubah dalam 5 tahun (WEF, 2024). Brosur juga menyoroti tantangan minimnya training AI di perusahaan: hanya 1/3 karyawan yang pernah mengikuti pelatihan AI formal (BCG, 2025); 77% perusahaan mengizinkan penggunaan AI tetapi hanya 32% yang benar-benar memberikan training (BambooHR, 2024); serta 55% karyawan pengguna AI belum pernah dilatih terkait risiko AI di dunia kerja (BambooHR, 2024).',

            noteTitle:
                'Mengapa AI Penting di Dunia Kerja?',

            note:
                'McKinsey (2024): 60% perusahaan global sudah AI. Deloitte (2024): AI pangkas 20–30% kerja administratif. PwC (2024): AI dorong ekonomi global +USD 1.5 triliun (2030). Accenture (2023): 73% perusahaan pengguna AI lebih inovatif. WEF (2024): 44% skill karyawan berubah dalam 5 tahun.',

            problemTitle:
                'Tantangan: Minimnya Training AI di Perusahaan',

            problemDescription:
                'Brosur menyoroti adanya kesenjangan antara penggunaan AI di perusahaan dan kesiapan pelatihan bagi karyawan.',

            signsTitle:
                'Fakta Tantangan Pelatihan AI',

            signs: [
                'Hanya 1/3 karyawan yang pernah mengikuti pelatihan AI formal (BCG, 2025).',
                '77% perusahaan mengizinkan penggunaan AI, tapi hanya 32% yang benar-benar memberikan training (BambooHR, 2024).',
                '55% karyawan pengguna AI belum pernah dilatih terkait risiko AI di dunia kerja (BambooHR, 2024).',
            ],

            keyQuestion:
                'WORK SMARTER WITH ARTIFICIAL INTELLIGENCE (AI) — BOOSTING PRODUCTIVITY AT WORK',

            organizationStatement:
                'Penggunaan AI di tempat kerja berkembang cepat, sementara kesiapan training AI belum merata di perusahaan.',

            healthyEmployeeStatement:
                'Perubahan skill akibat AI menjadi salah satu perhatian penting bagi kesiapan tenaga kerja dalam lima tahun ke depan.',

            objectivesTitle:
                'Fokus Program',

            objectives: [
                'Memahami mengapa Artificial Intelligence penting di dunia kerja.',
                'Memahami peluang AI untuk meningkatkan produktivitas kerja.',
                'Mengenali dampak AI terhadap pekerjaan administratif dan cara kerja karyawan.',
                'Memahami pentingnya kesiapan skill karyawan menghadapi perubahan akibat AI.',
                'Menyadari pentingnya training AI yang memadai, termasuk pemahaman risiko AI di dunia kerja.',
            ],

            learningJourneyTitle:
                'Key Insights',

            learningJourney: [
                {
                    number: '01',
                    title: 'AI Adoption',
                    description:
                        '60% perusahaan global sudah menggunakan AI (McKinsey, 2024).',
                },
                {
                    number: '02',
                    title: 'Productivity',
                    description:
                        'AI dapat memangkas 20–30% pekerjaan administratif (Deloitte, 2024).',
                },
                {
                    number: '03',
                    title: 'Economic Impact',
                    description:
                        'AI diproyeksikan mendorong ekonomi global sebesar +USD 1.5 triliun pada 2030 (PwC, 2024).',
                },
                {
                    number: '04',
                    title: 'Innovation',
                    description:
                        '73% perusahaan pengguna AI lebih inovatif (Accenture, 2023).',
                },
                {
                    number: '05',
                    title: 'Workforce Skills',
                    description:
                        '44% skill karyawan akan berubah dalam 5 tahun (WEF, 2024).',
                },
                {
                    number: '06',
                    title: 'Training Readiness',
                    description:
                        'Kesenjangan training AI masih terlihat dari data BCG dan BambooHR yang ditampilkan dalam brosur.',
                },
            ],

            materialsTitle:
                'Konten Utama Brosur',

            materials: [
                {
                    title:
                        'Mengapa AI Penting di Dunia Kerja?',
                    items: [
                        'McKinsey (2024): 60% perusahaan global sudah AI.',
                        'Deloitte (2024): AI pangkas 20–30% kerja administratif.',
                        'PwC (2024): AI dorong ekonomi global +USD 1.5 triliun (2030).',
                        'Accenture (2023): 73% perusahaan pengguna AI lebih inovatif.',
                        'WEF (2024): 44% skill karyawan berubah dalam 5 tahun.',
                    ],
                },
                {
                    title:
                        'Tantangan: Minimnya Training AI di Perusahaan',
                    items: [
                        'Hanya 1/3 karyawan yang pernah mengikuti pelatihan AI formal (BCG, 2025).',
                        '77% perusahaan mengizinkan penggunaan AI, tapi hanya 32% yang benar-benar memberikan training (BambooHR, 2024).',
                        '55% karyawan pengguna AI belum pernah dilatih terkait risiko AI di dunia kerja (BambooHR, 2024).',
                    ],
                },
                {
                    title:
                        'BOOSTING PRODUCTIVITY AT WORK',
                    items: [
                        'Work Smarter with Artificial Intelligence (AI)',
                    ],
                },
            ],

            takeHomeTitle:
                'Pesan Utama Program',

            takeHomeTools: [
                'AI semakin digunakan di dunia kerja.',
                'AI membuka peluang peningkatan produktivitas.',
                'Perubahan skill karyawan perlu diantisipasi.',
                'Training AI di perusahaan masih belum merata.',
                'Kesiapan memahami risiko AI menjadi bagian penting dari adopsi AI di dunia kerja.',
                'Tujuan akhirnya adalah bekerja lebih cerdas dengan AI.',
            ],

            benefitsTitle:
                'Dampak yang Disorot Brosur',

            benefits: [
                'AI dapat memangkas 20–30% pekerjaan administratif (Deloitte, 2024).',
                'AI berpotensi mendorong ekonomi global +USD 1.5 triliun pada 2030 (PwC, 2024).',
                '73% perusahaan pengguna AI lebih inovatif (Accenture, 2023).',
                '44% skill karyawan akan berubah dalam 5 tahun (WEF, 2024).',
                'Kesenjangan training AI masih menjadi tantangan di perusahaan.',
            ],

            expertsTitle:
                'Fasilitator',

            facilitatorName:
                'Ade Ahmad Rozi, MBA, Ph.D, QWP',

            facilitatorRole:
                'Managing Partner & Facilitator',

            facilitatorBio1:
                'Berpengalaman lebih dari 20 tahun sebagai konsultan dan fasilitator pengembangan organisasi dan SDM. Telah mendampingi berbagai BUMN, perusahaan nasional dan multinasional melalui program consulting, training, dan people development.',

            facilitatorBio2:
                'Dalam program Work Smarter with Artificial Intelligence (AI), beliau menggabungkan pendekatan pembelajaran yang praktis dengan pengalaman pengembangan organisasi dan SDM untuk membantu peserta memahami peluang AI, meningkatkan produktivitas kerja, serta mempersiapkan skill menghadapi perubahan di dunia kerja.',

            metrics: [
                'Work Smarter with Artificial Intelligence (AI)',
                'Boosting Productivity at Work',
                'In-House Training Program',
                'Prospero Management',
            ],

            participantsTitle:
                'Target Peserta',

            participants: [
                'Karyawan yang menggunakan atau akan menggunakan Artificial Intelligence dalam pekerjaan sehari-hari.',
                'Profesional yang ingin meningkatkan produktivitas kerja melalui pemanfaatan Artificial Intelligence.',
                'Karyawan dan profesional yang perlu mempersiapkan perubahan skill akibat perkembangan AI di dunia kerja.',
                'Organisasi yang ingin meningkatkan kesiapan dan produktivitas tenaga kerja dalam pemanfaatan AI.',
            ],

            ctaTitle:
                'WORK SMARTER WITH ARTIFICIAL INTELLIGENCE (AI)',

            ctaButton:
                'BOOSTING PRODUCTIVITY AT WORK',

            ctaProgram:
                'IN-HOUSE TRAINING PROGRAM',

            ctaAudience:
                'Prospero Management',

            contactPhone:
                '+62 852-1275-0832 (Sultan) • +62 856-4248-5189 (Nurul)',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'prospero.co.id',

            contactAddress:
                'Jl. Paus No.90 G, Jati, Pulogadung, Jakarta Timur, 13220',
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
            durationValue: 'As specified by the program',

            locationLabel: 'Location',
            locationValue:
                'In-House / Based on organizational needs',

            register: 'Registration',
            registerNow: 'Contact Us',

            heroTagline:
                'BOOSTING PRODUCTIVITY AT WORK',

            heroDescription:
                'WORK SMARTER WITH ARTIFICIAL INTELLIGENCE (AI) is a program focused on using Artificial Intelligence to support productivity in the workplace.',

            overviewTitle: 'Overview',

            summary:
                'The Work Smarter with Artificial Intelligence (AI) brochure positions AI as an important part of the workplace and productivity improvement. It highlights that 60% of global companies have already adopted AI (McKinsey, 2024); AI can reduce administrative work by 20–30% (Deloitte, 2024); AI could drive the global economy by +USD 1.5 trillion by 2030 (PwC, 2024); 73% of companies using AI are more innovative (Accenture, 2023); and 44% of employee skills will change within five years (WEF, 2024). The brochure also highlights the challenge of limited AI training in companies: only 1/3 of employees have ever attended formal AI training (BCG, 2025); 77% of companies allow AI use, but only 32% actually provide training (BambooHR, 2024); and 55% of employees using AI have never received training on AI risks in the workplace (BambooHR, 2024).',

            noteTitle:
                'Why Is AI Important in the Workplace?',

            note:
                'McKinsey (2024): 60% of global companies have adopted AI. Deloitte (2024): AI can reduce administrative work by 20–30%. PwC (2024): AI could drive the global economy by +USD 1.5 trillion by 2030. Accenture (2023): 73% of companies using AI are more innovative. WEF (2024): 44% of employee skills will change within five years.',

            problemTitle:
                'Challenge: Limited AI Training in Companies',

            problemDescription:
                'The brochure highlights a gap between AI adoption in companies and employee readiness through adequate AI training.',

            signsTitle:
                'AI Training Challenge Facts',

            signs: [
                'Only 1/3 of employees have ever attended formal AI training (BCG, 2025).',
                '77% of companies allow AI use, but only 32% actually provide training (BambooHR, 2024).',
                '55% of employees using AI have never received training on AI risks in the workplace (BambooHR, 2024).',
            ],

            keyQuestion:
                'WORK SMARTER WITH ARTIFICIAL INTELLIGENCE (AI) — BOOSTING PRODUCTIVITY AT WORK',

            organizationStatement:
                'AI adoption in the workplace is growing rapidly, while AI training readiness is still uneven across companies.',

            healthyEmployeeStatement:
                'Changes in employee skills due to AI are an important consideration for workforce readiness over the next five years.',

            objectivesTitle:
                'Program Focus',

            objectives: [
                'Understand why Artificial Intelligence matters in the workplace.',
                'Understand the opportunity for AI to improve work productivity.',
                'Recognize the impact of AI on administrative work and employee ways of working.',
                'Understand the importance of employee skill readiness as AI changes work.',
                'Recognize the importance of adequate AI training, including awareness of AI risks in the workplace.',
            ],

            learningJourneyTitle:
                'Key Insights',

            learningJourney: [
                {
                    number: '01',
                    title: 'AI Adoption',
                    description:
                        '60% of global companies have adopted AI (McKinsey, 2024).',
                },
                {
                    number: '02',
                    title: 'Productivity',
                    description:
                        'AI can reduce administrative work by 20–30% (Deloitte, 2024).',
                },
                {
                    number: '03',
                    title: 'Economic Impact',
                    description:
                        'AI is projected to drive the global economy by +USD 1.5 trillion by 2030 (PwC, 2024).',
                },
                {
                    number: '04',
                    title: 'Innovation',
                    description:
                        '73% of companies using AI are more innovative (Accenture, 2023).',
                },
                {
                    number: '05',
                    title: 'Workforce Skills',
                    description:
                        '44% of employee skills will change within five years (WEF, 2024).',
                },
                {
                    number: '06',
                    title: 'Training Readiness',
                    description:
                        'The brochure highlights an AI training gap based on the BCG and BambooHR data presented.',
                },
            ],

            materialsTitle:
                'Key Brochure Content',

            materials: [
                {
                    title:
                        'Why Is AI Important in the Workplace?',
                    items: [
                        'McKinsey (2024): 60% of global companies have adopted AI.',
                        'Deloitte (2024): AI can reduce administrative work by 20–30%.',
                        'PwC (2024): AI could drive the global economy by +USD 1.5 trillion by 2030.',
                        'Accenture (2023): 73% of companies using AI are more innovative.',
                        'WEF (2024): 44% of employee skills will change within five years.',
                    ],
                },
                {
                    title:
                        'Challenge: Limited AI Training in Companies',
                    items: [
                        'Only 1/3 of employees have ever attended formal AI training (BCG, 2025).',
                        '77% of companies allow AI use, but only 32% actually provide training (BambooHR, 2024).',
                        '55% of employees using AI have never received training on AI risks in the workplace (BambooHR, 2024).',
                    ],
                },
                {
                    title:
                        'BOOSTING PRODUCTIVITY AT WORK',
                    items: [
                        'Work Smarter with Artificial Intelligence (AI)',
                    ],
                },
            ],

            takeHomeTitle:
                'Program Key Messages',

            takeHomeTools: [
                'AI adoption in the workplace is increasing.',
                'AI creates opportunities to improve productivity.',
                'Changes in employee skills need to be anticipated.',
                'AI training is still uneven across companies.',
                'Understanding AI risks is an important part of workplace AI adoption.',
                'The goal is to work smarter with AI.',
            ],

            benefitsTitle:
                'Impact Highlighted by the Brochure',

            benefits: [
                'AI can reduce administrative work by 20–30% (Deloitte, 2024).',
                'AI could drive the global economy by +USD 1.5 trillion by 2030 (PwC, 2024).',
                '73% of companies using AI are more innovative (Accenture, 2023).',
                '44% of employee skills will change within five years (WEF, 2024).',
                'The AI training gap remains a challenge for companies.',
            ],

            expertsTitle:
                'Facilitator',

            facilitatorName:
                'Ade Ahmad Rozi, MBA, Ph.D, QWP',

            facilitatorRole:
                'Managing Partner & Facilitator',

            facilitatorBio1:
                'With more than 20 years of experience as an organizational and human capital development consultant and facilitator, he has supported various SOEs, national companies, and multinational organizations through consulting, training, and people development programs.',

            facilitatorBio2:
                'In the Work Smarter with Artificial Intelligence (AI) program, he combines a practical learning approach with extensive organizational and human capital development experience to help participants understand AI opportunities, improve work productivity, and prepare the skills needed for changes in the workplace.',

            metrics: [
                'Work Smarter with Artificial Intelligence (AI)',
                'Boosting Productivity at Work',
                'In-House Training Program',
                'Prospero Management',
            ],

            participantsTitle:
                'Target Participants',

            participants: [
                'Employees who use or will use Artificial Intelligence in their daily work.',
                'Professionals who want to improve work productivity through the use of Artificial Intelligence.',
                'Employees and professionals who need to prepare for changing skills driven by AI development in the workplace.',
                'Organizations seeking to improve workforce readiness and productivity through AI adoption.',
            ],

            ctaTitle:
                'WORK SMARTER WITH ARTIFICIAL INTELLIGENCE (AI)',

            ctaButton:
                'BOOSTING PRODUCTIVITY AT WORK',

            ctaProgram:
                'IN-HOUSE TRAINING PROGRAM',

            ctaAudience:
                'Prospero Management',

            contactPhone:
                '+62 852-1275-0832 (Sultan) • +62 856-4248-5189 (Nurul)',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'prospero.co.id',

            contactAddress:
                'Jl. Paus No.90 G, Jati, Pulogadung, East Jakarta, 13220',
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
            id="work-smarter-with-artificial-intelligence"
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
                                    Work Smarter with Artificial Intelligence (AI)
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
                                Work Smarter with Artificial Intelligence (AI)
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
                                src="/images/brochures/brosurai.png"
                                alt={
                                    isEnglish
                                        ? 'Work Smarter with Artificial Intelligence brochure'
                                        : 'Brosur Work Smarter with Artificial Intelligence'
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
                        defaultValue="/services/work-smarter-with-artificial-intelligence"
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

export default WorkSmarterWithArtificialIntelligence;
