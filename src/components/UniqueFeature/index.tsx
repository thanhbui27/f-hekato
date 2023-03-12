import './UniqueFeature.scss'
import image from "../../assets/images/image-9.png";
import CustomerButton from '../Common/CustomerButton';

const UniqueFeature: React.FC = () => {
    return (
        <div className="unique__feature">
            <div className="container flex">
                <div className="unique__feature__left">
                    <img src={image} alt="" />
                    <div className="circle"></div>
                </div>
                <div className="unique__feature__right">
                    <h3>Unique Features Of leatest & Trending Poducts</h3>
                    <ul>
                        <li color='#F52B70'><p>All frames constructed with hardwood solids and laminates</p></li>
                        <li color='#2B2BF5'><p>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p></li>
                        <li color='#2BF5CC'><p>Arms, backs and seats are structurally reinforced</p></li>
                    </ul>
                    <div className="action">
                    <CustomerButton element={<span>Add To Cart</span>} />
                    <span>B&B Italian Sofa <br/> $32.00</span>
                    </div>               
                </div>
            </div>
         
        </div>
    )
}

export default UniqueFeature