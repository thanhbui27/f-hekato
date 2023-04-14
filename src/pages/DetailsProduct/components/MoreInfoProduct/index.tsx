import { Fragment, useState } from 'react'
import Tabs from '../../../../components/Common/Tabs'
import { dataTabs } from '../../constants'
import { tabs } from '../../types'
import Comments from './components/editorComments'
import Description from './components/description'
import './styles.scss'
import ListComments from './components/listComments'

const MoreInfoProduct = () => {

    const [tab, setTab] = useState<tabs>(tabs.DESCRIPTION)

    const handleTabs = (view: string) => {
        setTab(view as tabs)
    }

    const renderData = () => {
        switch (tab) {
            case tabs.DESCRIPTION:
                return <Description />
            case tabs.ADDITIONALINFO:
                return (
                    <h1>add More info</h1>
                )
            case tabs.REVIEWS:
                return (
                    <Fragment>
                        <Comments />
                        <ListComments />
                    </Fragment>
                )
            default:
                break;
        }
    }

    return (
        <div className="more-info-product">
            <div className="slide__bar">
                <Tabs tabs={dataTabs} onClick={handleTabs} />
                <div className="container center-bar">
                    <div className="more-infor-box">
                        {renderData()}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MoreInfoProduct
