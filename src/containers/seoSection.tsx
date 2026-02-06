import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


export default function SeoSection() {
    const seoSectionContent = [
        {
            title: "⚡ Performance",
            list: [
                {
                    description: "<b>Asset Compression:</b> Using modern formats like WebP or AVIF reduces file size without sacrificing quality, leading to snappy load times.",
                },
                {
                    description: "<b>Resource Prioritization:</b> Implementing lazy-loading ensures the browser only downloads images as they enter the viewport, saving bandwidth.",
                },
            ],
        },
        {
            title: "🔍 Visibility (SEO)",
            list: [
                {
                    description: "<b>Search Engine Indexing:</b> Descriptive alt text and proper filenames help search engines understand your content, boosting your rankings in image searches.",
                },
                {
                    description: "<b>Core Web Vitals:</b> Optimized images prevent \"Layout Shift\" (CLS), which Google uses as a key metric for ranking high-quality user experiences.",
                },
            ],
        },
        {
            title: "♿ Accessibility",
            list: [
                {
                    description: "<b>Screen Reader Support:</b> Detailed image descriptions allow users with visual impairments to navigate your site with the same level of context as any other visitor.",
                },
                {
                    description: "<b>Semantic HTML:</b> Using proper tags provides structural meaning, making the web a more inclusive space for everyone.",
                },
            ],
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".seoSection",
                start: "top 50%",
                end: "bottom 20%",
                once: true,
            },
        });
        tl.fromTo(".seoSection__content__info", {
            opacity: 0,
            x: -100,
        }, {
            opacity: 1,
            x: 0,
        });
        tl.fromTo(".seoSection__content__info__item", {
            opacity: 0,
            x: -100,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.inOut",
        });
        tl.fromTo(".seoSection__content__assetContainer", {
            opacity: 0,
            x: 100,
        }, {
            opacity: 1,
            x: 0,
        });
    });
    return (
        <section id="seo" className="seoSection">
            <div className="container">
                <h2 className="sectionTitle">I improve your website's <b>Ranking</b></h2>
                <div className="seoSection__content">
                    <div className="seoSection__content__info">
                        {seoSectionContent.map((item) => (
                            <div className="seoSection__content__info__item" key={item.title}>
                                <h3 className="seoSection__content__info__item__title">{item.title}</h3>
                                <ul className="seoSection__content__info__item__list">
                                    {item.list.map((listItem, index) => (
                                        <li key={`${item.title}-${index}`}>
                                            <span dangerouslySetInnerHTML={{ __html: listItem.description }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="seoSection__content__assetContainer">
                        <div className="seoSection__content__asset">
                            <DotLottieReact src="/lotties/technicalSeoAnimation.json" loop={true} autoplay={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}