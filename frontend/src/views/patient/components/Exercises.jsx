import { useState } from 'react';
import '../styles.css';
import glutesImage from '../../../assets/raises.webp';
import circleImage from '../../../assets/circs.png';
import squatImage from '../../../assets/squat.png';
import quartSquatImage from '../../../assets/quartSquat.png';
import singleLegGluteImage from '../../../assets/singleLegGlute.png';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises }) => {
  return (
    <>
      <h3 className="text-lg text-left w-full">Exercises</h3>
      <div className="h-full w-full carousel carousel-vertical rounded-box">
        {exercises.map((exercise, index) => (
          <div key={index} className="carousel-item h-full p-0">
            <ExerciseCard
              name={exercise.title}
              description={exercise.description}
              steps={exercise.steps}
              image={exercise.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Exercises;
