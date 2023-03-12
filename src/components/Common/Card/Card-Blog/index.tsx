import './card.scss';
import blogImg from '../../../../assets/images/blog-img-1.png'
import pen from '../../../../assets/icons/pen.svg';
import calender from '../../../../assets/icons/calender.svg';
import { Link } from 'react-router-dom';

const CardBlog : React.FC = () => {
    return (
        <div className="card__blog">
            <img src={blogImg} alt="" />
            <div className="card__blog__content">
                <div className="card__blog__nav">
                    <span><img src={pen} alt="" /> SaberAli</span>
                    <span><img src={calender} alt="" /> 21 August,2020</span>
                </div>
                <h4>Top esssential Trends in 2021</h4>
                <p>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <Link to={''}>Read More</Link>
            </div>
        </div>
    )
}
export default CardBlog