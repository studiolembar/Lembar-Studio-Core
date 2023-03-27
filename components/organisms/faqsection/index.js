export default function Faq() {
    return (
        <section className="faq py-5" id="faq">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6 text-center">
                        <p className="faq-header-title">faqs</p>
                        <p className="faq-header-text">
                            Temukan <span>Jawaban</span> untuk Setiap Pertanyaan yang Anda
                            Miliki dengan Bantuan FAQ Kami.
                        </p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-4 col-lg-4 d-none d-md-block">
                        <img
                            className="w-100 faq-image"
                            src="assets/images/page/faq-image.png"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-8 col-md-8 col-12 faq-content">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button
                                        className="accordion-button collapsed shadow-none bg-white text-dark"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        <strong>Bagaimana cara kerja kami?</strong>
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body pt-0">
                                        Kami akan bekerja sama dengan Anda untuk memahami kebutuhan
                                        dan tujuan Anda, kemudian menciptakan konsep dan desain
                                        website yang sesuai. Setelah persetujuan konsep dan desain,
                                        kami akan mengembangkan website dan melakukan tes untuk
                                        memastikan kualitas dan kompatibilitas. Setelah website
                                        selesai, kami akan memberikan dukungan dan maintenance untuk
                                        memastikan website selalu up-to-date dan berfungsi dengan
                                        baik.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button
                                        className="accordion-button collapsed shadow-none bg-white text-dark"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        <strong
                                        >Berapa biaya yang dibutuhkan untuk membuat
                                            website?</strong
                                        >
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body pt-0">
                                        Biaya pembuatan website bervariasi tergantung pada kebutuhan
                                        dan tujuan Anda. Kami akan memberikan estimasi biaya setelah
                                        mendiskusikan kebutuhan Anda dengan Anda.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button
                                        className="accordion-button collapsed shadow-none bg-white text-dark"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        <strong
                                        >Berapa lama waktu yang dibutuhkan untuk membuat
                                            website?</strong
                                        >
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body pt-0">
                                        Waktu yang dibutuhkan untuk membuat website bervariasi
                                        tergantung pada kompleksitas dan kebutuhan website. Kami
                                        akan memberikan estimasi waktu setelah mendiskusikan
                                        kebutuhan Anda dengan Anda.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button
                                        className="accordion-button collapsed shadow-none bg-white text-dark"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour"
                                    >
                                        <strong
                                        >Apakah kami dapat membantu dalam pemasaran website
                                            setelah selesai dibuat?</strong
                                        >
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingFour"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body pt-0">
                                        Ya, kami menawarkan layanan pemasaran digital untuk membantu
                                        Anda meningkatkan visibilitas website Anda dan mengarahkan
                                        lebih banyak traffic ke website Anda.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}