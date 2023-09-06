import '../../styles/Footer.css'

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__container wrapper">
                <nav className="header__navigation footer__navigation">
                    <a href="http://localhost:3000/Fish#gallery" className="header__link footer__link">Gallery</a>
                    <a href="http://localhost:3000/Fish#menu" className="header__link footer__link">Menu</a>
                    <a href="https://github.com/JI3BA" target="_blank" rel="noreferrer" className="header__link footer__link">
                        <svg width="100px" height="30px" viewBox="0 4 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='header__logo' d="M2 15C3.83333 12.3333 8.8 7 14 7C14.9226 7 15.7539 7.10492 16.5 7.28685M2 9C3.83333 11.6667 8.8 17 14 17C14.9226 17 15.7539 16.8951 16.5 16.7132M16.5 16.7132C19.9595 15.8697 22 12 22 12C22 12 19.9595 8.13032 16.5 7.28685M16.5 16.7132C15.5 15.1667 14.1 11.1163 16.5 7.28685M12 10.5C11.5 11 10.8 12.3 12 13.5" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                            <path className='header__logo' d="M18 11H18.001" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                        </svg>
                    </a>
                    <a href="http://localhost:3000/Fish#recipes" className="header__link footer__link">Recipes</a>
                    <a href="http://localhost:3000/Fish#contacts" className="header__link footer__link">Contacts</a>
                </nav>
            </div>
        </div>
    )
}