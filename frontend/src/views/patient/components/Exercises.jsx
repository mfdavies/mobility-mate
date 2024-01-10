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
    <div className='shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-box h-full w-full'>
      <h3 className="text-lg font-medium text-left w-full px-4 py-2 border-b-2">Assigned Exercises</h3>
      <div className="h-full w-full carousel carousel-vertical rounded-box">
        {exercises.map((exercise, index) => (
          <div key={index} className="carousel-item h-full p-0">
            {/* <ExerciseCard
              name={exercise.title}
              description={exercise.description}
              steps={exercise.steps}
              image={exercise.image}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
