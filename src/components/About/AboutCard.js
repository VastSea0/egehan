import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Merhaba, ben <span className="purple">Egehan</span>!  
            <br />
            Yazılım dünyasında kendi yolculuğuma çıkmış bir lise öğrencisiyim.  
            Teknolojiye olan ilgim, çocukluk yıllarımda başladı ve o zamandan beri yazılım benim için sadece bir araç değil, aynı zamanda tutkum haline geldi.  
            <br />
            <br />
            Şu an Anadolu Lisesi'nde eğitim görüyorum ve yazılımı tamamen kendi çabamla öğreniyorum. Bu süreçte yenilikçi teknolojileri keşfetmek, projeler geliştirmek ve problem çözmek en büyük motivasyon kaynaklarım oldu.  
            <br />
            <br />
            Yazılım dışında da birçok farklı alanda kendimi ifade etmeye çalışıyorum. Okumayı, yazmayı, gezmeyi ve yeni yerler keşfetmeyi seviyorum. Bu hobiler, yazılım dışında dünyaya daha geniş bir perspektifle bakmamı sağlıyor.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Yaratıcı projeler için kod yazmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Düşüncelerimi yazıya dökmek
            </li>
            <li className="about-activity">
              <ImPointRight /> Kitaplarla yeni dünyalar keşfetmek
            </li>
            <li className="about-activity">
              <ImPointRight /> Kültür ve tarih merakımı gezerek beslemek
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Hayatta her şeyin bir sonu olduğunu hatırla, ama bu sonların seni şekillendiren başlangıçlar olduğunu da unutma."  
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
