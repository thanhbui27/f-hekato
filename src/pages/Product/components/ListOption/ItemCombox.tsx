import { IOption } from "../../types"
import './styles.scss'

interface PropsItemCombox {
    Option: IOption,
    colorChecked: string,
    colorNor: string,
    keys : string,
    typeInput : string,
    handleOptionChecked : (key : string, value : string) => void
}

const ItemCombox: React.FC<PropsItemCombox> = ({ Option, colorChecked, colorNor, keys, typeInput, handleOptionChecked }) => {


    return (
        <div className="item__combox">
            <label > {Option.title} {Option?.icon} 
                <input type={typeInput} value={Option.value} name={keys} onChange={(e) => e.target.checked && handleOptionChecked(keys,Option.value)} />
                <span className="geekmark" style={{ "--colorChecked": colorChecked , "--colorNor": colorNor } as React.CSSProperties} ></span>
            </label>
        </div>
    )
}

export default ItemCombox
