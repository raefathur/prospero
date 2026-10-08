import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DevelopingCustomerFocusedTeams() {
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
            locationValue: 'In-House / Sesuai kebutuhan klien',

            register: 'Registrasi',
            registerNow: 'Daftar Sekarang',

            overviewTitle: 'Ringkasan',

            summary:
                'Program Developing Customer-Focused Teams membantu organisasi membangun kerjasama tim yang kuat dan berorientasi pada pelanggan, memperkuat service vision, serta mendorong service excellence untuk meningkatkan kepuasan dan loyalitas pelanggan.',

            objectivesTitle: 'Tujuan Pelatihan',

            objectiveText1:
                'Kepuasan dan loyalitas pelanggan adalah kunci utama dalam memenangkan persaingan bisnis. Guna mewujudkannya, setiap fungsi dalam organisasi harus menyadari bahwa kepuasan pelanggan bukan semata-mata tanggung jawab bagian operasi atau front-liner tapi merupakan tanggung jawab bersama karena setiap proses kerja dalam organisasi akan bermuara pada pencapaian kepuasan pelanggan.',

            objectiveText2:
                'Arogansi antar unit kerja harus dikikis habis dan diganti dengan upaya bersama mencari solusi dalam memecahkan permasalahan yang dihadapi pelanggan. Oleh karena itu, penting bagi organisasi untuk membangun visi layanan (service vision) dan semangat kerjasama dalam memberikan layanan prima (service excellence) sehingga semua elemen organisasi bersatu dalam meraih loyalitas pelanggan.',

            materialsTitle: 'Materi Pelatihan',

            material1:
                'Memahami pentingnya kerjasama tim bagi kesuksesan organisasi',

            material2:
                'Membangun karakter pribadi yang Siap untuk Melakukan Kerjasama',

            material3:
                'Kiat Membangun Tim yang Solid dan Produktif',

            material4:
                'Kunci Keberhasilan Organisasi: Menjadi Customer Service Organization',

            material5:
                'Identifikasi Service Cycle and Moment of Truth',

            material6:
                'Mengapa Pelanggan Komplain?',

            material7:
                'Tips Mengatasi Kegagalan Layanan',

            material8:
                'Simulasi dan Role Play Pelayanan Prima di Organisasi',

            material9:
                'Pembagian Kelompok & Penjelasan Games',

            material10:
                'Multiple Challenges Games',

            material11:
                'De-briefing : Lesson Learn From All Games & Activities',

            material12:
                'Apa masalah utama Pelanggan Anda?',

            material13:
                'Bagaimana kerjasama tim dapat mengatasi keluhan pelanggan?',

            material14:
                'Bagaimana menjaga kekompakan layanan prima tim?',

            expertsTitle: 'Fasilitator',

            participantsTitle: 'Target Peserta',

            participant1:
                'Direksi dan pimpinan organisasi',

            participant2:
                'Manajer dan supervisor',

            participant3:
                'Profesional yang terlibat dalam pengelolaan layanan dan pelanggan',

            participant4:
                'Tim dan individu yang berperan dalam memberikan pelayanan kepada pelanggan',
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
            locationValue: 'In-House / Based on client requirements',

            register: 'Registration',
            registerNow: 'Register Now',

            overviewTitle: 'Overview',

            summary:
                'The Developing Customer-Focused Teams program helps organizations build strong, customer-oriented teamwork, strengthen service vision, and foster service excellence to improve customer satisfaction and loyalty.',

            objectivesTitle: 'Training Objectives',

            objectiveText1:
                'Customer satisfaction and loyalty are key to winning business competition. To achieve this, every function within the organization must understand that customer satisfaction is not solely the responsibility of operations or front-line teams, but a shared responsibility because every work process within the organization ultimately contributes to customer satisfaction.',

            objectiveText2:
                'Arrogance between work units must be eliminated and replaced with a shared effort to find solutions to customer problems. Therefore, organizations need to build a service vision and a spirit of collaboration in delivering service excellence so that all elements of the organization work together to achieve customer loyalty.',

            materialsTitle: 'Training Materials',

            material1:
                'Understanding the importance of teamwork for organizational success',

            material2:
                'Building personal character that is ready to collaborate',

            material3:
                'Tips for Building Solid and Productive Teams',

            material4:
                'Key to Organizational Success: Becoming a Customer Service Organization',

            material5:
                'Identifying Service Cycle and Moment of Truth',

            material6:
                'Why Do Customers Complain?',

            material7:
                'Tips for Overcoming Service Failures',

            material8:
                'Simulation and Role Play for Excellent Service in Organizations',

            material9:
                'Group Division & Games Explanation',

            material10:
                'Multiple Challenges Games',

            material11:
                'De-briefing: Lessons Learned From All Games & Activities',

            material12:
                'What are your customers’ main problems?',

            material13:
                'How can teamwork overcome customer complaints?',

            material14:
                'How can we maintain team cohesion in delivering excellent service?',

            expertsTitle: 'Facilitator',

            participantsTitle: 'Target Participants',

            participant1:
                'Directors and organizational leaders',

            participant2:
                'Managers and supervisors',

            participant3:
                'Professionals involved in service and customer management',

            participant4:
                'Teams and individuals responsible for delivering customer service',
        },
    };

    const text = isEnglish ? content.en : content.id;

    const serviceOptions = [
        {
            value: '/services/strategic-plan',
            label: t('navbar.strategicPlan'),
        },
        {
            value: '/services/diagnosing-employee-performance-management-effectiveness',
            label: t('navbar.diagnosing'),
        },
        {
            value: '/services/strategy-map-kpi-bsc',
            label: t('navbar.strategyMap'),
        },
        {
            value: '/services/competency-based-hrm',
            label: t('navbar.competencyHrm'),
        },
        {
            value: '/services/hr-for-non-hr',
            label: t('navbar.hrNonHr'),
        },
        {
            value: '/services/human-resource-management-essentials',
            label: t('navbar.hrEssentials'),
        },
        {
            value: '/services/talent-management',
            label: t('navbar.talent'),
        },
        {
            value: '/services/developing-standard-operation-procedure',
            label: t('navbar.sop'),
        },
        {
            value: '/services/organizational-development',
            label: t('navbar.orgDev'),
        },
        {
            value: '/services/coaching-counseling',
            label: t('navbar.coaching'),
        },
        {
            value: '/services/effective-leadership',
            label: t('navbar.effectiveLeadership'),
        },
        {
            value: '/services/supervisory-development-program',
            label: t('navbar.supervisory'),
        },
        {
            value: '/services/developing-customer-focused-teams',
            label: t('navbar.customerTeams'),
        },
        {
            value: '/services/developing-execution-skills',
            label: t('navbar.execution'),
        },
        {
            value: '/services/5s-workplace',
            label: t('navbar.fiveS'),
        },
        {
            value: '/services/high-impact-presentation-skill',
            label: t('navbar.presentation'),
        },
        {
            value: '/services/communication-skill',
            label: t('navbar.communication'),
        },
        {
            value: '/services/business-management-research',
            label: t('navbar.businessResearch'),
        },
        {
            value: '/services/improving-project-management-skill',
            label: t('navbar.projectManagement'),
        },
        {
            value: '/services/fundamental-of-marketing',
            label: t('navbar.marketing'),
        },
        {
            value: '/services/problem-solving-decision-making',
            label: t('navbar.problemSolving'),
        },
        {
            value: '/services/negotiation-skill-for-business',
            label: t('navbar.negotiation'),
        },
        {
            value: '/services/feasibility-study',
            label: t('navbar.feasibility'),
        },
        {
            value: '/services/business-plan',
            label: t('navbar.businessPlan'),
        },
        {
            value: '/services/finance-for-non-finance',
            label: t('navbar.finance'),
        },
        {
            value: '/services/developing-training-module',
            label: t('navbar.trainingModule'),
        },
        {
            value: '/services/designing-training-program',
            label: t('navbar.designTraining'),
        },
        {
            value: '/services/training-plan-development',
            label: t('navbar.trainingPlan'),
        },
        {
            value: '/services/training-impact-evaluation',
            label: t('navbar.trainingImpact'),
        },
        {
            value: '/services/training-management-system',
            label: t('navbar.trainingSystem'),
        },
        {
            value: '/services/training-for-the-trainers',
            label: t('navbar.trainers'),
        },
        {
            value: '/services/time-stress-management',
            label: t('navbar.timeStress'),
        },
        {
            value: '/services/personal-development',
            label: t('navbar.personalDevelopment'),
        },
        {
            value: '/services/work-life-balance',
            label: t('navbar.workLife'),
        },
        {
            value: '/services/effective-followership',
            label: t('navbar.followership'),
        },
        {
            value: '/services/persiapan-pensiun-1-day',
            label: t('navbar.retire1'),
        },
        {
            value: '/services/persiapan-pensiun-2-day',
            label: t('navbar.retire2'),
        },
        {
            value: '/services/persiapan-pensiun-3-day',
            label: t('navbar.retire3'),
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

    const materials = [
        text.material1,
        text.material2,
        text.material3,
        text.material4,
        text.material5,
        text.material6,
        text.material7,
        text.material8,
        text.material9,
        text.material10,
        text.material11,
        text.material12,
        text.material13,
        text.material14,
    ];

    return (
        <section
            id="developing-customer-focused-teams"
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

                        {/* =================================================
                            LEFT CONTENT
                        ================================================== */}
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
                                    {t('navbar.customerTeams')}
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
                                {t('navbar.customerTeams')}
                            </h1>


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
                                {text.summary}
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


                        {/* =================================================
                            RIGHT VISUAL
                        ================================================== */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                shadow-lg
                            "
                        >

                            <div
                                className="
                                    relative
                                    flex
                                    min-h-[220px]
                                    items-end
                                    overflow-hidden
                                    bg-gradient-to-br
                                    from-[#0b4775]
                                    via-[#0b6c91]
                                    to-[#23b99c]
                                    p-7
                                "
                            >

                                {/* DECORATION */}
                                <div
                                    className="
                                        absolute
                                        -right-12
                                        -top-12
                                        h-44
                                        w-44
                                        rounded-full
                                        bg-white/10
                                    "
                                ></div>

                                <div
                                    className="
                                        absolute
                                        -bottom-16
                                        -left-16
                                        h-52
                                        w-52
                                        rounded-full
                                        bg-white/10
                                    "
                                ></div>


                                {/* TITLE */}
                                <div className="relative z-10">

                                    <div className="mb-4 h-11 w-2 bg-emerald-400"></div>

                                    <p
                                        className="
                                            text-3xl
                                            font-bold
                                            uppercase
                                            leading-none
                                            text-white
                                        "
                                    >
                                        DEVELOPING
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-3xl
                                            font-bold
                                            uppercase
                                            leading-none
                                            text-white
                                        "
                                    >
                                        CUSTOMER-FOCUSED
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-3xl
                                            font-bold
                                            uppercase
                                            leading-none
                                            text-white
                                        "
                                    >
                                        TEAMS
                                    </p>

                                    <p
                                        className="
                                            mt-4
                                            text-sm
                                            font-medium
                                            text-white/90
                                        "
                                    >
                                        Prospero Management
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================================
                TABS
            ========================================================== */}
            <div className="border-b border-gray-100 bg-gray-50">

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

                {/* =====================================================
                    SIDEBAR
                ====================================================== */}
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

                    <div className="mb-6 h-[2px] w-11 bg-emerald-500"></div>


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
                        defaultValue="/services/developing-customer-focused-teams"
                        onChange={(event) => {
                            const targetUrl = event.target.value;

                            if (targetUrl) {
                                window.location.href = targetUrl;
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
                    <div className="mt-7 border-t border-gray-200 pt-5">

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


                {/* =====================================================
                    TAB CONTENT
                ====================================================== */}
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

                            <div className="mt-4 h-[1px] w-full bg-gray-200"></div>

                            <div className="mt-6 space-y-5">

                                {/* TUJUAN / PARAGRAF 1 */}
                                <p
                                    className="
                                        max-w-5xl
                                        text-sm
                                        leading-7
                                        text-gray-600
                                        sm:text-base
                                    "
                                >
                                    {text.objectiveText1}
                                </p>

                                {/* TUJUAN / PARAGRAF 2 */}
                                <p
                                    className="
                                        max-w-5xl
                                        text-sm
                                        leading-7
                                        text-gray-600
                                        sm:text-base
                                    "
                                >
                                    {text.objectiveText2}
                                </p>

                            </div>


                            {/* TUJUAN PELATIHAN */}
                            <div className="mt-8">

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

                                <div className="mt-4 h-[1px] w-full bg-gray-200"></div>

                                <p
                                    className="
                                        mt-5
                                        text-sm
                                        leading-7
                                        text-gray-600
                                        sm:text-base
                                    "
                                >
                                    {isEnglish
                                        ? 'Build customer-focused teamwork, strengthen service excellence, and align every function toward customer satisfaction and loyalty.'
                                        : 'Membangun kerjasama tim yang berorientasi pelanggan, memperkuat service excellence, serta menyelaraskan setiap fungsi menuju kepuasan dan loyalitas pelanggan.'}
                                </p>

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

                                <div className="mt-4 h-[1px] w-full bg-gray-200"></div>

                                <div className="mt-5 space-y-3">

                                    {materials.map((material, index) => (
                                        <p
                                            key={index}
                                            className="
                                                text-sm
                                                leading-7
                                                text-gray-600
                                                sm:text-base
                                            "
                                        >
                                            • {material}
                                        </p>
                                    ))}

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

                            <div className="mt-4 h-[1px] w-full bg-gray-200"></div>

                            <div
                                className="
                                    mt-6
                                    grid
                                    gap-5
                                    sm:grid-cols-2
                                    lg:grid-cols-3
                                "
                            >

                                <div
                                    className="
                                        group
                                        w-full
                                        max-w-[280px]
                                    "
                                >

                                    {/* FOTO */}
                                    <a
                                        href="/director"
                                        aria-label="View Ade Ahmad Rozi profile"
                                        className="
                                            block
                                            cursor-pointer
                                        "
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


                                    {/* NAME */}
                                    <div className="mt-4 text-center">

                                        <p
                                            className="
                                                text-base
                                                font-bold
                                                text-gray-800
                                            "
                                        >
                                            Ade Ahmad Rozi
                                        </p>

                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-blue-600
                                            "
                                        >
                                            Founder &amp; Managing Partner HAVPRO Group
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

                            <div className="mt-4 h-[1px] w-full bg-gray-200"></div>

                            <div
                                className="
                                    mt-6
                                    space-y-4
                                "
                            >

                                <p
                                    className="
                                        text-base
                                        leading-8
                                        text-gray-700
                                    "
                                >
                                    - {text.participant1}
                                </p>

                                <p
                                    className="
                                        text-base
                                        leading-8
                                        text-gray-700
                                    "
                                >
                                    - {text.participant2}
                                </p>

                                <p
                                    className="
                                        text-base
                                        leading-8
                                        text-gray-700
                                    "
                                >
                                    - {text.participant3}
                                </p>

                                <p
                                    className="
                                        text-base
                                        leading-8
                                        text-gray-700
                                    "
                                >
                                    - {text.participant4}
                                </p>

                            </div>

                        </div>
                    )}

                </main>

            </div>

        </section>
    );
}

export default DevelopingCustomerFocusedTeams;