import { CSSProperties } from "react";
import { StylesConfig } from "react-select";
import { IsMulti, Option } from "../../../components/Common/Select";
import { IProductListOption } from "../types";
import star from "../../../assets/icons/start.svg"

export const Options: readonly Option[] = [
    { value: 'price', label: 'Price', id: 1 },
    { value: 'name', label: 'Name', id: 2 },
];

const customControlStyles: CSSProperties = {
    outline: "none",
};

export const selectStyle: StylesConfig<Option, IsMulti> = {
    control: (provided, state) => {
        const { selectProps } = state;
        // provided has CSSObject type
        // state has ControlProps type

        // return type is CSSObject which means this line will throw error if uncommented
        // return false;

        return {
            ...provided,
            ...customControlStyles
        };
    }
};

export const dataListOption: IProductListOption[] = [
    {
        id: 1,
        title: "Product Brand",
        typeInput : "checkbox",
        keys : "productBrand",
        option: [
            {
                id: 1,
                title: "Coaster Furniture",
                value: "coaster_furniture",

            },
            {
                id: 2,
                title: "Fusion Dot High Fashion",
                value: "fusion_dot_high_fashion",
            },
            {
                id: 3,
                title: "Unique Furnitture Restor",
                value: "unique_furnitture_restor",
            }
            ,
            {
                id: 4,
                title: "Dream Furnitture Flipping",
                value: "dream_furnitture_flipping",
            }
            ,
            {
                id: 5,
                title: "Young Repurposed",
                value: "young_repurposed",
            }
            ,
            {
                id: 6,
                title: "Green DIY furniture",
                value: "green_dIY_furniture",
            }
        ],
        colorChecked: "#603EFF",
        colorNor: "#E5E0FC"
    },
    {
        id: 2,
        title: "Discount Offer",
        keys : "discount",
        typeInput : "radio",
        option: [
            {
                id: 1,
                title: "20% Cashback",
                value: "20",
            },
            {
                id: 2,
                title: "5% Cashback Offer",
                value: "5",
            },
            {
                id: 3,
                title: "25% Discount Offer",
                value: "25",
            }
        ],
        colorChecked: "#FF3EB2",
        colorNor: "#FFDBF1"
    },
    {
        id: 3,
        title: "Rating Item",
        keys : "rating",
        typeInput : "radio",
        option: [
            {
                id: 1,
                title: "5 stars",
                value: "5",
                icon: <img src={star} style={{ width: "15px", height: "15px" }} alt="start" />,
            },
            {
                id: 2,
                title: "4 stars",
                value: "4",
                icon: <img src={star} style={{ width: "15px", height: "15px" }} alt="start" />,
            },
            {
                id: 3,
                title: "3 stars",
                value: "3",
                icon: <img src={star} style={{ width: "15px", height: "15px" }} alt="start" />,
            },
            {
                id: 2,
                title: "2 stars",
                value: "2",
                icon: <img src={star} style={{ width: "15px", height: "15px" }} alt="start" />,
            },
            {
                id: 1,
                title: "1 stars",
                value: "1",
                icon: <img src={star} style={{ width: "15px", height: "15px" }} alt="start" />,
            }
        ],
        colorChecked: "#FFCC2E",
        colorNor: "#FFF6DA"
    },
    {
        id : 4,
        title : "Categories",
        keys : "categories",
        typeInput : "checkbox",
        option : [
            {
                id: 1,
                title: "Prestashop",
                value: "prestashop",
            },
            {
                id: 2,
                title: "Magento",
                value: "magento",
            },
            {
                id: 3,
                title: "Bigcommerce",
                value: "bigcommerce",
            },
            {
                id: 4,
                title: "osCommerce",
                value: "osCommerce",
            },
            {
                id: 5,
                title: "3dcart",
                value: "3dcart",
            },
            {
                id: 6,
                title: "Bags",
                value: "bags",
            },
            {
                id: 7,
                title: "Watches",
                value: "watches",
            }
        ],
        colorChecked: "#7E33E0",
        colorNor: "#E0D3F5"
    },
    {
        id : 5,
        title : "Price Filter",
        keys : "price_filter",
        typeInput : "radio",
        option : [
            {
                id : 1,
                title : "0 - 350.000",
                value : "0-350000",
            },
            {
                id : 2,
                title : "350.000 - 700.000",
                value : "350000-700000",
            },
            {
                id : 3,
                title : "750.000 - 1.050.000",
                value : "750000-1050000",
            },
            {
                id : 4,
                title : "1.050.000+",
                value : "1050000-0",
            }
        ],
        colorChecked: "#E60584",
        colorNor: "#151875"
    }

]