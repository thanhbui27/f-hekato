import './intro-sub.scss'
import CustomerButton from '../../../../components/Common/CustomerButton'
import IntroSupport from './IntroSub'

const IntroSub: React.FC = () => {
    return (
        <div className="intro__sub">
            <div className="intro__sub__bg">
                <h2>Get Leatest Update By Subscribe 0ur Newslater</h2>
                <CustomerButton element={<span>subscribe</span>} />
            </div>
            <IntroSupport />
        </div>
    )
}

export default IntroSub