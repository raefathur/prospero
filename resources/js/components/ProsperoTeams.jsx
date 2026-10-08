import React from 'react';
import { useTranslation } from 'react-i18next';

function ProsperoTeams() {
    const { t, i18n } = useTranslation();

    const isEnglish = i18n.language === 'en';

    const teams = [
        {
            name: 'Irfan Prasatya',
            fullName: 'Executive Partner',
            image: '/images/teams/if.png',
        },
        {
            name: 'Drs. Andreas Imawanto, M.M., Psikolog',
            fullName: 'Executive Partner',
            image: '/images/teams/andreas.png',
        },
        {
            name: 'Satria Wibawa, MM',
            fullName: 'Executive Partner',
            image: '/images/teams/sw.png',
        },
        {
            name: 'DR. Enny Ariyanto, M.Si',
            fullName: 'Executive Partner',
            image: '/images/teams/eni.png',
        },
        {
            name: 'Mashuri, MM',
            fullName: 'Consultant',
            image: '/images/teams/mashuri.png',
        },
        {
            name: 'M. Muharrom Arrasyid, MM',
            fullName: 'Consultant',
            image: '/images/teams/aom.png',
        },
        {
            name: 'M. Sultan Salahudin Rozi, MBA',
            fullName: 'Junior Consultant',
            image: '/images/teams/sz.png',
        },
        {
            name: 'Rian Ardiansah Makatita, S.T.',
            fullName: 'Junior Consultant',
            image: '/images/teams/Rian.png',
        },
        {
            name: 'Nurul Khamidah, S.E.',
            fullName: 'Junior Consultant',
            image: '/images/teams/nurul.png',
        },
    ];

    const firstRow = teams.slice(0, 4);
    const secondRow = teams.slice(4);

    return (
        <section
            id="prospero-teams"
            className="
                relative
                overflow-hidden
                py-20
                sm:py-24
                lg:py-28
            "
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
                Sama seperti background utama / Hero
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
                        bg-blue-100/20
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
                        bg-cyan-100/20
                        blur-3xl
                    "
                ></div>

            </div>


            {/* =========================================================
                CONTENT
            ========================================================== */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* HEADER */}
                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <p
                        className="
                            mb-3
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-blue-600
                        "
                    >
                        {isEnglish
                            ? 'MEET THE PEOPLE BEHIND PROSPERO'
                            : 'KENALI ORANG-ORANG DI BALIK PROSPERO'}
                    </p>

                    <h1
                        className="
                            text-4xl
                            font-bold
                            leading-tight
                            tracking-tight
                            text-gray-900
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {isEnglish
                            ? 'Our Experts'
                            : 'Para Ahli Kami'}
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            leading-8
                            text-gray-600
                            sm:text-lg
                        "
                    >
                        {isEnglish
                            ? 'Meet the experienced professionals who bring Prospero Management’s expertise to every engagement.'
                            : 'Kenali para profesional berpengalaman yang menghadirkan keahlian Prospero Management dalam setiap layanan kami.'}
                    </p>

                </div>


                {/* =========================================================
                    TEAM GRID
                ========================================================== */}
                <div className="space-y-5 lg:space-y-6">

                    {/* BARIS PERTAMA — 4 FOTO */}
                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-5
                            sm:grid-cols-4
                            lg:gap-6
                        "
                    >
                        {firstRow.map((member, index) => (
                            <div
                                key={`row1-${index}`}
                                className="
                                    group
                                    relative
                                    aspect-[0.78]
                                    overflow-hidden
                                    rounded-2xl
                                    bg-gray-200
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                "
                            >
                                <img
                                    src={member.image}
                                    alt={member.fullName}
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                        object-top
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                    onError={(event) => {
                                        event.currentTarget.style.display = 'none';
                                    }}
                                />

                                {/* GRADIENT HIJAU LEBIH TERANG */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#2f6b4f]/35
                                        via-[#6f9f87]/12
                                        to-transparent
                                    "
                                ></div>

                                {/* SOFT OVERLAY */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/8
                                        via-transparent
                                        to-transparent
                                    "
                                ></div>

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        z-10
                                        p-4
                                        text-center
                                        sm:p-5
                                    "
                                >
                                    <h2
                                        className="
                                            text-[11px]
                                            font-bold
                                            leading-tight
                                            tracking-wide
                                            text-white
                                            sm:text-xs
                                            lg:text-sm
                                        "
                                    >
                                        {member.name}
                                    </h2>

                                    {member.fullName !== member.name && (
                                        <p
                                            className="
                                                mt-1
                                                text-[9px]
                                                font-medium
                                                leading-tight
                                                text-white/90
                                                sm:text-[10px]
                                            "
                                        >
                                            {member.fullName}
                                        </p>
                                    )}
                                </div>

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        rounded-2xl
                                        border
                                        border-transparent
                                        transition-all
                                        duration-500
                                        group-hover:border-white/40
                                    "
                                ></div>
                            </div>
                        ))}
                    </div>

                    {/* BARIS KEDUA — 5 FOTO */}
                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-5
                            sm:grid-cols-3
                            lg:grid-cols-5
                            lg:gap-6
                        "
                    >
                        {secondRow.map((member, index) => (
                            <div
                                key={`row2-${index}`}
                                className="
                                    group
                                    relative
                                    aspect-[0.78]
                                    overflow-hidden
                                    rounded-2xl
                                    bg-gray-200
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                "
                            >
                                <img
                                    src={member.image}
                                    alt={member.fullName}
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                        object-top
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                    onError={(event) => {
                                        event.currentTarget.style.display = 'none';
                                    }}
                                />

                                {/* GRADIENT HIJAU LEBIH TERANG */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#2f6b4f]/35
                                        via-[#6f9f87]/12
                                        to-transparent
                                    "
                                ></div>

                                {/* SOFT OVERLAY */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/8
                                        via-transparent
                                        to-transparent
                                    "
                                ></div>

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        z-10
                                        p-4
                                        text-center
                                        sm:p-5
                                    "
                                >
                                    <h2
                                        className="
                                            text-[11px]
                                            font-bold
                                            leading-tight
                                            tracking-wide
                                            text-white
                                            sm:text-xs
                                            lg:text-sm
                                        "
                                    >
                                        {member.name}
                                    </h2>

                                    {member.fullName !== member.name && (
                                        <p
                                            className="
                                                mt-1
                                                text-[9px]
                                                font-medium
                                                leading-tight
                                                text-white/90
                                                sm:text-[10px]
                                            "
                                        >
                                            {member.fullName}
                                        </p>
                                    )}
                                </div>

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        rounded-2xl
                                        border
                                        border-transparent
                                        transition-all
                                        duration-500
                                        group-hover:border-white/40
                                    "
                                ></div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProsperoTeams;