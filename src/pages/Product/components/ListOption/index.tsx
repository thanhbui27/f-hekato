import { IProductListOption } from "../../types"
import ItemCombox from "./ItemCombox"

const ListOption: React.FC<IProductListOption> = (props) => {
    return (
        <div className="list__option">
            <h4>{props.title}</h4>
            <div className="list__option__collection">
                {
                    props.option?.map((item, index) => <ItemCombox key={index} Option={item} colorChecked={props.colorChecked} colorNor={props.colorNor} />)
                }
            </div>
        </div>
    )
}

export default ListOption
