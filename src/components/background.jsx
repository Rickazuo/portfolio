import { useRef, useEffect } from "react";
import profile from "../assets/Foto.jpg";
import github from "../assets/github.png";
import linkedin64 from "../assets/linkedin64.png";
import cellphone from "../assets/cell-phone.png";
import email from "../assets/email.png";
import map from "../assets/map.png";

//Background with stars
const numberOfStars = 250;

const Background = () => {
  const starsRef = useRef();

  const creatingStars = () => {
    // radius of area around cursor to affect
    const radius = starsRef.current.clientWidth * 0.1;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.floor(Math.random() * 100)}%`;
      star.style.top = `${Math.floor(Math.random() * 100)}%`;
      starsRef.current.appendChild(star);
    }

    starsRef.current.addEventListener("mousemove", (event) => {
      const stars = document.querySelectorAll(".star");
      for (const star of stars) {
        const starPosition = star.getBoundingClientRect();
        const distance = getDistance(
          event.clientX,
          event.clientY,
          starPosition.left,
          starPosition.top
        );
        if (distance < radius) {
          star.style.background = getRandomColor(); // change color of star
        }
      }
    });

    function getDistance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    const range = 200; // range in pixels
    starsRef.current.addEventListener("mousemove", (event) => {
      const stars = document.querySelectorAll(".star");
      for (const star of stars) {
        const starPosition = star.getBoundingClientRect();
        const distanceX = Math.abs(
          event.clientX - (starPosition.left + starPosition.width / 2)
        );
        const distanceY = Math.abs(
          event.clientY - (starPosition.top + starPosition.height / 2)
        );
        if (distanceX < range && distanceY < range) {
          star.style.background = getRandomColor(); // change color of star
        }
      }
    });
  };

  useEffect(() => {
    creatingStars();
    return () => {
      document.querySelectorAll(".star").forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="background">
      <img className="image" src={profile} alt="profile" />
      <div className="info-container">
        <div className="nameTitle">Ricardo Kazuo Diniz Nozaki</div>
        {/*<div className="contact">
          <div className="info-text">
            <img width="32px" src={cellphone} alt="smartphone icon" />
            Celular: (12) 98172-1089
          </div>
          <div className="info-text">
            <img width="32px" src={email} alt="email icon" />
            E-mail: ricardo.k.nozaki@gmail.com
          </div>
          <div className="info-text">
            <img width="32px" src={map} alt="map icon" />
            Cidade: Taubaté-SP
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ricardo-nozaki-2870b5189/">
              <img width="32px" src={linkedin64} alt="icon linkedin"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/Rickazuo">
              <img width="32px" src={github} alt="icon github"></img>
            </a>
          </div>
  </div>*/}
      </div>
      <div className="info-container">
        {/*<div className="nameTitle">Ricardo Kazuo Diniz Nozaki</div>*/}
        <div className="contact">
          <div className="info-text">
            <img width="32px" src={cellphone} alt="smartphone icon" />
            Celular: (12) 98172-1089
          </div>
          <div className="info-text">
            <img width="32px" src={email} alt="email icon" />
            E-mail: ricardo.k.nozaki@gmail.com
          </div>
          <div className="info-text">
            <img width="32px" src={map} alt="map icon" />
            Cidade: Taubaté-SP
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ricardo-nozaki-2870b5189/">
              <img width="32px" src={linkedin64} alt="icon linkedin"></img>
            </a>
          </div>
          <div>
            <a href="https://github.com/Rickazuo">
              <img width="32px" src={github} alt="icon github"></img>
            </a>
          </div>
        </div>
      </div>
      <div
        id="stars"
        ref={starsRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};
export default Background;
