const Card = ({exercise, description}) => {
  return (
    <div className="card glass">
      <figure>
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{exercise}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Let&apos;s do it!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
