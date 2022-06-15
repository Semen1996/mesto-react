import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../context/CurrentUserContext';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading}) {

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  const [avatar, setAvatar] = React.useState(currentUser.avatar);


  const avatarInputRef = React.useRef(null);


  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }




// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
React.useEffect(() => {
  setAvatar(currentUser.avatar);
}, [currentUser]); 



function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateAvatar({
      avatar: avatarInputRef.current.value
    });
  } 

  return (
    <PopupWithForm  title="Обновить аватар" name="updateAvatar" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isLoading={isLoading} >
      <div className="popup__input">
        <input id="avatar" className="popup__field popup__field_type_avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required ref={avatarInputRef} />
        <span className="popup__input-error avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}


export default EditAvatarPopup;

