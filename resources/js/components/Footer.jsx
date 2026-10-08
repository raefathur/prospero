import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    const navigation = [
        {
            label: t('navbar.home'),
            href: '/',
        },
        {
            label: t('navbar.about'),
            href: '/about',
        },
        {
            label: t('navbar.services'),
            href: '/services',
        },
        {
            label: t('navbar.blog'),
            href: '/blog',
        },
        {
            label: t('navbar.contact'),
            href: '/contact',
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-[#14294d] text-white">

            {/* MAIN FOOTER */}
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                    {/* LEFT */}
                    <div>

                        {/* LOGO */}
                        <a
                            href="/"
                            className="
                                inline-flex
                                items-center
                                shrink-0
                                transition-opacity
                                duration-300
                                hover:opacity-90
                            "
                        >
                            <img
                                src="/images/logo/prosperoputih.png"
                                alt="Prospero"
                                className="
                                    h-auto
                                    w-[200px]
                                    object-contain
                                "
                            />
                        </a>

                        {/* DESCRIPTION */}
                        <p className="mt-6 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base">
                            {t('footer.description')}
                        </p>

                        {/* SOCIAL MEDIA */}
                        <div className="mt-7 flex items-center gap-5">

                            {/* LINKEDIN */}
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.18h4.4V23H.3V8.18ZM7.48 8.18h4.22v2.02h.06c.59-1.12 2.02-2.3 4.16-2.3 4.45 0 5.27 2.93 5.27 6.74V23h-4.4v-7.4c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.91V23h-4.4V8.18Z" />
                                </svg>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-200"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    aria-hidden="true"
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

                        </div>

                    </div>


                    {/* RIGHT */}
                    <div>

                        {/* NAVIGATION */}
                        <nav className="border-b border-white/25 pb-5">
                            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">

                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="
                                                text-sm
                                                font-medium
                                                text-blue-100/80
                                                transition-colors
                                                duration-300
                                                hover:text-white
                                            "
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </nav>


                        {/* NEWSLETTER */}
                        <div className="pt-6">

                            <h2 className="text-2xl font-medium leading-tight text-white sm:text-3xl">
                                {t('footer.newsletterTitle')}
                            </h2>

                            <p className="mt-3 text-sm text-blue-100/70 sm:text-base">
                                {t('footer.newsletterDescription')}
                            </p>


                            <form
                                className="mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                }}
                            >

                                <input
                                    type="email"
                                    placeholder={t('footer.emailPlaceholder')}
                                    aria-label={t('footer.emailPlaceholder')}
                                    className="
                                        h-11
                                        min-w-0
                                        flex-1
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white
                                        px-5
                                        text-sm
                                        text-gray-800
                                        outline-none
                                        placeholder:text-gray-400
                                        focus:ring-2
                                        focus:ring-white/30
                                    "
                                />

                                <button
                                    type="submit"
                                    className="
                                        h-11
                                        rounded-full
                                        border
                                        border-white
                                        px-7
                                        text-sm
                                        font-medium
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:bg-white
                                        hover:text-[#14294d]
                                    "
                                >
                                    {t('footer.submit')}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>


                {/* DIVIDER */}
                <div className="mt-14 border-t border-white/20"></div>


                {/* COPYRIGHT */}
                <div className="pt-7 text-center">

                    <p className="text-sm text-blue-100/65">
                        {t('footer.copyright')}
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;