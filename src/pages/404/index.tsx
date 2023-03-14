import { Link } from 'react-router-dom'
import notFound  from '../../assets/images/notfound.png'
import CustomerButton from '../../components/Common/CustomerButton'
import './styles.scss'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFound} />
            <Link to={`/`}>
                <CustomerButton element={<span >Back to Home</span>} />
            </Link>
        </div>
    )
}

export default NotFound
