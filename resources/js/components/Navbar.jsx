import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [activeAboutItem, setActiveAboutItem] = useState('about');
    const [activeServiceItem, setActiveServiceItem] = useState('strategic');

    const closeTimer = useRef(null);

    const isEnglish = i18n.language.startsWith('en');
    const currentLanguage = isEnglish ? 'EN' : 'ID';

    const openMenu = (menu) => {
        clearTimeout(closeTimer.current);

        setActiveMenu(menu);
        setLanguageOpen(false);
    };

    const scheduleClose = () => {
        clearTimeout(closeTimer.current);

        closeTimer.current = setTimeout(() => {
            setActiveMenu(null);
        }, 180);
    };

    const cancelClose = () => {
        clearTimeout(closeTimer.current);
    };

    const toggleMenu = (menu) => {
        clearTimeout(closeTimer.current);

        if (activeMenu === menu) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menu);
        }

        setLanguageOpen(false);
    };

    const toggleLanguage = () => {
        clearTimeout(closeTimer.current);

        setLanguageOpen((current) => !current);
        setActiveMenu(null);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLanguageOpen(false);
        setActiveMenu(null);
    };

    useEffect(() => {
        return () => {
            clearTimeout(closeTimer.current);
        };
    }, []);

    return (
        <header
            className="
                sticky top-0 z-[100]
                w-full
                bg-white/95
                backdrop-blur-md
                border-b border-gray-200/70
                shadow-sm
            "
        >

            <div
                className="max-w-7xl mx-auto px-6 lg:px-8"
                onMouseLeave={scheduleClose}
                onMouseEnter={cancelClose}
            >

                {/* =====================================================
                    MAIN NAVBAR
                ====================================================== */}

                <div className="h-20 flex items-center justify-between">

                    {/* LOGO */}
                    <a
                        href="/"
                        className="
                            flex
                            items-center
                            shrink-0
                        "
                    >
                        <img
                            src="/images/logo/navlogo.png"
                            alt="Prospero"
                            className="
                                h-auto
                                w-[180px]
                                object-contain
                            "
                        />
                    </a>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <nav className="hidden lg:flex items-center gap-8">

                        {/* BERANDA */}
                        <a
                            href="/"
                            className="
                                relative
                                flex
                                items-center
                                h-20
                                text-gray-800
                                font-semibold
                                transition-colors
                                duration-200
                                hover:text-blue-600
                            "
                        >
                            {t('navbar.home')}
                        </a>


                        {/* TENTANG KAMI */}
                        <button
                            type="button"
                            onMouseEnter={() => openMenu('about')}
                            onClick={() => toggleMenu('about')}
                            className={`
                                relative
                                flex
                                items-center
                                gap-2
                                h-20
                                text-gray-600
                                transition-colors
                                duration-200
                                ${
                                    activeMenu === 'about'
                                        ? 'text-blue-600'
                                        : 'hover:text-blue-600'
                                }
                            `}
                        >
                            {t('navbar.about')}

                            <svg
                                className={`
                                    w-4 h-4
                                    transition-transform
                                    duration-300
                                    ${
                                        activeMenu === 'about'
                                            ? 'rotate-180'
                                            : ''
                                    }
                                `}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>


                        {/* =================================================
                            LAYANAN
                        ================================================== */}

                        <button
                            type="button"
                            onMouseEnter={() => openMenu('services')}
                            onClick={() => toggleMenu('services')}
                            className={`
                                relative
                                flex
                                items-center
                                gap-2
                                h-20
                                text-gray-600
                                transition-colors
                                duration-200
                                ${
                                    activeMenu === 'services'
                                        ? 'text-blue-600'
                                        : 'hover:text-blue-600'
                                }
                            `}
                        >
                            {t('navbar.services')}

                            <svg
                                className={`
                                    w-4 h-4
                                    transition-transform
                                    duration-300
                                    ${
                                        activeMenu === 'services'
                                            ? 'rotate-180'
                                            : ''
                                    }
                                `}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>


                        {/* =================================================
                            BLOG
                        ================================================== */}

                        <button
                            type="button"
                            onMouseEnter={() => openMenu('blog')}
                            onClick={() => toggleMenu('blog')}
                            className={`
                                relative
                                flex
                                items-center
                                gap-2
                                h-20
                                text-gray-600
                                transition-colors
                                duration-200
                                ${
                                    activeMenu === 'blog'
                                        ? 'text-blue-600'
                                        : 'hover:text-blue-600'
                                }
                            `}
                        >
                            {t('navbar.blog')}

                            <svg
                                className={`
                                    w-4 h-4
                                    transition-transform
                                    duration-300
                                    ${
                                        activeMenu === 'blog'
                                            ? 'rotate-180'
                                            : ''
                                    }
                                `}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>


                        {/* =================================================
                            LANGUAGE
                        ================================================== */}

                        <div
                            className="relative flex items-center h-20"
                            onMouseEnter={() => {
                                cancelClose();
                                setLanguageOpen(true);
                                setActiveMenu(null);
                            }}
                        >

                            <button
                                type="button"
                                onClick={toggleLanguage}
                                className={`
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-medium
                                    transition-colors
                                    duration-200
                                    ${
                                        languageOpen
                                            ? 'text-blue-600'
                                            : 'text-gray-700 hover:text-blue-600'
                                    }
                                `}
                                aria-label="Pilih bahasa"
                            >

                                {/* Language Icon */}
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.8"
                                        d="M4 5h7M7.5 3v2M6 5c0 4.5-1.5 7.2-4 9M4 8c1.2 2 2.7 3.5 5 4.8M13 19l4-10 4 10M14.5 16h5"
                                    />
                                </svg>

                                <span>{currentLanguage}</span>

                                <svg
                                    className={`
                                        w-4 h-4
                                        transition-transform
                                        duration-300
                                        ${
                                            languageOpen
                                                ? 'rotate-180'
                                                : ''
                                        }
                                    `}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>

                            </button>


                            {/* LANGUAGE DROPDOWN */}
                            <div
                                className={`
                                    absolute
                                    right-0
                                    top-full
                                    mt-2
                                    w-52
                                    bg-white
                                    rounded-2xl
                                    border border-gray-100
                                    shadow-xl
                                    overflow-hidden
                                    origin-top-right
                                    transform
                                    transition-all
                                    duration-300
                                    ease-out
                                    ${
                                        languageOpen
                                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                                            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                                    }
                                `}
                            >

                                <button
                                    type="button"
                                    onClick={() => changeLanguage('id')}
                                    className={`
                                        w-full
                                        text-left
                                        px-5
                                        py-4
                                        transition-colors
                                        duration-200
                                        ${
                                            !isEnglish
                                                ? 'bg-gray-50 text-gray-900 font-semibold'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    {t('language.indonesian')}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => changeLanguage('en')}
                                    className={`
                                        w-full
                                        text-left
                                        px-5
                                        py-4
                                        transition-colors
                                        duration-200
                                        ${
                                            isEnglish
                                                ? 'bg-gray-50 text-gray-900 font-semibold'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    {t('language.english')}
                                </button>

                            </div>

                        </div>


                        {/* =================================================
                            CONTACT BUTTON
                        ================================================== */}

                        <a
                            href="contact"
                            className="
                                bg-green-500
                                hover:bg-green-600
                                text-white
                                px-6
                                py-3
                                rounded-lg
                                font-semibold
                                transition
                                duration-200
                                shadow-sm
                                hover:shadow-md
                            "
                        >
                            {t('navbar.contact')}
                        </a>

                    </nav>


                    {/* =================================================
                        MOBILE BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        onClick={() => {
                            setMobileOpen((current) => !current);
                            setActiveMenu(null);
                            setLanguageOpen(false);
                        }}
                        className="
                            lg:hidden
                            text-gray-700
                        "
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                </div>


                {/* =====================================================
                    MOBILE MENU
                ====================================================== */}

                {mobileOpen && (
                    <nav className="lg:hidden pb-6 border-t border-gray-100 pt-4">

                        <div className="space-y-2">

                            <a
                                href="/"
                                className="
                                    block
                                    py-3
                                    text-gray-800
                                    font-semibold
                                "
                            >
                                {t('navbar.home')}
                            </a>


                            {/* MOBILE ABOUT */}
                            <div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveMenu(
                                            activeMenu === 'about'
                                                ? null
                                                : 'about'
                                        )
                                    }
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        py-3
                                        text-gray-600
                                    "
                                >
                                    {t('navbar.about')}

                                    <svg
                                        className={`
                                            w-4 h-4
                                            transition-transform
                                            duration-300
                                            ${
                                                activeMenu === 'about'
                                                    ? 'rotate-180'
                                                    : ''
                                            }
                                        `}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`
                                        overflow-hidden
                                        transition-all
                                        duration-300
                                        ${
                                            activeMenu === 'about'
                                                ? 'max-h-96 opacity-100'
                                                : 'max-h-0 opacity-0'
                                        }
                                    `}
                                >
                                    <div className="pl-4 pb-3 space-y-2">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveAboutItem('about')
                                            }
                                            className={
                                                activeAboutItem === 'about'
                                                    ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                    : 'block w-full py-2 text-left text-sm text-gray-500 hover:text-blue-600'
                                            }
                                        >
                                            {t('navbar.aboutProspero')}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setActiveAboutItem('teams')
                                            }
                                            className={
                                                activeAboutItem === 'teams'
                                                    ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                    : 'block w-full py-2 text-left text-sm text-gray-500 hover:text-blue-600'
                                            }
                                        >
                                            {t('navbar.ourTeams')}
                                        </button>

                                        {activeAboutItem === 'teams' && (
                                            <div className="ml-3 border-l border-gray-200 pl-4 space-y-1">
                                                <a
                                                    href="/director"
                                                    className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                                                >
                                                    {t('navbar.director')}
                                                </a>

                                                <a
                                                    href="/prospero-teams"
                                                    className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                                                >
                                                    {t('navbar.prosperoTeams')}
                                                </a>
                                            </div>
                                        )}

                                    </div>
                                </div>

                            </div>


                            {/* MOBILE SERVICES */}
                            <div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveMenu(
                                            activeMenu === 'services'
                                                ? null
                                                : 'services'
                                        )
                                    }
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        py-3
                                        text-gray-600
                                    "
                                >
                                    {t('navbar.services')}

                                    <svg
                                        className={`
                                            w-4 h-4
                                            transition-transform
                                            duration-300
                                            ${
                                                activeMenu === 'services'
                                                    ? 'rotate-180'
                                                    : ''
                                            }
                                        `}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`
                                        overflow-hidden
                                        transition-all
                                        duration-300
                                        ${
                                            activeMenu === 'services'
                                                ? 'max-h-[1400px] opacity-100'
                                                : 'max-h-0 opacity-0'
                                        }
                                    `}
                                >
                                    <div className="pl-4 pb-3 space-y-4">

                                        {/* CATEGORY 1 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('strategic')}
                                                className={
                                                    activeServiceItem === 'strategic'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.strategic')}
                                            </button>

                                            {activeServiceItem === 'strategic' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/strategic-plan" className="block py-2 text-sm text-gray-500 hover:text-blue-600">
                                                        {t('navbar.strategicPlan')}
                                                    </a>
                                                    <a href="/services/diagnosing-employee-performance-management-effectiveness" className="block py-2 text-sm text-gray-500 hover:text-blue-600">
                                                        {t('navbar.diagnosing')}
                                                    </a>
                                                    <a href="/services/strategy-map-kpi-bsc" className="block py-2 text-sm text-gray-500 hover:text-blue-600">
                                                        {t('navbar.strategyMap')}
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY 2 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('hr')}
                                                className={
                                                    activeServiceItem === 'hr'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.hr')}
                                            </button>

                                            {activeServiceItem === 'hr' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/competency-based-hrm" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.competencyHrm')}</a>
                                                    <a href="/services/hr-for-non-hr" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.hrNonHr')}</a>
                                                    <a href="/services/human-resource-management-essentials" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.hrEssentials')}</a>
                                                    <a href="/services/talent-management" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.talent')}</a>
                                                    <a href="/services/developing-standard-operation-procedure" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.sop')}</a>
                                                    <a href="/services/organizational-development" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.orgDev')}</a>
                                                    <a href="/services/coaching-counseling" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.coaching')}</a>
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY 3 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('leadership')}
                                                className={
                                                    activeServiceItem === 'leadership'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.leadership')}
                                            </button>

                                            {activeServiceItem === 'leadership' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/effective-leadership" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.effectiveLeadership')}</a>
                                                    <a href="/services/supervisory-development-program" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.supervisory')}</a>
                                                    <a href="/services/developing-customer-focused-teams" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.customerTeams')}</a>
                                                    <a href="/services/developing-execution-skills" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.execution')}</a>
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY 4 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('managerial')}
                                                className={
                                                    activeServiceItem === 'managerial'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.managerial')}
                                            </button>

                                            {activeServiceItem === 'managerial' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/5s-workplace" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.fiveS')}</a>
                                                    <a href="/services/high-impact-presentation-skill" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.presentation')}</a>
                                                    <a href="/services/communication-skill" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.communication')}</a>
                                                    <a href="/services/business-management-research" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.businessResearch')}</a>
                                                    <a href="/services/improving-project-management-skill" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.projectManagement')}</a>
                                                    <a href="/services/fundamental-of-marketing" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.marketing')}</a>
                                                    <a href="/services/problem-solving-decision-making" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.problemSolving')}</a>
                                                    <a href="/services/negotiation-skill-for-business" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.negotiation')}</a>
                                                    <a href="/services/feasibility-study" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.feasibility')}</a>
                                                    <a href="/services/business-plan" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.businessPlan')}</a>
                                                    <a href="/services/finance-for-non-finance" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.finance')}</a>
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY 5 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('tms')}
                                                className={
                                                    activeServiceItem === 'tms'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.tms')}
                                            </button>

                                            {activeServiceItem === 'tms' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/developing-training-module" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.trainingModule')}</a>
                                                    <a href="/services/designing-training-program" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.designTraining')}</a>
                                                    <a href="/services/training-plan-development" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.trainingPlan')}</a>
                                                    <a href="/services/training-impact-evaluation" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.trainingImpact')}</a>
                                                    <a href="/services/training-management-system" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.tms')}</a>
                                                    <a href="/services/training-for-the-trainers" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.trainers')}</a>
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY 6 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('personal')}
                                                className={
                                                    activeServiceItem === 'personal'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.personal')}
                                            </button>

                                            {activeServiceItem === 'personal' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/time-stress-management" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.timeStress')}</a>
                                                    <a href="/services/personal-development" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.personalDevelopment')}</a>
                                                    <a href="/services/work-life-balance" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.workLife')}</a>
                                                    <a href="/services/effective-followership" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.followership')}</a>
                                                </div>
                                            )}
                                        </div>

                                        {/* CATEGORY 7 */}
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => setActiveServiceItem('retirement')}
                                                className={
                                                    activeServiceItem === 'retirement'
                                                        ? 'block w-full py-2 text-left text-sm font-semibold text-blue-600'
                                                        : 'block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600'
                                                }
                                            >
                                                {t('navbar.retirement')}
                                            </button>

                                            {activeServiceItem === 'retirement' && (
                                                <div className="pl-4 space-y-1">
                                                    <a href="/services/persiapan-pensiun-1-day" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.retire1')}</a>
                                                    <a href="/services/persiapan-pensiun-2-day" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.retire2')}</a>
                                                    <a href="/services/persiapan-pensiun-3-day" className="block py-2 text-sm text-gray-500 hover:text-blue-600">{t('navbar.retire3')}</a>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>

                            </div>


                            {/* MOBILE BLOG */}
                            <div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveMenu(
                                            activeMenu === 'blog'
                                                ? null
                                                : 'blog'
                                        )
                                    }
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        py-3
                                        text-gray-600
                                    "
                                >
                                    {t('navbar.blog')}

                                    <svg
                                        className={`
                                            w-4 h-4
                                            transition-transform
                                            duration-300
                                            ${
                                                activeMenu === 'blog'
                                                    ? 'rotate-180'
                                                    : ''
                                            }
                                        `}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>

                                </button>

                                <div
                                    className={`
                                        overflow-hidden
                                        transition-all
                                        duration-300
                                        ${
                                            activeMenu === 'blog'
                                                ? 'max-h-96 opacity-100'
                                                : 'max-h-0 opacity-0'
                                        }
                                    `}
                                >
                                    <div className="pl-4 pb-3 space-y-2">

                                        <a
                                            href="#blog"
                                            className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                                        >
                                            {t('megaBlog.articles')}
                                        </a>

                                        <a
                                            href="#blog"
                                            className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                                        >
                                            {t('megaBlog.news')}
                                        </a>

                                        <a
                                            href="#blog"
                                            className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                                        >
                                            {t('megaBlog.insight')}
                                        </a>

                                    </div>
                                </div>

                            </div>


                            {/* MOBILE LANGUAGE */}
                            <div>

                                <button
                                    type="button"
                                    onClick={toggleLanguage}
                                    className="
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        py-3
                                        text-gray-600
                                    "
                                >
                                    <span className="flex items-center gap-2">

                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.8"
                                                d="M4 5h7M7.5 3v2M6 5c0 4.5-1.5 7.2-4 9M4 8c1.2 2 2.7 3.5 5 4.8M13 19l4-10 4 10M14.5 16h5"
                                            />
                                        </svg>

                                        {currentLanguage}

                                    </span>

                                    <svg
                                        className={`
                                            w-4 h-4
                                            transition-transform
                                            duration-300
                                            ${
                                                languageOpen
                                                    ? 'rotate-180'
                                                    : ''
                                            }
                                        `}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>

                                </button>

                                <div
                                    className={`
                                        overflow-hidden
                                        transition-all
                                        duration-300
                                        ${
                                            languageOpen
                                                ? 'max-h-40 opacity-100'
                                                : 'max-h-0 opacity-0'
                                        }
                                    `}
                                >
                                    <div className="pl-4 pb-3">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                changeLanguage('id')
                                            }
                                            className="
                                                block
                                                w-full
                                                text-left
                                                py-2
                                                text-sm
                                                text-gray-500
                                                hover:text-blue-600
                                            "
                                        >
                                            {t('language.indonesian')}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                changeLanguage('en')
                                            }
                                            className="
                                                block
                                                w-full
                                                text-left
                                                py-2
                                                text-sm
                                                text-gray-500
                                                hover:text-blue-600
                                            "
                                        >
                                            {t('language.english')}
                                        </button>

                                    </div>
                                </div>

                            </div>


                            {/* MOBILE CONTACT */}
                            <a
                                href="contact"
                                className="
                                    inline-flex
                                    mt-3
                                    bg-green-500
                                    hover:bg-green-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-lg
                                    font-semibold
                                "
                            >
                                {t('navbar.contact')}
                            </a>

                        </div>

                    </nav>
                )}

            </div>


            {/* =========================================================
                MEGA MENU : TENTANG KAMI
            ========================================================== */}

            <div
                className={`
                    hidden
                    lg:block
                    absolute
                    left-0
                    right-0
                    top-full
                    z-[90]
                    bg-white
                    border-t
                    border-gray-100
                    shadow-xl
                    transition-all
                    duration-300
                    ease-out
                    ${
                        activeMenu === 'about'
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-2 invisible'
                    }
                `}
                onMouseEnter={() => {
                    cancelClose();
                    openMenu('about');
                }}
                onMouseLeave={scheduleClose}
            >

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

                    <div className="grid grid-cols-[280px_1fr] gap-8 min-h-[260px]">

                        {/* LEFT MENU */}
                        <div className="border-r border-gray-200 pr-6">

                            <div className="space-y-1">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveAboutItem('about')
                                    }
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeAboutItem === 'about'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>
                                        {t('navbar.aboutProspero')}
                                    </span>

                                    <span className="text-lg">
                                        →
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveAboutItem('teams')
                                    }
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeAboutItem === 'teams'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>
                                        {t('navbar.ourTeams')}
                                    </span>

                                    <span className="text-lg">
                                        →
                                    </span>
                                </button>

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="pt-2">

                            {activeAboutItem === 'about' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.aboutProspero')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.aboutDescription')}
                                    </p>

                                    <a
                                        href="/about"
                                        className="inline-flex mt-6 text-blue-600 font-semibold hover:text-blue-700"
                                    >
                                        {t('navbar.learnMore')}
                                        {' '}→
                                    </a>
                                </div>
                            )}

                            {activeAboutItem === 'teams' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.ourTeams')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.teamsDescription')}
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-5 max-w-3xl">

                                        <a
                                            href="/director"
                                            className="group flex items-center justify-between text-gray-600 hover:text-blue-600"
                                        >
                                            <span>
                                                {t('navbar.director')}
                                            </span>

                                            <span className="text-green-500 text-xl transition-transform group-hover:translate-x-1">
                                                →
                                            </span>
                                        </a>

                                        <a
                                            href="/prospero-teams"
                                            className="group flex items-center justify-between text-gray-600 hover:text-blue-600"
                                        >
                                            <span>
                                                {t('navbar.prosperoTeams')}
                                            </span>

                                            <span className="text-green-500 text-xl transition-transform group-hover:translate-x-1">
                                                →
                                            </span>
                                        </a>

                                    </div>
                                </div>
                            )}

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================================
                MEGA MENU : LAYANAN
            ========================================================== */}

            <div
                className={`
                    hidden
                    lg:block
                    absolute
                    left-0
                    right-0
                    top-full
                    z-[90]
                    bg-white
                    border-t
                    border-gray-100
                    shadow-xl
                    transition-all
                    duration-300
                    ease-out
                    ${
                        activeMenu === 'services'
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-2 invisible'
                    }
                `}
                onMouseEnter={() => {
                    cancelClose();
                    openMenu('services');
                }}
                onMouseLeave={scheduleClose}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

                    <div className="grid grid-cols-[320px_1fr] gap-8">

                        {/* LEFT MENU - TAB KATEGORI */}
                        <div className="border-r border-gray-200 pr-6">
                            <div className="space-y-1">

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('strategic')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'strategic'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.strategic')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('hr')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'hr'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.hr')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('leadership')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'leadership'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.leadership')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('managerial')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'managerial'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.managerial')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('tms')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'tms'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.tms')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('personal')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'personal'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.personal')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveServiceItem('retirement')}
                                    className={`
                                        w-full
                                        flex
                                        items-center
                                        justify-between
                                        px-4
                                        py-4
                                        rounded-lg
                                        text-left
                                        transition
                                        ${
                                            activeServiceItem === 'retirement'
                                                ? 'bg-blue-50 text-blue-600 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    <span>{t('navbar.retirement')}</span>
                                    <span className="text-lg">→</span>
                                </button>

                            </div>
                        </div>


                        {/* RIGHT CONTENT - HANYA SATU KATEGORI AKTIF */}
                        <div className="pt-2">

                            {/* CATEGORY 1 */}
                            {activeServiceItem === 'strategic' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.strategic')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.strategicDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/strategic-plan" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors">
                                            <span>{t('navbar.strategicPlan')}</span>
                                            <span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span>
                                        </a>

                                        <a href="/services/diagnosing-employee-performance-management-effectiveness" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors">
                                            <span>{t('navbar.diagnosing')}</span>
                                            <span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span>
                                        </a>

                                        <a href="/services/strategy-map-kpi-bsc" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors">
                                            <span>{t('navbar.strategyMap')}</span>
                                            <span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORY 2 */}
                            {activeServiceItem === 'hr' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.hr')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.hrDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/competency-based-hrm" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.competencyHrm')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/hr-for-non-hr" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.hrNonHr')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/human-resource-management-essentials" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.hrEssentials')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/talent-management" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.talent')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/developing-standard-operation-procedure" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.sop')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/organizational-development" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.orgDev')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/coaching-counseling" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.coaching')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORY 3 */}
                            {activeServiceItem === 'leadership' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.leadership')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.leadershipDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/effective-leadership" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.effectiveLeadership')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/supervisory-development-program" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.supervisory')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/developing-customer-focused-teams" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.customerTeams')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/developing-execution-skills" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.execution')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORY 4 */}
                            {activeServiceItem === 'managerial' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.managerial')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.managerialDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/5s-workplace" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.fiveS')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/high-impact-presentation-skill" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.presentation')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/communication-skill" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.communication')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/business-management-research" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.businessResearch')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/improving-project-management-skill" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.projectManagement')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/fundamental-of-marketing" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.marketing')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/problem-solving-decision-making" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.problemSolving')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/negotiation-skill-for-business" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.negotiation')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/feasibility-study" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.feasibility')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/business-plan" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.businessPlan')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/finance-for-non-finance" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.finance')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORY 5 */}
                            {activeServiceItem === 'tms' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.tms')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.tmsDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/developing-training-module" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.trainingModule')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/designing-training-program" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.designTraining')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/training-plan-development" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.trainingPlan')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/training-impact-evaluation" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.trainingImpact')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/training-management-system" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.tms')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/training-for-the-trainers" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.trainers')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORY 6 */}
                            {activeServiceItem === 'personal' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.personal')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.personalDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/time-stress-management" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.timeStress')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/personal-development" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.personalDevelopment')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/work-life-balance" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.workLife')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/effective-followership" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.followership')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                    </div>
                                </div>
                            )}

                            {/* CATEGORY 7 */}
                            {activeServiceItem === 'retirement' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-blue-600">
                                        {t('navbar.retirement')}
                                    </h3>

                                    <p className="mt-4 max-w-4xl text-gray-500 leading-7">
                                        {t('navbar.retirementDesc')}
                                    </p>

                                    <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
                                        <a href="/services/persiapan-pensiun-1-day" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.retire1')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/persiapan-pensiun-2-day" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.retire2')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                        <a href="/services/persiapan-pensiun-3-day" className="group flex items-center justify-between gap-4 text-gray-600 hover:text-blue-600 transition-colors"><span>{t('navbar.retire3')}</span><span className="shrink-0 text-green-500 text-xl transition-transform group-hover:translate-x-1">→</span></a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>


            {/* =========================================================
                MEGA MENU : BLOG
            ========================================================== */}

            <div
                className={`
                    hidden
                    lg:block
                    absolute
                    left-0
                    right-0
                    top-full
                    z-[90]
                    bg-white
                    border-t
                    border-gray-100
                    shadow-xl
                    transition-all
                    duration-300
                    ease-out
                    ${
                        activeMenu === 'blog'
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 -translate-y-2 invisible'
                    }
                `}
                onMouseEnter={() => {
                    cancelClose();
                    openMenu('blog');
                }}
                onMouseLeave={scheduleClose}
            >

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">

                    <div className="grid grid-cols-[280px_1fr] gap-8 min-h-[300px]">

                        {/* LEFT */}
                        <div className="border-r border-gray-200 pr-6">

                            <a
                                href="#blog"
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-4
                                    rounded-lg
                                    bg-blue-50
                                    text-blue-600
                                    font-medium
                                "
                            >
                                <span>
                                    {t('megaBlog.articles')}
                                </span>

                                <span>→</span>
                            </a>


                            <a
                                href="#blog"
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-4
                                    rounded-lg
                                    text-gray-700
                                    hover:bg-gray-50
                                    hover:text-blue-600
                                    transition
                                "
                            >
                                <span>
                                    {t('megaBlog.news')}
                                </span>

                                <span>→</span>
                            </a>


                            <a
                                href="#blog"
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-4
                                    rounded-lg
                                    text-gray-700
                                    hover:bg-gray-50
                                    hover:text-blue-600
                                    transition
                                "
                            >
                                <span>
                                    {t('megaBlog.insight')}
                                </span>

                                <span>→</span>
                            </a>

                        </div>


                        {/* RIGHT */}
                        <div className="pt-2">

                            <h3 className="
                                text-2xl
                                font-bold
                                text-blue-600
                            ">
                                {t('megaBlog.title')}
                            </h3>


                            <p className="
                                mt-4
                                max-w-4xl
                                text-gray-500
                                leading-7
                            ">
                                {t('megaBlog.description')}
                            </p>


                            <div className="
                                mt-8
                                grid
                                grid-cols-2
                                gap-5
                                max-w-3xl
                            ">

                                <a
                                    href="#blog"
                                    className="
                                        group
                                        rounded-xl
                                        border
                                        border-gray-100
                                        p-5
                                        hover:border-blue-100
                                        hover:bg-blue-50/50
                                        transition
                                    "
                                >
                                    <h4 className="
                                        font-semibold
                                        text-gray-900
                                        group-hover:text-blue-600
                                    ">
                                        {t('megaBlog.latestArticles')}
                                    </h4>

                                    <p className="
                                        mt-2
                                        text-sm
                                        text-gray-500
                                    ">
                                        {t('megaBlog.latestArticlesDescription')}
                                    </p>
                                </a>


                                <a
                                    href="#blog"
                                    className="
                                        group
                                        rounded-xl
                                        border
                                        border-gray-100
                                        p-5
                                        hover:border-blue-100
                                        hover:bg-blue-50/50
                                        transition
                                    "
                                >
                                    <h4 className="
                                        font-semibold
                                        text-gray-900
                                        group-hover:text-blue-600
                                    ">
                                        {t('megaBlog.featuredInsight')}
                                    </h4>

                                    <p className="
                                        mt-2
                                        text-sm
                                        text-gray-500
                                    ">
                                        {t('megaBlog.featuredInsightDescription')}
                                    </p>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;