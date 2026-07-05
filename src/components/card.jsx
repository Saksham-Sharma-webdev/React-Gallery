import React from "react";

const Card = (props) => {
  const element = props.element
  const idx = props.idx
  return (
    <div key={idx}>
      <div className="h-40 w-44 overflow-hidden rounded-xl transition-scale duration-100 ease-in hover:scale-105">
        <img
          loading="lazy"
          className="object-cover h-full w-full rounded-xl"
          src={element.download_url}
          alt=""
        />
      </div>
      <a href={element.url}>
        <h2 className="font-bold pt-3 pb-4 text-center">{element.author}</h2>
      </a>
    </div>
  );
};

export default Card;
