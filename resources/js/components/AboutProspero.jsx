import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SafeImage({ sources, ...props }) {
    const sourceList = Array.isArray(sources)
        ? sources
        : [sources];

    const [sourceIndex, setSourceIndex] = useState(0);

    const currentSource = sourceList[sourceIndex];

    const handleError = () => {
        if (sourceIndex < sourceList.length - 1) {
            setSourceIndex((current) => current + 1);
        }
    };

    return (
        <img
            {...props}
            src={currentSource}
            onError={handleError}
        />
    );
}

function AboutProspero() {
    const { t, i18n } = useTranslation();

    /*
    |--------------------------------------------------------------------------
    | ASSET PATHS
    |--------------------------------------------------------------------------
    | Menggunakan beberapa kemungkinan path agar gambar tetap tampil
    | ketika project dibuka melalui Laragon/Laravel public folder.
    */
    const assetBase = `${window.location.origin}/prosperoweb/public`;

        const missionImages = [
        [
            `${assetBase}/images/about/mission1.jpg`,
            `${assetBase}/images/about/mission1.png`,
            '/prosperoweb/images/about/mission1.jpg',
            '/prosperoweb/images/about/mission1.png',
            '/images/about/mission1.jpg',
            '/images/about/mission1.png',
        ],
        [
            `${assetBase}/images/about/mission2.jpg`,
            `${assetBase}/images/about/mission2.png`,
            '/prosperoweb/images/about/mission2.jpg',
            '/prosperoweb/images/about/mission2.png',
            '/images/about/mission2.jpg',
            '/images/about/mission2.png',
        ],
        [
            `${assetBase}/images/about/mission3.jpg`,
            `${assetBase}/images/about/mission3.png`,
            '/prosperoweb/images/about/mission3.jpg',
            '/prosperoweb/images/about/mission3.png',
            '/images/about/mission3.jpg',
            '/images/about/mission3.png',
        ],
    ];

    const valuesImage = [
        `${assetBase}/images/about/jejak-prospero.png`,
        `${assetBase}/images/about/jejak-prospero.jpg`,
        '/prosperoweb/images/about/jejak-prospero.png',
        '/prosperoweb/images/about/jejak-prospero.jpg',
        '/images/about/jejak-prospero.png',
        '/images/about/jejak-prospero.jpg',
    ];

    const founderImage = [
        `${assetBase}/images/about/rz.png`,
        `${assetBase}/images/about/rz.jpg`,
        `${assetBase}/images/about/RZ.png`,
        `${assetBase}/images/about/RZ.jpg`,
        '/prosperoweb/images/about/rz.png',
        '/prosperoweb/images/about/rz.jpg',
        '/images/about/rz.png',
        '/images/about/rz.jpg',
    ];

    const missions = [
        {
            number: 1,
            text: t('aboutProspero.mission1'),
        },
        {
            number: 2,
            text: t('aboutProspero.mission2'),
        },
        {
            number: 3,
            text: t('aboutProspero.mission3'),
        },
    ];

    const isEnglish = i18n.language.startsWith('en');

    const approach = {
        title: isEnglish
            ? 'Our Approach'
            : 'Pendekatan Kami',

        sustainableGrowth: isEnglish
            ? 'Sustainable Growth'
            : 'Pertumbuhan Berkelanjutan',

        organization: isEnglish
            ? 'Organization'
            : 'Organisasi',

        people: 'People',

        technology: isEnglish
            ? 'Technology'
            : 'Teknologi',

        leadership: isEnglish
            ? 'Leadership'
            : 'Kepemimpinan',

        bottom: isEnglish
            ? 'Vision, Mission, Value, & Strategy'
            : 'Visi, Misi, Nilai, & Strategi',
    };

    return (
        <section
            id="about-prospero"
            className="
                relative
                overflow-hidden
            "
            style={{
                background:
                    'linear-gradient(110deg, #ffffff 0%, #ffffff 35%, #f7fdfe 50%, #edfafd 65%, #e5f8fa 82%, #e5f8f2 100%)',
            }}
        >

            {/* =========================================================
                SOFT BACKGROUND
                Disamakan dengan background Testimonials
            ========================================================== */}
            <div className="pointer-events-none absolute inset-0">

                <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/30 blur-3xl" />

                <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/30 blur-3xl" />

            </div>


            {/* =========================================================
                MAIN CONTENT
            ========================================================== */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-6
                    lg:px-8
                "
            >

                {/* =====================================================
                    FOUNDING PARTNER
                ====================================================== */}
                <div
                    className="
                        py-16
                        sm:py-20
                        lg:py-24
                    "
                >

                    <div
                        className="
                            grid
                            items-start
                            gap-10
                            lg:grid-cols-[1.35fr_0.65fr]
                            lg:gap-16
                        "
                    >

                        {/* LEFT - MESSAGE */}
                        <div>

                            <p
                                className="
                                    mb-5
                                    text-sm
                                    font-medium
                                    tracking-wide
                                    text-blue-500
                                    sm:text-base
                                "
                            >
                                {isEnglish
                                    ? 'Words from Our Founding Partner'
                                    : 'Pesan dari Founding Partner Kami'}
                            </p>


                            <h2
                                className="
                                    max-w-3xl
                                    text-3xl
                                    font-normal
                                    leading-[1.08]
                                    tracking-tight
                                    text-gray-900
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                {isEnglish
                                    ? 'Prospero Management provides Training & Content Provider services in organizational development and human capital competency improvement to support transformation into high-performing organizations.'
                                    : 'Prospero Management memberikan layanan Training & Content Provider di bidang pengembangan organisasi dan peningkatan kompetensi SDM dalam rangka mendukung transformasi menuju organisasi berkinerja tinggi.'}
                            </h2>


                            <p
                                className="
                                    mt-8
                                    max-w-3xl
                                    text-base
                                    leading-8
                                    text-gray-700
                                    sm:text-lg
                                "
                            >
                                {isEnglish
                                    ? 'With more than 20 years of experience facilitating organizational transformation in Indonesia, we combine practical experience and up-to-date concepts, while synthesizing best practices gained from working with domestic, multinational, and public organizations to provide unique, applicable, and high-value solutions.'
                                    : 'Kami berpengalaman lebih dari 20 tahun dalam memfasilitasi berbagai kegiatan transformasi organisasi di Indonesia menuju organisasi berkinerja tinggi. Kami mensinergikan pengalaman saat menangani berbagai perusahaan domestik, multinasional, maupun organisasi publik di Indonesia, serta memadukan pengalaman praktis dengan konsep-konsep mutakhir sehingga mampu menawarkan solusi yang unik, aplikatif, dan bernilai tambah tinggi.'}
                            </p>

                        </div>


                        {/* RIGHT - FOUNDER PHOTO */}
                        <div
                            className="
                                lg:pt-1
                            "
                        >

                            <a
                                href="/director"
                                className="group block cursor-pointer"
                                aria-label="View profile of Ade Ahmad Rozi"
                            >
                                <div
                                    className="
                                        overflow-hidden
                                        bg-gray-100
                                    "
                                >

                                    <SafeImage
                                        sources={founderImage}
                                        alt="Ade Ahmad Rozi"
                                        className="
                                            h-auto
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-[1.02]
                                        "
                                    />

                                </div>
                            </a>


                            <div className="mt-5">

                                <h3
                                    className="
                                        text-2xl
                                        font-normal
                                        tracking-tight
                                        text-gray-900
                                        sm:text-3xl
                                    "
                                >
                                    Ade Ahmad Rozi
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        text-base
                                        text-gray-700
                                        sm:text-lg
                                    "
                                >
                                    Founder &amp; Managing Partner HAVPRO Group
                                </p>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    OUR VISION
                ====================================================== */}
                <div className="py-20 lg:py-24">

                    <p
                        className="
                            mb-4
                            text-center
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            text-blue-600
                        "
                    >
                        {t('aboutProspero.eyebrow')}
                    </p>


                    <h1
                        className="
                            text-center
                            text-3xl
                            font-bold
                            leading-tight
                            text-gray-900
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        {t('aboutProspero.visionTitle')}
                    </h1>


                    {/* VISION QUOTE */}
                    <div
                        className="
                            mx-auto
                            mt-10
                            max-w-5xl
                        "
                    >

                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-gray-200
                                bg-white
                                px-8
                                py-12
                                shadow-sm
                                sm:px-12
                                sm:py-14
                                lg:px-20
                                lg:py-16
                            "
                        >

                            {/* OPEN QUOTE */}
                            <div
                                className="
                                    absolute
                                    left-7
                                    top-4
                                    font-serif
                                    text-7xl
                                    font-bold
                                    leading-none
                                    text-blue-100
                                    sm:left-10
                                    sm:top-5
                                    sm:text-8xl
                                "
                            >
                                “
                            </div>


                            {/* VISION TEXT */}
                            <blockquote
                                className="
                                    relative
                                    z-10
                                    mx-auto
                                    max-w-4xl
                                    text-center
                                    text-lg
                                    font-bold
                                    italic
                                    leading-9
                                    text-gray-600
                                    sm:text-xl
                                    sm:leading-10
                                    lg:text-2xl
                                    lg:leading-10
                                "
                            >
                                {t('aboutProspero.vision')}
                            </blockquote>


                            {/* CLOSE QUOTE */}
                            <div
                                className="
                                    absolute
                                    bottom-[-8px]
                                    right-8
                                    font-serif
                                    text-7xl
                                    font-bold
                                    leading-none
                                    text-blue-100
                                    sm:right-12
                                    sm:text-8xl
                                "
                            >
                                ”
                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    OUR MISSION
                ====================================================== */}
                <div className="py-20 lg:py-24">

                    {/* MISSION HEADER */}
                    <div className="text-center">

                        <p
                            className="
                                mb-3
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-600
                            "
                        >
                            {t('aboutProspero.eyebrow')}
                        </p>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-gray-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {t('aboutProspero.missionTitle')}
                        </h2>

                    </div>


                    {/* ==================================================
                        DESKTOP MISSION
                    ================================================== */}
                    <div
                        className="
                            relative
                            mx-auto
                            mt-8
                            hidden
                            h-[680px]
                            max-w-7xl
                            lg:block
                        "
                    >

                        {/* MISSION 1 */}
                        <div
                            className="
                                absolute
                                left-[70px]
                                top-[30%]
                                z-20
                                w-[270px]
                                -translate-y-1/2
                                text-center
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    mb-5
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gray-100
                                    text-lg
                                    font-bold
                                    text-blue-600
                                    shadow-sm
                                "
                            >
                                1
                            </div>

                            <p
                                className="
                                    text-base
                                    font-normal
                                    leading-8
                                    text-gray-600
                                    sm:text-lg
                                "
                            >
                                {missions[0].text}
                            </p>

                        </div>


                        {/* MISSION 2 */}
                        <div
                            className="
                                absolute
                                right-[70px]
                                top-[30%]
                                z-20
                                w-[270px]
                                -translate-y-1/2
                                text-center
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    mb-5
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gray-100
                                    text-lg
                                    font-bold
                                    text-blue-600
                                    shadow-sm
                                "
                            >
                                2
                            </div>

                            <p
                                className="
                                    text-base
                                    font-normal
                                    leading-8
                                    text-gray-600
                                    sm:text-lg
                                "
                            >
                                {missions[1].text}
                            </p>

                        </div>


                        {/* CENTRAL MISSION CIRCLE */}
                        <div
                            className="
                                absolute
                                left-1/2
                                top-[46%]
                                h-[520px]
                                w-[520px]
                                -translate-x-1/2
                                -translate-y-1/2
                            "
                        >

                            {/* OUTER RING */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    border-[16px]
                                    border-gray-300
                                "
                            ></div>


                            {/* TOP LEFT */}
                            <div
                                className="
                                    mission-part
                                    absolute
                                    left-[16px]
                                    top-[16px]
                                    h-[236px]
                                    w-[236px]
                                    overflow-hidden
                                    rounded-tl-full
                                "
                            >

                                <SafeImage
                                    sources={missionImages[0]}
                                    alt="Mission 1"
                                    className="
                                        mission-photo
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />

                            </div>


                            {/* TOP RIGHT */}
                            <div
                                className="
                                    mission-part
                                    absolute
                                    right-[16px]
                                    top-[16px]
                                    h-[236px]
                                    w-[236px]
                                    overflow-hidden
                                    rounded-tr-full
                                "
                            >

                                <SafeImage
                                    sources={missionImages[1]}
                                    alt="Mission 2"
                                    className="
                                        mission-photo
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />

                            </div>


                            {/* BOTTOM */}
                            <div
                                className="
                                    mission-part
                                    absolute
                                    bottom-[16px]
                                    left-[16px]
                                    h-[236px]
                                    w-[488px]
                                    overflow-hidden
                                    rounded-bl-[236px]
                                    rounded-br-[236px]
                                "
                            >

                                <SafeImage
                                    sources={missionImages[2]}
                                    alt="Mission 3"
                                    className="
                                        mission-photo
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />

                            </div>


                            {/* CENTER */}
                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    z-30
                                    flex
                                    h-[125px]
                                    w-[125px]
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                "
                            >

                                <span
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-blue-600
                                    "
                                >
                                    Mission
                                </span>

                            </div>

                        </div>


                        {/* MISSION 3 */}
                        <div
                            className="
                                absolute
                                bottom-[-33px]
                                left-1/2
                                z-20
                                w-[420px]
                                -translate-x-1/2
                                text-center
                            "
                        >

                            <div
                                className="
                                    mx-auto
                                    mb-5
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-gray-100
                                    text-lg
                                    font-bold
                                    text-blue-600
                                    shadow-sm
                                "
                            >
                                3
                            </div>

                            <p
                                className="
                                    text-base
                                    font-normal
                                    leading-8
                                    text-gray-600
                                    sm:text-lg
                                "
                            >
                                {missions[2].text}
                            </p>

                        </div>

                    </div>


                    {/* ==================================================
                        MOBILE MISSION
                    ================================================== */}
                    <div
                        className="
                            mt-12
                            grid
                            gap-8
                            lg:hidden
                        "
                    >

                        {missions.map((mission) => (

                            <div
                                key={mission.number}
                                className="
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-gray-200
                                    bg-white
                                    shadow-sm
                                "
                            >

                                <div
                                    className="
                                        relative
                                        aspect-[4/3]
                                        overflow-hidden
                                    "
                                >

                                    <SafeImage
                                        sources={missionImages[mission.number - 1]}
                                        alt={`Mission ${mission.number}`}
                                        className="
                                            mission-mobile-photo
                                            h-full
                                            w-full
                                            object-cover
                                        "
                                    />

                                </div>


                                <div
                                    className="
                                        p-6
                                        text-center
                                    "
                                >

                                    <div
                                        className="
                                            mx-auto
                                            mb-4
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-gray-100
                                            text-lg
                                            font-bold
                                            text-blue-600
                                            shadow-sm
                                        "
                                    >
                                        {mission.number}
                                    </div>

                                    <p
                                        className="
                                            text-base
                                            font-normal
                                            leading-8
                                            text-gray-600
                                            sm:text-lg
                                        "
                                    >
                                        {mission.text}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* =====================================================
                    OUR APPROACH
                ====================================================== */}
                <div className="py-20 lg:py-24">

                    {/* APPROACH HEADER */}
                    <div className="text-center">

                        <p
                            className="
                                mb-3
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-600
                            "
                        >
                            {t('aboutProspero.eyebrow')}
                        </p>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-gray-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {approach.title}
                        </h2>

                    </div>


                    {/* ==================================================
                        APPROACH OUTER BOX
                    ================================================== */}
                    <div
                        className="
                            relative
                            mx-auto
                            mt-12
                            max-w-6xl
                            overflow-hidden
                            rounded-3xl
                            bg-[#e5e7eb]
                            p-5
                            shadow-xl
                            sm:p-7
                            lg:p-10
                        "
                    >

                        {/* ==================================================
                            BACKGROUND PHOTO
                        ================================================== */}
                        <SafeImage
                            sources={missionImages[0]}
                            alt=""
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                                grayscale
                                opacity-[0.12]
                            "
                        />


                        {/* SOFT GRAY OVERLAY */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gray-200/80
                            "
                        ></div>


                        {/* ==================================================
                            DIAGRAM
                        ================================================== */}
                        <div
                            className="
                                relative
                                z-10
                                overflow-hidden
                                rounded-2xl
                            "
                        >

                            {/* ==================================================
                                ROOF
                            ================================================== */}
                            <div
                                className="
                                    relative
                                    h-[110px]
                                    bg-[#06466b]
                                    sm:h-[125px]
                                    lg:h-[145px]
                                "
                                style={{
                                    clipPath:
                                        'polygon(50% 0%, 100% 100%, 0% 100%)',
                                }}
                            >

                                <div
                                    className="
                                        absolute
                                        bottom-5
                                        left-1/2
                                        flex
                                        w-full
                                        -translate-x-1/2
                                        flex-col
                                        items-center
                                        justify-center
                                        text-center
                                        lg:bottom-6
                                    "
                                >

                                    {/* ROOF ICON */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        className="
                                            mb-1
                                            h-8
                                            w-8
                                            text-white
                                            sm:h-9
                                            sm:w-9
                                        "
                                        aria-hidden="true"
                                    >

                                        <path
                                            d="M4 19V8"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M10 19V12"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M16 19V5"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M3 12l5-5 4 3 8-7"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                    </svg>


                                    {/* ROOF TITLE */}
                                    <h3
                                        className="
                                            text-lg
                                            font-bold
                                            uppercase
                                            tracking-wide
                                            text-white
                                            sm:text-2xl
                                            lg:text-3xl
                                        "
                                    >
                                        {approach.sustainableGrowth}
                                    </h3>

                                </div>

                            </div>


                            {/* ==================================================
                                FOUR PILLARS
                            ================================================== */}
                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    lg:grid-cols-4
                                "
                            >

                                {/* =================================================
                                    ORGANIZATION
                                ================================================== */}
                                <div
                                    className="
                                        relative
                                        h-[320px]
                                        bg-[#2f9dd1]
                                        sm:h-[350px]
                                        lg:h-[410px]
                                    "
                                >

                                    {/* VERTICAL TEXT */}
                                    <div
                                        className="
                                            absolute
                                            left-0
                                            right-0
                                            top-6
                                            bottom-[125px]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-2xl
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-white
                                                [writing-mode:vertical-rl]
                                                rotate-180
                                                sm:text-3xl
                                            "
                                        >
                                            {approach.organization}
                                        </span>

                                    </div>


                                    {/* ORGANIZATION ICON */}
                                    <div
                                        className="
                                            absolute
                                            bottom-8
                                            left-1/2
                                            flex
                                            h-[76px]
                                            w-[76px]
                                            -translate-x-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            text-white
                                        "
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="
                                                h-10
                                                w-10
                                                sm:h-11
                                                sm:w-11
                                            "
                                            aria-hidden="true"
                                        >

                                            {/* TOP */}
                                            <circle
                                                cx="12"
                                                cy="4.5"
                                                r="2"
                                                strokeWidth="1.6"
                                            />

                                            {/* LEFT */}
                                            <circle
                                                cx="6"
                                                cy="10"
                                                r="2"
                                                strokeWidth="1.6"
                                            />

                                            {/* RIGHT */}
                                            <circle
                                                cx="18"
                                                cy="10"
                                                r="2"
                                                strokeWidth="1.6"
                                            />

                                            {/* BOTTOM LEFT */}
                                            <circle
                                                cx="5"
                                                cy="18"
                                                r="2"
                                                strokeWidth="1.6"
                                            />

                                            {/* BOTTOM RIGHT */}
                                            <circle
                                                cx="19"
                                                cy="18"
                                                r="2"
                                                strokeWidth="1.6"
                                            />

                                            {/* CONNECTIONS */}
                                            <path
                                                d="
                                                    M12 6.5v2
                                                    M10.5 9.5L7.5 9.8
                                                    M13.5 9.5L16.5 9.8
                                                    M6 12v4
                                                    M18 12v4
                                                "
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                        </svg>

                                    </div>

                                </div>


                                {/* =================================================
                                    PEOPLE
                                ================================================== */}
                                <div
                                    className="
                                        relative
                                        h-[320px]
                                        bg-[#ff3038]
                                        sm:h-[350px]
                                        lg:h-[410px]
                                    "
                                >

                                    {/* VERTICAL TEXT */}
                                    <div
                                        className="
                                            absolute
                                            left-0
                                            right-0
                                            top-6
                                            bottom-[125px]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-2xl
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-white
                                                [writing-mode:vertical-rl]
                                                rotate-180
                                                sm:text-3xl
                                            "
                                        >
                                            {approach.people}
                                        </span>

                                    </div>


                                    {/* PEOPLE ICON */}
                                    <div
                                        className="
                                            absolute
                                            bottom-8
                                            left-1/2
                                            flex
                                            h-[76px]
                                            w-[76px]
                                            -translate-x-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            text-white
                                        "
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="
                                                h-10
                                                w-10
                                                sm:h-11
                                                sm:w-11
                                            "
                                            aria-hidden="true"
                                        >

                                            <circle
                                                cx="12"
                                                cy="7"
                                                r="3"
                                                strokeWidth="1.6"
                                            />

                                            <circle
                                                cx="5.5"
                                                cy="10"
                                                r="2.3"
                                                strokeWidth="1.6"
                                            />

                                            <circle
                                                cx="18.5"
                                                cy="10"
                                                r="2.3"
                                                strokeWidth="1.6"
                                            />

                                            <path
                                                d="
                                                    M7.5 20
                                                    c.4-3.4 2-5.4 4.5-5.4
                                                    s4.1 2 4.5 5.4
                                                "
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                            <path
                                                d="
                                                    M2.5 19
                                                    c.3-2.6 1.3-4 3-4
                                                    1 0 1.8.5 2.3 1.4
                                                "
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                            <path
                                                d="
                                                    M21.5 19
                                                    c-.3-2.6-1.3-4-3-4
                                                    -1 0-1.8.5-2.3 1.4
                                                "
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                        </svg>

                                    </div>

                                </div>


                                {/* =================================================
                                    TECHNOLOGY
                                ================================================== */}
                                <div
                                    className="
                                        relative
                                        h-[320px]
                                        bg-[#05bd6d]
                                        sm:h-[350px]
                                        lg:h-[410px]
                                    "
                                >

                                    {/* VERTICAL TEXT */}
                                    <div
                                        className="
                                            absolute
                                            left-0
                                            right-0
                                            top-6
                                            bottom-[125px]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-2xl
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-white
                                                [writing-mode:vertical-rl]
                                                rotate-180
                                                sm:text-3xl
                                            "
                                        >
                                            {approach.technology}
                                        </span>

                                    </div>


                                    {/* TECHNOLOGY ICON */}
                                    <div
                                        className="
                                            absolute
                                            bottom-8
                                            left-1/2
                                            flex
                                            h-[76px]
                                            w-[76px]
                                            -translate-x-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            text-white
                                        "
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="
                                                h-10
                                                w-10
                                                sm:h-11
                                                sm:w-11
                                            "
                                            aria-hidden="true"
                                        >

                                            <rect
                                                x="7"
                                                y="7"
                                                width="10"
                                                height="10"
                                                rx="2"
                                                strokeWidth="1.6"
                                            />

                                            <path
                                                d="
                                                    M9 3v3
                                                    M12 3v3
                                                    M15 3v3
                                                    M9 18v3
                                                    M12 18v3
                                                    M15 18v3
                                                    M3 9h3
                                                    M3 12h3
                                                    M3 15h3
                                                    M18 9h3
                                                    M18 12h3
                                                    M18 15h3
                                                "
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                            <path
                                                d="M10 12h4M12 10v4"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                        </svg>

                                    </div>

                                </div>


                                {/* =================================================
                                    LEADERSHIP
                                ================================================== */}
                                <div
                                    className="
                                        relative
                                        h-[320px]
                                        bg-[#ffad23]
                                        sm:h-[350px]
                                        lg:h-[410px]
                                    "
                                >

                                    {/* VERTICAL TEXT */}
                                    <div
                                        className="
                                            absolute
                                            left-0
                                            right-0
                                            top-6
                                            bottom-[125px]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <span
                                            className="
                                                whitespace-nowrap
                                                text-2xl
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-white
                                                [writing-mode:vertical-rl]
                                                rotate-180
                                                sm:text-3xl
                                            "
                                        >
                                            {approach.leadership}
                                        </span>

                                    </div>


                                    {/* LEADERSHIP ICON */}
                                    <div
                                        className="
                                            absolute
                                            bottom-8
                                            left-1/2
                                            flex
                                            h-[76px]
                                            w-[76px]
                                            -translate-x-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/10
                                            text-white
                                        "
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="
                                                h-10
                                                w-10
                                                sm:h-11
                                                sm:w-11
                                            "
                                            aria-hidden="true"
                                        >

                                            {/* CROWN */}
                                            <path
                                                d="M5 8l3 3 4-5 4 5 3-3-1.5 8H6.5L5 8Z"
                                                strokeWidth="1.6"
                                                strokeLinejoin="round"
                                            />

                                            {/* HEAD */}
                                            <circle
                                                cx="12"
                                                cy="15"
                                                r="2.2"
                                                strokeWidth="1.5"
                                            />

                                            {/* SHOULDERS */}
                                            <path
                                                d="
                                                    M8.5 21
                                                    c.4-2.1 1.6-3.2 3.5-3.2
                                                    s3.1 1.1 3.5 3.2
                                                "
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />

                                        </svg>

                                    </div>

                                </div>

                            </div>


                            {/* ==================================================
                                BOTTOM STRIP
                            ================================================== */}
                            <div
                                className="
                                    bg-[#06466b]
                                    px-5
                                    py-6
                                    sm:px-8
                                    sm:py-7
                                    lg:px-12
                                    lg:py-8
                                "
                            >

                                <div
                                    className="
                                        mx-auto
                                        flex
                                        max-w-5xl
                                        items-center
                                        justify-center
                                        border-2
                                        border-white
                                        px-4
                                        py-4
                                        sm:px-6
                                        sm:py-5
                                    "
                                >

                                    {/* ICON */}
                                    <div
                                        className="
                                            mr-3
                                            flex
                                            shrink-0
                                            items-center
                                            justify-center
                                            text-white
                                        "
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            className="
                                                h-7
                                                w-7
                                                sm:h-8
                                                sm:w-8
                                            "
                                            aria-hidden="true"
                                        >

                                            <path
                                                d="
                                                    M4 10h16
                                                    M6 10v9
                                                    M10 10v9
                                                    M14 10v9
                                                    M18 10v9
                                                    M3 19h18
                                                    M12 3l9 5H3l9-5Z
                                                "
                                                strokeWidth="1.6"
                                                strokeLinejoin="round"
                                            />

                                        </svg>

                                    </div>


                                    {/* TEXT */}
                                    <span
                                        className="
                                            text-center
                                            text-sm
                                            font-bold
                                            uppercase
                                            tracking-wide
                                            text-white
                                            sm:text-lg
                                            lg:text-2xl
                                        "
                                    >
                                        {approach.bottom}
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ==================================================
                        MOBILE APPROACH
                    ================================================== */}
                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-2
                            gap-4
                            lg:hidden
                        "
                    >

                        {/* ORGANIZATION */}
                        <div
                            className="
                                flex
                                min-h-[160px]
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#2f9dd1]
                                p-6
                                text-center
                                text-white
                                shadow-sm
                            "
                        >
                            <span className="
                                text-xl
                                font-bold
                                uppercase
                                tracking-wide
                            ">
                                {approach.organization}
                            </span>
                        </div>


                        {/* PEOPLE */}
                        <div
                            className="
                                flex
                                min-h-[160px]
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#ff3038]
                                p-6
                                text-center
                                text-white
                                shadow-sm
                            "
                        >
                            <span className="
                                text-xl
                                font-bold
                                uppercase
                                tracking-wide
                            ">
                                {approach.people}
                            </span>
                        </div>


                        {/* TECHNOLOGY */}
                        <div
                            className="
                                flex
                                min-h-[160px]
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#05bd6d]
                                p-6
                                text-center
                                text-white
                                shadow-sm
                            "
                        >
                            <span className="
                                text-xl
                                font-bold
                                uppercase
                                tracking-wide
                            ">
                                {approach.technology}
                            </span>
                        </div>


                        {/* LEADERSHIP */}
                        <div
                            className="
                                flex
                                min-h-[160px]
                                items-center
                                justify-center
                                rounded-2xl
                                bg-[#ffad23]
                                p-6
                                text-center
                                text-white
                                shadow-sm
                            "
                        >
                            <span className="
                                text-xl
                                font-bold
                                uppercase
                                tracking-wide
                            ">
                                {approach.leadership}
                            </span>
                        </div>

                    </div>


                </div>


                {/* =====================================================
                    OUR VALUES
                ====================================================== */}
                <div className="py-28 lg:py-36">

                    {/* VALUES HEADER */}
                    <div className="text-center">
                        <p
                            className="
                                mb-3
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-600
                            "
                        >
                            {t('aboutProspero.eyebrow')}
                        </p>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-gray-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {isEnglish ? 'Our Footprint Across Indonesia' : 'Jejak Kami di Seluruh Indonesia'}
                        </h2>
                    </div>

                    {/* VALUES IMAGE */}
                    <div className="mx-auto mt-12 max-w-6xl">
                        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                            <SafeImage
                                sources={valuesImage}
                                alt={isEnglish ? 'Our Footprint Across Indonesia' : 'Jejak Kami di Seluruh Indonesia'}
                                className="block h-auto w-full"
                            />
                        </div>
                    </div>

                </div>


                {/* =====================================================
                    OUR JOURNEY
                ====================================================== */}
                <div className="py-20 lg:py-28">

                    {/* JOURNEY HEADER */}
                    <div className="text-center">
                        <p
                            className="
                                mb-3
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-blue-600
                            "
                        >
                            {t('aboutProspero.eyebrow')}
                        </p>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-gray-900
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {isEnglish ? 'Our Journey' : 'Perjalanan Kami'}
                        </h2>

                    </div>


                    {/* JOURNEY TIMELINE - DESKTOP */}
                    <div
                        className="
                            relative
                            mx-auto
                            mt-16
                            hidden
                            max-w-6xl
                            lg:block
                        "
                    >

                        {/* CENTER LINE */}
                        <div
                            className="
                                absolute
                                bottom-0
                                left-1/2
                                top-0
                                w-[3px]
                                -translate-x-1/2
                                bg-[#1c4685]
                            "
                        ></div>


                        {/* 2011 */}
                        <div className="relative grid grid-cols-2 gap-16 pb-16">
                            <div className="pr-10">
                                <div className="
                                    rounded-3xl
                                    border
                                    border-gray-200
                                    bg-white
                                    p-8
                                    shadow-sm
                                ">
                                    <span className="
                                        inline-flex
                                        rounded-full
                                        bg-blue-50
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-blue-600
                                    ">
                                        2011
                                    </span>

                                    <h3 className="
                                        mt-5
                                        text-2xl
                                        font-bold
                                        text-gray-900
                                    ">
                                        EST
                                    </h3>

                                    <p className="
                                        mt-3
                                        text-base
                                        leading-8
                                        text-gray-600
                                    ">
                                        {isEnglish
                                            ? 'The establishment of PT Prospero Mandiri Indonesia.'
                                            : 'Tahun 2011 – berdirinya PT Prospero Mandiri Indonesia.'}
                                    </p>
                                </div>
                            </div>

                            <div></div>

                            <div className="
                                absolute
                                left-1/2
                                top-10
                                z-10
                                h-5
                                w-5
                                -translate-x-1/2
                                rounded-full
                                border-4
                                border-white
                                bg-yellow-400
                                shadow-md
                            "></div>
                        </div>


                        {/* ACHIEVEMENT 1 */}
                        <div className="relative grid grid-cols-2 gap-16 pb-16">
                            <div></div>

                            <div className="pl-10">
                                <div className="
                                    rounded-3xl
                                    bg-[#06466b]
                                    p-8
                                    text-white
                                    shadow-lg
                                ">
                                    <span className="
                                        inline-flex
                                        rounded-full
                                        bg-white/10
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-yellow-300
                                    ">
                                        Achievement 1
                                    </span>

                                    <h3 className="
                                        mt-5
                                        text-2xl
                                        font-bold
                                    ">
                                        {isEnglish
                                            ? 'More Than 200 Training Programs'
                                            : 'Lebih dari 200 Pelatihan'}
                                    </h3>

                                    <p className="
                                        mt-3
                                        text-base
                                        leading-8
                                        text-blue-50
                                    ">
                                        {isEnglish
                                            ? 'Experienced in successfully delivering more than 200 training programs.'
                                            : 'Telah berpengalaman dalam melaksanakan lebih dari 200 pelatihan.'}
                                    </p>
                                </div>
                            </div>

                            <div className="
                                absolute
                                left-1/2
                                top-10
                                z-10
                                h-5
                                w-5
                                -translate-x-1/2
                                rounded-full
                                border-4
                                border-white
                                bg-green-500
                                shadow-md
                            "></div>
                        </div>


                        {/* ACHIEVEMENT 2 */}
                        <div className="relative grid grid-cols-2 gap-16 pb-16">
                            <div className="pr-10">
                                <div className="
                                    rounded-3xl
                                    border
                                    border-gray-200
                                    bg-white
                                    p-8
                                    shadow-sm
                                ">
                                    <span className="
                                        inline-flex
                                        rounded-full
                                        bg-blue-50
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-blue-600
                                    ">
                                        Achievement 2
                                    </span>

                                    <h3 className="
                                        mt-5
                                        text-2xl
                                        font-bold
                                        text-gray-900
                                    ">
                                        {isEnglish
                                            ? 'Training Across Major Indonesian Cities'
                                            : 'Pelatihan di Berbagai Kota Besar'}
                                    </h3>

                                    <p className="
                                        mt-3
                                        text-base
                                        leading-8
                                        text-gray-600
                                    ">
                                        {isEnglish
                                            ? 'Experienced in delivering training programs across more than 10 major cities in Indonesia.'
                                            : 'Berpengalaman melaksanakan pelatihan di lebih dari 10 kota besar di Indonesia.'}
                                    </p>

                                    <p className="
                                        mt-4
                                        text-sm
                                        leading-7
                                        text-gray-500
                                    ">
                                        Jakarta · Bandung · Yogyakarta · Medan · Makassar ·
                                        Pekanbaru · Dumai · Bogor · Tarakan · Bali · Bekasi ·
                                        Balikpapan · Samarinda · Palangkaraya
                                    </p>
                                </div>
                            </div>

                            <div></div>

                            <div className="
                                absolute
                                left-1/2
                                top-10
                                z-10
                                h-5
                                w-5
                                -translate-x-1/2
                                rounded-full
                                border-4
                                border-white
                                bg-purple-500
                                shadow-md
                            "></div>
                        </div>


                        {/* ACHIEVEMENT 3 */}
                        <div className="relative grid grid-cols-2 gap-16 pb-16">
                            <div></div>

                            <div className="pl-10">
                                <div className="
                                    rounded-3xl
                                    bg-[#06466b]
                                    p-8
                                    text-white
                                    shadow-lg
                                ">
                                    <span className="
                                        inline-flex
                                        rounded-full
                                        bg-white/10
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-yellow-300
                                    ">
                                        Achievement 3
                                    </span>

                                    <h3 className="
                                        mt-5
                                        text-2xl
                                        font-bold
                                    ">
                                        {isEnglish
                                            ? 'More Than 100 Organizations'
                                            : 'Lebih dari 100 Organisasi'}
                                    </h3>

                                    <p className="
                                        mt-3
                                        text-base
                                        leading-8
                                        text-blue-50
                                    ">
                                        {isEnglish
                                            ? 'Experienced in supporting more than 100 organizations, including state-owned enterprises, ministries and government institutions, as well as private companies in Oil & Gas, Logistics, Banking, and Hospitals.'
                                            : 'Telah berpengalaman dalam membantu lebih dari 100 perusahaan, baik BUMN, kementerian atau lembaga pemerintah, maupun perusahaan swasta yang bergerak di bidang Oil & Gas, Logistik, Bank, dan Rumah Sakit.'}
                                    </p>
                                </div>
                            </div>

                            <div className="
                                absolute
                                left-1/2
                                top-10
                                z-10
                                h-5
                                w-5
                                -translate-x-1/2
                                rounded-full
                                border-4
                                border-white
                                bg-blue-500
                                shadow-md
                            "></div>
                        </div>


                        {/* 2018 */}
                        <div className="relative grid grid-cols-2 gap-16">
                            <div className="pr-10">
                                <div className="
                                    rounded-3xl
                                    border
                                    border-gray-200
                                    bg-white
                                    p-8
                                    shadow-sm
                                ">
                                    <span className="
                                        inline-flex
                                        rounded-full
                                        bg-yellow-50
                                        px-4
                                        py-2
                                        text-sm
                                        font-bold
                                        text-yellow-600
                                    ">
                                        2018
                                    </span>

                                    <h3 className="
                                        mt-5
                                        text-2xl
                                        font-bold
                                        text-gray-900
                                    ">
                                        {isEnglish
                                            ? 'Service Development'
                                            : 'Pengembangan Layanan'}
                                    </h3>

                                    <p className="
                                        mt-3
                                        text-base
                                        leading-8
                                        text-gray-600
                                    ">
                                        {isEnglish
                                            ? 'Expanded its services into:'
                                            : 'Mengembangkan layanan menjadi:'}
                                    </p>

                                    <div className="mt-5 space-y-3">

                                        <div className="
                                            rounded-xl
                                            bg-gray-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-semibold
                                            text-gray-700
                                        ">
                                            01 · Training
                                        </div>

                                        <div className="
                                            rounded-xl
                                            bg-gray-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-semibold
                                            text-gray-700
                                        ">
                                            02 · {isEnglish
                                                ? 'Professional Certification Institution'
                                                : 'Lembaga Sertifikasi Profesi'}
                                        </div>

                                        <div className="
                                            rounded-xl
                                            bg-gray-50
                                            px-4
                                            py-3
                                            text-sm
                                            font-semibold
                                            text-gray-700
                                        ">
                                            03 · Content Provider
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div></div>

                            <div className="
                                absolute
                                left-1/2
                                top-10
                                z-10
                                h-6
                                w-6
                                -translate-x-1/2
                                rounded-full
                                border-4
                                border-white
                                bg-yellow-400
                                shadow-lg
                            "></div>
                        </div>

                    </div>


                    {/* JOURNEY - MOBILE */}
                    <div
                        className="
                            mt-12
                            grid
                            gap-6
                            lg:hidden
                        "
                    >

                        {/* 2011 */}
                        <div className="
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            p-7
                            shadow-sm
                        ">
                            <span className="
                                inline-flex
                                rounded-full
                                bg-blue-50
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-blue-600
                            ">
                                2011
                            </span>

                            <h3 className="
                                mt-4
                                text-xl
                                font-bold
                                text-gray-900
                            ">
                                EST
                            </h3>

                            <p className="
                                mt-3
                                text-base
                                leading-8
                                text-gray-600
                            ">
                                {isEnglish
                                    ? 'The establishment of PT Prospero Mandiri Indonesia.'
                                    : 'Tahun 2011 – berdirinya PT Prospero Mandiri Indonesia.'}
                            </p>
                        </div>


                        {/* ACHIEVEMENT 1 */}
                        <div className="
                            rounded-3xl
                            bg-[#06466b]
                            p-7
                            text-white
                            shadow-lg
                        ">
                            <span className="
                                inline-flex
                                rounded-full
                                bg-white/10
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-yellow-300
                            ">
                                Achievement 1
                            </span>

                            <h3 className="
                                mt-4
                                text-xl
                                font-bold
                            ">
                                {isEnglish
                                    ? 'More Than 200 Training Programs'
                                    : 'Lebih dari 200 Pelatihan'}
                            </h3>

                            <p className="
                                mt-3
                                text-base
                                leading-8
                                text-blue-50
                            ">
                                {isEnglish
                                    ? 'Experienced in successfully delivering more than 200 training programs.'
                                    : 'Telah berpengalaman dalam melaksanakan lebih dari 200 pelatihan.'}
                            </p>
                        </div>


                        {/* ACHIEVEMENT 2 */}
                        <div className="
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            p-7
                            shadow-sm
                        ">
                            <span className="
                                inline-flex
                                rounded-full
                                bg-blue-50
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-blue-600
                            ">
                                Achievement 2
                            </span>

                            <h3 className="
                                mt-4
                                text-xl
                                font-bold
                                text-gray-900
                            ">
                                {isEnglish
                                    ? 'Training Across Major Indonesian Cities'
                                    : 'Pelatihan di Berbagai Kota Besar'}
                            </h3>

                            <p className="
                                mt-3
                                text-base
                                leading-8
                                text-gray-600
                            ">
                                {isEnglish
                                    ? 'Experienced in delivering training programs across more than 10 major cities in Indonesia.'
                                    : 'Berpengalaman melaksanakan pelatihan di lebih dari 10 kota besar di Indonesia.'}
                            </p>

                            <p className="
                                mt-4
                                text-sm
                                leading-7
                                text-gray-500
                            ">
                                Jakarta · Bandung · Yogyakarta · Medan · Makassar ·
                                Pekanbaru · Dumai · Bogor · Tarakan · Bali · Bekasi ·
                                Balikpapan · Samarinda · Palangkaraya
                            </p>
                        </div>


                        {/* ACHIEVEMENT 3 */}
                        <div className="
                            rounded-3xl
                            bg-[#06466b]
                            p-7
                            text-white
                            shadow-lg
                        ">
                            <span className="
                                inline-flex
                                rounded-full
                                bg-white/10
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-yellow-300
                            ">
                                Achievement 3
                            </span>

                            <h3 className="
                                mt-4
                                text-xl
                                font-bold
                            ">
                                {isEnglish
                                    ? 'More Than 100 Organizations'
                                    : 'Lebih dari 100 Organisasi'}
                            </h3>

                            <p className="
                                mt-3
                                text-base
                                leading-8
                                text-blue-50
                            ">
                                {isEnglish
                                    ? 'Experienced in supporting more than 100 organizations, including state-owned enterprises, ministries and government institutions, as well as private companies in Oil & Gas, Logistics, Banking, and Hospitals.'
                                    : 'Telah berpengalaman dalam membantu lebih dari 100 perusahaan, baik BUMN, kementerian atau lembaga pemerintah, maupun perusahaan swasta yang bergerak di bidang Oil & Gas, Logistik, Bank, dan Rumah Sakit.'}
                            </p>
                        </div>


                        {/* 2018 */}
                        <div className="
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            p-7
                            shadow-sm
                        ">
                            <span className="
                                inline-flex
                                rounded-full
                                bg-yellow-50
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-yellow-600
                            ">
                                2018
                            </span>

                            <h3 className="
                                mt-4
                                text-xl
                                font-bold
                                text-gray-900
                            ">
                                {isEnglish
                                    ? 'Service Development'
                                    : 'Pengembangan Layanan'}
                            </h3>

                            <p className="
                                mt-3
                                text-base
                                leading-8
                                text-gray-600
                            ">
                                {isEnglish
                                    ? 'Expanded its services into:'
                                    : 'Mengembangkan layanan menjadi:'}
                            </p>

                            <div className="mt-5 space-y-3">

                                <div className="
                                    rounded-xl
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                ">
                                    01 · Training
                                </div>

                                <div className="
                                    rounded-xl
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                ">
                                    02 · {isEnglish
                                        ? 'Professional Certification Institution'
                                        : 'Lembaga Sertifikasi Profesi'}
                                </div>

                                <div className="
                                    rounded-xl
                                    bg-gray-50
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-gray-700
                                ">
                                    03 · Content Provider
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>


            {/* =========================================================
                MISSION HOVER
            ========================================================== */}
            <style>{`

                .mission-photo {
                    filter: grayscale(1);
                    transition:
                        filter 0.5s ease,
                        transform 0.5s ease;
                }

                .mission-part:hover .mission-photo {
                    filter: grayscale(0);
                    transform: scale(1.04);
                }

                .mission-mobile-photo {
                    filter: grayscale(1);
                    transition: filter 0.5s ease;
                }

                .mission-mobile-photo:hover {
                    filter: grayscale(0);
                }

            `}</style>

        </section>
    );
}

export default AboutProspero;
