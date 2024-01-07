import { useState } from 'react';
// import ExerciseCard from "./ExerciseCard";
// import PropTypes from 'prop-types';
import '../styles.css';
import glutesImage from '../../../assets/raises.webp';
import circleImage from '../../../assets/circs.png';
import squatImage from '../../../assets/squat.png';
import quartSquatImage from '../../../assets/quartSquat.png';
import singleLegGluteImage from '../../../assets/singleLegGlute.png';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises}) => {
  // const [expandedCard, setExpandedCard] = useState(null);
  // const exercises = [
  //   {
  //     name: 'Arm Raises',
  //     description: 'Simple arm raising exercises to improve mobility.',
  //     image: '',
  //   },
  //   {
  //     name: 'Arm Raises',
  //     description: 'Simple arm raising exercises to improve mobility.',
  //     image: '',
  //   },
  // ];
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Glutes',
      description: 'Glute Bridges good for glutes',
      imageUrl: glutesImage,
      instructions: [
        'Step 1 for Card 1',
        'Step 2 for Card 1',
        'Step 3 for Card 1',
      ],
    },
    {
      id: 2,
      title: 'Circs',
      description: 'Single Leg Circles good for glutes',
      imageUrl: circleImage,
      instructions: [
        'Step 1 for Card 2',
        'Step 2 for Card 2',
        'Step 3 for Card 2',
      ],
    },
    {
      id: 3,
      title: 'Squats',
      description: 'Description for Card 3',
      imageUrl: squatImage, // Placeholder image
      instructions: [
        'Step 1 for Card 3',
        'Step 2 for Card 3',
        'Step 3 for Card 3',
      ],
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description for Card 4',
      imageUrl: quartSquatImage, // Placeholder image
      instructions: [
        'Step 1 for Card 4',
        'Step 2 for Card 4',
        'Step 3 for Card 4',
      ],
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'Description for Card 5',
      imageUrl: singleLegGluteImage, // Placeholder image
      instructions: [
        'Step 1 for Card 5',
        'Step 2 for Card 5',
        'Step 3 for Card 5',
      ],
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'Description for Card 5',
      imageUrl: glutesImage, // Placeholder image
      instructions: [
        'Step 1 for Card 5',
        'Step 2 for Card 5',
        'Step 3 for Card 5',
      ],
    },
    {
      id: 7,
      title: 'Card 7',
      description: 'Description for Card 5',
      imageUrl: glutesImage, // Placeholder image
      instructions: [
        'Step 1 for Card 5',
        'Step 2 for Card 5',
        'Step 3 for Card 5',
      ],
    },
  ];

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
            name={exercise.name}
            description={exercise.description}
            image={exercise.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default Exercises;
