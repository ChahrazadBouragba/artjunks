import Menu from '../img/Hamburger Menu.png';
import Background from '../img/Background.png';

export default function Hero() {
    return (
        <section className="hero">
            <header>
                <h1 className='logo'>ARTJUNKS</h1>
                <img src={Menu}></img>
                <nav>

                <button className='close-menu' aria-controls='primary-navbar' aria-expanded='false'>
                    <span className='sr-only'></span>
                </button>
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