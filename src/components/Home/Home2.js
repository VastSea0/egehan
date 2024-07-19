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
            İZİNNİZLE KENDİMİ SİZLERE <span className="purple"> TANITAYIM</span> DİNLEYİN:
            </h1>
            <p className="home-about-body">
    Kendimi yazılım alanında bir arayışa girerek hayat amacımı bulmuş ve bu amaçla dünyaya gelmiş biri olarak görüyorum. Her an her yerde kod yazıyorum. Eğer yakınımda bulunuyorsanız, büyük olasılıkla beni sık sık kod yazarken görüyorsunuzdur. Günlerim genellikle kod yazarak ve kitap okuyarak geçiyor. Nadiren kod yazmayı bıraksam da, genel olarak inzivada bile kod yazıyorum. Kod yazmak beni en mutlu eden şey olabilir. Yıllardır yapıyorum ve yapmaya devam edeceğim. Tanrı beni bunun için yaratmış olmalı.
    <br />
    <br />
    <i>
        <b className="purple"> Python, JavaScript </b>
    </i>
    gibi geleneksel yazılım dillerini projelerimde sıkça kullanıyorum.
    <br />
    <br />
     İlgi alanlarım kısaca 
    <i>
        <b className="purple"> web geliştirme</b> ve ayrıca 
        <b className="purple"> felsefe, müzik, dil ve mitoloji </b>
        gibi birbirinden farklı disiplinleri içeriyor.
    </i>
    <br />
    <br />
    Zaman buldukça 
    <b className="purple"> Node.js </b> ve 
    <i>
        <b className="purple"> yenilikçi JavaScript çerçeveleri </b>
    </i>
    ile küçük deneyler yapıyorum. Örneğin, 
    <i>
        <b className="purple"> React.js </b>
    </i>
    
    gibi teknolojiler üzerinde çalışıyorum.
</p>
<p>
  Ayrıca projelerime destek olmak için <b className="purple"> <a href="https://buymeacoffee.com/egehankahraman"> bağışta </a></b>  bulunabilirsiniz. 
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
              Benle iletişim kurmakta kendini<span className="purple"> özgür </span> hisset
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
                  href="https://www.instagram.com/marsstakiuzayliyim"
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
