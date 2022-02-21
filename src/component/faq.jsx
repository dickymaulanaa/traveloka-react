import { Accordion, Container } from "react-bootstrap"
import "./faq.css"

const Faq = () => {
    return <>
        <Container fluid className="pb-5">
            <Container>
                <div className="faq d-block mx-auto mt-2">
                    <center><h3>Bus & Travel Frequently Asked Questions</h3></center>
                    <Accordion className="mt-3">
                        <Accordion.Item eventKey="0" className="itemFaq">
                            <Accordion.Header>Bagaimana cara bepergian dengan bus selama pandemi COVID-19?
                            </Accordion.Header>
                            <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="itemFaq ">
                            <Accordion.Header>Bagaimana jaminan kebersihan yang diterapkan oleh Bus & Travel Traveloka?
                            </Accordion.Header>
                            <Accordion.Body className="blue">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className="itemFaq ">
                            <Accordion.Header>Apakah bisa melakukan pengembalian atau perubahan jadwal setelah memesan tiket?
                            </Accordion.Header>
                            <Accordion.Body className="blue">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className="itemFaq ">
                            <Accordion.Header>Apakah bisa memilih nomor kursi? </Accordion.Header>
                            <Accordion.Body className="blue">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className="itemFaq ">
                            <Accordion.Header>Bagaimana cara menggunakan e-tiket bus Traveloka? </Accordion.Header>
                            <Accordion.Body className="blue">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5" className="itemFaq ">
                            <Accordion.Header>Berapa lama sebelum perjalanan saya bisa membeli tiket bus? </Accordion.Header>
                            <Accordion.Body className="blue">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="faq d-block mx-auto mt-3">
                    <center><h3>Rute Bus & Travel Populer</h3></center>
                    <div className="rute mx-auto d-block py-4 d-flex flex-wrap justify-content-center" >
                        <div className="tabel rounded-3 border mx-2 my-3">
                            <table className="table table-striped table-borderless">
                                <thead className="tabel-img-jkt">
                                    <th colspan="2" className="title text-center">Tiket bus dan travel dari</th>
                                    <tr>
                                        <th className="tbl-head px-4 py-1">Jakarta ke</th>
                                        <th className="tbl-head px-4 py-1 text-center">Harga mulai:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tabel rounded-3 border mx-2 my-3">
                            <table className="table table-striped table-borderless">
                                <thead className="tabel-img-jkt">
                                    <th colspan="2" className="title text-center">Tiket bus dan travel dari</th>
                                    <tr>
                                        <th className="tbl-head px-4 py-1">Jakarta ke</th>
                                        <th className="tbl-head px-4 py-1 text-center">Harga mulai:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tabel rounded-3 border mx-2 my-3">
                            <table className="table table-striped table-borderless">
                                <thead className="tabel-img-jkt">
                                    <th colspan="2" className="title text-center">Tiket bus dan travel dari</th>
                                    <tr>
                                        <th className="tbl-head px-4 py-1">Jakarta ke</th>
                                        <th className="tbl-head px-4 py-1 text-center">Harga mulai:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tabel rounded-3 border mx-2 my-3">
                            <table className="table table-striped table-borderless">
                                <thead className="tabel-img-jkt">
                                    <th colspan="2" className="title text-center">Tiket bus dan travel dari</th>
                                    <tr>
                                        <th className="tbl-head px-4 py-1">Jakarta ke</th>
                                        <th className="tbl-head px-4 py-1 text-center">Harga mulai:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tabel rounded-3 border mx-2 my-3">
                            <table className="table table-striped table-borderless">
                                <thead className="tabel-img-jkt">
                                    <th colspan="2" className="title text-center">Tiket bus dan travel dari</th>
                                    <tr>
                                        <th className="tbl-head px-4 py-1">Jakarta ke</th>
                                        <th className="tbl-head px-4 py-1 text-center">Harga mulai:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="tabel rounded-3 border mx-2 my-3">
                            <table className="table table-striped table-borderless">
                                <thead className="tabel-img-jkt">
                                    <th colspan="2" className="title text-center">Tiket bus dan travel dari</th>
                                    <tr>
                                        <th className="tbl-head px-4 py-1">Jakarta ke</th>
                                        <th className="tbl-head px-4 py-1 text-center">Harga mulai:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>
                                    <tr>
                                        <td className="tbl-city px-4 py-4"><a href="#1">Bandung</a></td>
                                        <td className="tbl-price px-4 py-4 text-center">Rp70.000</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div className="faq d-block mx-auto mt-2">
                    <center><h4>Rencanakan Perjalanan: Pesan Tiket Bus dan Travel Shuttle Lewat Agen Tiket Bus Online, Traveloka Lifestyle SuperApps</h4></center>
                    <p className="plan-trip mt-4">Bersiaplah mendapatkan kemudahan lebih saat merencanakan perjalanan untuk liburan, atau perjalanan tiket bus lebaran atau pulang kampung menggunakan bus/travel shuttle atau bus antarkota dengan Traveloka. Fitur terbaru Traveloka ini membuat pemesanan tiket bus dan travel shuttle jadi semudah belanja online. Dengan moto 3P, Anda cukup melakukan tiga langkah saja–Pilih bus/travel sesuai kebutuhan, Pesan tiket bus/travel yang diinginkan, lalu Pergi dengan nyaman dan tenang karena semuanya beres dalam sekejap.</p>

                    <p className="plan-trip mt-1">Berikut adalah beberapa tips agar beli tiket di Traveloka semakin mudah dan perjalanan Anda pun semakin lancar!</p>
                    <div className="d-flex justify-content-between mt-5">
                        <div className="w-75 p-0">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/11/26/1543203744572-d81de25608559089f33456ad5ca85824.png" alt="img"
                                className="img-plan-trip w-100" style={{ marginLeft: "-56px" }} />
                        </div>
                        <div className="plan-trip w-100">
                            <h4>Sebelum Membeli Tiket</h4>
                            <p className="plan-trip">1. Tentukan detail utama perjalanan Anda, seperti tujuan, tanggal pergi dan pulang, jumlah penumpang, dan bujet perjalanan.</p>
                            <p className="plan-trip">2. Tentukan batas waktu pembelian tiket. Tiket bus/travel biasanya tersedia sejak 90 hari sampai 2 hari sebelum keberangkatan. Sebaiknya, beli tiket bus/travel online kira-kira 5 hari sebelum keberangkatan agar tidak kehabisan.</p>
                            <p className="plan-trip">3. Buka aplikasi atau situs web Traveloka. Di sini, Anda bisa melihat info lengkap untuk perjalanan Anda, seperti pilihan bus/travel yang tersedia (termasuk fasilitasnya), kisaran harga tiketnya, rute yang dilewati, serta durasi perjalanannya. Pilih bus/travel yang sesuai dengan kebutuhan Anda, lalu lengkapi data penumpang yang diminta.</p>
                        </div>

                    </div>

                    <div className="d-flex justify-content-between mt-5">
                        <div className="plan-trip-left w-100">
                            <h4>Setelah Membeli Tiket</h4>
                            <p className="plan-trip">1. Setelah mendapatkan e-tiket Traveloka Anda, perhatikan informasi di bagian atas e-tiket. Lihat apakah Anda perlu menukarkan e-tiket Traveloka Anda dengan tiket kertas dari operator bus/travel. Jika tidak, maka Anda cukup menunjukkan e-tiket Traveloka di handphone Anda untuk naik ke bus/travel.</p>
                            <p className="plan-trip">2. Perhatikan juga info-info penting lain di e-tiket seperti Kode Booking, No. Pesanan Traveloka, titik naik, dan titik turun agar tidak kesulitan atau bingung pada saat keberangkatan dan dalam perjalanan.</p>

                        </div>
                        <div className="w-75 p-0">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/11/26/1543203833074-b6a43087062e5f17206baf3bd8267bef.png?tr=q-75" alt="img"
                                className="img-plan-trip w-100" style={{ marginRight: "-56px" }} />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-5">
                        <div className="w-75 p-0">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/11/26/1543203866993-3eb0b62705b0c0a6dd06d161c70a3e9d.png?tr=q-75" alt="img"
                                className="img-plan-trip w-100" style={{ marginLeft: "-56px" }} />
                        </div>
                        <div className="plan-trip w-100">
                            <p className="plan-trip">3. Siapkan barang-barang yang wajib Anda bawa, seperti kartu identitas dan e-tiket Traveloka. Selain itu, persiapkan juga barang-barang untuk membuat perjalanan Anda lebih nyaman, seperti HP, charger, powerbank, headset, kamera, obat, camilan, minuman, jaket, dan kaos kaki.</p>
                            <p className="plan-trip">4. Di hari keberangkatan, pastikan Anda tiba di titik keberangkatan tepat waktu (min, 60 menit sebelum berangkat) untuk melakukan proses verifikasi atau check-in. Traveloka memberikan Jaminan Tiket Resmi, untuk menjamin tiket Anda diterima oleh staf bus/travel.</p>
                            <p className="plan-trip">5. Waktunya duduk santai dan nikmati perjalanan Anda di bus/travel shuttle hingga tiba di tujuan!</p>
                        </div>

                    </div>
                </div>

                <div className="faq d-block mx-auto mt-5 mb-5">
                    <center><h4>Beli Tiket Bus & Travel Online di Traveloka, Perjalanan Mulus dan Untung Terus</h4></center>
                    <p className="plan-trip mt-5 ">
                        Sejak 16 Maret 2018, Traveloka mulai memperkenalkan fitur pemesanan tiket bus online & tiket travel online dan menjadi salah satu agen tiket bus travel online melalui Traveloka App versi 2.21. Layanan ini memberikan kemudahan beli tiket bus & travel antarkota-antarprovinsi karena calon penumpang tak lagi harus antre membeli tiket bus di loket atau mendatangi agen tiket tertentu. Bahkan, layanan pesan tiket bus & travel online ini sekarang juga sudah tersedia di situs mobile Traveloka.
                    </p>
                    <p className="plan-trip ">
                        Traveloka juga tidak tanggung-tanggung dalam memberikan layanan pesan tiket bus & travel. Calon penumpang yang ingin beli tiket bus online di Traveloka bisa menemukan pilihan yang begitu lengkap. Hingga saat ini, Traveloka telah menjalin kemitraan dengan 57 Perusahaan Otobus (PO) dan travel shuttle ternama di berbagai kota dan provinsi di Tanah Air.
                    </p>
                    <p className="plan-trip ">
                        Dari segi fasilitas bus, Traveloka juga memastikan penggunanya dapat memilih berbagai jenis bus berdasarkan kebutuhan. Kelas bus dan travel tersedia mulai dari Premium, VIP, Bisnis, Eksekutif, hingga Super Eksekutif. Penumpang dapat menikmati beragam fasilitas bus seperti AC, kursi recliner, toilet, WiFi, dan stopkontak, tergantung kelas dan jenis bus yang dipilih.
                    </p>
                    <p className="plan-trip ">
                        Selain yang sudah disebutkan di atas, masih ada berbagai keuntungan lain yang bisa didapatkan ketika pesan tiket bus online melalui Traveloka Lifestyle SuperApp. Penasaran? Simak uraian di bawah ini.
                    </p>
                    <h5 className="fw-bold">1. Pilih, Pesan, Pergi</h5>
                    <p className="plan-trip ">Dengan aplikasi dan situs mobile Traveloka, pesan tiket bus dan travel tak lagi seribet dulu. Anda tinggal membuka Traveloka App di ponsel, di mana saja dan kapan saja. Proses beli tiket bus dan travel online via ponsel ini sangat mudah, cepat, dan aman. Anda juga tidak perlu lagi repot membuang waktu dan energi untuk mendatangi loket penjualan tiket yang kerap disesaki antrean. Bahkan, layanan yang dihadirkan Traveloka ini bisa dibilang memberikan pengalaman booking tiket bus dan travel semudah belanja online. Anda juga tak perlu khawatir jika sewaktu-waktu mengalami kendala dalam pemesanan tiket bus dan travel. Traveloka sudah menyediakan layanan pelanggan yang siap membantu selama 24 jam penuh, baik melalui chat, telepon, email, maupun dengan mengirim pesan melalui Traveloka App.</p>

                    <h5 className="fw-bold">2. Pilihan Tak Terbatas</h5>
                    <p className="plan-trip ">
                        Traveloka bekerja sama secara resmi dengan beragam operator bus (PO) dan travel yang melayani ratusan rute ke berbagai kota dan provinsi di Indonesia. Saat ini, tercatat ada 57 rekan PO dan travel di Traveloka. Beberapa mitra PO ternama yang sudah bekerja sama dengan Traveloka adalah Budiman, Pahala Kencana, Agra Mas, Lorena, Primajasa, ALS, Rosalia Indah, Sempati Star, Nusantara, DAMRI, Gunung Harta, Kramat Djati, Efisiensi, Big Bird, Bejeu, dan Garuda Mas. Sementara itu, Traveloka juga sudah menjalin kerja sama dengan Cititrans dan Daytrans Shuttle untuk menyediakan layanan travel (shuttle). Rute yang dilayani pun banyak, terutama untuk kota-kota populer seperti Jakarta, Surabaya, Medan, Denpasar, Yogyakarta, Malang, Semarang, Bandung, Makassar, Solo, dan Palangkaraya. Jumlah ini tentunya akan terus bertambah ke depannya, baik untuk mitra PO dan travel maupun pilihan rute.
                    </p>

                    <h5 className="fw-bold">3. Informasi Lengkap</h5>
                    <p className="plan-trip ">
                        Saat pesan bus online di Traveloka, Anda dapat dengan mudah menemukan informasi lengkap mengenai perjalanannya. Informasi perihal detail harga, rute, waktu dan titik berangkat maupun tiba, pilihan jenis bus, spesifikasi bus, hingga foto tampilan bus, semua tersedia langsung di aplikasi dan situs mobile. Anda pun bisa langsung melakukan perbandingan dan memilih bus yang paling sesuai dengan kebutuhan hanya dengan beberapa klik saja.
                    </p>

                    <h5 className="fw-bold">4. Metode Pembayaran Lengkap</h5>
                    <p className="plan-trip ">
                        Traveloka memastikan pengguna dapat menyelesaikan pembayaran tiket bus dan travel dengan cepat dan aman. Berkat kerja sama resmi Traveloka dengan berbagai bank besar di Tanah Air, metode pembayaran yang tersedia pun lengkap untuk menambah kenyamanan konsumen. Anda dapat melakukan pembayaran di Indomaret dan Alfamart, atau melalui kartu kredit, transfer bank, dan ATM.
                    </p>

                    <h5 className="fw-bold">5. Harga Lebih Murah</h5>
                    <p className="plan-trip ">
                        Untuk semua layanannya, Traveloka selalu menawarkan harga terbaik untuk penggunanya. Begitu pula dengan layanan booking tiket bus dan travel online ini. Seluruh tiket bus dan travel di Traveloka ditawarkan dengan harga lebih rendah dari pasarannya. Promo menarik yang kerap diperbarui setiap beberapa bulan sekali pun siap menjadikan biaya beli tiket bus dan travel di Traveloka lebih murah lagi.
                    </p>

                    <h5 className="fw-bold">6. Jaminan Tiket Resmi</h5>
                    <p className="plan-trip ">
                        Traveloka menjalin kerja sama resmi dengan operator bus dan travel sehingga informasi tiket yang Anda beli sudah dikoordinasikan kepada semua staf di titik keberangkatan. Anda tinggal menunjukkan e-tiket Traveloka dan langsung bisa naik ke bus untuk memulai perjalanan. Jika pun terjadi masalah pada tiket seperti e-tiket ditolak, kursi diambil orang lain, atau bus berangkat lebih cepat, maka Traveloka siap memberikan kendaraan pengganti atau mengembalikan dana Anda 100%.

                    </p>
                    <p className="plan-trip ">
                        Yuk, siapkan diri Anda untuk perjalanan yang mulus dan untung terus dengan tiket bus dan travel dari Traveloka!
                    </p>
                </div>
            </Container>
        </Container>
    </>
}

export default Faq