export default function Footer() {
    return (
        <footer className="pt-5 ps-5 pe-5 bg-main text-light">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-md-2 col-lg-2">
                        <h5>Company</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light">home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#about" className="text-decoration-none p-0 text-light"
                                >about</a
                                >
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#services" className="text-decoration-none p-0 text-light"
                                >services</a
                                >
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#faq" className="text-decoration-none p-0 text-light"
                                >faqs</a
                                >
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#contact" className="text-decoration-none p-0 text-light"
                                >contact</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-2 col-lg-2">
                        <h5>Product</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light">home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light"
                                >features</a
                                >
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light"
                                >pricing</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-2 col-lg-2">
                        <h5>Resources</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light"
                                >features</a
                                >
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light"
                                >pricing</a
                                >
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="text-decoration-none p-0 text-light">faqs</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden"
                                >Email address</label
                                >
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control shadow-none"
                                    placeholder="Email address"
                                />
                                <button className="btn btn-danger" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-between align-items-center py-4 mt-4 border-top"
                >
                    <p>
                        <a
                            className="navbar-brand me-1 text-light text-decoration-none"
                            href="#"
                        >Lembar | Studio</a
                        >
                    </p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-danger text-light" href="#"
                            ><i className="bi bi-twitter"></i
                            ></a>
                        </li>
                        <li className="ms-3">
                            <a className="link-danger text-light" href="#"
                            ><i className="bi bi-instagram"></i
                            ></a>
                        </li>
                        <li className="ms-3">
                            <a className="link-danger text-light" href="#"
                            ><i className="bi bi-facebook"></i
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}