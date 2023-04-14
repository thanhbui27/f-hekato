import userDefault from "../../../../../../../assets/images/user-default.png";
import "../styles.scss";

const Comment = () => {
  return (
    <div className="comment">
      <div className="user">
        <div className="user-image">
          <img src={userDefault} alt="" />
        </div>
        <div className="user-meta">
          <div className="name">Rajkamal</div>
          <div className="day">10 day ago</div>
        </div>
      </div>

      <div className="comment-details">
        <div className="rating">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <i
                key={i}
                className={`bxs-star bx  star`}
                data-style={`--i : ${i}`}
              ></i>
            ))}
        </div>
        <div className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          maxime quo excepturi libero. Numquam accusamus perspiciatis deserunt
          et est temporibus unde dolor aliquid, porro corporis architecto, nisi,
          beatae maiores delectus.
        </div>
      </div>
    </div>
  );
};

export default Comment;
