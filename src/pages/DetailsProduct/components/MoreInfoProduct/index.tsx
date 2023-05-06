import { Fragment, useState } from "react";
import Tabs from "../../../../components/Common/Tabs";
import { dataTabs } from "../../constants";
import { tabs } from "../../types";
import Comments from "./components/editorComments";
import Description from "./components/description";
import "./styles.scss";
import ListComments from "./components/listComments";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { getAllComment } from "src/store/comment/slice";
import { useParams } from "react-router-dom";

const MoreInfoProduct = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const [tab, setTab] = useState<tabs>(tabs.DESCRIPTION);
  const dispatch = useAppDispatch()
  const { pid } = useParams();

  const handleTabs = (view: string) => {
    setTab(view as tabs);
  };

  const renderData = () => {
    switch (tab) {
      case tabs.DESCRIPTION:
        return <Description />;
      case tabs.ADDITIONALINFO:
        return <h1>add More info</h1>;
      case tabs.REVIEWS:
        isAuth &&  dispatch(getAllComment(Number(pid)))
        return isAuth ? (
          <Fragment>
            <Comments />
            <ListComments />
          </Fragment>
        ) : (
          <Fragment>
            <p>Vui lòng đăng nhập để tiếp tục</p>
          </Fragment>
        );
      default:
        break;
    }
  };

  return (
    <div className="more-info-product">
      <div className="slide__bar">
        <Tabs tabs={dataTabs} onClick={handleTabs} />
        <div className="container center-bar">
          <div className="more-infor-box">{renderData()}</div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoProduct;
