import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as CallIcon } from '../../assets/call.svg';
import { useMatchMedia } from '../../hooks';
import cls from './Header.module.scss';

export const Header = () => {
    const { isMobile } = useMatchMedia();

    return (
        <header className={cls.header}>
            <div className={cls.header__content}>
                <span className={cls.header__content__logo}>
                    <Logo />
                </span>
                <a
                    href='tel:+7 (495) 495-49-54'
                    className={cls.header__content__number}
                >
                    {isMobile ? <CallIcon /> : '+7 (495) 495-49-54'}
                </a>
            </div>
        </header>
    );
};
