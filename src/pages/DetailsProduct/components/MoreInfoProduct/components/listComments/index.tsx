import Comment from "./components/comment";

const ListComments = () => {
  return (
    <div className="list-comment">
       {Array(10).fill(0).map(_ => <Comment />) }
    </div>
  );
};

export default ListComments;
