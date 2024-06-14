import React, { useRef, useEffect, useState } from "react";
import "./projects.scss";

const ParallaxCard = ({ cardData }) => {
  const { title, image, link } = cardData;
  const cardRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [{ mouseX, mouseY }, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  let requestId = null;

  const handleMouseMove = (e) => {
    if (requestId === null) {
      requestId = requestAnimationFrame(() => {
        setMousePosition({
          mouseX: e.pageX - (cardRef.current?.offsetLeft || 0) - width / 2,
          mouseY: e.pageY - (cardRef.current?.offsetTop || 0) - height / 2,
        });
      });
      requestId = null;
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMousePosition({ mouseX: 0, mouseY: 0 });
    }, 10);
  };

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, [cardRef.current]);

  return (
    <div
      className="card-wrap"
      ref={cardRef}
      onMouseLeave={() => handleMouseLeave()}
      onMouseMove={(e) => handleMouseMove(e)}>
      <a href={link} target="_blank">
        <div
          className="card"
          style={{
            transform: `rotateY(${(mouseX * 30) / width}deg) rotateX(${
              (mouseY * -30) / height
            }deg)`,
          }}>
          <div
            className="card-bg"
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${(mouseX * 30) / width}px) translateY(${
                (mouseY * -30) / height
              }px)`,
            }}></div>
          <div className="card-info">
            <h3 className="title">{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ParallaxCard;
