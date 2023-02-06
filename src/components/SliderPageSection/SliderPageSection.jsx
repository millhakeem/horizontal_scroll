import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import cls from './SliderPageSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const SliderPageSection = ({ slides }) => {
    const sectionRef = useRef();

    useEffect(() => {
        const element = sectionRef.current;
        let slides = gsap.utils.toArray('.slide');

        let to = gsap.to(slides, {
            xPercent: -75 * (slides.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
                markers: false,
                scrub: 1,
                // snap: 1 / (slides.length - 1),
                invalidateOnRefresh: true,
                start: '-20% top',
                end: () => '+=' + window.innerWidth,
            },
        });

        return () => {
            to.kill();
        };
    }, []);

    return (
        <section ref={sectionRef}>
            <div className='container'>
                <h2 className='section__title'>Lorem ipsum dolor sit amet</h2>
            </div>
            <div className={cls.slider__wrapper}>
                {slides &&
                    slides.map((slide) => (
                        <div
                            className={`${cls.image_wrapper} slide`}
                            key={slide?.id}
                        >
                            <img
                                src={slide?.path}
                                alt='slide name'
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
};
