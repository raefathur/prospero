import React from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

function Hero() {
    const { t } = useTranslation();

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

    /*
    |--------------------------------------------------------------------------
    | HERO IMAGES
    |--------------------------------------------------------------------------
    */

    const heroImages = [
        {
            src: `${assetBase}/images/hero/prosperohero1.jpg`,
            position: 'center',
        },
        {
            src: `${assetBase}/images/hero/prosperohero2.jpg`,
            position: 'center',
        },
        {
            src: `${assetBase}/images/hero/prosperohero3.jpg`,
            position: 'center',
        },
        {
            src: `${assetBase}/images/hero/prosperohero4.jpg`,
            position: 'center',
        },
    ];

    return (
        <section className="relative overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                <div className="
                    min-h-[calc(100vh-80px)]
                    grid
                    lg:grid-cols-2
                    gap-12
                    items-center
                    py-16
                    lg:py-20
                ">

                    {/* ==================================================
                        LEFT - TEXT
                    ================================================== */}

                    <div>

                        <p className="
                            text-blue-600
                            font-semibold
                            tracking-wide
                            uppercase
                            mb-5
                        ">
                            {t('hero.eyebrow')}
                        </p>

                        <h1 className="
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-tight
                            text-gray-900
                        ">

                            {t('hero.title')}

                            <span className="text-blue-600">
                                {' '}{t('hero.titleHighlight')}
                            </span>

                        </h1>

                        <p className="
                            mt-6
                            text-lg
                            leading-8
                            text-gray-600
                            max-w-xl
                        ">
                            {t('hero.description')}
                        </p>

                        {/* ==================================================
                            BUTTONS
                        ================================================== */}

                        <div className="
                            mt-8
                            flex
                            flex-col
                            sm:flex-row
                            gap-4
                        ">

                            <a
                                href="services"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    px-7
                                    py-3.5
                                    rounded-lg
                                    font-semibold
                                    transition
                                    duration-300
                                    shadow-md
                                    hover:shadow-lg
                                "
                            >
                                {t('hero.serviceButton')}
                            </a>

                            <a
                                href="contact"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    border
                                    border-gray-800
                                    hover:bg-gray-900
                                    hover:text-white
                                    text-gray-800
                                    px-7
                                    py-3.5
                                    rounded-lg
                                    font-semibold
                                    transition
                                    duration-300
                                "
                            >
                                {t('hero.contactButton')}
                            </a>

                        </div>

                    </div>

                    {/* ==================================================
                        RIGHT - HERO IMAGE SLIDER
                    ================================================== */}

                    <div className="relative w-full">

                        {/* Slider Frame */}
                        <div className="
                            relative
                            w-full
                            aspect-[4/3]
                            overflow-hidden
                            rounded-[2rem]
                            bg-gray-100
                            shadow-xl
                        ">

                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="fade"
                                fadeEffect={{
                                    crossFade: true,
                                }}
                                loop={true}
                                speed={1200}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                className="w-full h-full"
                            >

                                {heroImages.map((image, index) => (

                                    <SwiperSlide
                                        key={index}
                                        className="w-full h-full"
                                    >

                                        <div className="
                                            relative
                                            w-full
                                            h-full
                                            overflow-hidden
                                        ">

                                            <img
                                                src={image.src}
                                                alt={`Prospero Hero ${index + 1}`}
                                                className="
                                                    absolute
                                                    inset-0
                                                    w-full
                                                    h-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                "
                                                style={{
                                                    objectPosition:
                                                        image.position,
                                                }}
                                            />

                                            {/* Soft Overlay */}
                                            <div className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black/10
                                                via-transparent
                                                to-transparent
                                            "></div>

                                        </div>

                                    </SwiperSlide>

                                ))}

                            </Swiper>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;