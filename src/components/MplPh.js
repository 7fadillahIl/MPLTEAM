import blacklistImage from "../assets/images/MPLPH/blacklist.jpg";
import brenImage from "../assets/images/MPLPH/bren.jpg";
import echoImage from "../assets/images/MPLPH/echo.jpg";
import minanaImage from "../assets/images/MPLPH/minana.jpeg";
import omegaImage from "../assets/images/MPLPH/omega.jpg";
import onicphImage from "../assets/images/MPLPH/onicph.jpg";
import rsgImage from "../assets/images/MPLPH/rsg ph.jpg";
import tncImage from "../assets/images/MPLPH/tnc.jpg";

import { Card, Container, Row, Col, Image } from "react-bootstrap";

const MplPh = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">TIM DARI MPL FILIPINA</h1>
        <br />
        <Row>
          <Col md={4} className="mplWrapper" id="mplph">
            <Card className="mplImage">
              <Image
                src={blacklistImage}
                alt="Blacklist Internasional"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    BLACLIST INTERNASIONAL
                  </Card.Title>
                  <Card.Text className="text-left">
                    Blacklist International adalah sebuah tim professional
                    Mobile Legends yang berasal dari Negara Filipina. Sepanjang
                    sejarah, tim yang dipimpin OhMyV33nus ini beberapa kali
                    berganti nama, dimulai dengan nama SXC Imbalance di awal
                    kemunculannya pada MPL Filipina Season 2. Musim berikutnya,
                    EVOS Esports mengakuisisi tim ini dan mengubah namanya
                    menjadi EVOS PH. Sayangnya kiprah EVOS bersama tim ini tidak
                    berjalan lancar. Dua musim berselang, tim ini punya banyak
                    masalah yang harus mereka hadapi, termasuk indikasi korupsi
                    yang terjadi di manajemen EVOS PH. Akhirnya EVOS mengumumkan
                    membubarkan EVOS PH pada akhir Season 4 MPL Filipina.
                    Beberapa roster yang diakuisisi oleh Tier One Entertainment
                    pun mengumumkan nama baru, yaitu Blacklist International.
                    Tim ini berhasil menjadi juara mworld Championship season ke
                    3
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2020
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={brenImage} alt="Bren Esport" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">FCON AP.BREN</Card.Title>
                  <Card.Text className="text-left">
                    Tim Mobile Legends Bren Esports berkompetisi di turnamen
                    lokal MPL. Pada 22 Juli 2018, Bren Esports mengakuisisi
                    seluruh roster Aether Main yang terdiri dari YellyHaze,
                    Pein, Ribo, Yuji, Coco, dan 666. Roster beranggotakan enam
                    orang ini membawa tim meraih gelar juara pertama mereka pada
                    29 Juli 2018 MSC yang diadakan di Jakarta International
                    Expo, Indonesia. Pada 10 Januari 2020, KarlTzy, Pheww, dan
                    Lastii bergabung dengan roster pemain, bersama dengan Duckey
                    yang menandatangani kontrak sebagai pelatih kepala. FlapTzy
                    kemudian bergabung pada 2 Juli 2020. Pada Oktober 2020,
                    mereka memenangkan kejuaraan MPL Season 6 dalam seri best of
                    7, mengalahkan Smart Omega Esports dengan skor 4-2. Tim ini
                    adalah tim yang berhasil menjuarai kejuaraan mlbb dunia
                    yakni mworld Championship 2 kali, yakni pada season 2 dan
                    season ke 5
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2018
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={echoImage} alt="Echo Proud" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIQUID ECHO</Card.Title>
                  <Card.Text className="text-left">
                    Team Liquid adalah tim esports berbasis di Asia Tenggara di
                    bawah waralaba Team Liquid, organisasi yang berbasis di
                    Belanda. Tim ini berpartisipasi sebagai tim Mobile Legends:
                    Bang Bang profesional dan amatir untuk MPL Filipina dan MDL
                    Filipina. Pada tahun 2024, Team Liquid mengakuisisi saham
                    mayoritas di tim nasional Indonesia, STUN.GG, yang mengelola
                    hak milik AURA Esports, perusahaan induk dari ECHO
                    Philippines. Team Liquid kemudian mengubah nama tim Filipina
                    dan Indonesia untuk MPL dan MDL menjadi AURA Esports.
                    Prestasi mereka yang paling menonjol termasuk memenangkan
                    gelar juara MPL PH Season 9 pada tahun 2022. Kemenangan ini
                    mengukuhkan posisi mereka sebagai salah satu tim terkuat di
                    liga tersebut. Echo berhasil menjuarai mworld Championship
                    pada season ke 4 dengan mengalahkan blacklist internasional
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2020
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={minanaImage} alt="Minana Evos" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MINANA EVOS</Card.Title>
                  <Card.Text className="text-left">
                    Minana EVOS adalah tim Mobile Legends: Bang Bang yang
                    berkompetisi di MPL Filipina. Tim ini adalah hasil
                    kolaborasi antara organisasi Minana dan EVOS Esports, salah
                    satu organisasi esports terbesar di Asia Tenggara. Minana
                    EVOS telah menunjukkan kinerja yang kuat di MPL PH dengan
                    sejumlah penampilan yang konsisten di babak playoff dan
                    beberapa finis di posisi teratas. Meskipun belum meraih
                    gelar juara MPL PH, mereka terus menjadi pesaing tangguh dan
                    berusaha untuk memperkuat posisi mereka di kancah kompetitif
                    Mobile Legends. Minana EVOS, hasil kolaborasi antara Minana
                    dan EVOS Esports, telah meraih beberapa prestasi signifikan
                    di MPL Filipina. Mereka berhasil mencapai babak playoff
                    secara konsisten dan beberapa kali finis di posisi atas,
                    menunjukkan kinerja yang kuat dan stabil. Meskipun mereka
                    belum meraih gelar juara MPL PH, tim ini terus menjadi salah
                    satu pesaing utama di liga, dengan penampilan yang impresif
                    dan peningkatan yang berkelanjutan di setiap musim.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2022
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={omegaImage} alt="Smart Omega" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SMART OMEGA</Card.Title>
                  <Card.Text className="text-left">
                    Smart Omega adalah tim esports yang terkenal di MPL Filipina
                    (MPL PH), didirikan sebagai hasil kolaborasi antara Smart
                    Communications, perusahaan telekomunikasi terkemuka di
                    Filipina, dan Omega Esports, organisasi esports yang
                    berpengalaman dalam berbagai game. Mereka aktif berkompetisi
                    dalam MPL PH, menjadi salah satu tim yang cukup kuat dan
                    konsisten dalam liga tersebut. Smart Omega terus menunjukkan
                    performa yang impresif, berkomitmen untuk meraih prestasi
                    tertinggi dalam kompetisi Mobile Legends di Filipina.
                    Prestasi terbesar mereka datang pada MPL PH Season 6, di
                    mana mereka berhasil mencatatkan kemenangan yang mengesankan
                    dalam best-of-7 series, mengalahkan lawan-lawan tangguh
                    seperti Bren Esports untuk meraih gelar juara. Selain itu,
                    Smart Omega juga dikenal karena pengembangan pemain muda
                    yang potensial dan strategi permainan yang kuat, menjadikan
                    mereka salah satu tim yang patut diperhitungkan dalam scene
                    esports Mobile Legends di Filipina.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2019
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={onicphImage} alt="Onic PH" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    ONIC PHILIPPINES
                  </Card.Title>
                  <Card.Text className="text-left">
                    Onic Philippines, atau ONIC PH, adalah tim esports yang
                    berkompetisi dalam MPL Filipina (MPL PH). Tim ini merupakan
                    bagian dari organisasi esports ONIC Esports yang berasal
                    dari Indonesia, yang telah merambah ke beberapa negara di
                    Asia Tenggara termasuk Filipina. ONIC PH didirikan untuk
                    bersaing dalam MPL PH, dengan fokus utama pada pengembangan
                    bakat lokal dan penampilan kompetitif di tingkat regional.
                    Sejak berdiri, ONIC PH telah menjadi salah satu kekuatan
                    utama dalam MPL PH, sering kali mencapai babak playoff dan
                    menjadi pesaing yang tangguh bagi tim-tim lainnya. Mereka
                    dikenal karena strategi permainan yang solid dan konsistensi
                    dalam performa di sepanjang musim kompetisi. ONIC PH terus
                    berusaha untuk meningkatkan prestasinya dan memperkuat
                    posisinya di kancah esports Mobile Legends di Filipina. Tim
                    ini yang melahirkan Kairi yang disebut-sebut sebagai salah
                    satu jungler terbaik di dunia, yang tentu saja membuat
                    serangan tim ini semakin tajam.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2019
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={rsgImage} alt="RSG PH" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    RSG PHILIPPINES
                  </Card.Title>
                  <Card.Text className="text-left">
                    RSG PH terbentuk sebelum MPL PH Season 8 dimulai, tepatnya
                    pada bulan Juli 2021. Ketika belum berumur satu tahun, tim
                    ini berhasil mendominasi MPL PH Season 9. Bahkan menjadi
                    wakil Filipina di MSC 2022 dan keluar sebagai juaranya. RSG
                    PH, atau Resurgence Philippines, adalah tim esports yang
                    merupakan cabang dari Resurgence, organisasi esports
                    Singapura. Mereka berkompetisi di MPL Filipina (MPL PH)
                    dalam Mobile Legends: Bang Bang. Sejak berdiri, RSG PH telah
                    menunjukkan kemajuan yang signifikan dalam kompetisi, sering
                    kali mencapai babak playoff dan menjadi pesaing yang tangguh
                    di liga ini. Mereka dikenal karena pendekatan yang
                    profesional dalam pengembangan pemain dan strategi permainan
                    yang adaptif, serta berhasil meraih beberapa kemenangan
                    penting dan posisi terhormat di peringkat akhir liga,
                    menegaskan posisi mereka sebagai salah satu kekuatan utama
                    dalam esports Mobile Legends di Filipina.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2021
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={tncImage} alt="TNC PRO TEAM" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TNC PRO TEAM</Card.Title>
                  <Card.Text className="text-left">
                    TNC Pro Team (TNC) merupakan organisasi esports yang
                    terkenal di Asia Tenggara, terutama di Filipina. Mereka
                    berkompetisi dalam MPL PH, di mana mereka menjadi salah satu
                    tim papan atas sejak awal liga ini dibentuk. TNC telah
                    menunjukkan performa konsisten dan berhasil meraih beberapa
                    prestasi gemilang, termasuk masuk ke babak playoff secara
                    rutin dan terlibat dalam pertandingan yang sangat kompetitif
                    melawan tim-tim kuat lainnya. Sejarah TNC di MPL PH mencakup
                    berbagai musim kompetisi di mana mereka terus meningkatkan
                    strategi permainan mereka dan mengembangkan bakat-bakat
                    lokal. Meskipun belum meraih gelar juara MPL PH, TNC tetap
                    menjadi kekuatan yang patut diperhitungkan dalam esports
                    Mobile Legends di Filipina, dengan dukungan kuat dari basis
                    penggemar mereka. TNC Pro Team meningkatkan permainan mereka
                    dan menjadi unggulan kedua di musim reguler, mereka lolos ke
                    final braket atas Playoff MPL Filipina Musim 9.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2021
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MplPh;
