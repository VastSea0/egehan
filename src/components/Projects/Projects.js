import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import verasis from "../../Assets/Projects/chatify.png";
 
import humagezgini from "../../Assets/Projects/blog.png";
 
import huma from "../../Assets/Projects/blog.png";
import opensoda from "../../Assets/Projects/blog.png";
 
import kendisinedusunceler from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Deneysel ve Kararlı <strong className="purple">Projeler</strong>
        </h1>
        <p style={{ color: "white" }}>
          İşte Egehan'ın geliştirdiği çeşitli projeler. Bazıları deneysel, bazıları ise uzun vadeli ve kararlı projelerdir. Teknolojiyi keşfetmek ve üretkenliği artırmak için yazılmış bu projeler, yazılım dünyasına olan katkımı temsil ediyor.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* VERASİS */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={verasis}
              isBlog={false}
              title="VERASİS"
              description="VERASİS, öğretmen-veli görüşmeleri için randevu sistemi sunan bir platformdur. React, Bootstrap, Node.js ve Firebase gibi teknolojilerle geliştirilmiştir. TÜBİTAK ve TEKNOFEST yarışmaları için hazırlanmış ancak bu yarışmalarda ödül kazanamamıştır. 6 ayda tamamlanmış kapalı kaynak bir projedir."
              ghLink="https://github.com/vastsea0"
              demoLink="https://vastseasaver.web.app/"
            />
          </Col>
          {/* OpenSoda */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opensoda}
              isBlog={false}
              title="OpenSoda"
              description="Japon dilini öğretmek ve bu dilde oyunlar sunmak amacıyla geliştirilen açık kaynak bir platformdur. Deneysel bir proje olan OpenSoda, kullanıcıların dil öğrenimini eğlenceli bir hale getirmeyi amaçlar."
              ghLink="https://github.com/vastsea0/opensoda"
              demoLink="https://opensoda.vercel.app/"
            />
          </Col>
           {/* Uzaylıdan notlar */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kendisinedusunceler}
              isBlog={false}
              title="Uzaylıdan Notlar"
              description="Kişisel blogum"
              ghLink="https://github.com/vastsea0/blog"
              demoLink="https://uzaylinin-notlari.netlify.app/"
            />
          </Col>
          {/* VastSea Blog */}
      
         
          {/* Hüma Gezgini */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={humagezgini}
              isBlog={false}
              title="Hüma Gezgini"
              description="Hüma Tarayıcısı kullanıcıları için geliştirilmiş bir yardımcı araçtır. Not alma, takvim, hesap makinesi gibi özellikler sunar. Ayrıca tarayıcı teması özelleştirme imkanı sağlar."
              ghLink="https://github.com/VastSea0/HumaPages"
              demoLink="https://humatarayici.com/"
            />
          </Col>
         
          {/* Hüma Tarayıcı */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huma}
              isBlog={false}
              title="Hüma Tarayıcı"
              description="Gizlilik odaklı, açık kaynak kodlu bir web tarayıcısı. Dikey sekmeler, özelleştirilebilir temalar ve statik sayfalar gibi özellikler sunar. Kullanıcı verilerini toplamayan bir tarayıcıdır."
              ghLink="https://github.com/vastsea0/huma"
              demoLink="https://humatarayici.com/"
            />
          </Col>
          {/* Ak Ana */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huma}
              isBlog={false}
              title="Ak Ana"
              description="Hüma Tarayıcısı için Progressive Web App (PWA) özellikleri sağlayan bir geliştirme projesi."
              ghLink="https://github.com/vastsea0/akana"
              demoLink="https://humatarayici.com/"
            />
          </Col>
          {/* Translate Me! */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huma} // Projeye uygun bir görsel ekleyin
              isBlog={false}
              title="Translate Me!"
              description="Translate Me!, dil öğrenenler için tasarlanmış, kullanımı kolay ve etkileşimli bir çeviri uygulamasıdır. Uygulama, öğrenme sürecini hızlandırmak ve eğlenceli hale getirmek amacıyla özel algoritmalarla desteklenmiştir. Kullanıcıların kelime dağarcığını geliştirmesine ve yeni diller öğrenmesine yardımcı olur."
              ghLink="https://github.com/VastSea0/translate-me"
              demoLink="https://translate-me.vercel.app/"
            />
          </Col>

          {/* Aura Companion */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huma} // Projeye uygun bir görsel ekleyin
              isBlog={false}
              title="Aura Companion"
              description="Aura Companion, kullanıcıların ruh hali ve stres seviyelerini takip etmelerine yardımcı olan kişisel bir refakatçi uygulamasıdır. Gelişmiş yapay zeka ve kullanıcı dostu bir arayüzle donatılmıştır. Uygulama, kullanıcıların mental sağlıklarını iyileştirmeleri için önerilerde bulunur ve günlük kaydı tutmalarını sağlar."
              ghLink="https://github.com/VastSea0/aura-companion"
              demoLink="https://aura-companion.vercel.app/"
            />
          </Col>
               <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huma}  
              isBlog={false}
              title="Notia"
              description="Notia, AI destekli galerinizi bir günlüğe dönüştüren bir uygulamadır. Kullanıcıların fotoğraflarını ve anılarını düzenlemelerine, paylaşmalarına ve hatırlamalarına yardımcı olur. AI teknolojisi sayesinde, kullanıcıların anılarını daha anlamlı hale getirir."
              ghLink="https://github.com/VastSea0/notia"
              demoLink="https://web-notia.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
