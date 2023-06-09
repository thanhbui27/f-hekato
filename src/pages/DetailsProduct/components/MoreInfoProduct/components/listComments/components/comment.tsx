import { IComment } from "src/types/comment";
import userDefault from "src/assets/images/user-default.png";
import Parser from 'html-react-parser';
import "../styles.scss";
import { getImage } from "src/constants/URLImage";

interface IProps {
  comment : IComment
}

const Comment : React.FC<IProps> = ({comment}) => {
  return (
    <div className="comment">
      <div className="user">
        <div className="user-image">
          <img style={{objectFit : "cover"}} src={comment.user.picture ?  getImage(comment.user.picture ) : userDefault} alt="" />
        </div>
        <div className="user-meta">
          <div className="name">{comment.user.fullName}</div>
          <div className="day" style={{marginTop : 10+"px"}}>{comment.createAt}</div>
        </div>
      </div>

      <div className="comment-details">
        <div className="rating">
          {Array(comment.rate)
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
        {
          Parser(comment.description)
        }
        </div>
      </div>
    </div>
  );
};

export default Comment;
