import hbImage from "../assets/images/MPLMY/hb.jpeg";
import haqImage from "../assets/images/MPLMY/Screenshot 2024-07-03 185224.png";
import selangorImage from "../assets/images/MPLMY/selangor.jpg";
import todakImage from "../assets/images/MPLMY/todak.jpg";

import { Card, Container, Row, Col, Image } from "react-bootstrap";

const MplMy = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center">TIM DARI MPL MALAYSIA</h1>
        <br />
        <Row>
          <Col md={4} className="mplWrapper" id="mplmy">
            <Card className="mplImage">
              <Image src={hbImage} alt="HomeBois" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">HomeBois</Card.Title>
                  <Card.Text className="text-left">
                    HomeBois didirikan pada tahun 2020 oleh Muhammad “DaddyHood”
                    Farouq, seorang pengusaha muda Malaysia yang juga dikenal
                    sebagai influencer terkenal. Dengan latar belakang yang kuat
                    di dunia gaming dan keinginan besar untuk mengembangkan
                    bakat-bakat muda di Malaysia, DaddyHood memutuskan untuk
                    mendirikannya sebagai platform bagi para pemain esports
                    berbakat. Dalam waktu yang relatif singkat, tim ini berhasil
                    menarik perhatian dengan performa mereka yang mengesankan di
                    berbagai turnamen. Berkat kombinasi antara strategi yang
                    matang, kerja sama tim yang solid, dan semangat juang yang
                    tinggi, mereka dengan cepat menjadi salah satu tim esports
                    yang diperhitungkan di Asia Tenggara. Salah satu momen
                    penting dalam perjalanan mereka adalah saat mereka berhasil
                    lolos ke babak Wildcard MSC 2024. Keberhasilan Homebois di
                    MSC 2024 membuktikan bahwa mereka adalah tim yang patut
                    diperhitungkan.
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
              <Image src={haqImage} alt="Team Haq" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TEAM HAQ</Card.Title>
                  <Card.Text className="text-left">
                    divisi MLBB Team Haq pertama kali diluncurkan pada 2021.
                    Mereka pun debut di turnamen Malaysia Esport Series 2021
                    (MES2021). Di awal tahun 2022, beberapa pemain Team Haq
                    ditransfer ke tim Orange Esports untuk MPL MY Season 9.
                    Bersama Orange Esports mereka pun lolos ke MSC 2022.
                    Setelahnya, roster tersebut kembali ke Team Haq. Di MPL MY
                    Season 10, Team Haq pun membawa nama-nama baru melalui babak
                    Qualifier. Secara mengejutkan, Team Haq berhasil mengalahkan
                    tim juara bertahan, Todak, di babak Grand Final MPL MY S10
                    dengan skor 4-2. Mereka mendapat gelar juara untuk pertama
                    kalinya. Mereka merekrut pemain berbakat dari berbagai
                    turnamen lokal dan menghadapi tantangan besar di awal
                    keikutsertaan mereka di MPL MY. Seiring waktu, Team HAQ
                    menunjukkan kemajuan signifikan dengan kemenangan dalam
                    pertandingan-pertandingan penting hingga berhasil masuk ke
                    mseries season ke 4
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
              <Image src={selangorImage} alt="Selangor" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    SELANGOR RED GIANTS
                  </Card.Title>
                  <Card.Text className="text-left">
                    Selangor Red Giants adalah tim Mobile Legends Professional
                    League (MPL) Malaysia yang telah menunjukkan perkembangan
                    luar biasa dari awal keikutsertaan mereka hingga menjadi
                    juara musim ini. Dibentuk dengan tujuan mengembangkan
                    esports di Selangor, tim ini terdiri dari pemain-pemain
                    berbakat yang direkrut dari berbagai turnamen lokal. Pada
                    awalnya, Selangor Red Giants menghadapi tantangan besar dan
                    melalui masa adaptasi, namun mereka terus memperbaiki
                    strategi dan memperkuat kerjasama tim dengan merekrut
                    pelatih serta pemain berpengalaman. Pada musim terbaru,
                    mereka berhasil menunjukkan dominasi dengan strategi yang
                    solid dan permainan konsisten, sehingga melaju ke babak
                    playoff dan akhirnya menjadi juara. Faktor kunci
                    keberhasilan mereka meliputi pelatihan intensif, strategi
                    matang, dan dukungan fans yang luar biasa. Kesuksesan ini
                    membawa mereka meraih pengakuan sebagai salah satu tim
                    terbaik di Malaysia.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2023
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="mplWrapper">
            <Card className="mplImage">
              <Image src={todakImage} alt="Todak" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Todak</Card.Title>
                  <Card.Text className="text-left">
                    Tim Todak sebelumnya merupakan tim MLBB
                    amatir/semi-profesional dari Malaysia yang memulai langkah
                    mereka sebagai tim esports profesional setelah tampil
                    meyakinkan di Mobile Diamond Challenge MY/SG Season 3,
                    sebuah liga pengembangan dari Moonton untuk tim amatir dan
                    semi-profesional Malaysia. Dalam turnamen tersebut, Todak
                    berhasil keluar sebagai juara, yang membuat Moonton
                    mengundang mereka ke turnamen kasta tertinggi, MPL MY/SG
                    Season 4. Hasil positif di MDC MY/SG Season 3 terus
                    berlanjut hingga penampilan mereka di MPL MY/SG Season 4, di
                    mana sebagai tim debutan, Todak sukses memberi kejutan dan
                    melaju ke partai final, meski akhirnya tunduk dari EVOS SG.
                    Todak juga diundang ke ajang M1 World Championship, di mana
                    mereka berhasil lolos ke semifinal dan menyulitkan Xinnn
                    serta kawan-kawan, meskipun akhirnya tumbang. Prestasi Todak
                    sebagai Top 3 di M1 World Championship pada musim debut
                    mereka benar-benar luar biasa.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Didirikan Pada Tahun 2017
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

export default MplMy;
