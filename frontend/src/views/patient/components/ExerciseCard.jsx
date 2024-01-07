import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ExerciseCard = ({ title, description, imageUrl, instructions, onClick, isExpanded }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      
      const timeoutId = window.setTimeout(() => {
        setStartAnimation(true);
      }, 100); // Delay in milliseconds
      
      return () => window.clearTimeout(timeoutId);
    }
  }, [isExpanded]);

  const animationClass = startAnimation ? 'start-animation' : '';

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''} ${animationClass}`} onClick={onClick}>
      <div className="bg-gray-400">
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {isExpanded && (
            <div>
              {instructions.map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ExerciseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default ExerciseCard;