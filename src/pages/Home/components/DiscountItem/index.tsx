import './discount-item.scss'
import image from "../../../../assets/images/image-9.png";
import CustomerButton from '../../../../components/Common/CustomerButton';
import tick from "../../../../assets/icons/tick.svg";

const DiscountItem : React.FC = () => {
    return (
        <div className="discount__slide">
            <div className="discount__slide__left">
                    <h3>20% Discount Of All Products</h3>
                    <h5>Eams Sofa Compact</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    <ul>
                        <li><img src={tick} alt="" /> Material expose like metals</li>
                        <li><img src={tick} alt="" /> Clear lines and geomatric figures</li>
                        <li><img src={tick} alt="" /> Simple neutral colours.</li>
                        <li><img src={tick} alt="" /> Material expose like metals</li>
                    </ul>
                    <CustomerButton element={<span>Shop Now</span>} />
            </div>
            <div className="discount__slide__right">
                <img src={image} alt="" />
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default DiscountItem