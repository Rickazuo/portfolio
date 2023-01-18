import { useRef, useEffect } from "react";

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
      <div id="stars" ref={starsRef} style={{ width: 1080, height: 300 }} />
    </div>
  );
};
export default Background;
