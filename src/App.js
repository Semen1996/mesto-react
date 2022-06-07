import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(false);

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
    setSelectedCard(false);
  }

  function handleSelectedCard(card) {
    setSelectedCard(card);
  }

  const editPopupInputs = [
    <>
      <div className="popup__input">
        <input id="name" className="popup__field popup__field_type_name" name="name" type="text" placeholder="Введите имя" minLength="2" maxLength="40" required />
        <span className="popup__input-error name-error"></span>
      </div>
      <div className="popup__input">
        <input id="about" class="popup__field popup__field_type_description" name="about" type="text" placeholder="Укажите кем работаете" minLength="2" maxLength="200" required />
        <span className="popup__input-error about-error"></span>
      </div>
    </>
  ];

  const addPopupInputs = [
    <>
      <div className="popup__input">
        <input id="name2" className="popup__field popup__field_type_title" name="name"  type="text" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__input-error name2-error"></span>
      </div>
      <div className="popup__input">
        <input id="link" className="popup__field popup__field_type_link" name="link" type="url" value="" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error link-error"></span>
      </div>
    </>
  ];

  const avatarPopupInputs = [
      <div class="popup__input">
        <input id="avatar" className="popup__field popup__field_type_avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error avatar-error"></span>
      </div>
  ];


  return (
    <body className="root">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleSelectedCard} />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children= {editPopupInputs} />
      <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children= {addPopupInputs} />
      <PopupWithForm title="Обновить аватар" name="updateAvatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children= {avatarPopupInputs} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </body>
  );
}


export default App;

