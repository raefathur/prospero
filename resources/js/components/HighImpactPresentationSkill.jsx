import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function HighImpactPresentationSkill() {
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
            locationValue: 'In-House / Sesuai kebutuhan klien',

            register: 'Registrasi',
            registerNow: 'Daftar Sekarang',

            overviewTitle: 'Ringkasan',

            summary:
                'Program High Impact Presentation Skill membantu peserta meningkatkan kemampuan presentasi yang efektif di dalam pekerjaan, mengatasi berbagai hambatan saat melakukan presentasi, menghadapi peserta yang sulit secara lebih efektif, serta mendesain dan menyampaikan presentasi secara sistematis dan persuasif.',

            objectivesTitle: 'Tujuan Pelatihan',

            objective1:
                'Memahami pentingnya kemampuan presentasi yang efektif di dalam pekerjaan;',

            objective2:
                'Memahami teknik-teknik dalam mengatasi hambatan saat melakukan presentasi;',

            objective3:
                'Mampu mengatasi situasi dan menghadapi peserta yang sulit di saat presentasi secara lebih efektif;',

            objective4:
                'Meningkatkan strategi dalam mendesain dan menyampaikan presentasi secara sistematis dan persuasif.',

            materialsTitle: 'Materi Pelatihan',

            material1:
                'Mempersiapkan presentasi;',

            material2:
                'Menyampaikan presentasi;',

            expertsTitle: 'Fasilitator',

            participantsTitle: 'Target Peserta',

            participant1:
                'Direksi dan pimpinan organisasi',

            participant2:
                'Manajer dan supervisor',

            participant3:
                'Profesional yang membutuhkan kemampuan presentasi dalam pekerjaan',

            participant4:
                'Karyawan yang sering melakukan presentasi di lingkungan kerja',
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
            locationValue: 'In-House / Based on client requirements',

            register: 'Registration',
            registerNow: 'Register Now',

            overviewTitle: 'Overview',

            summary:
                'The High Impact Presentation Skill program helps participants improve effective presentation skills at work, overcome various presentation challenges, handle difficult participants more effectively, and design and deliver presentations systematically and persuasively.',

            objectivesTitle: 'Training Objectives',

            objective1:
                'Understand the importance of effective presentation skills in the workplace;',

            objective2:
                'Understand techniques for overcoming challenges when delivering presentations;',

            objective3:
                'Be able to handle situations and difficult participants during presentations more effectively;',

            objective4:
                'Improve strategies for designing and delivering presentations systematically and persuasively.',

            materialsTitle: 'Training Materials',

            material1:
                'Preparing a presentation;',

            material2:
                'Delivering a presentation;',

            expertsTitle: 'Facilitator',

            participantsTitle: 'Target Participants',

            participant1:
                'Directors and organizational leaders',

            participant2:
                'Managers and supervisors',

            participant3:
                'Professionals who require presentation skills in their work',

            participant4:
                'Employees who frequently deliver presentations in the workplace',
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

    const objectives = [
        text.objective1,
        text.objective2,
        text.objective3,
        text.objective4,
    ];

    const materials = [
        text.material1,
        text.material2,
    ];

    return (
        <section
            id="high-impact-presentation-skill"
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
                                    {t('navbar.presentation')}
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
                                {t('navbar.presentation')}
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
                                        HIGH IMPACT
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
                                        PRESENTATION
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
                                        SKILLS
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
                        defaultValue="/services/high-impact-presentation-skill"
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

                                <div className="mt-4 space-y-3">

                                    {objectives.map((objective, index) => (
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
                                    ))}

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

export default HighImpactPresentationSkill;