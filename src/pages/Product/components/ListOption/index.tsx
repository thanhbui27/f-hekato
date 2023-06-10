import { IProductListOption } from "../../types";
import ItemCombox from "./ItemCombox";

interface IProductListOptions extends IProductListOption {
    handleOptionChecked : (key : string, value : string) => void
}

const ListOption: React.FC<IProductListOptions> = (props) => {



  return (
    <div className="list__option">
      <h4>{props.title}</h4>
      <div className="list__option__collection">
        {props.option?.map((item, index) => (
          <ItemCombox
            key={index}
            handleOptionChecked={props.handleOptionChecked}
            keys={props.keys}
            typeInput={props.typeInput}
            Option={item}
            colorChecked={props.colorChecked}
            colorNor={props.colorNor}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOption;
