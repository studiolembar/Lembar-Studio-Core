export default function Contact() {
    return (
        <section className="contact py-5" id="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-9 col-lg-6">
                        <p className="contact-title">contact us</p>
                        <p className="contact-content">
                            Kami senang untuk dihubungi dan membantu menjawab pertanyaan Anda.
                            Anda dapat menghubungi kami melalui :
                        </p>
                        <div className="row justify-content-center">
                            <div
                                className="col-10 col-lg-5 d-flex align-items-center justify-content-between contact-card shadow"
                            >
                                <a
                                    className="card-content-text text-decoration-none"
                                    target="_blank"
                                    href="https://www.instagram.com/studiolembar/"
                                >
                                    <p className="card-content-title mb-0">Instagram</p>
                                    <p className="card-content-subtitle mb-0">studiolembar</p>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/studiolembar/"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <div
                                className="col-10 col-lg-6 d-flex align-items-center justify-content-between contact-card shadow"
                            >
                                <a
                                    className="card-content-text text-decoration-none"
                                    href="mailto:studiolembar@gmail.com"
                                    target="_blank"
                                >
                                    <div className="">
                                        <p className="card-content-title mb-0">Email</p>
                                        <p className="card-content-subtitle mb-0">
                                            studiolembar@gmail.com
                                        </p>
                                    </div>
                                </a>
                                <a target="_blank" href="mailto:studiolembar@gmail.com">
                                    <i className="fa-regular fa-envelope"></i>
                                </a>
                            </div>
                            <div
                                className="col-10 col-lg-5 d-flex align-items-center justify-content-between contact-card shadow"
                            >
                                <div className="card-content-text">
                                    <p className="card-content-title mb-0">Location</p>
                                    <p className="card-content-subtitle mb-0">Jakarta, Indonesia</p>
                                </div>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-md-3 col-lg-6 d-none d-md-block">
                        <img
                            className="contact-image"
                            src="assets/images/page/contact-image.png"
                            alt="contact-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}