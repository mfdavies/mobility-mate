import Card from "../../components/Card";

const Exercises = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
        <Card exercise={'Neck Rotations'} description={'Range of motion exercise'} />
        <Card exercise={'Squats'} description={'Strength training exercise'} />
    </div>
  );
};

export default Exercises;
