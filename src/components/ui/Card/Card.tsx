import React, { useState } from 'react';
import "./Card.css";

interface CardProps {
  id: string;
  url: string;
  isFavorite: boolean;
  onFavoriteChange: (newValue: boolean) => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  url,
  isFavorite: initialFavorite,
  onFavoriteChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    onFavoriteChange(newValue);
  };

  return (
    <div
      className="card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={url} alt={id} className="card-image" />

      {isHovered && (
        <button
          className="favorite-button"
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
        >
          <img
            src={isFavorite ? "favorite.svg" : "favorite_border.svg"}
            alt="heart"
            className={`heart-icon ${isFavorite ? 'filled' : ''}`}
          />
        </button>
      )}
      
    </div>
  );
};