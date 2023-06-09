import Menu from '../img/Hamburger Menu.png';
import close from '../img/close.png';
import { useState } from "react";

export default function Hero() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
  setMenuOpen(!isMenuOpen);
};

    return (
        <section className="hero">
            <header>
                <h1 className='logo'>ARTJUNKS</h1>
                <img
                    className={isMenuOpen ? 'close-menu' : 'open-menu'}
                    src={isMenuOpen ? close : Menu}
                    onClick={toggleMenu}
                    alt="Menu"
                />
                {isMenuOpen && (
                <nav>

                {/* <img className='close-menu' src={close}></img> */}
                    <ul id='primary-navbar'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Artists</a>
                        </li>
                        <li>
                            <a href='#'>News</a>
                        </li>
                        <li>
                            <a href='#'>Company</a>
                        </li>
                    </ul>
                </nav>
                  )}
            </header>
            <main className='intro'>
                <div className='shape'></div>

                <h1 className='intro--title'>Art pieces made easy accessible for everyone</h1>

                <p className='intro--text'>Learn, buy and trade art pieces of your favorite artist around the world by using crypto currencies.</p>

                <button>Learn more</button>
            </main>
        </section>
    )
}