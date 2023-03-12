import CustomerButton from '../Common/CustomerButton'
import './intro-sub.scss'
import support from "../../assets/images/support.png"

const IntroSub : React.FC = () => {
    return (
        <div className="intro__sub">
            <div className="intro__sub__bg">
                <h2>Get Leatest Update By Subscribe 0ur Newslater</h2>
                <CustomerButton element={<span>subscribe</span>} />
            </div>
            <div className="intro__sub__support">
                <img src={support} alt="" />
            </div>
        </div>
    )
}

export default IntroSub