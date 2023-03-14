import CardV8 from '../../components/Common/Card/Card-v8'
import HeaderProduct from './components/Header'
import ListOption from './components/ListOption'
import { dataListOption } from './constants'
import './styles.scss'

const Product = () => {

    return (
        <div className="product">
            <div className="container">
                <HeaderProduct />
                <div className="product__body">
                    <div className="product__body__left">
                        {
                            dataListOption.map((item,index) => <ListOption key={index} {...item} />)
                        }
                    </div>
                    <div className="product__body__right">
                        <div className="product__body__right__list">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV8 key={item} />)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

