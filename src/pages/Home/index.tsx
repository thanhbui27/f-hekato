import Promotion from "../../components/Promotion"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import { settings_blog, settings_featurePRoduct, settings_promotion } from "./CustomerSettingSlider";
import CardV1 from "../../components/Common/Card/Card-v1";
import CardV2 from "../../components/Common/Card/Card-v2";
import Tabs from "../../components/Common/Tabs";
import { useState } from "react";
import { tabs } from "./types";
import { data, dataDiscountTabs, dataLeatestTabs, dataShopOffer } from "./constants";
import image_1 from '../../assets/images/image-6.png'
import image_2 from '../../assets/images/image-8.png'
import image_3 from '../../assets/images/image-9.png'
import image_4 from '../../assets/images/image-10.png'
import CardV3 from "../../components/Common/Card/Card-v3";
import UniqueFeature from "../../components/UniqueFeature";
import CardV4 from "../../components/Common/Card/Card-v4";
import CardV5 from "../../components/Common/Card/Card-v5";
import CardV6 from "../../components/Common/Card/Card-v6";
import DiscountItem from "../../components/DiscountItem";
import CardV7 from "../../components/Common/Card/Card-v7";
import IntroSub from "../../components/IntroSub";
import CardBlog from "../../components/Common/Card/Card-Blog";


const Home: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(dataLeatestTabs[0].key)

    const handleClickTab = (tab: string) => {      
        setActiveTab(tab);
    };
   
    const renderFeatureProduct = () => {
        switch (activeTab) {
            case tabs.ARRIVAL:
                return (
                    <div className="card-list">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV2 key={item} image={image_1} />)
                        }
                    </div>
                )
            case tabs.FEATURED :
                return (
                    <div className="card-list">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV2 key={item} image={image_2}  />)
                        }
                    </div>
                )
            case tabs.OFFER :
                return (
                    <div className="card-list">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV2 key={item} image={image_3} />)
                        }
                    </div>
                )
            case tabs.SELLER :
                return (
                    <div className="card-list">
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV2 key={item} image={image_4} />)
                        }
                    </div>
                )
            default :
            return (
                <div className="card-list">
                    {
                        [1, 2, 3, 4, 5, 6].map(item => <CardV2 key={item} />)
                    }
                </div>
            )
        }
    }

    return (
        <div className="home">
            <section className="home__promotion">
                <Slider {...settings_promotion}>
                    {
                        data.map(item => <Promotion key={item.id} image={item.image} />)
                    }
                </Slider>
            </section>

            <section className="home__featureProduct">
                <h4 className="home_title">Featured Products</h4>
                <div className="container">
                    <Slider {...settings_featurePRoduct}>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV1 key={item} />)
                        }
                    </Slider>
                </div>
            </section>

            <section className="home__leatestProduct">
                <h4 className="home_title">Leatest Products</h4>
                <Tabs tabs={dataLeatestTabs} onClick={handleClickTab} />
                <div className="container">
                    {renderFeatureProduct()}
                </div>
            </section>

            <section className="home__shopOffer">
                <h4 className="home_title">What Shopex Offer!</h4>
                <div className="container ">
                    <div className="home__flex__sp-between">    
                    {
                        dataShopOffer.map(item => <CardV3 key={item.id} image={item.image} />)             
                    }                                        
                    </div>                  
                </div>
            </section>

            <section className="home__uniqueFeature">
                <UniqueFeature />
            </section>

            <section className="home__trendingProduct">
                <h4 className="home_title">Trending Products</h4>
                <div className="container">
                    <div className="home__flex__sp-between">
                        {
                            [1, 2, 3, 4].map(item => <CardV4 key={item} />)
                        }               
                    </div> 
                    <div className="home__flex__center mt-40">
                        <CardV5 />
                        <CardV5 />
                        <div className="home__flex__col ">
                            <CardV6 />
                            <CardV6 />
                            <CardV6 />
                        </div>
                    </div>                   
                </div>

            </section>
            
            <section className="home__discount">
              <h4 className="home_title">Discount Item</h4>
                <Tabs tabs={dataDiscountTabs}  />
                <div className="container">
                    <DiscountItem />
                </div>
            </section>

            <section className="home__topCategory">
                <h4 className="home_title">Top Categories</h4>
                <div className="container">
                    <Slider {...settings_featurePRoduct}>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardV7 key={item} />)
                        }
                    </Slider>
                </div>          
            </section>
            
            <section className="home__intro">
                <IntroSub />
            </section>

            <section className="home__leatestBlog">
                <h4 className="home_title">Leatest Blog</h4>
                <div className="container">
                    <Slider {...settings_blog}>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => <CardBlog key={item} />)
                        }
                    </Slider>
                </div>       
            </section>
        </div>
    )
}

export default Home