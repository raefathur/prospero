import React from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function UpcomingTraining() {
    const { t, i18n } = useTranslation();

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

    const trainings = [
        {
            title: 'Work Smarter with Artificial Intelligence (AI)',
            brochure: `${assetBase}/images/brochures/brosurai.png`,
            dateId: '15 Okt 2026 - 16 Okt 2026',
            dateEn: 'Oct 15, 2026 - Oct 16, 2026',
            durationId: '2 hari',
            durationEn: '2 days',
            link: '/training/work-smarter-with-artificial-intelligence',
        },
        {
            title: 'High Impact Leader & Manager',
            brochure: `${assetBase}/images/brochures/brosurleader.png`,
            dateId: '22 Okt 2026 - 23 Okt 2026',
            dateEn: 'Oct 22, 2026 - Oct 23, 2026',
            durationId: '2 hari',
            durationEn: '2 days',
            link: '/training/high-impact-leader-manager',
        },
        {
            title: 'Happy Retirement',
            brochure: `${assetBase}/images/brochures/brosurpurnabakti.png`,
            dateId: '5 Nov 2026 - 6 Nov 2026',
            dateEn: 'Nov 5, 2026 - Nov 6, 2026',
            durationId: '2 hari',
            durationEn: '2 days',
            link: '/training/happy-retirement',
        },
        {
            title: 'Smart Money Management',
            brochure: `${assetBase}/images/brochures/smmnew.jpg`,
            dateId: '12 Nov 2026 - 14 Nov 2026',
            dateEn: 'Nov 12, 2026 - Nov 14, 2026',
            durationId: '3 hari',
            durationEn: '3 days',
            link: '/training/smart-money-management',
        },
    ];

    const currentLanguage = i18n.language.startsWith('en')
        ? 'en'
        : 'id';

    return (
        <section
            id="training"
            className="relative overflow-hidden py-20 lg:py-24"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {t('training.eyebrow')}
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {t('training.title')}{' '}
                        <span className="text-blue-600">
                            {t('training.titleHighlight')}
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        {t('training.description')}
                    </p>
                </div>

                {/* CAROUSEL */}
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    className="training-swiper"
                >
                    {trainings.map((training, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            {/* CARD */}
                            <div className="flex h-full min-h-[360px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                                {/* BROCHURE */}
                                <div className="flex w-[34%] shrink-0 items-center justify-center border-r border-gray-100 bg-gray-50 p-4 sm:p-5">
                                    <img
                                        src={training.brochure}
                                        alt={`Brosur ${training.title}`}
                                        className="block h-[285px] w-full object-contain"
                                        loading="lazy"
                                    />
                                </div>

                                {/* CARD CONTENT */}
                                <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6 lg:p-7">

                                    {/* CARD HEADER */}
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="min-w-0 pr-2 text-lg font-semibold leading-snug text-blue-600 sm:text-xl lg:text-2xl">
                                            {training.title}
                                        </h3>

                                        <a
                                            href={training.link}
                                            aria-label={`${t('training.view')} ${training.title}`}
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg text-gray-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                        >
                                            →
                                        </a>
                                    </div>

                                    {/* DIVIDER */}
                                    <div className="my-5 border-t border-gray-200"></div>

                                    {/* INFORMATION */}
                                    <div className="relative grid grid-cols-2">
                                        <div
                                            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-200"
                                            aria-hidden="true"
                                        ></div>

                                        {/* DATE */}
                                        <div className="flex min-w-0 items-start gap-2.5 pr-4 sm:gap-3 sm:pr-5">
                                            <div className="mt-0.5 shrink-0">
                                                <svg
                                                    className="h-5 w-5 text-gray-500 sm:h-6 sm:w-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <rect
                                                        x="3"
                                                        y="4"
                                                        width="18"
                                                        height="18"
                                                        rx="2"
                                                        ry="2"
                                                        strokeWidth="1.8"
                                                    />
                                                    <line
                                                        x1="16"
                                                        y1="2"
                                                        x2="16"
                                                        y2="6"
                                                        strokeWidth="1.8"
                                                    />
                                                    <line
                                                        x1="8"
                                                        y1="2"
                                                        x2="8"
                                                        y2="6"
                                                        strokeWidth="1.8"
                                                    />
                                                    <line
                                                        x1="3"
                                                        y1="10"
                                                        x2="21"
                                                        y2="10"
                                                        strokeWidth="1.8"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    {t('training.date')}
                                                </p>

                                                <p className="mt-2 text-sm font-medium leading-6 text-gray-800 sm:text-base">
                                                    {currentLanguage === 'en'
                                                        ? training.dateEn
                                                        : training.dateId}
                                                </p>
                                            </div>
                                        </div>

                                        {/* DURATION */}
                                        <div className="flex min-w-0 items-start gap-2.5 pl-4 sm:gap-3 sm:pl-5">
                                            <div className="mt-0.5 shrink-0">
                                                <svg
                                                    className="h-5 w-5 text-gray-500 sm:h-6 sm:w-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="9"
                                                        strokeWidth="1.8"
                                                    />
                                                    <path
                                                        d="M12 7v5l3 2"
                                                        strokeWidth="1.8"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-gray-500">
                                                    {t('training.duration')}
                                                </p>

                                                <p className="mt-2 text-sm font-medium leading-6 text-gray-800 sm:text-base">
                                                    {currentLanguage === 'en'
                                                        ? training.durationEn
                                                        : training.durationId}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BROCHURE BUTTON */}
                                    <div className="mt-auto pt-7">
                                        <a
                                            href={training.link}
                                            className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white sm:px-6 sm:py-3 sm:text-base"
                                        >
                                            {t('training.view')} Brosur
                                            <span className="text-base leading-none">→</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

/**
 * Mendapatkan bahasa aktif dari i18next
 * tanpa perlu import instance i18n secara langsung.
 */
function i18nLanguageSafe() {
    if (
        typeof window !== 'undefined' &&
        document.documentElement.lang
    ) {
        return document.documentElement.lang.startsWith('en')
            ? 'en'
            : 'id';
    }

    return 'id';
}

export default UpcomingTraining;