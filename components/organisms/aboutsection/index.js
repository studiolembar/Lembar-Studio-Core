export default function About() {
    return (
        <section className="about mt-0" id="about">
            <div className="container">
                <div className="row align-items-center about-wrapper">
                    <div className="col-12 col-md-4 col-lg-6 d-none d-md-block">
                        <img
                            className="about-image"
                            src="assets/images/page/about-image.webp"
                            alt="about-image"
                        />
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 about-right">
                        <p className="about-right-title">about us</p>
                        <p className="about-right-text">
                            Lembar Studio adalah sebuah startup yang bergerak di bidang jasa
                            pembuatan aplikasi website dan landing page. Studio Lembar
                            melayani pembuatan aplikasi berbasis website maupun mobile serta
                            memberikan solusi terhadap masalah terkait dengan aplikasi yang
                            sudah ada.
                        </p>
                        <div className="d-flex mt-2">
                            <i className="bi bi-check-circle-fill"></i>
                            <p>
                                Tim profesional kami berkomitmen untuk menyediakan website yang
                                berkualitas tinggi yang dioptimalkan untuk mesin pencari.
                            </p>
                        </div>
                        <div className="d-flex mt-1">
                            <i className="bi bi-check-circle-fill"></i>
                            <p>
                                Kami dapat membantu Anda meningkatkan peringkat website Anda di
                                mesin pencari dengan menggunakan teknik SEO.
                            </p>
                        </div>
                        <div className="d-flex mb-1">
                            <i className="bi bi-check-circle-fill"></i>
                            <p>
                                Kami menyediakan desain website yang menarik, responsif, dan
                                sesuai dengan tren desain terbaru.
                            </p>
                        </div>
                        Terima kasih telah mempertimbangkan layanan kami. Kami sangat
                        berharap dapat bekerja sama dengan Anda dan menciptakan website yang
                        dapat Anda banggakan!
                    </div>
                </div>
            </div>
        </section>
    )
}