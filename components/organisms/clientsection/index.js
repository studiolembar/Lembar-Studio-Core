export default function Client() {
    return (
        <section className="client mt-5 py-5" id="client">
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-lg-5 text-center">
                    <p className="client-header-text">
                        Menciptakan solusi yang inovatif dan <span>berkualitas</span> untuk
                        klien kami adalah<span> tujuan utama kami.</span>
                    </p>
                </div>
            </div>
            {/* Slider content */}
            <div className="row d-flex slider">
                <div
                    className="col-lg-2 m-3 d-flex align-items-center shadow client-border"
                >
                    <img className="w-50 mx-auto" src="assets/images/dummy/kai.png" alt="" />
                </div>
                <div
                    className="col-lg-2 m-3 d-flex align-items-center shadow client-border"
                >
                    <img
                        className="w-75 mx-auto"
                        src="assets/images/dummy/pariwisata-medan.png"
                        alt=""
                    />
                </div>
                <div
                    className="col-lg-2 m-3 d-flex align-items-center shadow client-border"
                >
                    <img
                        className="w-75 mx-auto"
                        src="assets/images/dummy/kementrian-kesehatan.png"
                        alt=""
                    />
                </div>
                <div
                    className="col-lg-2 m-3 d-flex align-items-center shadow client-border"
                >
                    <img
                        className="w-75 mx-auto"
                        src="assets/images/dummy/pariwisata-sumut.png"
                        alt=""
                    />
                </div>
                <div
                    className="col-lg-2 m-3 d-flex align-items-center shadow client-border"
                >
                    <img
                        className="w-75 mx-auto"
                        src="assets/images/dummy/wonderfull-indonesia.png"
                        alt=""
                    />
                </div>
                <div
                    className="col-lg-2 m-3 d-flex justify-content-center align-items-center shadow client-border"
                >
                    <img
                        className="w-50 mx-auto"
                        src="assets/images/dummy/kementrian-desa.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}