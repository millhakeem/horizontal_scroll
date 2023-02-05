import cls from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Header = () => {
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
                    +7 (495) 495-49-54
                </a>
            </div>
        </header>
    );
};
