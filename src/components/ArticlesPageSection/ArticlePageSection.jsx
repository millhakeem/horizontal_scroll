import cls from './ArticlePageSection.module.scss';

export const ArticlePageSection = ({ article }) => {
    const { title, image1, image2, subtitle1, subtitle2, text1, text2 } = article;

    return (
        <section>
            <div className='container'>
                <h2 className='section__title'>{title}</h2>
                <div className={cls.section__block}>
                    <div className={cls.img__wrapper}>
                        <img
                            src={image1}
                            alt='img'
                        />
                    </div>

                    <div className={cls.article}>
                        <h3 className={cls.article__title}>{subtitle1}</h3>
                        <p className={cls.article__text}>{text1}</p>
                    </div>

                    <div className={cls.article}>
                        <h3 className={cls.article__title}>{subtitle2}</h3>
                        <p className={cls.article__text}>{text2}</p>
                    </div>

                    <div className={cls.img__wrapper}>
                        <img
                            src={image2}
                            alt='img'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
