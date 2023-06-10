import { useEffect, useState } from "react";
import CardV1 from "../../components/Common/Card/Card-v1";
import CardV8 from "../../components/Common/Card/Card-v8";
import HeaderProduct from "./components/Header";
import ListOption from "./components/ListOption";
import { dataListOption } from "./constants";
import "./styles.scss";
import { EView } from "./types";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { getProductAll, productFilter } from "src/store/product/slice";
import { paramProduct } from "src/services/api/product/types";
import { useAppSelector } from "src/hooks/useAppSelector";
import Pagination from "src/components/Common/Pagination";
import Iconify from "src/admin/components/iconify/Iconify";

const Product = () => {
  const [view, setView] = useState<EView>(EView.GRIDVIEW);
  const [query, setQuery] = useState<paramProduct>({
    q: "",
    PageIndex: 1,
    PageSize: 15,
  });
  const [seed, setSeed] = useState(1);
  const selecterProduct = useAppSelector(
    (state) => state.product.productGetAll
  );
  const { items, pageCount, pageIndex, pageSize, totalRecords } =
    selecterProduct;
  const [paramQuery, setParamQuery] = useState<
    { key: string; value: string }[]
  >([]);
  const dispatch = useAppDispatch();

  const handleOnChangePage = (value: any) => {
    setQuery({ ...query, PageIndex: value });
  };

  useEffect(() => {
    dispatch(getProductAll(query));
  }, [query, dispatch]);

  const handleView = (view: EView) => {
    setView(view);
  };
  const compare = (
    a: { key: string; value: string },
    b: { key: string; value: string }
  ) => {
    const keys = [
      "product_brand",
      "discount",
      "rating",
      "category",
      "price_filter",
    ];
    const aKeyIndex = keys.indexOf(a.key);
    const bKeyIndex = keys.indexOf(b.key);

    if (aKeyIndex < bKeyIndex) {
      return -1;
    } else if (aKeyIndex > bKeyIndex) {
      return 1;
    } else {
      if (a.value < b.value) {
        return -1;
      } else if (a.value > b.value) {
        return 1;
      } else {
        return 0;
      }
    }
  };

  useEffect(() => {
    paramQuery.sort(compare);
    const Tquery = paramQuery.reduce(
      (pre, next) => pre + `${next.key}=${next.value}&`,
      ""
    );
    if (Tquery.length > 0) dispatch(productFilter(Tquery.slice(0, -1)));
  }, [paramQuery]);

  const handleOptionChecked = (keys: string, values: string) => {
    var isExistDiscount = paramQuery.find((item) => item.key === "discount");
    var isExistRating = paramQuery.find((item) => item.key === "rating");
    var isExistPrice = paramQuery.find((item) => item.key === "price_filter");
    if (
      (isExistDiscount && keys === "discount") ||
      (isExistRating && keys === "rating") ||
      (isExistPrice && keys === "price_filter")
    ) {
      setParamQuery((prev) => {
        return prev.map((item) => {
          if (item.key === "discount" && keys === "discount") {
            item.value = values;
          }
          if (item.key === "rating" && keys === "rating") {
            item.value = values;
          }
          if (item.key === "price_filter" && keys === "price_filter") {
            item.value = values;
          }
          return item;
        });
      });
    } else {
      setParamQuery([...paramQuery, { key: keys, value: values }]);
    }
  };

  const renderProductView = () => {
    switch (view) {
      case EView.LISTVIEW:
        return (
          <div className="product__body__right__list">
            {items.map((item, index) => (
              <CardV8 key={index} product={item} />
            ))}
          </div>
        );
      case EView.GRIDVIEW:
        return (
          <div className="product__body__right__grid">
            {items.map((item, index) => (
              <CardV1 key={index} product={item} />
            ))}
          </div>
        );
      default:
        break;
    }
  };

  const handleRemoveFilter = () => {
    setParamQuery([]);
    dispatch(getProductAll(query));
    setSeed(Math.random());
  };

  return (
    <div className="product">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Danh sách sản phẩm</h1>
          <span>Home - Products</span>
        </div>
      </div>
      <div className="container">
        <HeaderProduct handleView={handleView} />
        <div className="product__body">
          <div className="product__body__left">
            {paramQuery.length > 0 && (
              <div className="clear-filter" onClick={handleRemoveFilter}>
                <Iconify icon={"clarity:remove-line"} /> <span>Xoá Filter</span>
              </div>
            )}

            {dataListOption.map((item, index) => (
              <ListOption
                key={index + seed}
                handleOptionChecked={handleOptionChecked}
                {...item}
              />
            ))}
          </div>
          <div className="product__body__right">
            {renderProductView()}
            <div className="pagination">
              <Pagination
                className="pagi"
                currentPage={pageIndex}
                onPageChange={handleOnChangePage}
                pageSize={pageSize}
                siblingCount={pageCount}
                totalCount={totalRecords}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
