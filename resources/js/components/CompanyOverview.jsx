import React from 'react';
import { useTranslation } from 'react-i18next';

function CompanyOverview() {
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

    return (
        <section
            id="company-overview"
            className="relative overflow-hidden py-20 lg:py-28"
        >

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="
                    grid
                    lg:grid-cols-2
                    gap-14
                    lg:gap-20
                    items-center
                ">

                    {/* =====================================================
                        LEFT - COMPANY TEXT
                    ====================================================== */}

                    <div>

                        <p className="
                            text-blue-500
                            font-semibold
                            tracking-wide
                            uppercase
                            mb-5
                        ">
                            {t('companyOverview.eyebrow')}
                        </p>


                        <h2 className="
                            text-4xl
                            sm:text-5xl
                            lg:text-[3.4rem]
                            font-bold
                            leading-[1.12]
                            text-gray-900
                            max-w-xl
                        ">
                            {t('companyOverview.title')}
                        </h2>


                        <p className="
                            mt-7
                            text-lg
                            leading-8
                            text-gray-600
                            max-w-xl
                        ">
                            {t('companyOverview.description')}
                        </p>


                        <div className="mt-8">

                            <a
                                href="/about"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    bg-gray-900
                                    hover:bg-blue-600
                                    text-white
                                    px-7
                                    py-3.5
                                    rounded-full
                                    font-semibold
                                    transition
                                    duration-300
                                    shadow-sm
                                    hover:shadow-lg
                                "
                            >
                                {t('companyOverview.button')}
                            </a>

                        </div>

                    </div>


                    {/* =====================================================
                        RIGHT - IMAGES + STATISTICS
                    ====================================================== */}

                    <div className="
                        w-full
                        max-w-[620px]
                        mx-auto
                    ">

                        {/* =================================================
                            DESKTOP / TABLET
                        ================================================== */}

                        <div className="
                            hidden
                            sm:grid
                            grid-cols-2
                            gap-x-8
                            gap-y-8
                            items-center
                        ">

                            {/* =================================================
                                FOTO 1 - KIRI ATAS
                            ================================================== */}

                            <div className="
                                w-full
                                aspect-[4/3]
                                rounded-xl
                                overflow-hidden
                                bg-gray-100
                                shadow-sm
                            ">

                                <img
                                    src={`${assetBase}/images/companyoverview/companyoverview1.jpg`}
                                    alt="Prospero"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />

                            </div>


                            {/* =================================================
                                STATISTIK 1 - KANAN ATAS
                            ================================================== */}

                            <div className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                h-full
                            ">

                                <div className="
                                    text-5xl
                                    lg:text-[3.6rem]
                                    font-bold
                                    leading-none
                                    text-cyan-500
                                ">
                                    69194+
                                </div>

                                <p className="
                                    mt-3
                                    text-gray-600
                                    text-base
                                    lg:text-lg
                                    font-medium
                                ">
                                    {t('companyOverview.statTraining')}
                                </p>

                            </div>


                            {/* =================================================
                                STATISTIK 2 - KIRI BAWAH
                            ================================================== */}

                            <div className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                h-full
                            ">

                                <div className="
                                    text-5xl
                                    lg:text-[3.6rem]
                                    font-bold
                                    leading-none
                                    text-cyan-500
                                ">
                                    4657+
                                </div>

                                <p className="
                                    mt-3
                                    text-gray-600
                                    text-base
                                    lg:text-lg
                                    font-medium
                                ">
                                    {t('companyOverview.statAssessment')}
                                </p>

                            </div>


                            {/* =================================================
                                FOTO 2 - KANAN BAWAH
                            ================================================== */}

                            <div className="
                                w-full
                                aspect-[4/3]
                                rounded-xl
                                overflow-hidden
                                bg-gray-100
                                shadow-sm
                            ">

                                <img
                                    src={`${assetBase}/images/companyoverview/companyoverview2.jpg`}
                                    alt="Prospero Team"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />

                            </div>

                        </div>


                        {/* =================================================
                            MOBILE
                        ================================================== */}

                        <div className="
                            sm:hidden
                            space-y-8
                        ">

                            {/* FOTO 1 */}
                            <div className="
                                w-full
                                aspect-[4/3]
                                rounded-xl
                                overflow-hidden
                                bg-gray-100
                            ">

                                <img
                                    src={`${assetBase}/images/companyoverview/companyoverview1.jpg`}
                                    alt="Prospero"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />

                            </div>


                            {/* STATISTIK 1 */}
                            <div className="text-center">

                                <div className="
                                    text-5xl
                                    font-bold
                                    text-cyan-500
                                ">
                                    69194+
                                </div>

                                <p className="
                                    mt-2
                                    text-gray-600
                                    font-medium
                                ">
                                    {t('companyOverview.statTraining')}
                                </p>

                            </div>


                            {/* FOTO 2 */}
                            <div className="
                                w-full
                                aspect-[4/3]
                                rounded-xl
                                overflow-hidden
                                bg-gray-100
                            ">

                                <img
                                    src={`${assetBase}/images/companyoverview/companyoverview2.jpg`}
                                    alt="Prospero Team"
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        object-center
                                    "
                                />

                            </div>


                            {/* STATISTIK 2 */}
                            <div className="text-center">

                                <div className="
                                    text-5xl
                                    font-bold
                                    text-cyan-500
                                ">
                                    4657+
                                </div>

                                <p className="
                                    mt-2
                                    text-gray-600
                                    font-medium
                                ">
                                    {t('companyOverview.statAssessment')}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CompanyOverview;