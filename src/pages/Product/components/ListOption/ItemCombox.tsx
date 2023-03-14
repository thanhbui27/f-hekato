import { IOption } from "../../types"
import './styles.scss'

interface PropsItemCombox {
    Option: IOption,
    colorChecked: string,
    colorNor: string
}

const ItemCombox: React.FC<PropsItemCombox> = ({ Option, colorChecked, colorNor }) => {

    return (
        <div className="item__combox">
            <label > {Option.title} {Option?.icon} 
                <input type="checkbox" value={Option.value} name={Option.value} />
                <span className="geekmark" style={{ "--colorChecked": colorChecked , "--colorNor": colorNor } as React.CSSProperties} ></span>
            </label>
        </div>
    )
}

export default ItemCombox
