import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function Testimonials() {
    const { t } = useTranslation();
    const [swiperInstance, setSwiperInstance] = useState(null);

    const testimonials = [
        {
            quote:
                'Program yang diberikan Prospero sangat relevan dengan kebutuhan pengembangan kami. Materinya aplikatif dan mudah diterapkan di lingkungan kerja.',
            name: 'Andi Pratama',
            position: 'Human Capital Manager',
            company: 'PT Contoh Perusahaan',
        },
        {
            quote:
                'Pendekatan pembelajaran Prospero membuat peserta lebih aktif dan terlibat. Kami mendapatkan pengalaman belajar yang sangat positif.',
            name: 'Siti Rahma',
            position: 'Learning & Development Manager',
            company: 'PT Pelindo',
        },
        {
            quote:
                'Prospero mampu memahami kebutuhan organisasi dan menerjemahkannya menjadi program yang relevan, terstruktur, dan engaging.',
            name: 'Budi Santoso',
            position: 'HR Business Partner',
            company: 'PT Sasa Inti',
        },
        {
            quote:
                'Kami sangat terbantu dengan pendekatan yang fleksibel dan profesional. Programnya memberikan insight yang dapat langsung diterapkan oleh peserta.',
            name: 'Dewi Lestari',
            position: 'People Development Lead',
            company: 'PT Indominco Mandiri',
        },
    ];

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden py-20 lg:py-28"
            style={{
                background:
                    'linear-gradient(110deg, #ffffff 0%, #ffffff 35%, #f7fdfe 50%, #edfafd 65%, #e5f8fa 82%, #e5f8f2 100%)',
            }}
        >
            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/30 blur-3xl" />

                <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/30 blur-3xl" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* LEFT CONTENT */}
                    <div className="text-left">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                            {t('testimonials.eyebrow')}
                        </p>

                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            {t('testimonials.title')}{' '}
                            <span className="text-blue-600">
                                {t('testimonials.titleHighlight')}
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                            {t('testimonials.description')}
                        </p>

                        <div className="mt-8 h-1 w-16 rounded-full bg-blue-600"></div>

                    </div>

                    {/* RIGHT TESTIMONIAL */}
                    <div className="relative">

                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            speed={700}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            slidesPerView={1}
                            spaceBetween={24}
                            onSwiper={(swiper) => {
                                setSwiperInstance(swiper);
                            }}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg sm:p-9">

                                        {/* QUOTE ICON */}
                                        <div className="mb-5 text-4xl font-bold leading-none text-blue-600">
                                            “
                                        </div>

                                        {/* QUOTE */}
                                        <p className="text-base leading-8 text-gray-700 sm:text-lg">
                                            {t(`testimonials.quote${index + 1}`)}
                                        </p>

                                        {/* DIVIDER */}
                                        <div className="my-7 border-t border-gray-200"></div>

                                        {/* PERSON */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {testimonial.name}
                                            </h3>

                                            <p className="mt-1 text-sm font-medium text-blue-600">
                                                {t(`testimonials.position${index + 1}`)}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {testimonial.company}
                                            </p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* NAVIGATION */}
                        <div className="mt-6 flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() => {
                                    if (swiperInstance) {
                                        swiperInstance.slidePrev();
                                    }
                                }}
                                aria-label={t('testimonials.previous')}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                ←
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    if (swiperInstance) {
                                        swiperInstance.slideNext();
                                    }
                                }}
                                aria-label={t('testimonials.next')}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                            >
                                →
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;