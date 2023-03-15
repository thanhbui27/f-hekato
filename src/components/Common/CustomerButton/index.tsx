import { ReactNode } from "react";
import "./Button.scss"
interface CustomerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    customerCLass? : string,
    element: ReactNode,
}

const CustomerButton : React.FC<CustomerButtonProps> = ({ customerCLass , element, ...rest}) => {
    return (
        <button className={`${customerCLass} btn`} {...rest}>
            {element}
        </button>
    )
}

export default CustomerButton