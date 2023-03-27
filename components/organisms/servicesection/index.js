export default function Service() {
    return (
        <section className="services py-5" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        <p className="services-header-title">our services</p>
                        <p className="services-header-text">
                            Kami Menawarkan Solusi Terbaik untuk Kebutuhan Website Anda. Dari
                            <span>Desain yang Menarik</span> hingga
                            <span>Kinerja yang Baik</span> , Kami Siap membantu Bisnis Anda
                            Tumbuh dengan Website yang Berkualitas.
                        </p>
                    </div>
                </div>
                <img
                    src="assets/images/page/volcadot.png"
                    className="image-services-left d-none d-md-block"
                    alt=""
                />
                <img
                    src="assets/images/page/volcadot.png"
                    className="image-services-right d-none d-md-block"
                    alt=""
                />
                <div className="row py-4 justify-content-center">
                    <div
                        className="col-11 col-md-7 col-lg-5 d-flex align-items-center shadow service-item"
                    >
                        <div className="service-item-icon">
                            <i className="bi bi-card-image"></i>
                        </div>
                        <div className="service-item-text">
                            <p className="service-item-text-title">Landing Page</p>
                            <p className="service-item-text-subtitle">
                                Kami akan membuat landing page yang indah, mudah digunakan, dan
                                membantu Anda mencapai tujuan bisnis Anda, dengan bantuan tim
                                kami yang berpengalaman.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-11 col-md-7 col-lg-5 d-flex align-items-center shadow service-item"
                    >
                        <div className="service-item-icon">
                            <i className="fa-regular fa-building"></i>
                        </div>
                        <div className="service-item-text">
                            <p className="service-item-text-title">Company Profile</p>
                            <p className="service-item-text-subtitle">
                                Dengan pengalaman dan keahlian kami dalam bidang industri, kami
                                siap membantu bisnis Anda tumbuh dan berkembang dan meningkatkan
                                jumlah pelanggan anda
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-11 col-md-7 col-lg-5 d-flex align-items-center shadow service-item"
                    >
                        <div className="service-item-icon">
                            <i className="fa-brands fa-chrome"></i>
                        </div>
                        <div className="service-item-text">
                            <p className="service-item-text-title">Web Development</p>
                            <p className="service-item-text-subtitle">
                                Kami dapat membuat website yang sesuai dengan kebutuhan dan
                                tujuan Anda, mulai dari e-commerce, portfolio, blog, hingga
                                website institusional.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-11 col-md-7 col-lg-5 d-flex align-items-center shadow service-item"
                    >
                        <div className="service-item-icon">
                            <i className="bi bi-android2"></i>
                        </div>
                        <div className="service-item-text">
                            <p className="service-item-text-title">Mobile Apps</p>
                            <p className="service-item-text-subtitle">
                                Aplikasi anda akan memiliki fitur canggih dan antarmuka yang
                                intuitif, untuk membantu Anda menjalankan bisnis Anda dengan
                                mudah, di mana saja dan kapan saja.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-11 col-md-7 col-lg-5 d-flex align-items-center shadow service-item"
                    >
                        <div className="service-item-icon">
                            <i className="fa-solid fa-person-chalkboard"></i>
                        </div>
                        <div className="service-item-text">
                            <p className="service-item-text-title">Web Consultant</p>
                            <p className="service-item-text-subtitle">
                                Dapatkan solusi terbaik untuk bisnis Anda dengan tim konsultan
                                kami. Kami memahami dunia digital dan siap membantu Anda
                                mengatasi masalah dan mencapai tujuan bisnis Anda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}