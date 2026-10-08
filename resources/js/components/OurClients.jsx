import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

function OurClients() {
    const { t } = useTranslation();

    const rowOneRef = useRef(null);
    const rowTwoRef = useRef(null);
    const rowThreeRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | BASE PATH WEBSITE
    |--------------------------------------------------------------------------
    | Website berjalan pada:
    | http://localhost/prosperoweb/public/
    |--------------------------------------------------------------------------
    */

    const assetBase = '';

    const rowOne = [
        {
            name: 'Kemenkeu',
            image: `${assetBase}/images/logoclients/kemenkeu.jpg`,
        },
        {
            name: 'BCA Syariah',
            image: `${assetBase}/images/logoclients/bi.png`,
        },
        {
            name: 'Garudafood',
            image: `${assetBase}/images/logoclients/bpjs.png`,
        },
        {
            name: 'PLN',
            image: `${assetBase}/images/logoclients/dki.png`,
        },
        {
            name: 'Kompas',
            image: `${assetBase}/images/logoclients/ojk.png`,
        },
        {
            name: 'Pelindo',
            image: `${assetBase}/images/logoclients/btn.png`,
        },
        {
            name: 'Elnusa',
            image: `${assetBase}/images/logoclients/bankdki.png`,
        },
    ];

    const rowTwo = [
        {
            name: 'AMKRINDO',
            image: `${assetBase}/images/logoclients/kbn.png`,
        },
        {
            name: 'Bank Syariah Indonesia',
            image: `${assetBase}/images/logoclients/kktpelindo.png`,
        },
        {
            name: 'United Tractors',
            image: `${assetBase}/images/logoclients/mti.png`,
        },
        {
            name: 'Bumi Suksesindo',
            image: `${assetBase}/images/logoclients/baznas.png`,
        },
        {
            name: 'Perkasa',
            image: `${assetBase}/images/logoclients/banksumut.png`,
        },
        {
            name: 'PGN Solution',
            image: `${assetBase}/images/logoclients/ppn.png`,
        },
        {
            name: 'Sucofindo',
            image: `${assetBase}/images/logoclients/jiwasraya.png`,
        },
        {
            name: 'Pupuk Indonesia',
            image: `${assetBase}/images/logoclients/biofarma.png`,
        },
    ];

    const rowThree = [
        {
            name: 'MCM',
            image: `${assetBase}/images/logoclients/imm.png`,
        },
        {
            name: 'PermataBank',
            image: `${assetBase}/images/logoclients/tcm.png`,
        },
        {
            name: 'Astra Infra Solutions',
            image: `${assetBase}/images/logoclients/jbg.png`,
        },
        {
            name: 'STBC',
            image: `${assetBase}/images/logoclients/sasa.png`,
        },
        {
            name: 'Bredero Shaw',
            image: `${assetBase}/images/logoclients/unilever.png`,
        },
        {
            name: 'Darya-Varia',
            image: `${assetBase}/images/logoclients/bga.png`,
        },
        {
            name: 'Komatsu',
            image: `${assetBase}/images/logoclients/medco.png`,
        },
        {
            name: 'Client',
            image: `${assetBase}/images/logoclients/philips.png`,
        },
    ];

    const handlePointerDown = (event, ref) => {
        const container = ref.current;

        if (!container) {
            return;
        }

        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }

        container.dataset.dragging = 'true';
        container.dataset.startX = String(event.clientX);
        container.dataset.startScrollLeft = String(
            container.scrollLeft
        );

        container.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event, ref) => {
        const container = ref.current;

        if (!container) {
            return;
        }

        if (container.dataset.dragging !== 'true') {
            return;
        }

        const startX = Number(
            container.dataset.startX || 0
        );

        const startScrollLeft = Number(
            container.dataset.startScrollLeft || 0
        );

        const distance = event.clientX - startX;

        container.scrollLeft =
            startScrollLeft - distance;
    };

    const handlePointerUp = (event, ref) => {
        const container = ref.current;

        if (!container) {
            return;
        }

        container.dataset.dragging = 'false';

        if (container.hasPointerCapture(event.pointerId)) {
            container.releasePointerCapture(event.pointerId);
        }
    };

    const renderLogo = (client, index) => {
        return (
            <div
                key={`${client.name}-${index}`}
                className="flex h-28 w-[190px] shrink-0 items-center justify-center px-5 sm:w-[220px] lg:w-[240px]"
            >
                <img
                    src={client.image}
                    alt={client.name}
                    draggable="false"
                    className="block max-h-20 max-w-full w-auto object-contain"
                />
            </div>
        );
    };

    const renderRow = (
        logos,
        ref,
        animationClass
    ) => {
        return (
            <div
                ref={ref}
                className="client-marquee overflow-hidden"
                onPointerDown={(event) =>
                    handlePointerDown(event, ref)
                }
                onPointerMove={(event) =>
                    handlePointerMove(event, ref)
                }
                onPointerUp={(event) =>
                    handlePointerUp(event, ref)
                }
                onPointerCancel={(event) =>
                    handlePointerUp(event, ref)
                }
            >
                <div
                    className={`client-track ${animationClass}`}
                >
                    {logos.map(renderLogo)}
                    {logos.map(renderLogo)}
                    {logos.map(renderLogo)}
                </div>
            </div>
        );
    };

    return (
        <section
            id="clients"
            className="relative overflow-hidden bg-white py-20 lg:py-24"
        >
            {/* CONTENT */}
            <div className="relative z-10">

                {/* TITLE */}
                <div className="mx-auto mb-12 max-w-7xl px-6 text-center lg:px-8">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        {t('ourClients.eyebrow')}
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        {t('ourClients.title')}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        {t('ourClients.description')}
                    </p>

                </div>

                {/* ROW 1 */}
                <div className="mb-5">
                    {renderRow(
                        rowOne,
                        rowOneRef,
                        'client-track-left'
                    )}
                </div>

                {/* ROW 2 */}
                <div className="mb-5">
                    {renderRow(
                        rowTwo,
                        rowTwoRef,
                        'client-track-right'
                    )}
                </div>

                {/* ROW 3 */}
                <div>
                    {renderRow(
                        rowThree,
                        rowThreeRef,
                        'client-track-left-slow'
                    )}
                </div>

            </div>

            {/* MARQUEE CSS */}
            <style>{`
                .client-marquee {
                    width: 100%;
                    cursor: grab;
                    touch-action: pan-x pan-y;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }

                .client-marquee::-webkit-scrollbar {
                    display: none;
                }

                .client-marquee:active {
                    cursor: grabbing;
                }

                .client-track {
                    display: flex;
                    width: max-content;
                    align-items: center;
                    will-change: transform;
                }

                .client-track-left {
                    animation: clients-left 42s linear infinite;
                }

                .client-track-right {
                    animation: clients-right 48s linear infinite;
                }

                .client-track-left-slow {
                    animation: clients-left 52s linear infinite;
                }

                @keyframes clients-left {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-33.333333%);
                    }
                }

                @keyframes clients-right {
                    from {
                        transform: translateX(-33.333333%);
                    }

                    to {
                        transform: translateX(0);
                    }
                }

                @media (max-width: 640px) {
                    .client-track-left {
                        animation-duration: 34s;
                    }

                    .client-track-right {
                        animation-duration: 39s;
                    }

                    .client-track-left-slow {
                        animation-duration: 44s;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .client-track-left,
                    .client-track-right,
                    .client-track-left-slow {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}

export default OurClients;