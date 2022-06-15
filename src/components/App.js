import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import EditProfilePopup  from './EditProfilePopup';
import EditAvatarPopup  from './EditAvatarPopup';
import AddPlacePopup  from './AddPlacePopup';

import api from '../utils/Api.js';

import {CurrentUserContext} from '../context/CurrentUserContext';



function App() {

  // Получение информации о пользователе с сервера
  const [currentUser,setCurrentUser] = React.useState({});

  React.useEffect( () => {

    Promise.all( [api.getUserInfo(), api.getInitialCards()] )
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    
  },[]);


  const [isLoading, setIsLoading] = React.useState(false);


  // Попап редактирования профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser(userInfo) {

    setIsLoading(true);

    api.editUserInfo(userInfo)
      .then((userData)=>{
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })

  }




  // Попап редактирования аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleUpdateAvatar(userAvatar) {

    setIsLoading(true);

    api.updateAvatar(userAvatar)
      .then((userData)=>{
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })


  }

  


  // Попап добавления карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }


  // Попап картинки
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleSelectedCard(card) {
    setSelectedCard(card);
  }




  // Закрытие всех попапов 
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }







  // Работа с карточками
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    ( isLiked ? api.deleteLikeCard(card._id) : api.addLikeCard(card._id) )
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`${err}`);
      });

  } 

  function handleCardDelete(card) {

    api.deleteCard(card._id)
      .then(() => {
        const deleteCards = cards.filter((c) => c._id !== card._id);
        setCards(deleteCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
  } 

  function handleAddPlaceSubmit(newCard) {

    setIsLoading(true);

    api.addCard(newCard)
      .then((newCard)=>{
        setCards([newCard, ...cards]); 
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })


  }



  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleSelectedCard} cards={cards} handleCardLike={handleCardLike} handleCardDelete={handleCardDelete} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isLoading={isLoading} /> 
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit} isLoading={isLoading} /> 
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading} /> 
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </CurrentUserContext.Provider>
    </div>
  );
}


export default App;

