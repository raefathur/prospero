import React from 'react';
import { useTranslation } from 'react-i18next';

function BlogSection() {
    const { t } = useTranslation();

    /*
    |--------------------------------------------------------------------------
    | BASE PATH WEBSITE
    |--------------------------------------------------------------------------
    | Website berjalan pada:
    | http://localhost/prosperoweb/public/
    |--------------------------------------------------------------------------
    */

    const assetBase = '/prosperoweb/public';

    const blogs = [
        {
            title: 'blogSection.posts.post1.title',
            date: 'blogSection.posts.post1.date',
            image: `${assetBase}/images/blogs/blog-1.jpg`,
            link: '/blog/effective-leadership-digital-era',
            featured: true,
        },
        {
            title: 'blogSection.posts.post2.title',
            date: 'blogSection.posts.post2.date',
            image: `${assetBase}/images/blogs/blog-2.jpg`,
            link: '/blog/public-seminar-training-evaluation',
            featured: true,
        },
        {
            title: 'blogSection.posts.post3.title',
            date: 'blogSection.posts.post3.date',
            image: `${assetBase}/images/blogs/blog-3.jpg`,
            link: '/blog/human-performance-management',
            featured: false,
        },
        {
            title: 'blogSection.posts.post4.title',
            date: 'blogSection.posts.post4.date',
            image: `${assetBase}/images/blogs/blog-4.jpg`,
            link: '/blog/smart-money-management',
            featured: false,
        },
        {
            title: 'blogSection.posts.post5.title',
            date: 'blogSection.posts.post5.date',
            image: `${assetBase}/images/blogs/blog-5.jpg`,
            link: '/blog/happy-retirement-2024',
            featured: false,
        },
    ];

    const featuredBlogs = blogs.filter(
        (blog) => blog.featured
    );

    const smallBlogs = blogs.filter(
        (blog) => !blog.featured
    );

    return (
        <section
            id="blog"
            className="relative overflow-hidden py-20 lg:py-28"
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
            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-100/20 blur-3xl" />

                <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/20 blur-3xl" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* HEADER */}
                <div className="mb-12 max-w-4xl text-left">

                    {/* SUB TITLE */}
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {t('blogSection.eyebrow')}
                    </p>

                    {/* TITLE */}
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {t('blogSection.title')}{' '}
                        <span className="text-blue-600">
                            &amp; {t('blogSection.titleHighlight')}
                        </span>
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                        {t('blogSection.description')}
                    </p>

                </div>

                {/* FEATURED ARTICLES */}
                <div className="grid gap-5 md:grid-cols-2">

                    {featuredBlogs.map((blog) => (
                        <a
                            key={blog.link}
                            href={blog.link}
                            className="group relative block h-[300px] overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[330px] lg:h-[340px]"
                        >
                            {/* IMAGE */}
                            <img
                                src={blog.image}
                                alt={t(blog.title)}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                            {/* ARTICLE CONTENT */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                                <h3 className="max-w-2xl text-base font-semibold uppercase leading-snug text-white sm:text-lg">
                                    {t(blog.title)}
                                </h3>

                                <p className="mt-3 text-xs font-medium text-gray-200">
                                    {t(blog.date)}
                                </p>

                            </div>
                        </a>
                    ))}

                </div>

                {/* SMALL ARTICLES */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {smallBlogs.map((blog) => (
                        <a
                            key={blog.link}
                            href={blog.link}
                            className="group relative block h-[190px] overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[205px] lg:h-[215px]"
                        >
                            {/* IMAGE */}
                            <img
                                src={blog.image}
                                alt={t(blog.title)}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>

                            {/* ARTICLE CONTENT */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">

                                <h3 className="text-xs font-semibold uppercase leading-snug text-white sm:text-sm">
                                    {t(blog.title)}
                                </h3>

                                <p className="mt-2 text-[9px] font-medium text-gray-200">
                                    {t(blog.date)}
                                </p>

                            </div>
                        </a>
                    ))}

                </div>

                {/* VIEW ALL */}
                <div className="mt-10 flex justify-center">

                    <a
                        href="/blog"
                        className="group inline-flex items-center rounded-full bg-[#05051a] py-1.5 pl-7 pr-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-blue-600"
                    >
                        <span>
                            {t('blogSection.viewAll')}
                        </span>

                        <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-gray-900 transition-transform duration-300 group-hover:translate-x-0.5">
                            →
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default BlogSection;