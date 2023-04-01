import image from '../../../../assets/images/image-1.png'
import image1 from '../../../../assets/images/image-2.png'
import image2 from '../../../../assets/images/image-3.png'
import stars from '../../../../assets/icons/start.svg'
import fb from '../../../../assets/icons/fb.svg'
import inst from '../../../../assets/icons/ins.svg'
import tw from '../../../../assets/icons/tw.svg'
import CustomerButton from "../../../../components/Common/CustomerButton";
import './styles.scss'

const InfoProduct = () => {
    return (
        <div className="info__product__box">
            <div className="info__product__box__image">
                <div className="slide__image">
                    <img src={image} alt="" />
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
                <div className="main__image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="info__product__box__content">
                <h3>Playwood arm chair</h3>
                <div className="stars flex-start">
                    <div className="starts__list">
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                    </div>
                    <span>(22)</span>
                </div>
                <div className="price flex-start">
                    <span className="price__new">$32.00</span>
                    <div className="price__old">$32.00</div>
                </div>
                <div className="info">
                    <h5>Details : </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                </div>
                <CustomerButton element={<span className="add-cart">Add to Cart</span>} />
                <div className="category flex-start">
                    <h5>Categories : </h5>
                    <div className="list">
                        <span>Prestashop</span>
                        <span>Magento</span>
                        <span>Bigcommerce</span>
                    </div>
                </div>

                <div className="tags flex-start">
                    <h5>Tags : </h5>
                    <div className="list ">
                        <span>Prestashop</span>
                        <span>Magento</span>
                        <span>Bigcommerce</span>

                    </div>
                </div>

                <div className="share flex-start">
                    <h5>Share : </h5>
                    <div className="share__list">
                        <img src={fb} alt="" />
                        <img src={inst} alt="" />
                        <img src={tw} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct
