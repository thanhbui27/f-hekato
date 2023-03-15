import { useState } from 'react'
import CardV1 from '../../components/Common/Card/Card-v1'
import CardV8 from '../../components/Common/Card/Card-v8'
import HeaderProduct from './components/Header'
import ListOption from './components/ListOption'
import { dataListOption } from './constants'
import './styles.scss'
import { EView } from './types'

const Product = () => {
    const [view, setView] = useState<EView>(EView.GRIDVIEW)

    const handleView = (view: EView) => {
        setView(view)
    }

    const renderProductView = () => {
        switch (view) {
            case EView.LISTVIEW:
                return (
                    <div className="product__body__right__list">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV8 key={item} />)
                        }
                    </div>
                )
            case EView.GRIDVIEW:
                return (
                    <div className="product__body__right__grid">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV1 key={item} />)
                        }
                    </div>
                )
            default:
                break
        }
    }

    return (
        <div className="product">
            <div className="slide__bar">
                <div className="container center-bar">
                    <h1>Danh sách sản phẩm</h1>
                    <span>Home - Products</span>
                </div>
            </div>
            <div className="container">
                <HeaderProduct handleView={handleView} />
                <div className="product__body">
                    <div className="product__body__left">
                        {
                            dataListOption.map((item, index) => <ListOption key={index} {...item} />)
                        }
                    </div>
                    <div className="product__body__right">
                        {renderProductView()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

