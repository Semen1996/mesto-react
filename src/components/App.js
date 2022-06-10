import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleSelectedCard(card) {
    setSelectedCard(card);
  }

  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleSelectedCard} />
      <Footer />
      <PopupWithForm  title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input">
          <input id="name" className="popup__field popup__field_type_name" name="name" type="text" placeholder="Введите имя" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-error"></span>
        </div>
        <div className="popup__input">
          <input id="about" className="popup__field popup__field_type_description" name="about" type="text" placeholder="Укажите кем работаете" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm  title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input">
          <input id="name2" className="popup__field popup__field_type_title" name="name"  type="text" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__input-error name2-error"></span>
        </div>
        <div className="popup__input">
          <input id="link" className="popup__field popup__field_type_link" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm  title="Обновить аватар" name="updateAvatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="popup__input">
          <input id="avatar" className="popup__field popup__field_type_avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error avatar-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}


export default App;

