import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Yazılım geliştiricisi",
          "Hüma'nın geliştiricisi",
          "Freelancer",
          "Uzayli",
          "MERN Stack Geliştirici",
          "Açık Kaynak Destekçisi",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
