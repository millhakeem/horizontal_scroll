import cls from './SliderPageSection.module.scss';

export const SliderPageSection = ({ slides }) => {
    return (
        <section>
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
