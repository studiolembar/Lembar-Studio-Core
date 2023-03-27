export default function Hero() {
    return (
        <section className="hero py-3">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6 col-lg-5">
                        <h1 className="hero-title">
                            BUAT BISNISMU LEBIH
                            <span>MENARIK</span> BERSAMA KAMI
                        </h1>
                        <p className="hero-subtitle text-dark">
                            Melayani Pembuatan Aplikasi Website dan Landing Page untuk jangkau
                            lebih banyak pelanggan !
                        </p>
                        <a
                            href="#client"
                            className="btn btn-gradient px-4 py-2 rounded-pill text-light fs-5 fw-bold"
                        >GET STARTED</a
                        >
                    </div>
                    <div className="col-12 col-md-8 col-lg-7 d-none d-md-none d-lg-block">
                        <div className="image-hero">
                            <img
                                className="w-125"
                                src="/assets/images/page/hero-image.png"
                                alt="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}