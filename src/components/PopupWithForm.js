import React from 'react';

function PopupWithForm(props) {
    
  return (
<div id="editButton" className={`popup popup_${props.name} ${props.isOpen && `popup_opened`}`} >
        <form className={`popup__container popup__container_${props.name}`} name="profile-form" novalidate>
          <h2 className="popup__title">{props.title}</h2>
          <button className="popup__submitButton" type="submit">Сохранить</button>
          <button className="popup__close" type="button" aria-label="Закрыть попап"  onClick={props.onClose}></button>
        </form>
      </div>
  );
}
  
export default PopupWithForm;
