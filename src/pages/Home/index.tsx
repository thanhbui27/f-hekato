import React, { useEffect } from "react";
import Promotion from "./components/Promotion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";
import {
  settings_TrendingProduct,
  settings_blog,
  settings_featurePRoduct,
  settings_promotion,
} from "./CustomerSettingSlider";
import { useState } from "react";
import { tabs } from "./types";
import {
  data,
  dataDiscountTabs,
  dataLeatestTabs,
  dataShopOffer,
} from "./constants";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { useAppSelector } from "src/hooks/useAppSelector";
import {
  getProductArrival,
  getProductBestSeller,
  getProductFeature,
  getProductOffer,
  getProductTrendSmall,
  getProductTrending,
} from "src/store/product/slice";
import CardV2 from "src/components/Common/Card/Card-v2";
import CardV1 from "src/components/Common/Card/Card-v1";
import Tabs from "src/components/Common/Tabs";
import CardV3 from "src/components/Common/Card/Card-v3";
import UniqueFeature from "./components/UniqueFeature";
import CardV4 from "src/components/Common/Card/Card-v4";
import CardV5 from "src/components/Common/Card/Card-v5";
import CardV6 from "src/components/Common/Card/Card-v6";
import DiscountItem from "./components/DiscountItem";
import CardV7 from "src/components/Common/Card/Card-v7";
import IntroSub from "./components/IntroSub";
import CardBlog from "src/components/Common/Card/Card-Blog";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(dataLeatestTabs[0].key);
  const productFeature = useAppSelector(
    (state) => state.product.productFeature
  );
  const productBestSeller = useAppSelector(
    (state) => state.product.productSeller
  );
  const productOffer = useAppSelector((state) => state.product.productOffer);
  const productArrival = useAppSelector((state) => state.product.productArrive);
  const productTrending = useAppSelector((state) => state.product.productTrending);
  const productTrendsmall = useAppSelector((state) => state.product.productTrendSmall);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductFeature());
    dispatch(getProductArrival());
    dispatch(getProductBestSeller());
    dispatch(getProductOffer());
    dispatch(getProductTrending());
    dispatch(getProductTrendSmall());
  }, []);

  const handleClickTab = (tab: string) => {
    setActiveTab(tab);
  };

  const renderFeatureProduct = () => {
    switch (activeTab) {
      case tabs.ARRIVAL:
        return (
          <div className="card-list">
            {productArrival.map((item, index) => (
              <CardV2 key={index} product={item} />
            ))}
          </div>
        );
      case tabs.FEATURED:
        return (
          <div className="card-list">
            {productFeature.map((item, index) => (
              <CardV2 key={index} product={item} />
            ))}
          </div>
        );
      case tabs.OFFER:
        return (
          <div className="card-list">
            {productOffer.map((item, index) => (
              <CardV2 key={index} product={item} />
            ))}
          </div>
        );
      case tabs.SELLER:
        return (
          <div className="card-list">
            {productBestSeller.map((item, index) => (
              <CardV2 key={index} product={item} />
            ))}
          </div>
        );
      default:
        return (
          <div className="card-list">
            {productArrival.map((item, index) => (
              <CardV2 key={index} product={item} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="home">
      <section className="home__promotion">
        <Slider {...settings_promotion}>
          {data.map((item) => (
            <Promotion key={item.id} image={item.image} />
          ))}
        </Slider>
      </section>

      <section className="home__featureProduct">
        <h4 className="home_title">Featured Products</h4>
        <div className="container">
          <Slider {...settings_featurePRoduct}>
            {productFeature &&
              productFeature.map((item, index) => (
                <CardV1 key={index} product={item} />
              ))}
          </Slider>
        </div>
      </section>

      <section className="home__leatestProduct">
        <h4 className="home_title">Leatest Products</h4>
        <Tabs tabs={dataLeatestTabs} onClick={handleClickTab} />
        <div className="container">{renderFeatureProduct()}</div>
      </section>

      <section className="home__shopOffer">
        <h4 className="home_title">What Shopex Offer!</h4>
        <div className="container ">
          <div className="home__flex__sp-between">
            {dataShopOffer.map((item) => (
              <CardV3 key={item.id} image={item.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="home__uniqueFeature">
        <UniqueFeature />
      </section>

      <section className="home__trendingProduct">
        <h4 className="home_title">Trending Products</h4>
        <div className="container">
          <Slider {...settings_TrendingProduct}>
            {productTrending.map((item,index) => (
              <CardV4 key={index} product = {item} />
            ))}
          </Slider>
          <div className="home__flex__center mt-40">
            <CardV5 />
            <CardV5 />
            <div className="home__flex__col ">
              {
                productTrendsmall.filter((_,i) => i < 3).map((item,index) =>  <CardV6 key={index} product={item} /> )
              }
            </div>
          </div>
        </div>
      </section>

      <section className="home__discount">
        <h4 className="home_title">Discount Item</h4>
        <Tabs tabs={dataDiscountTabs} />
        <div className="container">
          <DiscountItem />
        </div>
      </section>

      <section className="home__topCategory">
        <h4 className="home_title">Top Categories</h4>
        <div className="container">
          <Slider {...settings_featurePRoduct}>
            {productTrending.map((item,index) => (
              <CardV7 key={index} product={item} />
            ))}
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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <CardBlog key={item} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
