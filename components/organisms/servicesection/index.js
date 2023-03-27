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
                    src="assets/images/page/volcadot.webp"
                    className="image-services-left d-none d-md-block"
                    alt=""
                />
                <img
                    src="assets/images/page/volcadot.webp"
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
                                membantu Anda mencapai tujuan. Dapat disesuaikan dengan
                                kebutuhan Anda, baik untuk usaha maupun personal.
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-11 col-md-7 col-lg-5 d-flex align-items-center shadow service-item"
                    >
                        <div className="service-item-icon">
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                        <div className="service-item-text">
                            <p className="service-item-text-title">Digital Invitation</p>
                            <p className="service-item-text-subtitle">
                                Jaman semakin modern, begitu juga undangan. Buatlah undangan
                                terbaik Anda di sini. Sebuah undangan yang akan dikenang
                                sepanjang masa oleh orang yang melihatnya.
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
                            <p className="service-item-text-title">Web / mobile apps</p>
                            <p className="service-item-text-subtitle">
                                Mudahkan diri Anda dengan membuat aplikasi di sini. Buatlah
                                aplikasi yang dapat membantu inventaris barang Anda atau
                                aplikasi pendaftaran event maupun sekolah atau aplikasi lain
                                yang ada di pikiran Anda.
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
                            <p className="service-item-text-title">Consultant / Mentoring</p>
                            <p className="service-item-text-subtitle">
                                Jika sudah punya aplikasi dan ingin di-maintain dengan baik,
                                Anda dapat menghubungi kami. Kami akan membantu Anda terkait
                                dengan aplikasi-aplikasi yang sudah Anda punya.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}