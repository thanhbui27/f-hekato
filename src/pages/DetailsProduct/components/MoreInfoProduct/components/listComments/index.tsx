import { useAppSelector } from "src/hooks/useAppSelector";
import Comment from "./components/comment";

const ListComments = () => {
  const comment = useAppSelector((state) => state.comment.comment);

  return (
    <div className="list-comment">
       {comment.length > 0 && comment.map((item,index) => <Comment comment={item} key={index}  />) }
    </div>
  );
};

export default ListComments;
