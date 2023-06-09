import { useEffect, useState } from "react";
import CardV1 from "../../components/Common/Card/Card-v1";
import CardV8 from "../../components/Common/Card/Card-v8";
import HeaderProduct from "./components/Header";
import ListOption from "./components/ListOption";
import { dataListOption } from "./constants";
import "./styles.scss";
import { EView } from "./types";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { getProductAll } from "src/store/product/slice";
import { paramProduct } from "src/services/api/product/types";
import { useAppSelector } from "src/hooks/useAppSelector";
import Pagination from "src/components/Common/Pagination";

const Product = () => {
  const [view, setView] = useState<EView>(EView.GRIDVIEW);
  const [query, setQuery] = useState<paramProduct>({
    q: "",
    PageIndex: 1,
    PageSize: 15,
  });
  const selecterProduct = useAppSelector(
    (state) => state.product.productGetAll
  );
  const { items, pageCount, pageIndex, pageSize, totalRecords } =
    selecterProduct;
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
            {dataListOption.map((item, index) => (
              <ListOption key={index} {...item} />
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
