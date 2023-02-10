import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import cls from './SliderPageSection.module.scss';
import { useMatchMedia } from '../../hooks';

gsap.registerPlugin(ScrollTrigger);

export const SliderPageSection = ({ slides }) => {
    const { isMobile, isDesktop } = useMatchMedia();
    const sectionRef = useRef(null);

    useEffect(() => {
        let element = sectionRef.current;
        slides = gsap.utils.toArray('.slide');

        if (isDesktop) {
            let to = gsap.to(slides, {
                xPercent: -80 * (slides.length - 1),
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
                to.revert();
            };
        }
    }, []);

    return (
        <section ref={sectionRef}>
            <div className='container'>
                <h2 className='section__title'>Lorem ipsum dolor sit amet</h2>
            </div>
            <div className={cls.slider__wrapper}>
                <div className={cls.slider__inner}>
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
            </div>
        </section>
    );
};
