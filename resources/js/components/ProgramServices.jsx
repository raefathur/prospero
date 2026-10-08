import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ProgramServices() {
    const { t } = useTranslation();

    const [activeTab, setActiveTab] = useState('strategicperformance');
    const [isDragging, setIsDragging] = useState(false);

    const carouselRef = useRef(null);

    const dragRef = useRef({
        isDragging: false,
        startX: 0,
        startScrollLeft: 0,
        moved: false,
    });

    /*
    |--------------------------------------------------------------------------
    | BASE PATH WEBSITE
    |--------------------------------------------------------------------------
    | Website berjalan pada:
    | http://localhost:8000/
    |
    | Jadi asset gambar menggunakan:
    | /images/...
    |--------------------------------------------------------------------------
    */

    const assetBase = '';

    const programs = [
        {
            id: 'strategicperformance',
            name: 'Strategic & Performance Management',
            images: [
                {
                    src: `${assetBase}/images/programservices/strategic1.jpg`,
                    title: 'Strategic Plan',
                    link: '/services/strategic-plan',
                },
                {
                    src: `${assetBase}/images/programservices/strategic2.jpg`,
                    title: 'Diagnosing Employee Performance Management Effectiveness',
                    link: '/services/diagnosing-employee-performance-management-effectiveness',
                },
                {
                    src: `${assetBase}/images/programservices/strategic3.jpg`,
                    title: 'Penyusunan Strategy Map & KPI Berbasis BSC',
                    link: '/services/strategy-map-kpi-bsc',
                },
            ],
        },

        {
            id: 'humanresource',
            name: 'Human Resource Management',
            images: [
                {
                    src: `${assetBase}/images/programservices/hrm1.jpg`,
                    title: 'Competency-Based HRM',
                    link: '/services/competency-based-hrm',
                },
                {
                    src: `${assetBase}/images/programservices/hrm2.jpg`,
                    title: 'HR for Non HR',
                    link: '/services/hr-for-non-hr',
                },
                {
                    src: `${assetBase}/images/programservices/hrm3.jpg`,
                    title: 'Human Resource Management Essentials',
                    link: '/services/human-resource-management-essentials',
                },
                {
                    src: `${assetBase}/images/programservices/hrm4.jpg`,
                    title: 'Talent Management',
                    link: '/services/talent-management',
                },
                {
                    src: `${assetBase}/images/programservices/hrm5.jpg`,
                    title: 'Developing Standard Operation Procedure',
                    link: '/services/developing-standard-operation-procedure',
                },
                {
                    src: `${assetBase}/images/programservices/hrm6.jpg`,
                    title: 'Organizational Development',
                    link: '/services/organizational-development',
                },
                {
                    src: `${assetBase}/images/programservices/hrm7.jpg`,
                    title: 'Coaching & Counseling',
                    link: '/services/coaching-counseling',
                },
            ],
        },

        {
            id: 'leadershipdev',
            name: 'Leadership Development Program',
            images: [
                {
                    src: `${assetBase}/images/programservices/ldp1.jpg`,
                    title: 'Effective Leadership',
                    link: '/services/effective-leadership',
                },
                {
                    src: `${assetBase}/images/programservices/ldp2.jpg`,
                    title: 'Supervisory Development Program',
                    link: '/services/supervisory-development-program',
                },
                {
                    src: `${assetBase}/images/programservices/ldp3.jpg`,
                    title: 'Developing Customer-Focused Teams',
                    link: '/services/developing-customer-focused',
                },
                {
                    src: `${assetBase}/images/programservices/ldp4.jpg`,
                    title: 'Developing Execution Skills',
                    link: '/services/developing-execution-skills',
                },
            ],
        },

        {
            id: 'managerial',
            name: 'Managerial & Business Skill',
            images: [
                {
                    src: `${assetBase}/images/programservices/mbs1.jpg`,
                    title: '5S Workplace',
                    link: '/services/5s-workplace',
                },
                {
                    src: `${assetBase}/images/programservices/mbs2.jpg`,
                    title: 'High Impact Presentation Skill',
                    link: '/services/high-impact-presentation-skill',
                },
                {
                    src: `${assetBase}/images/programservices/mbs3.jpg`,
                    title: 'Communication Skill',
                    link: '/services/communication-skill',
                },
                {
                    src: `${assetBase}/images/programservices/mbs4.jpg`,
                    title: 'Business Management Research',
                    link: '/services/business-management-research',
                },
                {
                    src: `${assetBase}/images/programservices/mbs5.jpg`,
                    title: 'Improving Project Management Skill',
                    link: '/services/improving-project-management-skill',
                },
                {
                    src: `${assetBase}/images/programservices/mbs6.jpg`,
                    title: 'Fundamental of Marketing',
                    link: '/services/fundamental-of-marketing',
                },
                {
                    src: `${assetBase}/images/programservices/mbs7.jpg`,
                    title: 'Problem Solving & Decision Making',
                    link: '/services/problem-solving-decision-making',
                },
                {
                    src: `${assetBase}/images/programservices/mbs8.jpg`,
                    title: 'Negotiation Skill for Business',
                    link: '/services/negotiation-skill-for-business',
                },
                {
                    src: `${assetBase}/images/programservices/mbs9.jpg`,
                    title: 'Feasibility Study',
                    link: '/services/feasibility-study',
                },
                {
                    src: `${assetBase}/images/programservices/mbs10.jpg`,
                    title: 'Business Plan',
                    link: '/services/business-plan',
                },
                {
                    src: `${assetBase}/images/programservices/mbs11.jpg`,
                    title: 'Finance for Non Finance',
                    link: '/services/finance-for-non-finance',
                },
            ],
        },

        {
            id: 'trainingmanagement',
            name: 'Training Management System',
            images: [
                {
                    src: `${assetBase}/images/programservices/tms1.jpg`,
                    title: 'Developing Training Module',
                    link: '/services/developing-training-module',
                },
                {
                    src: `${assetBase}/images/programservices/tms2.jpg`,
                    title: 'Designing Training Program',
                    link: '/services/designing-training-program',
                },
                {
                    src: `${assetBase}/images/programservices/tms3.jpg`,
                    title: 'Training Plan Development',
                    link: '/services/training-plan-development',
                },
                {
                    src: `${assetBase}/images/programservices/tms4.jpg`,
                    title: 'Training Impact Evaluation',
                    link: '/services/training-impact-evaluation',
                },
                {
                    src: `${assetBase}/images/programservices/tms5.jpg`,
                    title: 'Training Management System',
                    link: '/services/training-management-system',
                },
                {
                    src: `${assetBase}/images/programservices/tms6.jpg`,
                    title: 'Training for the Trainers',
                    link: '/services/training-for-the-trainers',
                },
            ],
        },

        {
            id: 'personal',
            name: 'Personal Effectiveness',
            images: [
                {
                    src: `${assetBase}/images/programservices/personal1.jpg`,
                    title: 'Time & Stress Management',
                    link: '/services/time-stress-management',
                },
                {
                    src: `${assetBase}/images/programservices/personal2.jpg`,
                    title: 'Personal Development',
                    link: '/services/personal-development',
                },
                {
                    src: `${assetBase}/images/programservices/personal3.jpg`,
                    title: 'Work Life Balance',
                    link: '/services/work-life-balance',
                },
                {
                    src: `${assetBase}/images/programservices/personal4.jpg`,
                    title: 'Effective Followership',
                    link: '/services/effective-followership',
                },
            ],
        },

        {
            id: 'purnabakti',
            name: 'Purnabakti',
            images: [
                {
                    src: `${assetBase}/images/programservices/pensiun1.jpg`,
                    title: 'Persiapan Pensiun (1 Day)',
                    link: '/services/persiapan-pensiun-1-day',
                },
                {
                    src: `${assetBase}/images/programservices/pensiun2.jpg`,
                    title: 'Persiapan Pensiun (2 Day)',
                    link: '/services/persiapan-pensiun-2-day',
                },
                {
                    src: `${assetBase}/images/programservices/pensiun3.jpg`,
                    title: 'Persiapan Pensiun (3 Day)',
                    link: '/services/persiapan-pensiun-3-day',
                },
            ],
        },
    ];

    const activeProgram = programs.find(
        (program) => program.id === activeTab
    );

    const changeTab = (tabId) => {
        setActiveTab(tabId);

        dragRef.current.isDragging = false;
        dragRef.current.moved = false;

        setIsDragging(false);

        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    const getCardWidth = () => {
        if (!carouselRef.current) {
            return 0;
        }

        const card = carouselRef.current.querySelector(
            '[data-carousel-card="true"]'
        );

        if (!card) {
            return 0;
        }

        return card.getBoundingClientRect().width + 20;
    };

    const scrollNext = () => {
        const width = getCardWidth();

        if (!width || !carouselRef.current) {
            return;
        }

        carouselRef.current.scrollBy({
            left: width,
            behavior: 'smooth',
        });
    };

    const scrollPrevious = () => {
        const width = getCardWidth();

        if (!width || !carouselRef.current) {
            return;
        }

        carouselRef.current.scrollBy({
            left: -width,
            behavior: 'smooth',
        });
    };

    const handlePointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }

        const container = carouselRef.current;

        if (!container) {
            return;
        }

        dragRef.current.isDragging = true;
        dragRef.current.startX = event.clientX;
        dragRef.current.startScrollLeft = container.scrollLeft;
        dragRef.current.moved = false;

        setIsDragging(false);
    };

    const handlePointerMove = (event) => {
        const container = carouselRef.current;

        if (!container || !dragRef.current.isDragging) {
            return;
        }

        const distance =
            event.clientX - dragRef.current.startX;

        if (Math.abs(distance) < 8) {
            return;
        }

        dragRef.current.moved = true;

        setIsDragging(true);

        container.scrollLeft =
            dragRef.current.startScrollLeft - distance;

        event.preventDefault();
    };

    const handlePointerUp = () => {
        const wasDragging = dragRef.current.moved;

        dragRef.current.isDragging = false;
        setIsDragging(false);

        if (wasDragging) {
            setTimeout(() => {
                dragRef.current.moved = false;
            }, 100);
        }
    };

    const handlePointerCancel = () => {
        dragRef.current.isDragging = false;
        dragRef.current.moved = false;

        setIsDragging(false);
    };

    const handleLinkClick = (event) => {
        if (dragRef.current.moved) {
            event.preventDefault();
        }
    };

    return (
        <section
            id="program-services"
            className="relative overflow-hidden bg-[#f5f9fc] py-20 lg:py-28"
        >
            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl" />

                <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-100/40 blur-3xl" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {t('programServices.eyebrow')}
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        {t('programServices.title')}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                        {t('programServices.description')}
                    </p>
                </div>

                {/* TABS */}
                <div className="mb-8 overflow-hidden">
                    <div className="flex gap-3 overflow-x-auto pb-2 whitespace-nowrap">
                        {programs.map((program) => (
                            <button
                                key={program.id}
                                type="button"
                                onClick={() => changeTab(program.id)}
                                className={
                                    activeTab === program.id
                                        ? 'shrink-0 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700'
                                        : 'shrink-0 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-600 transition hover:border-blue-300 hover:text-blue-600'
                                }
                            >
                                {program.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CAROUSEL BOX */}
                <div className="relative rounded-3xl border border-white bg-white p-5 shadow-lg sm:p-8">

                    {/* PREVIOUS BUTTON */}
                    {activeProgram.images.length > 3 && (
                        <button
                            type="button"
                            onClick={scrollPrevious}
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow-lg ring-1 ring-gray-200 transition hover:scale-105 hover:bg-blue-600 hover:text-white md:flex"
                        >
                            ‹
                        </button>
                    )}

                    {/* NEXT BUTTON */}
                    {activeProgram.images.length > 3 && (
                        <button
                            type="button"
                            onClick={scrollNext}
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow-lg ring-1 ring-gray-200 transition hover:scale-105 hover:bg-blue-600 hover:text-white md:flex"
                        >
                            ›
                        </button>
                    )}

                    {/* SLIDER */}
                    <div
                        ref={carouselRef}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerCancel}
                        className={
                            isDragging
                                ? 'flex cursor-grabbing gap-5 overflow-x-auto select-none pb-2'
                                : 'flex cursor-grab gap-5 overflow-x-auto scroll-smooth select-none pb-2'
                        }
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            touchAction: 'pan-y',
                        }}
                    >
                        {activeProgram.images.map((item) => (
                            <a
                                key={item.src}
                                href={item.link}
                                data-carousel-card="true"
                                onClick={handleLinkClick}
                                className="group w-[85%] shrink-0 overflow-hidden rounded-2xl bg-gray-50 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[48%] lg:w-[31.8%]"
                            >
                                {/* IMAGE */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        draggable="false"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* HOVER */}
                                    <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

                                    {/* DETAIL LABEL */}
                                    <div className="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-600 opacity-0 shadow-md transition duration-300 group-hover:opacity-100">
                                        Klik untuk detail
                                    </div>
                                </div>

                                {/* TITLE ONLY */}
                                <div className="p-4">
                                    <p className="font-semibold text-gray-800">
                                        {item.title}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* MOBILE HINT */}
                    {activeProgram.images.length > 3 && (
                        <p className="mt-4 text-center text-xs text-gray-400 md:hidden">
                            Geser untuk melihat program lainnya
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProgramServices;