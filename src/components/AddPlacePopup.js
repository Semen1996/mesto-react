import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddPlacePopup({isOpen, onClose, onAddCard, isLoading}) {



  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }



function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddCard({
      name,
      link
    });
  } 

  return (
      <PopupWithForm  title="Новое место" name="add" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading}>
        <div className="popup__input">
          <input id="name2" className="popup__field popup__field_type_title" name="name"  type="text" placeholder="Название" minLength="2" maxLength="30" required onChange={handleChangeName}/>
          <span className="popup__input-error name2-error"></span>
        </div>
        <div className="popup__input">
          <input id="link" className="popup__field popup__field_type_link" name="link" type="url" placeholder="Ссылка на картинку" required onChange={handleChangeLink} />
          <span className="popup__input-error link-error"></span>
        </div>
      </PopupWithForm>
  );
}


export default AddPlacePopup;

