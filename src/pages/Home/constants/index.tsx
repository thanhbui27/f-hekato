import item_1 from "../../../assets/images/image-1.png";
import item_2 from "../../../assets/images/image-13.png";
import item_3 from "../../../assets/images/image-14.png";
import icon_1 from "../../../assets/icons/free-delivery.svg";
import icon_2 from "../../../assets/icons/cashback.svg";
import icon_3 from "../../../assets/icons/premium-quality.svg";
import icon_4 from "../../../assets/icons/24-hours-support.svg";
import { tabs, tabsDiscount } from "../types";


export const data = [
    {
        id: 1,
        image: item_1,
    },
    {
        id: 2,
        image: item_2,
    },
    {
        id: 3,
        image: item_3,
    }
]

export const dataLeatestTabs = [
    {
        id : 1,
        key : tabs.ARRIVAL,
        title : "New Arrival"
    },
    {
        id : 2,
        key : tabs.SELLER,
        title : "Best Seller"
    },
    {
        id : 3,
        key : tabs.FEATURED,
        title : "Featured"
    },
    {
        id : 4,
        key : tabs.OFFER,
        title : "Special Offer"
    }
]

export const dataDiscountTabs = [
    {
        id : 1,
        key : tabsDiscount.WoodChair,
        title : "Wood Chair"
    },
    {
        id : 2,
        key : tabsDiscount.PlasticChair,
        title : "Plastic Chair"
    },
    {
        id : 3,
        key : tabsDiscount.SofaColletion,
        title : "Sofa Colletion"
    },
]

export const dataShopOffer = [
    {
        id: 1,
        image: icon_1,
    },
    {
        id: 2,
        image: icon_2,
    },
    {
        id: 3,
        image: icon_3,
    },
    {
        id: 4,
        image: icon_4,
    }
]