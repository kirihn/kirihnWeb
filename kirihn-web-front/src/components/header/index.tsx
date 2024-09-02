import { headerProps } from './types';
import logo from '../../assets/ZYKOV.svg';
import Switch from '../localSwitch';
import './style.scss';

export function Header(headerProps: headerProps) {
    return (
        <header className="headerContainer">
            <nav className="navContainer">
                <div className="d1">
                    <img src={logo} alt="LogoImg" className="Logo" />
                </div>
                <div className="d2">
                    <ul className="navUl">
                        <li className="navLi">{headerProps.t('nav.main')}</li>
                        <li className="navLi">
                            {headerProps.t('nav.contacts')}
                        </li>
                        <li className="navLi">{headerProps.t('nav.links')}</li>
                        <li className="navLi">
                            {headerProps.t('nav.projects')}
                        </li>
                        <li className="navLi">{headerProps.t('nav.other')}</li>
                    </ul>
                </div>
                <div className="d3">
                    <Switch></Switch>
                    <div className="AuthButton">
                        {headerProps.t('nav.logIn')}
                    </div>
                </div>
            </nav>
        </header>
    );
}
