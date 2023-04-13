export default function Navbar() {
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-main">
                <div className="container">
                    <a className="navbar-brand" href="#"
                    ><img
                            className="brand-image"
                            src="./assets/images/page/brand.png"
                            alt="brand"
                        />Lembar Studio</a
                    >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul
                            className="navbar-nav mx-lg-auto w-50 justify-content-start justify-content-lg-between"
                        >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-navbar rounded-pill text-light"
                        >Get in touch</a
                        >
                    </div>
                </div>
            </nav>
        </header>
    )
}