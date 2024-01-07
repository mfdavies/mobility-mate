
const Phone = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Phone!</h2>
        <p>I broke my phone, whose fault is it?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Trade In</button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
