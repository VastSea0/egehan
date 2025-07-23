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
              BEN <span className="purple"> KİMİM? </span>
            </h1>
            <p className="home-about-body">
              Ben Egehan.  
              <br />
             <br />
              Yazılımla erken yaşta tanıştım, ama benim için kod sadece araçlardan biri. Şu an üzerinde çalıştığım proje, kişisel verileri yönetmeyi kolaylaştıran bir not ve galeri uygulaması. Kullanıcı odaklı, hızlı ve AI destekli özelliklerle deneyimi geliştirmeye odaklanıyorum.  
              <br />
              

              <br />
              Ama hayatım sadece yazılımla sınırlı değil. Kendi <b className="purple">YouTube kanalım</b> var, bazen oraya içerikler üretiyorum. Yazmayı da seviyorum; özellikle <b className="purple">şiir ve şarkı sözleri</b>. Şu anda <b className="purple">İtalyanca</b> öğreniyorum ve İngilizce’mle beraber bu diller aracılığıyla başka dünyalara ulaşmaya çalışıyorum. Müzik dinlemeyi seviyorum, hatta yazdığım bazı sözleri bir gün şarkıya dönüştürmek gibi bir hayalim var ama müzikal altyapım şu an için sıfıra yakın.
              <br />
               <br />
              Kendimi belirli kalıplara sığdıramıyorum. Sosyal çevrem sınırlı olsa da bu bana düşünmek ve üretmek için alan yaratıyor. Ne yaparsam yapayım, hep daha derine inmeyi, anlamı sorgulamayı seviyorum. Teknolojiyle haşır neşirim ama sadece teknik detaylarda kaybolmak yerine, her projede kendimden bir parça bırakmaya çalışıyorum.
              <br />

              <br />
              Eğer bir gün yollarımız kesişirse, belki birlikte bir şeyler üretiriz. Belki sadece iyi bir sohbet olur.  
              <i>
                <b className="purple">Yolda olmak da bir ihtimaldir; bazen tek kişiyle de olsa.</b>
              </i>
            </p>

            <p>
              Bana destek olmak istersen, <b className="purple"><a href="https://buymeacoffee.com/egehankahraman">buradan</a></b> bağış yapabilirsin.
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
              Aşağıdaki bağlantılar üzerinden <span className="purple">iletişime geçebilirsin</span>:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vastsea0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/humabrowser"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
