import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/user.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
 
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            KENDİMİ TANITMAM <span className="purple"> GERECEKSE </span>
            </h1>
            <p className="home-about-body">
              Merhaba, ben Egehan! Kendimi bir "öğrenme tutkunu" ve "dijital gezgin" olarak tanımlıyorum. Çocukluğumdan bu yana teknolojiyle büyüdüm ve bu dünyada her gün yeni şeyler keşfetmek benim için vazgeçilmez bir tutku haline geldi. 4 yaşında bir bilgisayarla tanışmamdan bu yana, yazılım benim için yalnızca bir meslek değil, aynı zamanda kendimi ifade etmenin ve yaratmanın bir yolu oldu.  
              <br />
              <br />
              Şu an en çok ilgilendiğim alanlar arasında 
              <i>
                <b className="purple"> JavaScript, React.js, Node.js </b>
              </i> 
              ve diğer yenilikçi teknolojiler yer alıyor. Web geliştirme ve açık kaynak projelerine katkıda bulunarak, yalnızca teknik becerilerimi geliştirmekle kalmıyor, aynı zamanda bu büyüleyici topluluğun bir parçası olmanın keyfini çıkarıyorum. Hatta geliştirdiğim projelerden biri, dil öğrenmek isteyenlere yardımcı olan bir uygulama olan 
              <b className="purple"> "Translate Me!" </b>
              oldu.  
              <br />
              <br />
              Fakat hayatım yalnızca yazılım geliştirmekle sınırlı değil. Sanat, felsefe, dil ve edebiyat gibi disiplinlere duyduğum ilgi, beni bu alanlarda da keşfe çıkarıyor. Özellikle Japon edebiyatına ve mitolojiye olan ilgim, hem düşünce dünyamı zenginleştiriyor hem de yazılım projelerimde daha yaratıcı bir bakış açısı geliştirmemi sağlıyor. En sevdiğim yazarlardan biri olan 
              <i>
                <b className="purple"> Osamu Dazai </b>
              </i>, bana hem yazının gücünü hem de insanlığın derinliklerini keşfetme cesareti verdi.  
              <br />
              <br />
              Günlük hayatımda klasik gitar çalarak veya kendi yazılarımı yazarak duygularımı ifade etmeyi seviyorum. Yeni bir şarkıyı öğrenmek ya da bir hikaye yazmak, tıpkı bir yazılım kodu yazmak gibi benim için bir anlam arayışı. Müzik ve yazı, teknolojiyle birlikte hayatımın olmazsa olmazı haline geldi.  
              <br />
              <br />
              Ayrıca insanlarla bağlantı kurmayı önemsiyorum. Tiyatro, münazara gibi etkinliklerde yer alarak hem sosyal becerilerimi geliştiriyor hem de farklı bakış açıları kazanıyorum. Bir gün, yazılım ve sanatın birleştiği projelerle dünyada iz bırakmayı, farklı kültürleri ve insanları bir araya getirebilecek bir şeyler yaratmayı hayal ediyorum.  
              <br />
              <br />
              Eğer bu satırları okuyorsanız, belki de bir projede birlikte çalışabiliriz ya da yalnızca ilham verici bir sohbet edebiliriz. 
              <i>
                <b className="purple"> Hayal etmeye ve üretmeye devam ettiğim sürece, bu yolculukta yalnız olmadığımı biliyorum. </b>
              </i>  
            </p>

        <p>
          Ayrıca projelerime destek olmak için <b className="purple"> <a  className="purple" href="https://buymeacoffee.com/egehankahraman"> bağışta </a></b>  bulunabilirsiniz. 
        </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>BANA ULAŞMAK İSTERSEN</h1>
            <p>
              Aşağıdaki bağlantılar ile <span className="purple"> Benimle </span> iletişim kurabilirsin
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vastsea0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

            <li className="social-icons">
                <a
                  href="https://x.com/humabrowser"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>          

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/crusttaceans"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
