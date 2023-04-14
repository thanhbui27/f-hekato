import { useState } from "react"
import CustomerButton from "../../../../../../components/Common/CustomerButton"
import EditorJodit from "../../../../../../components/Common/Editor"

const Comments = () => {
    const [star, setStar] = useState<number>(-1)
    const handleStar = (value : number) => {
        setStar(value)   
    }

    return(
        <div className="comments">
            <div className="rating">
				{Array(5).fill(0).map((_, i) => <i key={i} className={`${i <= star ? 'bxs-star' : 'bx-star'} bx  star`}data-style={`--i : ${i}`} onClick={() => handleStar(i)} ></i>)}
			</div>
            <EditorJodit />
            <div className="button">
                <CustomerButton element={<span>Bình luận</span>} />
            </div>
        </div>
    )
}

export default Comments;
