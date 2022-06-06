import React from 'react';


function Card(props) {

    const handleClick = () => {
        props.onCardClick(props.card);
    }

  return (
          <div id="element" key={props.card._id}>
            <article className="element">
              <img className="element__picture" src={props.card.link} alt={props.card.name} onClick={handleClick} />
              <div className="element__menu">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__likes">
                  <button className="element__like" type="button" aria-label="Лайк"></button>
                  <p className="element__number-of-likes">{props.card.likes.length}</p>
                </div>
              </div>
            </article>
          </div>
  );
}

export default Card;
