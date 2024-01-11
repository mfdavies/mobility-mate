import { useState } from "react";
// import ExerciseCard from "./ExerciseCard";
// import PropTypes from 'prop-types';
import "../styles.css";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  // const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(exercises);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const renderCard = (card) => (
    <div className="carousel-item" key={card.id}>
      <div className="card" onClick={() => handleCardClick(card)}>
        <img src={card.imageUrl} alt={card.title} className="rounded-xl" />
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-description">{card.description}</p>
        </div>
      </div>
    </div>
  );

  const renderModal = (card) => (
    <dialog className="modal" open>
      <div className="modal-box">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="modal-image rounded-xl"
        />
        <div className="text-content">
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">{card.title}</h3>
          <p className="py-4">{card.description}</p>
          <ol className="list-decimal pl-5">
            {card.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </dialog>
  );

  return (
    <div className="h-full w-full carousel carousel-vertical rounded-box">
      {exercises.map((exercise, index) => (
        <div key={index} className="carousel-item h-full">
          <ExerciseCard
            name={exercise.title}
            description={exercise.description}
            steps={exercise.steps}
            image={exercise.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Exercises;
