import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 
import verasis from "../../Assets/Projects/chatify.png";
import humabetik from "../../Assets/Projects/blog.png";
import humagezgini from "../../Assets/Projects/blog.png";
import humatarih from "../../Assets/Projects/blog.png";
import huma from "../../Assets/Projects/blog.png";
import opensoda from "../../Assets/Projects/blog.png";
import humabulut from "../../Assets/Projects/blog.png";
import kendisinedusunceler from "../../Assets/Projects/suicide.png";
 
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         Deneysel ve Kararlı <strong className="purple"> Projeler </strong>
        </h1>
        <p style={{ color: "white" }}>
          Egehan'ın şu ana kadar geliştirdiği çeşitli projeler bunlardır. Unutmayın ki Egehan Şu ana kadar onlarca deneysel geliştirmiştir, hepsini burada listelemek mümkün olmasa da bir kısım proje burada yer almaktadır
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={verasis}
              isBlog={false}
              title="VERASİS"
              description="VERASİS, velilerin öğretmenlerden randevu almasını sağlayan bir projedir. VERASİS Egehan'nın en büyük kapalı kaynak projesidir. React, Bootsrap, Zirve, NodeJS ve Firebase gibi bir çok yeniliği kullanır. VERASİS Tübitak ve ardından TEKNOFEST için yapılsada iki yarışmada da kazanamamıştır. Proje 6 ay içerisinde kodlanıp bitirilmiştir. Proje için şu anlık destek yoktur. "
              ghLink="https://github.com/vastsea0"
              demoLink="https://vastseasaver.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opensoda}
              isBlog={false}
              title="OpenSoda"
              description="OpenSoda, Japon dilini öğretmeyi amaçlayan ve bu dilde oyunlar sunan açık kaynak bir projedir. Deneysel bir projedir ve hala geliştirilmektedir."
              ghLink="https://github.com/vastsea0/opensoda"
              demoLink="https://opensoda.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kendisinedusunceler}
              isBlog={false}
              title="Kendisine Düşünceler"
              description="Kendisine Düşünceler, Egehan tarafından yazılan açık kaynak bir blogtur. Deneyseldir. Blogta Felsefe temalı yazılar ve deneme yazıları bulunur. Astro kullanarak yazılmıştır."
              ghLink="https://github.com/vastsea0/blog"
              demoLink="https://kendisinedusunceler.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opensoda}
              isBlog={false}
              title="VastSea Blog"
              description="VastSea Blog, Egehan tarafından yazılan açık kaynak  bir blogtur ve blog Egehan'ın ilk blogudur 2022'den bu güne geliştirmeyi devam ettiği tek projedir bu sayede en uzun süre boyunca geliştirlen bir projedir. Blog için toplam 200 aşkın yazı yazılmıştır. Deneyseldir. Blogta Yazılım temalı yazılar ve deneme yazıları bulunur. Astro kullanarak yazılmıştır."
              ghLink="https://github.com/vastsea0/"
              demoLink="https://vastseablog.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humabulut}
              isBlog={false}
              title="Hüma Bulut"
              description="Hüma Bulut, Hüma Tarayıcısı için yapılmış ilk projedir. Açık kaynak kodludur, özgür bir yazılımdır. Hüma Bulut, Kullanıcılarına ücretsiz bir bulut sistemi sunar. Şu anda sınır dosya başına 10MB olsada  projenin gereksinimlerine göre bütçe bulundukça bu sınır artacaktır. Hüma Bulut tek bir 'Google Hesabı' ile oturum açılarak anında kullanılabilir. Hüma Tarayıcısı için özel geliştirilmiştir."
              ghLink="https://github.com/vastsea0/"
              demoLink="https://humadosya.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humagezgini}
              isBlog={false}
              title="Hüma Gezgini"
              description="Hüma Gezgini. Hüma Tarayıcısı için yazılan bir 'Sayfa Gezgini'  ve 'Yardımcı Rehberi'dir. Hüma kullanıcıları için sayfalar arasında hızlıca gezinmeyi sağlarken aynı zamanda not alma, takvim, hesap makinesi vb...  gibi bir çok özelliği barındırır. Ayrıca kendi tarayıcı teması vardır. Açık kaynaktır"
              ghLink="https://github.com/VastSea0/HumaPages"
              demoLink="https://humatarayici.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humatarih}
              isBlog={false}
              title="Hüma Tarih ve Hüma Mitoloji"
              description="Hüma Tarih/Mitoloji, Hüma projesinin bir parçası olup kullanıcılarına Türk tarihine ve mitolojisine ağ bağlantısı gerektirmeden girmesini ve okumasını sağlayan bir ansiklopedidir"
              ghLink="https://github.com/vastsea0/"
              demoLink="https://humatarayici.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humabetik}
              isBlog={false}
              title="Hüma Betik"
              description="Hüma Betik, Hüma Betik Python ile yazılmış ağda çalışan bir yazılım dilidir. Türkçe söz dizimine sahiptir. Açık kaynaktır. Ağ yorumcusu Flask ile yazılmıştır. "
              ghLink="https://github.com/vastsea0/humabetik"
              demoLink="https://egehan.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={huma}
                isBlog={false}
                title="Hüma Tarayıcı"
                description="Hüma Tarayıcı, özgür ve açık kaynak kodlu bir web tarayıcısıdır. Gizlilik odaklı olup, kullanıcı verilerini toplamaz. Dikey sekmeler ve çeşitli özelleştirme seçenekleri sunar. İnternet bağlantısı olmadan kullanılabilen statik sayfalar gibi özelliklerle donatılmıştır."
                ghLink="https://github.com/vastsea0/huma"
                demoLink="https://humatarayici.com/"
                />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={huma}
                isBlog={false}
                title="AK Ana"
                description="Hüma Tarayıcı için PWA özelliği"
                ghLink="https://github.com/vastsea0/akana"
                demoLink="https://humatarayici.com/"
                />
          </Col>

      

       

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
