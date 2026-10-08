import React from 'react';
import { useTranslation } from 'react-i18next';

function Director() {
    const { t } = useTranslation();

    return (
        <section
            id="director"
            className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
            style={{
                background: `
                    linear-gradient(
                        110deg,
                        #ffffff 0%,
                        #ffffff 35%,
                        #f7fdfe 50%,
                        #edfafd 65%,
                        #e5f8fa 82%,
                        #e5f8f2 100%
                    )
                `,
            }}
        >

            {/* =========================================================
                SOFT BACKGROUND
            ========================================================== */}
            <div className="pointer-events-none absolute inset-0">

                <div
                    className="
                        absolute
                        -left-32
                        top-0
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-blue-100/30
                        blur-3xl
                    "
                ></div>

                <div
                    className="
                        absolute
                        -right-32
                        bottom-0
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-cyan-100/30
                        blur-3xl
                    "
                ></div>

            </div>


            {/* =========================================================
                CONTENT
            ========================================================== */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <div
                    className="
                        grid
                        items-start
                        gap-12
                        lg:grid-cols-[360px_1fr]
                        lg:gap-16
                    "
                >

                    {/* =================================================
                        LEFT - PROFILE CARD
                    ================================================== */}
                    <div
                        className="
                            rounded-2xl
                            bg-white
                            p-6
                            shadow-lg
                        "
                    >

                        {/* PHOTO */}
                        <div
                            className="
                                overflow-hidden
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-100
                            "
                        >

                            <img
                                src="/images/about/rz.png"
                                alt={t('director.name')}
                                className="
                                    block
                                    h-auto
                                    w-full
                                    object-cover
                                "
                            />

                        </div>


                        {/* NAME */}
                        <div className="mt-6">

                            <h1
                                className="
                                    text-2xl
                                    font-bold
                                    tracking-tight
                                    text-blue-600
                                    sm:text-3xl
                                "
                            >
                                {t('director.name')}
                            </h1>

                            <p
                                className="
                                    mt-2
                                    text-base
                                    font-medium
                                    text-gray-700
                                    sm:text-lg
                                "
                            >
                                {t('director.position')}
                            </p>

                        </div>


                        {/* DIVIDER */}
                        <div className="mt-7 border-t border-gray-200"></div>

                    </div>


                    {/* =================================================
                        RIGHT - PROFILE CONTENT
                    ================================================== */}
                    <div>

                        {/* EYEBROW */}
                        <p
                            className="
                                mb-4
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-blue-600
                            "
                        >
                            {t('director.eyebrow')}
                        </p>


                        {/* TITLE */}
                        <h2
                            className="
                                text-3xl
                                font-bold
                                leading-tight
                                tracking-tight
                                text-gray-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {t('director.title')}
                            <span className="text-blue-600">
                                {' '}{t('director.name')}
                            </span>
                        </h2>


                        {/* BIO BOX */}
                        <div
                            className="
                                mt-8
                                rounded-2xl
                                border
                                border-gray-200
                                bg-white
                                p-7
                                shadow-sm
                                sm:p-9
                                lg:p-10
                            "
                        >

                            <div className="space-y-6">

                                {/* INTRODUCTION */}
                                <p
                                    className="
                                        text-base
                                        leading-8
                                        text-gray-700
                                        sm:text-lg
                                    "
                                >
                                    {t('director.introduction')}
                                </p>


                                {/* EXPERIENCE */}
                                <p
                                    className="
                                        text-base
                                        leading-8
                                        text-gray-700
                                        sm:text-lg
                                    "
                                >
                                    {t('director.experience')}
                                </p>


                                {/* EXPERTISE */}
                                <div>

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                            sm:text-xl
                                        "
                                    >
                                        {t('director.expertiseTitle')}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            text-base
                                            leading-8
                                            text-gray-700
                                            sm:text-lg
                                        "
                                    >
                                        {t('director.expertise')}
                                    </p>

                                </div>


                                {/* EDUCATION */}
                                <div>

                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            text-gray-900
                                            sm:text-xl
                                        "
                                    >
                                        {t('director.backgroundTitle')}
                                    </h3>

                                    <div
                                        className="
                                            mt-4
                                            space-y-3
                                        "
                                    >

                                        <div
                                            className="
                                                rounded-xl
                                                bg-gray-50
                                                px-5
                                                py-4
                                            "
                                        >
                                            <p className="text-sm font-semibold text-gray-900 sm:text-base">
                                                {t('director.phdTitle')}
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                {t('director.phdInstitution')}
                                            </p>
                                        </div>


                                        <div
                                            className="
                                                rounded-xl
                                                bg-gray-50
                                                px-5
                                                py-4
                                            "
                                        >
                                            <p className="text-sm font-semibold text-gray-900 sm:text-base">
                                                MBA
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                Philippine Christian University,
                                                Manila — 1998
                                            </p>
                                        </div>


                                        <div
                                            className="
                                                rounded-xl
                                                bg-gray-50
                                                px-5
                                                py-4
                                            "
                                        >
                                            <p className="text-sm font-semibold text-gray-900 sm:text-base">
                                                {t('director.bachelorTitle')}
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                Universitas Islam Indonesia,
                                                Yogyakarta — 1995
                                            </p>
                                        </div>


                                        <div
                                            className="
                                                rounded-xl
                                                bg-gray-50
                                                px-5
                                                py-4
                                            "
                                        >
                                            <p className="text-sm font-semibold text-gray-900 sm:text-base">
                                                Certified QWP
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                                {t('director.qwpDescription')}
                                            </p>
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Director;