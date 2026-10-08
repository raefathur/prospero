import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DiagnosingEmployeePerformanceManagementEffectiveness() {
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
            overviewTitle: 'Ringkasan',
            overviewTitle: 'Overview',

            programs: 'PROGRAMS',
            programLabel: 'Program',
            durationLabel: 'Durasi',
            durationValue: '2 hari',
            locationLabel: 'Lokasi',
            locationValue: 'In-House / Sesuai kebutuhan klien',
            heroDescription:
                'Program pelatihan ini membantu peserta meningkatkan efektivitas sistem manajemen kinerja pegawai, menghubungkan kinerja dengan capaian organisasi, memilih alat ukur yang tepat, dan membangun proses dokumentasi kinerja yang sistematis.',
            register: 'Registrasi',
            registerNow: 'Daftar Sekarang',
            syllabus: 'Unduh Silabus',
            shareThis: 'Share This',

            overviewTitle: 'Ringkasan',
            summaryTitle: 'Tujuan Pelatihan',
            summary:
                'Program Diagnosing Employee Performance Management Effectiveness membantu peserta memahami dan meningkatkan efektivitas sistem manajemen kinerja pegawai, mulai dari eksekusi Rencana Strategi (RENSTRA), keterkaitan kinerja dengan capaian organisasi, pemilihan alat ukur yang tepat, hingga dokumentasi capaian kinerja secara sistematis.',

            focus1Title: '1. Peserta mampu mengeksekusi Rencana Strategi (RENSTRA) Organisasi dengan baik',
            focus1:
                'Peserta mampu mengeksekusi Rencana Strategi (RENSTRA) Organisasi dengan baik.',

            focus2Title: '2. Peserta mampu menghubungkan antara kinerja dan capaian kinerja',
            focus2:
                'Peserta mampu menghubungkan antara kinerja dan capaian kinerja agar capaian kinerja organisasi tercapai dengan baik.',

            focus3Title: '3. Peserta mampu menemukan alat ukur yang tepat dalam mengukur capaian kinerja pegawai',
            focus3:
                'Peserta mampu menemukan alat ukur yang tepat dalam mengukur capaian kinerja pegawai.',

            expertsTitle: 'Fasilitator',
            expertDescription:
                'Program difasilitasi oleh profesional dengan pengalaman dalam performance management, organizational development, dan pengembangan sistem manajemen kinerja.',

            participantsTitle: 'Target Peserta',
            participant1:
                'Direksi dan pimpinan organisasi',
            participant2:
                'Manajer dan pemimpin unit kerja',
            participant3:
                'Profesional yang terlibat dalam perencanaan strategis',
            participant4:
                'Tim yang bertanggung jawab terhadap implementasi strategi',
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
            heroDescription:
                'This training program helps participants improve employee performance management effectiveness, link performance with organizational achievement, select appropriate performance measures, and establish a systematic performance documentation process.',
            register: 'Registration',
            registerNow: 'Register Now',
            syllabus: 'Download Syllabus',
            shareThis: 'Share This',

            overviewTitle: 'Overview',
            summaryTitle: 'Training Objectives',
            summary:
                'The Diagnosing Employee Performance Management Effectiveness program helps participants understand and improve employee performance management, from executing the organization’s strategic plan (RENSTRA), linking performance with organizational achievements, selecting appropriate performance measures, to systematically documenting performance results.',

            focus1Title: '1. Execute the Organization’s Strategic Plan (RENSTRA) Effectively',
            focus1:
                'Participants are able to execute the organization’s Strategic Plan (RENSTRA) effectively.',

            focus2Title: '2. Link Performance with Performance Achievement',
            focus2:
                'Participants are able to link performance with performance achievement so that organizational performance targets can be achieved effectively.',

            focus3Title: '3. Identify Appropriate Measures for Employee Performance Achievement',
            focus3:
                'Participants are able to identify appropriate measures for assessing employee performance achievement.',

            expertsTitle: 'Facilitator',
            expertDescription:
                'The program is facilitated by professionals with experience in performance management, organizational development, and performance management systems.',

            participantsTitle: 'Target Participants',
            participant1:
                'Directors and organizational leaders',
            participant2:
                'Managers and business unit leaders',
            participant3:
                'Professionals involved in strategic planning',
            participant4:
                'Teams responsible for strategy implementation',
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

    return (
        <section
            id="diagnosing-employee-performance-management-effectiveness"
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
                                    {t('navbar.diagnosing')}
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
                                {t('navbar.diagnosing')}
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
                                {text.heroDescription}
                            </p>


                            {/* BUTTONS */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    flex-col
                                    gap-3
                                    sm:flex-row
                                "
                            >

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
                                        Diagnosing
                                    </p>

                                    <p
                                        className="
                                            text-3xl
                                            font-bold
                                            uppercase
                                            leading-none
                                            text-white
                                        "
                                    >
                                        Employee
                                    </p>

                                    <p
                                        className="
                                            text-2xl
                                            font-bold
                                            uppercase
                                            leading-tight
                                            text-white
                                        "
                                    >
                                        Performance Management
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-2xl
                                            font-bold
                                            uppercase
                                            leading-tight
                                            text-white
                                        "
                                    >
                                        Effectiveness
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
                        w-full
                        grid
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
                        defaultValue="/services/diagnosing-employee-performance-management-effectiveness"
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


                            {/* TRAINING OBJECTIVES */}
                            <div className="mt-8">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {text.summaryTitle}
                                </h3>

                                <div className="mt-4 space-y-3">

                                    <div
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
                                                font-semibold
                                                leading-6
                                                text-gray-800
                                                sm:text-base
                                            "
                                        >
                                            {text.focus1Title}
                                        </p>
                                    </div>

                                    <div
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
                                                font-semibold
                                                leading-6
                                                text-gray-800
                                                sm:text-base
                                            "
                                        >
                                            {text.focus2Title}
                                        </p>
                                    </div>

                                    <div
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
                                                font-semibold
                                                leading-6
                                                text-gray-800
                                                sm:text-base
                                            "
                                        >
                                            {text.focus3Title}
                                        </p>
                                    </div>

                                    <div
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
                                                font-semibold
                                                leading-6
                                                text-gray-800
                                                sm:text-base
                                            "
                                        >
                                            4. {isEnglish
                                                ? 'Systematically Document Performance Achievement'
                                                : 'Peserta mampu membuat capaian kinerja secara sistematis dan dapat terdokumentasi dengan baik'}
                                        </p>
                                    </div>

                                </div>

                            </div>


                            {/* TRAINING MATERIALS */}
                            <div className="mt-10">

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-gray-900
                                        sm:text-xl
                                    "
                                >
                                    {isEnglish
                                        ? 'Training Materials'
                                        : 'Materi Pelatihan'}
                                </h3>

                                <div className="mt-4 h-[1px] w-full bg-gray-200"></div>

                                <div
                                    className="
                                        mt-5
                                        space-y-3
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Framework of the employee and organizational performance management system'
                                            : 'Framework SMK organisasi dan pegawai'}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Causes of employee performance not being correlated with organizational performance'
                                            : 'Penyebab kinerja pegawai tidak berkorelasi terhadap kinerja organisasi'}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Framework for diagnosing the effectiveness of the employee performance management system'
                                            : 'Kerangka diagnosis efektivitas SMK pegawai'}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Performance-based incentives (Pay for Performance)'
                                            : 'Insentif berbasis kinerja (Pay for Performance)'}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Electronic performance management application (E-Performance)'
                                            : 'Aplikasi manajemen kinerja elektronik (E-Performance)'}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Guidelines for developing recommendations for improving the performance management system'
                                            : 'Panduan menyusun rekomendasi penyempurnaan SMK'}
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            leading-7
                                            text-gray-600
                                            sm:text-base
                                        "
                                    >
                                        • {isEnglish
                                            ? 'Case Study: Companies that have successfully transformed their employee performance management system'
                                            : 'Studi Kasus: Perusahaan yang telah berhasil melakukan transformasi SMK pegawai'}
                                    </p>

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

                                    {/* FOTO / LINK KE HALAMAN DIRECTOR */}
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

                                            {/* SOFT OVERLAY */}
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

export default DiagnosingEmployeePerformanceManagementEffectiveness;