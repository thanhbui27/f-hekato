import CSelect from "../../../../components/Common/Select"
import { Options, selectStyle } from "../../constants"
import grid from '../../../../assets/icons/grid.svg';
import list from '../../../../assets/icons/list.svg';

import './styles.scss'

const HeaderProduct = () => {
    return (
        <div className="product__container__header">
            <div className="product__container__header__title">
                <h3>Ecommerce Acceories & Fashion item </h3>
            </div>
            <div className="product__container__header__action">
                <div className="per__page action__flex">
                    <span>Per Page : </span>
                    <input type="text" />
                </div>
                <div className="sort__by action__flex">
                    <span>Sort by : </span>
                    <CSelect option={Options} styles={selectStyle} />
                </div>
                <div className="view action__flex">
                    <span>View : </span>
                    <img src={grid} alt="grid" />
                    <img src={list} alt="list" />
                </div>
            </div>
        </div>
    )
}

export default HeaderProduct

