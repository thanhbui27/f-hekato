import { toast, ToastOptions } from "react-toastify";
import { ReactComponent as Info } from "src/assets/images/Info.svg";
import { ReactComponent as Error } from "src/assets/images/Error.svg";
import './styles.scss'

type TranslateAlert = {
  key: string;
  default?: string;
};

export const alert = (
  type: "success" | "warning" | "error",
  message: string | TranslateAlert,
  customerToast?: ToastOptions
) => {
  const toastDefault: ToastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    ...customerToast,
  };

  switch (type) {
    case "error":
      return toast(
        <div className="alert">
          <Error />
          <p className="alert__content">
            {typeof message === "string" ? message : ""}
          </p>
        </div>,
        toastDefault
      );
    case "warning":
      return toast(
        <div className="alert">
          <Info />
          <p className="alert__content">
            {typeof message === "string" ? message : ""}
          </p>
        </div>,
        toastDefault
      );
    case "success":
      return toast.success(
        <div className="alert">
          <p className="alert__conent">
            {typeof message === "string" ? message : ""}
          </p>
        </div>,
        toastDefault
      );
    default:
      return toast(
        typeof message === "string" ? message : ""
      );
  }
};
