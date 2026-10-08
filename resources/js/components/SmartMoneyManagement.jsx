import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SmartMoneyManagement() {
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
            durationValue: '1 hari',

            locationLabel: 'Lokasi',
            locationValue:
                'In-House / Sesuai kebutuhan organisasi',

            register: 'Registrasi',
            registerNow: 'Daftar Sekarang',

            heroTagline:
                'From Financial Awareness to Financial Well-Being',

            heroDescription:
                'Smart Money Management adalah program experiential learning dari Prospero Management yang membantu karyawan memahami kondisi keuangannya, mengendalikan cash flow, membangun kekayaan bersih, serta mengambil keputusan finansial yang lebih sehat.',

            programNoteTitle:
                'Program ini bukan sekadar seminar tentang uang.',

            programNote:
                'Peserta akan bekerja menggunakan kondisi finansialnya sendiri melalui financial check-up, personal exercises, case study, simulation, discussion, dan action planning sehingga pembelajaran dapat langsung diterapkan.',

            overviewTitle: 'Ringkasan',

            summary:
                'Smart Money Management adalah program experiential learning dari Prospero Management yang dirancang untuk membantu karyawan membangun financial health dan financial well-being. Program ini membantu peserta memahami kondisi keuangan mereka, mengendalikan cash flow, membangun kekayaan bersih, serta mengambil keputusan finansial yang lebih sehat dan terarah.',

            problemTitle:
                'Karyawan bekerja keras untuk memperoleh penghasilan. Namun, apakah penghasilan tersebut benar-benar membuat mereka semakin sejahtera?',

            problemDescription:
                'Kenaikan penghasilan tidak selalu diikuti dengan peningkatan kesejahteraan finansial. Banyak karyawan yang masih menghadapi tekanan cicilan, utang konsumtif, pengeluaran yang sulit dikendalikan, minimnya dana darurat, serta belum memiliki aset dan persiapan masa depan yang memadai. Masalah keuangan pribadi berpotensi memengaruhi konsentrasi, ketenangan, engagement, dan produktivitas karyawan di tempat kerja.',

            signsTitle:
                'Kenali Tanda-Tandanya',

            signs: [
                'Penggunaan kartu kredit dan utang konsumtif yang tidak terkendali',
                'Sering membutuhkan pinjaman atau cash advance',
                'Penghasilan meningkat tetapi tabungan tidak bertambah',
                'Tidak memiliki dana darurat yang memadai',
                'Tidak mengetahui berapa kekayaan bersih yang dimiliki',
                'Belum mempunyai tujuan keuangan yang jelas',
                'Mengalami tekanan finansial yang memengaruhi kehidupan dan pekerjaan',
            ],

            keyQuestion:
                'Pertanyaannya bukan hanya: “Berapa besar penghasilan karyawan?” Tetapi: “Seberapa baik mereka mengelolanya?”',

            organizationStatement:
                'Organisasi dapat menyediakan penghasilan, benefit, bonus, bahkan program pensiun. Namun pada akhirnya, kemampuan karyawan mengelola uang yang menentukan apakah penghasilan tersebut benar-benar menjadi kesejahteraan.',

            healthyEmployeeStatement:
                'Karyawan yang sehat secara finansial memiliki fondasi yang lebih baik untuk bekerja dengan tenang, fokus, produktif, dan mempersiapkan masa depannya.',

            objectivesTitle:
                'Tujuan Pelatihan',

            objectives: [
                'Memahami pentingnya financial literacy dan personal financial management bagi kesejahteraan dan produktivitas karyawan.',
                'Memahami kondisi keuangan pribadi melalui financial check-up, cash flow, dan net worth.',
                'Membangun cara pandang yang sehat tentang uang dan pentingnya mempersiapkan masa depan.',
                'Menetapkan tujuan dan prioritas keuangan secara lebih terarah.',
                'Menyusun strategi untuk meningkatkan kekayaan bersih, mengendalikan utang dan pengeluaran, serta mengelola uang dengan lebih baik.',
                'Menerjemahkan pembelajaran menjadi budget dan Personal Financial Action Plan yang dapat diterapkan.',
            ],

            materialsTitle:
                'Materi Pelatihan',

            materials: [
                {
                    title:
                        'Financial Awareness & Personal Finance',
                    items: [
                        'Tantangan keuangan karyawan',
                        'Pentingnya Financial Literacy',
                        'Personal Financial Management Framework',
                    ],
                },

                {
                    title:
                        'Financial Maturity & Wealthy Mindset',
                    items: [
                        'Financial Maturity Assessment',
                        'Rich vs. Wealthy',
                        'Wealthy Mindset',
                    ],
                },

                {
                    title:
                        'Personal Financial Check-up',
                    items: [
                        'Personal Financial Health Check',
                        'Personal Cash Flow Check-up',
                        'Personal Net Worth Statement',
                    ],
                },

                {
                    title:
                        'Financial Protection & Planning',
                    items: [
                        'Emergency Fund Calculator',
                        'Financial Goals Worksheet',
                    ],
                },

                {
                    title:
                        'Financial Goals Planning',
                    items: [
                        'Menentukan tujuan dan prioritas keuangan',
                        'Goals Worksheet',
                    ],
                },

                {
                    title:
                        'Basic Investment Planning',
                    items: [
                        'Risk & Return',
                        'Instrumen investasi dasar',
                    ],
                },

                {
                    title:
                        'Wealth Building Strategy',
                    items: [
                        'Meningkatkan aset',
                        'Mengendalikan utang',
                        'Mengendalikan pengeluaran',
                        'Mengelola uang',
                    ],
                },

                {
                    title:
                        'Personal Financial Action Plan',
                    items: [
                        'Personal Budget',
                        '90-Day Personal Action Plan',
                    ],
                },
            ],

            learningJourneyTitle:
                '6 Learning Journey',

            learningJourney: [
                {
                    number: '01',
                    title: 'Financial Philosophy',
                    description:
                        'Membangun cara pandang yang sehat tentang uang dan pentingnya mempersiapkan masa depan.',
                },

                {
                    number: '02',
                    title: 'Financial Health Check',
                    description:
                        'Mengetahui seberapa sehat kondisi keuangan pribadi saat ini.',
                },

                {
                    number: '03',
                    title: 'Know Your Net Worth',
                    description:
                        'Menghitung aset, kewajiban, dan kekayaan bersih yang sebenarnya.',
                },

                {
                    number: '04',
                    title: 'Set Financial Goals',
                    description:
                        'Menentukan tujuan dan prioritas keuangan secara lebih terarah.',
                },

                {
                    number: '05',
                    title: 'Grow Your Net Worth',
                    description:
                        'Menyusun strategi meningkatkan aset, mengendalikan utang dan pengeluaran, serta mengelola uang.',
                },

                {
                    number: '06',
                    title: 'Take Action',
                    description:
                        'Menerjemahkan pembelajaran menjadi budget dan Personal Financial Action Plan.',
                },
            ],

            takeHomeTitle:
                'Peserta Tidak Hanya Pulang Membawa Pengetahuan. Mereka Membawa Rencana.',

            takeHomeTools: [
                'Personal Financial Health Check',
                'Net Worth Statement',
                'Financial Goals',
                'Personal Budget',
                'Wealth Building Strategy',
                '90-Day Personal Action Plan',
            ],

            benefitsTitle:
                'Manfaat Bagi Organisasi',

            benefits: [
                'Meningkatkan produktivitas dan fokus kerja',
                'Mengurangi financial stress dan ketidakhadiran',
                'Meningkatkan engagement dan loyalitas karyawan',
                'Menurunkan risiko masalah keuangan yang berdampak pada kinerja',
                'Mendukung kesiapan pensiun dan kesejahteraan jangka panjang',
                'Menciptakan organisasi yang lebih sehat, produktif dan berkelanjutan',
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
                'Dalam Smart Money Management, beliau menggabungkan pendekatan financial literacy yang praktis dengan pengalaman panjang di bidang pengembangan SDM sehingga pembelajaran tidak berhenti pada pemahaman konsep, tetapi diarahkan pada perubahan perilaku dan action plan yang dapat diterapkan peserta.',

            metrics: [
                '37+ Batches Smart Money Management',
                '20+ Years Professional Experience',
                'Practical, Engaging and Real-World Application',
                'People Development & Financial Literacy',
            ],

            participantsTitle:
                'Target Peserta',

            participants: [
                'Karyawan yang ingin meningkatkan literasi dan pengelolaan keuangan pribadi.',
                'Karyawan yang ingin membangun kebiasaan finansial yang lebih sehat.',
                'Profesional yang ingin memahami kondisi keuangan pribadi dan menetapkan tujuan keuangan.',
                'Peserta yang ingin membangun kekayaan bersih dan mempersiapkan masa depan secara lebih terarah.',
            ],

            ctaTitle:
                'INVEST IN YOUR PEOPLE. STRENGTHEN THEIR FINANCIAL WELL-BEING.',

            ctaButton:
                'Bring Smart Money Management to Your Organization.',

            ctaProgram:
                'IN-HOUSE PROGRAM | 1 DAY',

            ctaAudience:
                'Available for BUMN • Government • Institutions • Private Companies',

            contactPhone:
                '0856 4248 5189 (Nurul)',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'prospero.co.id',
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
            durationValue: '1 day',

            locationLabel: 'Location',
            locationValue:
                'In-House / Based on organizational needs',

            register: 'Registration',
            registerNow: 'Register Now',

            heroTagline:
                'From Financial Awareness to Financial Well-Being',

            heroDescription:
                'Smart Money Management is an experiential learning program from Prospero Management that helps employees understand their financial condition, control cash flow, build net worth, and make healthier financial decisions.',

            programNoteTitle:
                'This program is not just a seminar about money.',

            programNote:
                'Participants work with their own financial condition through financial check-ups, personal exercises, case studies, simulations, discussions, and action planning so the learning can be directly applied.',

            overviewTitle:
                'Overview',

            summary:
                'Smart Money Management is an experiential learning program from Prospero Management designed to help employees build financial health and financial well-being. The program helps participants understand their financial condition, control cash flow, build net worth, and make healthier and more structured financial decisions.',

            problemTitle:
                'Employees Work Hard to Earn Income. But Does That Income Really Make Them More Prosperous?',

            problemDescription:
                'Higher income does not always lead to greater financial well-being. Many employees still face installment pressure, consumer debt, uncontrolled spending, inadequate emergency funds, and insufficient assets and future preparation. Personal financial problems can affect concentration, peace of mind, engagement, and employee productivity at work.',

            signsTitle:
                'Recognize the Signs',

            signs: [
                'Uncontrolled use of credit cards and consumer debt',
                'Frequently requiring loans or cash advances',
                'Income increases but savings do not grow',
                'No adequate emergency fund',
                'Unaware of their actual net worth',
                'No clear financial goals',
                'Experiencing financial pressure that affects life and work',
            ],

            keyQuestion:
                'The question is not only: “How much do employees earn?” But also: “How well do they manage it?”',

            organizationStatement:
                'Organizations can provide income, benefits, bonuses, and even retirement programs. Ultimately, however, employees’ ability to manage money determines whether income truly becomes financial well-being.',

            healthyEmployeeStatement:
                'Financially healthy employees have a stronger foundation to work calmly, stay focused, remain productive, and prepare for their future.',

            objectivesTitle:
                'Training Objectives',

            objectives: [
                'Understand the importance of financial literacy and personal financial management for employee well-being and productivity.',
                'Understand current financial conditions through financial check-ups, cash flow, and net worth.',
                'Build a healthy perspective on money and the importance of preparing for the future.',
                'Set financial goals and priorities in a more structured way.',
                'Develop strategies to grow net worth, control debt and spending, and manage money more effectively.',
                'Translate learning into budgeting and a practical Personal Financial Action Plan.',
            ],

            materialsTitle:
                'Training Materials',

            materials: [
                {
                    title:
                        'Financial Awareness & Personal Finance',
                    items: [
                        'Employee financial challenges',
                        'The importance of Financial Literacy',
                        'Personal Financial Management Framework',
                    ],
                },

                {
                    title:
                        'Financial Maturity & Wealthy Mindset',
                    items: [
                        'Financial Maturity Assessment',
                        'Rich vs. Wealthy',
                        'Wealthy Mindset',
                    ],
                },

                {
                    title:
                        'Personal Financial Check-up',
                    items: [
                        'Personal Financial Health Check',
                        'Personal Cash Flow Check-up',
                        'Personal Net Worth Statement',
                    ],
                },

                {
                    title:
                        'Financial Protection & Planning',
                    items: [
                        'Emergency Fund Calculator',
                        'Financial Goals Worksheet',
                    ],
                },

                {
                    title:
                        'Financial Goals Planning',
                    items: [
                        'Setting financial goals and priorities',
                        'Goals Worksheet',
                    ],
                },

                {
                    title:
                        'Basic Investment Planning',
                    items: [
                        'Risk & Return',
                        'Basic investment instruments',
                    ],
                },

                {
                    title:
                        'Wealth Building Strategy',
                    items: [
                        'Increasing assets',
                        'Controlling debt',
                        'Controlling spending',
                        'Managing money',
                    ],
                },

                {
                    title:
                        'Personal Financial Action Plan',
                    items: [
                        'Personal Budget',
                        '90-Day Personal Action Plan',
                    ],
                },
            ],

            learningJourneyTitle:
                '6 Learning Journey',

            learningJourney: [
                {
                    number: '01',
                    title: 'Financial Philosophy',
                    description:
                        'Building a healthy perspective on money and the importance of preparing for the future.',
                },

                {
                    number: '02',
                    title: 'Financial Health Check',
                    description:
                        'Understanding how healthy the personal financial condition is today.',
                },

                {
                    number: '03',
                    title: 'Know Your Net Worth',
                    description:
                        'Calculating assets, liabilities, and actual net worth.',
                },

                {
                    number: '04',
                    title: 'Set Financial Goals',
                    description:
                        'Determining financial goals and priorities in a more structured way.',
                },

                {
                    number: '05',
                    title: 'Grow Your Net Worth',
                    description:
                        'Developing strategies to increase assets, control debt and spending, and manage money.',
                },

                {
                    number: '06',
                    title: 'Take Action',
                    description:
                        'Translating learning into a budget and Personal Financial Action Plan.',
                },
            ],

            takeHomeTitle:
                'Participants Do Not Only Leave with Knowledge. They Leave with a Plan.',

            takeHomeTools: [
                'Personal Financial Health Check',
                'Net Worth Statement',
                'Financial Goals',
                'Personal Budget',
                'Wealth Building Strategy',
                '90-Day Personal Action Plan',
            ],

            benefitsTitle:
                'Benefits for Organizations',

            benefits: [
                'Increase productivity and work focus',
                'Reduce financial stress and absenteeism',
                'Increase employee engagement and loyalty',
                'Reduce the risk of financial problems affecting performance',
                'Support retirement readiness and long-term well-being',
                'Create a healthier, more productive, and sustainable organization',
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
                'In Smart Money Management, he combines a practical financial literacy approach with extensive human capital development experience so learning goes beyond concept understanding and is directed toward behavior change and an actionable plan that participants can apply.',

            metrics: [
                '37+ Batches Smart Money Management',
                '20+ Years Professional Experience',
                'Practical, Engaging and Real-World Application',
                'People Development & Financial Literacy',
            ],

            participantsTitle:
                'Target Participants',

            participants: [
                'Employees who want to improve financial literacy and personal financial management.',
                'Employees who want to build healthier financial habits.',
                'Professionals who want to understand their personal financial condition and set financial goals.',
                'Participants who want to build net worth and prepare for the future in a more structured way.',
            ],

            ctaTitle:
                'INVEST IN YOUR PEOPLE. STRENGTHEN THEIR FINANCIAL WELL-BEING.',

            ctaButton:
                'Bring Smart Money Management to Your Organization.',

            ctaProgram:
                'IN-HOUSE PROGRAM | 1 DAY',

            ctaAudience:
                'Available for BUMN • Government • Institutions • Private Companies',

            contactPhone:
                '0856 4248 5189 (Nurul)',

            contactEmail:
                'marketing@havpro.co.id',

            contactWebsite:
                'prospero.co.id',
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
            id="smart-money-management"
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
                                    Smart Money Management
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
                                Smart Money Management
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


                        {/* RIGHT VISUAL — BROSUR SMM */}
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
                                src="/images/brochures/smmfull.jpeg"
                                alt={
                                    isEnglish
                                        ? 'Smart Money Management brochure'
                                        : 'Brosur Smart Money Management'
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
                        defaultValue="/training/smart-money-management"
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
                                    {text.programNoteTitle}
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
                                    {text.programNote}
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
                            <div className="mt-10">

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
                                        sm:grid-cols-2
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


                            {/* KEY QUESTION */}
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


                            {/* HEALTHY EMPLOYEE STATEMENT */}
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


                            {/* TUJUAN PELATIHAN */}
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
                                                    {objective}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* 6 LEARNING JOURNEY */}
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


                            {/* MATERI PELATIHAN */}
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


                            {/* BENEFITS */}
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
                                        grid
                                        gap-2
                                        text-xs
                                        text-white/85
                                        sm:grid-cols-3
                                    "
                                >
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


                                        {/* METRICS */}
                                        <div
                                            className="
                                                mt-6
                                                grid
                                                gap-3
                                                sm:grid-cols-2
                                            "
                                        >

                                            {text.metrics.map(
                                                (
                                                    metric,
                                                    index
                                                ) => (

                                                    <div
                                                        key={index}
                                                        className="
                                                            rounded-xl
                                                            border
                                                            border-gray-200
                                                            bg-gray-50
                                                            px-4
                                                            py-4
                                                        "
                                                    >

                                                        <p
                                                            className="
                                                                text-sm
                                                                font-semibold
                                                                leading-6
                                                                text-gray-800
                                                            "
                                                        >
                                                            {metric}
                                                        </p>

                                                    </div>

                                                )
                                            )}

                                        </div>

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

export default SmartMoneyManagement;