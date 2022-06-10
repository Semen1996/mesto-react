import React from 'react';


function Card({card, onCardClick}) {

    const handleClick = () => {
        onCardClick(card);
    }

  return (
          <div id="element">
            <article className="element">
              <img className="element__picture" src={card.link} alt={card.name} onClick={handleClick} />
              <div className="element__menu">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                  <button className="element__like" type="button" aria-label="Лайк"></button>
                  <p className="element__number-of-likes">{card.likes.length}</p>
                </div>
              </div>
            </article>
          </div>
  );
}

export default Card;
