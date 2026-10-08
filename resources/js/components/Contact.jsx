import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { i18n } = useTranslation();

    const isEnglish = i18n.language === 'en';

    const text = {
        id: {
            eyebrow: 'Hubungi Kami',
            titleBefore: 'Informasi ',
            titleHighlight: 'Kontak',
            description:
                'Untuk membantu tim Prospero mengenal kebutuhan Anda lebih baik, silakan isi data atau pilih kanal informasi yang paling sesuai.',

            officeTitle: 'Prospero Management',
            address:
                'Jl. Paus No.4, RT.4/RW.8, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220',

            email: 'marketing@havpro.co.id',
            phone: '(+62 21) 478 60056',

            consultationTitle: 'Konsultasikan Kebutuhan Anda',
            consultationDescription:
                'Untuk informasi program, konsultasi, atau kerja sama, pilih kanal informasi yang paling sesuai.',

            whatsapp: 'WhatsApp',
            whatsappBadge: 'Respon Cepat',
            whatsappDescription:
                'Chat langsung dengan tim kami',

            emailTitle: 'Email',
            emailBadge: 'Corporate',
            emailDescription:
                'Kirim email untuk kebutuhan corporate',

            contactTitle: 'Kontak',
            contactBadge: 'Live Chat',
            contactDescription:
                'Hubungi tim kami untuk informasi lebih lanjut',

            socialYoutube: 'YouTube',
            socialFacebook: 'Facebook',
            socialInstagram: 'Instagram',
            socialLinkedIn: 'LinkedIn',
        },

        en: {
            eyebrow: 'Contact Us',
            titleBefore: 'Contact ',
            titleHighlight: 'Information',
            description:
                'To help the Prospero team better understand your needs, please provide your information or choose the most suitable communication channel.',

            officeTitle: 'Prospero Management',
            address:
                'Jl. Paus No.4, RT.4/RW.8, Jati, Kec. Pulo Gadung, East Jakarta, Jakarta 13220, Indonesia',

            email: 'marketing@havpro.co.id',
            phone: '+62 811-xxxx-xxxx',

            consultationTitle: 'Discuss Your Needs',
            consultationDescription:
                'For program information, consultation, or partnership opportunities, choose the most suitable communication channel.',

            whatsapp: 'WhatsApp',
            whatsappBadge: 'Quick Response',
            whatsappDescription:
                'Chat directly with our team',

            emailTitle: 'Email',
            emailBadge: 'Corporate',
            emailDescription:
                'Send an email for corporate inquiries',

            contactTitle: 'Contact',
            contactBadge: 'Live Chat',
            contactDescription:
                'Connect with our team for further information',

            socialYoutube: 'YouTube',
            socialFacebook: 'Facebook',
            socialInstagram: 'Instagram',
            socialLinkedIn: 'LinkedIn',
        },
    };

    const t = isEnglish ? text.en : text.id;

    const mapsUrl =
        'https://maps.app.goo.gl/cFf2n2zdJoJfniTK8';

    const whatsappMessage =
        'Halo Prospero Management, saya ingin mendapatkan informasi mengenai program pelatihan. Mohon dibantu dengan informasi program, jadwal, dan penawaran yang tersedia. Terima kasih.';

    const emailSubject = isEnglish
        ? 'Training Program Information Request - Prospero Management'
        : 'Permintaan Informasi Program Pelatihan - Prospero Management';

    const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            'marketing@havpro.co.id'
        )}&su=${encodeURIComponent(
            emailSubject
        )}&body=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section
            id="contact"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-white
            "
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div
                className="
                    absolute
                    inset-0
                    pointer-events-none
                "
                style={{
                    background: `
                        linear-gradient(
                            115deg,
                            #ffffff 0%,
                            #ffffff 34%,
                            #f8fdfe 48%,
                            #eefafd 64%,
                            #e6f8fb 80%,
                            #e3f8f1 100%
                        )
                    `,
                }}
            ></div>


            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-6
                    pb-20
                    pt-28
                    lg:px-8
                    lg:pb-24
                    lg:pt-32
                "
            >

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        lg:grid-cols-[1fr_1.08fr]
                        lg:gap-7
                    "
                >

                    {/* =================================================
                        LEFT COLUMN
                    ================================================== */}
                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            rounded-2xl
                            bg-white/30
                            p-0
                            lg:pr-6
                        "
                    >

                        {/* HEADER */}
                        <div>

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    tracking-wide
                                    text-sky-600
                                    sm:text-base
                                "
                            >
                                {t.eyebrow}
                            </p>

                            <h1
                                className="
                                    mt-4
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    text-slate-900
                                    sm:text-4xl
                                    lg:text-[2.35rem]
                                "
                            >
                                {t.titleBefore}
                                <span className="text-emerald-500">
                                    {t.titleHighlight}
                                </span>
                            </h1>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                "
                            >
                                {t.description}
                            </p>

                        </div>


                        {/* DIVIDER */}
                        <div
                            className="
                                my-9
                                h-px
                                w-full
                                bg-slate-300
                            "
                        ></div>


                        {/* OFFICE INFORMATION */}
                        <div>

                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    text-sky-600
                                    sm:text-base
                                "
                            >
                                {t.officeTitle}
                            </p>


                            {/* ADDRESS */}
                            <div className="mt-5 flex items-start gap-4">

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-emerald-400
                                        text-white
                                        shadow-sm
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"
                                        />
                                        <circle
                                            cx="12"
                                            cy="10"
                                            r="2.5"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p
                                        className="
                                            text-sm
                                            leading-6
                                            text-slate-700
                                            sm:text-base
                                        "
                                    >
                                        {t.address}
                                    </p>
                                </div>

                            </div>


                            {/* EMAIL */}
                            <div className="mt-5 flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-emerald-400
                                        text-white
                                        shadow-sm
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="18"
                                            height="14"
                                            rx="2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4 7 8 6 8-6"
                                        />
                                    </svg>
                                </div>

                                <a
                                    href={gmailUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-sm
                                        text-slate-700
                                        transition
                                        hover:text-sky-600
                                        sm:text-base
                                    "
                                >
                                    {t.email}
                                </a>

                            </div>


                            {/* PHONE */}
                            <div className="mt-5 flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-emerald-400
                                        text-white
                                        shadow-sm
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.7 3.5 9 3l2 5-2.2 1.6a14.3 14.3 0 0 0 5.6 5.6L16 13l5 2-.5 2.3a2.5 2.5 0 0 1-2.6 1.9C10.5 18.7 5.3 13.5 4.8 5.8A2.5 2.5 0 0 1 6.7 3.5Z"
                                        />
                                    </svg>
                                </div>

                                <a
                                    href={`tel:${t.phone}`}
                                    className="
                                        text-sm
                                        text-slate-700
                                        transition
                                        hover:text-sky-600
                                        sm:text-base
                                    "
                                >
                                    {t.phone}
                                </a>

                            </div>

                        </div>


                        {/* SOCIAL MEDIA */}
                        <div>

                            <div
                                className="
                                    my-9
                                    h-px
                                    w-full
                                    bg-slate-300
                                "
                            ></div>

                            <div className="flex items-center gap-5">

                                {/* YOUTUBE */}
                                <a
                                    href="#"
                                    aria-label={t.socialYoutube}
                                    className="
                                        text-slate-800
                                        transition
                                        hover:text-red-500
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z"
                                        />
                                    </svg>
                                </a>


                                {/* FACEBOOK */}
                                <a
                                    href="#"
                                    aria-label={t.socialFacebook}
                                    className="
                                        text-slate-800
                                        transition
                                        hover:text-blue-600
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a23 23 0 0 0-2.4-.1c-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.3v8h3.2Z"
                                        />
                                    </svg>
                                </a>


                                {/* INSTAGRAM */}
                                <a
                                    href="#"
                                    aria-label={t.socialInstagram}
                                    className="
                                        text-slate-800
                                        transition
                                        hover:text-pink-500
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-6 w-6"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="5"
                                        />
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="4"
                                        />
                                        <circle
                                            cx="17.5"
                                            cy="6.5"
                                            r="1"
                                            fill="currentColor"
                                            stroke="none"
                                        />
                                    </svg>
                                </a>


                                {/* LINKEDIN */}
                                <a
                                    href="#"
                                    aria-label={t.socialLinkedIn}
                                    className="
                                        text-slate-800
                                        transition
                                        hover:text-sky-600
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            d="M5 8H2V21h3V8ZM3.5 3A1.8 1.8 0 1 0 3.5 6.6 1.8 1.8 0 0 0 3.5 3ZM22 13.5c0-3.8-2-5.5-4.7-5.5-2.1 0-3 1.2-3.5 2V8h-3v13h3v-7.1c0-1.9.4-3.7 2.7-3.7 2.2 0 2.2 2.1 2.2 3.8V21h3.3v-7.5Z"
                                        />
                                    </svg>
                                </a>

                            </div>

                        </div>




                    </div>


                    {/* =================================================
                        RIGHT COLUMN
                    ================================================== */}
                    <div
                        className="
                            self-start
                            h-fit
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                            sm:p-8
                            lg:p-7
                        "
                    >

                        {/* HEADER */}
                        <div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    leading-tight
                                    text-slate-950
                                    sm:text-3xl
                                "
                            >
                                {t.consultationTitle}
                            </h2>

                            <p
                                className="
                                    mt-4
                                    max-w-2xl
                                    text-sm
                                    leading-7
                                    text-slate-600
                                    sm:text-base
                                "
                            >
                                {t.consultationDescription}
                            </p>

                        </div>


                        {/* CONTACT OPTIONS */}
                        <div className="mt-8 space-y-4">

                            {/* WHATSAPP */}
                            <a
                                href={`https://wa.me/6285642485189?text=${encodeURIComponent(
                                    whatsappMessage
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-4
                                    transition
                                    duration-300
                                    hover:border-emerald-300
                                    hover:bg-white
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-emerald-500
                                        text-white
                                        shadow-md
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-7 w-7"
                                    >
                                        <path
                                            d="M20 4.1A9.8 9.8 0 0 0 3.1 15.7L2 20l4.4-1.1A9.9 9.9 0 0 0 20 4.1Zm-8 15a8 8 0 0 1-4.1-1.1l-.3-.2-2.6.7.7-2.5-.2-.3A8 8 0 1 1 12 19.1Zm4.5-6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.7.9-.1.1-.2.2-.4.1-2.4-1.2-3.9-3.1-4.3-3.5-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4 0-.1 0-.3-.1-.4l-.6-1.4c-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.5.2-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.5 2.4 3.7 3.2 2.2.9 2.2.6 2.6.6.4 0 1.2-.5 1.4-.8.2-.3.2-.6.1-.8 0-.1-.2-.1-.4-.2Z"
                                        />
                                    </svg>
                                </div>


                                <div className="min-w-0 flex-1">

                                    <div className="flex flex-wrap items-center gap-2">

                                        <span
                                            className="
                                                text-base
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            {t.whatsapp}
                                        </span>

                                        <span
                                            className="
                                                rounded-full
                                                bg-emerald-100
                                                px-2
                                                py-0.5
                                                text-[10px]
                                                font-medium
                                                text-emerald-700
                                            "
                                        >
                                            {t.whatsappBadge}
                                        </span>

                                    </div>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-400
                                        "
                                    >
                                        {t.whatsappDescription}
                                    </p>

                                </div>


                                {/* ARROW */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="
                                        h-5
                                        w-5
                                        shrink-0
                                        text-slate-400
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9 5 7 7-7 7"
                                    />
                                </svg>

                            </a>


                            {/* EMAIL */}
                            <a
                                href={gmailUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-4
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-4
                                    transition
                                    duration-300
                                    hover:border-sky-300
                                    hover:bg-white
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        text-slate-500
                                    "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        className="h-7 w-7"
                                    >
                                        <rect
                                            x="3"
                                            y="5"
                                            width="18"
                                            height="14"
                                            rx="2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4 7 8 6 8-6"
                                        />
                                    </svg>
                                </div>


                                <div className="min-w-0 flex-1">

                                    <div className="flex flex-wrap items-center gap-2">

                                        <span
                                            className="
                                                text-base
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            {t.emailTitle}
                                        </span>

                                        <span
                                            className="
                                                rounded-full
                                                bg-slate-100
                                                px-2
                                                py-0.5
                                                text-[10px]
                                                font-medium
                                                text-slate-500
                                            "
                                        >
                                            {t.emailBadge}
                                        </span>

                                    </div>

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-400
                                        "
                                    >
                                        {t.emailDescription}
                                    </p>

                                </div>


                                {/* ARROW */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="
                                        h-5
                                        w-5
                                        shrink-0
                                        text-slate-400
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                    "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9 5 7 7-7 7"
                                    />
                                </svg>

                            </a>




                        </div>

                    </div>

                </div>

            </div>

        {/* =================================================
            FULL WIDTH LOCATION MAP
        ================================================== */}
        <div
            className="
                relative
                left-1/2
                w-screen
                -translate-x-1/2
                overflow-hidden
                border-y
                border-slate-200
                bg-white
            "
        >
            <iframe
                title={
                    isEnglish
                        ? 'Prospero Management location map'
                        : 'Peta lokasi Prospero Management'
                }
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.90700123922832!2d106.8914297910542!3d-6.195971006394677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5ec79a834bd%3A0xfd1e977090120152!2sGRAHA%20HAVPRO!5e0!3m2!1sid!2sid!4v1789980013925!5m2!1sid!2sid"
                width="800"
                height="600"
                className="
                    block
                    h-[360px]
                    w-full
                    border-0
                    sm:h-[440px]
                    lg:h-[520px]
                "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

        </div>


        </section>
    );
}

export default Contact;
