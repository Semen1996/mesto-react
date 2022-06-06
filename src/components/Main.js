import React from 'react';
import api from '../utils/Api.js'
import Card from './Card'

function Main(props) {


  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);



  React.useEffect(()=> {
    // Загрузка готовых карточек и данных о пользователе с сервера
    Promise.all([api.getUserInfo(),api.getInitialCards()])
      .then(([userData,initialCards]) => {

        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(initialCards);

      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  },[]);



  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} >
            <div className="profile__hover"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__editButton" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div> 
        <button className="profile__addButton" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">

      { cards.map((card, i) => (
          <Card card={card} onCardClick={props.onCardClick} />
        )) 
      }

      </section>
    </main>
  );
}

export default Main;
