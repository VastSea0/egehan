import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Merhaba ben  <span className="purple">Egehan </span>
            ben Türk'üm ve  <span className="purple">Türkiye</span>'nin  <span className="purple"> Kahramanmaraş</span> şehirinde doğdum
            <br />
            Sürekli yazılım geliştirim
            <br />
            Lise öğrencisiyim. Yazılımı kendi çabam ile öğreniyorum ve Anadolu Lisesi okuyorum
            <br />
            <br />
            Hayat idealim mutlu olmaktır, yazılım ise beni en mutlu yapan şeylerden biridir.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Kod yazmak
            </li>
            <li className="about-activity">
              <ImPointRight />  Yazı yazmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Kitap okumak
            </li>
            <li className="about-activity">
              <ImPointRight /> Gezmek
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hayatta olan her şeyin bir sonu olduğunu hatırla. Ve bu sonların ne olduğunu bil."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
