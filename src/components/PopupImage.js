import React from 'react';

function PopupImage(props) {
  return (
    <div className= {`popup popup_image ${props.card && `popup_opened`}`}>
      <figure className="popup__figure">
        <img className="popup__picture" src={props.card.link} alt={props.card.name}  />
        <figcaption className="popup__figcaption">{props.card.name}</figcaption>
        <button className="popup__close popup__close_image" type="button" aria-label="Закрыть попап" onClick={props.onClose}></button>
      </figure>
    </div>
  );
}
  
export default PopupImage;
