import { ReactNode } from "react";
import "./Button.scss"
interface CustomerButtonProps {
    customerCLass? : string,
    element: ReactNode,
}

const CustomerButton : React.FC<CustomerButtonProps> = ({ customerCLass , element}) => {
    return (
        <button className={`${customerCLass} btn`}>
            {element}
        </button>
    )
}

export default CustomerButton