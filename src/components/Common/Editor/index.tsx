import * as React from "react";
import "jodit/build/jodit.min.css";
import { IResponse, IResponseImage } from "../../../types/response";
import JoditEditor from 'jodit-react';

const config = {
  enableDragAndDropFileToEditor: true,
  toolbarAdaptive: false,
  uploader: {
    url: "http://localhost:3500/upload",
    isSuccess: function (resp: IResponse) {
      return resp;
    },
    process: function (resp: IResponse) {
      return {
        files: resp.data.files,
        path: resp.data.path,
        baseurl: resp.data.baseurl,
        error: resp.data.error,
        message: resp.data.message,
      };
    },
    defaultHandlerSuccess: function (data: IResponseImage) {
      //  insertImage(full_file_path, null, 250);
      const that = this as any
        for (let i = 0; i < data.path.length; i ++) {
          that.s.insertImage(data.path[i]) ;
        }
    },
  },
};

const EditorJodit = () => {
  const [value, setValue] = React.useState<string>();

  return (
    <>
      <JoditEditor onChange={(content) => setValue(content)} value="" config={config} />
      {value}
    </>
  );
};

export default EditorJodit;
