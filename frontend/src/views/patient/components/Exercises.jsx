import { useState } from 'react';
import { MoveLeft, MoveRight, Dot } from 'lucide-react';

const ExerciseSummary = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-44 w-full">
        <img
          className="h-full w-full object-contain border-[1px] rounded-box "
          src={image}
          alt="Exercise"
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="font-medium">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

const ExerciseView = ({ image, steps }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-44 w-full">
        <img
          className="h-full w-full object-contain border-[1px] rounded-box "
          src={image}
          alt="Exercise"
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="font-medium">Steps</div>
        <ul className='overflow-y-scroll line-clamp-3'>
          {steps.split('\n').map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Exercises({ exercises }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? exercises.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setShowDetails(false);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === exercises.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setShowDetails(false);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const ExerciseComponent = showDetails ? ExerciseView : ExerciseSummary;

  return (
    <>
      <div className="h-full max-h-4/5 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] rounded-box flex flex-col">
        <div className="px-4 py-2 border-b-2 font-medium text-lg">
          Assigned Exercises
        </div>
        <div className="flex flex-col h-full justify-between p-3 gap-2">
          <ExerciseComponent
            image={exercises[currentIndex].image}
            title={exercises[currentIndex].title}
            description={exercises[currentIndex].description}
            steps={exercises[currentIndex].steps}
          />
          <div className="px-6 flex justify-center">
            <button
              onClick={() => {
                setShowDetails(!showDetails);
              }}
              className="btn bg-light-teal text-white"
            >
              {showDetails ? 'Back' : 'View'}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly w-full py-3">
        <div className="text-2xl rounded-full cursor-pointer">
          <MoveLeft onClick={prevSlide} size={20} />
        </div>
        <div className="flex items-center justify-center">
          {exercises.map((_, i) => (
            <Dot
              size={20}
              key={i}
              onClick={() => goToSlide(i)}
              className={`cursor-pointer rounded-full ${
                currentIndex === i ? 'border-2' : ''
              }`}
            />
          ))}
        </div>
        <div className="text-2xl rounded-full cursor-pointer">
          <MoveRight onClick={nextSlide} size={20} />
        </div>
      </div>
    </>
  );
}
