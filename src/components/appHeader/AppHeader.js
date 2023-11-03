import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="App__header">
            <h1 className="App__title">
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="App__menu">
                <ul>
                    <li>
                        <a href="#">Characters</a>
                    </li>
                    /
                    <li>
                        <a href="#">Comics</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;