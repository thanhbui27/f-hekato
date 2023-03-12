import { useEffect, useState } from "react";
import "./Tabs.scss";

interface Tab {
    key : string,
    title : string,
    onClick? : (key : string) => void
}

interface TabsProps {
    tabs: Tab[];
    className?: string;
    onClick?: (key: string) => void;
  }

const Tabs : React.FC<TabsProps> = ({tabs, className, onClick}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].key);

    const handleClick = (key : string) => {
        setActiveTab(key)
    }

    useEffect(() => {
        onClick?.(activeTab)
    },[activeTab, onClick])

    return (
        <div className="tabs">
            {
                tabs.map((item, index) => {
                    return (
                    <div className="tabs__item" key={index} onClick={() => handleClick(item.key)}>
                        <span className= {`${activeTab === item.key ? 'active' : ''}`} >{item.title}</span>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Tabs