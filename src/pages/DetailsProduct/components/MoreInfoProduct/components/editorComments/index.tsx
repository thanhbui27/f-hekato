import { useEffect, useState } from "react";
import CustomerButton from "../../../../../../components/Common/CustomerButton";
import EditorJodit from "../../../../../../components/Common/Editor";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { createComment, getAllComment } from "src/store/comment/slice";
import { IRequestComments } from "src/services/api/comment/type";
import { alert } from "src/components/Common/Alert";

const Comments = () => {
  const [value, setValue] = useState<string>();
  const [star, setStar] = useState<number>(-1);
  const handleStar = (value: number) => {
    setStar(value);
  };
  const { pid } = useParams();
  const { me } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSetStart = async () => {
    const cm = await dispatch(getAllComment(Number(pid)));
    if (getAllComment.fulfilled.match(cm)) {
        setStar(
        cm.payload.data.data.find((item) => item.user.id === me?.id)?.rate! - 1
      );
    }
  }

  useEffect(() => {
    handleSetStart()
  }, []);

  const handleComment = async () => {
    const comment: IRequestComments = {
      description: value!,
      rate: star + 1,
      productId: Number(pid),
      uid: me?.id!,
      createAt: new Date(),
    };

    const res = await dispatch(createComment(comment));
    if (createComment.fulfilled.match(res)) {
        handleSetStart()
      alert("success", "Bình luận thành công");
    } else {
      alert("error", "Bình luận thất bại");
    }
  };

  return (
    <div className="comments">
      <div className="rating">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <i
              key={i}
              className={`${i <= star ? "bxs-star" : "bx-star"} bx  star`}
              data-style={`--i : ${i}`}
              onClick={() => handleStar(i)}
            ></i>
          ))}
      </div>
      <EditorJodit value={value!} setValue={setValue} />
      <div className="button">
        <CustomerButton
          onClick={handleComment}
          element={<span>Bình luận</span>}
        />
      </div>
    </div>
  );
};

export default Comments;
