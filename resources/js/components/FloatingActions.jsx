import React, { useEffect, useState } from 'react';

function FloatingActions() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            if (documentHeight <= 0) {
                setScrollProgress(0);
                return;
            }

            const progress = (scrollTop / documentHeight) * 100;

            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    /*
    |--------------------------------------------------------------------------
    | WHATSAPP DEFAULT MESSAGE
    |--------------------------------------------------------------------------
    */

    const whatsappMessage =
        'Halo Prospero Management, saya ingin mendapatkan informasi mengenai program pelatihan. Mohon dibantu dengan informasi program, jadwal, dan penawaran yang tersedia. Terima kasih.';

    /*
    |--------------------------------------------------------------------------
    | CIRCLE PROGRESS
    |--------------------------------------------------------------------------
    */

    const size = 56;
    const strokeWidth = 2.5;

    const radius = (size - strokeWidth) / 2;

    const circumference = 2 * Math.PI * radius;

    const dashOffset =
        circumference -
        (scrollProgress / 100) * circumference;

    return (
        <div className="
            fixed
            right-5
            bottom-5
            z-[200]
        ">

            {/* =====================================================
                WHATSAPP
            ====================================================== */}

            <a
                href={`https://wa.me/6285642485189?text=${encodeURIComponent(
                    whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group
                    relative
                    flex
                    items-center
                    justify-end
                "
                aria-label="Chat via WhatsApp"
            >

                {/* Hover Label */}
                <span className="
                    absolute
                    right-16

                    whitespace-nowrap

                    bg-white
                    border
                    border-gray-200
                    rounded-xl

                    px-5
                    py-3

                    text-gray-700
                    text-sm
                    font-semibold

                    shadow-lg

                    opacity-0
                    translate-x-3
                    pointer-events-none

                    group-hover:opacity-100
                    group-hover:translate-x-0

                    transition-all
                    duration-300
                    ease-out
                ">
                    Chat via WhatsApp
                </span>


                {/* WhatsApp Button */}
                <span className="
                    relative
                    flex
                    items-center
                    justify-center

                    w-14
                    h-14

                    rounded-full

                    bg-[#25D366]

                    shadow-lg

                    transition-all
                    duration-300
                    ease-out

                    group-hover:scale-110
                    group-hover:shadow-xl
                ">

                    {/* Glow */}
                    <span className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#25D366]

                        opacity-0
                        scale-75

                        group-hover:opacity-30
                        group-hover:scale-125

                        transition-all
                        duration-500
                    "></span>


                    {/* WhatsApp Icon */}
                    <svg
                        className="
                            relative
                            z-10
                            w-8
                            h-8
                            text-white
                        "
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.17-3.42-8.42ZM12.06 21.75h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.74.98 1-3.65-.23-.37a9.84 9.84 0 0 1-1.51-5.22C2.21 6.46 6.63 2.07 12.06 2.07c2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.43-4.42 9.78-9.89 9.78Zm5.39-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.3-.02-.46.13-.61.13-.13.29-.35.43-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.72.23 1.37.2 1.88.12.58-.09 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.56-.35Z" />
                    </svg>

                </span>

            </a>


            {/* =====================================================
                BACK TO TOP + SCROLL PROGRESS
            ====================================================== */}

            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Kembali ke atas"
                className="
                    relative
                    mt-3
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                "
            >

                {/* Background Ring */}
                <svg
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        -rotate-90
                    "
                    viewBox={`0 0 ${size} ${size}`}
                >

                    {/* Grey Track */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        className="text-gray-200"
                    />


                    {/* Progress */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        className="text-cyan-500"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        style={{
                            transition: 'stroke-dashoffset 120ms linear',
                        }}
                    />

                </svg>


                {/* Arrow */}
                <svg
                    className="
                        relative
                        z-10
                        w-5
                        h-5
                        text-cyan-500
                    "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                    />
                </svg>

            </button>

        </div>
    );
}

export default FloatingActions;