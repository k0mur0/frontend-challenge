import React, { useState } from 'react';
import "./Card.css";
import type { IPost } from '../../../types/IPost';

interface CardProps extends IPost {
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({id, url, isFavorite = false, addFavorite, removeFavorite}) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (!isFavorite) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  };

  return (
    <div
      className="card-wrapper"
    >
      <img 
        src={url} 
        alt={id} 
        className="card-image"
        loading='lazy'
        width={225}
        height={225}
      />

      <button
        className="favorite-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleFavorite}
      >
        <img
          src={isFavorite || isHovered ? "favorite.svg" : "favorite_border.svg"}
          alt="like"
        />
      </button>
      
    </div>
  );
};