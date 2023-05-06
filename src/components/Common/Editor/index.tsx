import * as React from "react";
import "jodit/build/jodit.min.css";
import JoditEditor from 'jodit-react';

interface IProps {
  value : string,
  setValue :  React.Dispatch<React.SetStateAction<string | undefined>>
}

const basePath = 'https://localhost:7263'

const config = {
  enableDragAndDropFileToEditor: true,
  toolbarAdaptive: false,
  uploader: {  
    url: `${basePath}/api/UploadImage/upload`,
    method: 'POST',
    pathVariableName: 'upload',
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    isSuccess: function (resp: any) {
      return resp;
    },
    process: function (resp: any) {
      return resp
    },
    defaultHandlerSuccess: function (data: any) {
      //  insertImage(full_file_path, null, 250);
      const that = this as any
        that.s.insertImage(`${basePath}/Resources${data}`) ;
    },
  },
};

const EditorJodit : React.FC<IProps> = ({value,setValue}) => {
  return (
    <>
      <JoditEditor onChange={(content) => setValue(content)} value="" config={config} />
    </>
  );
};

export default EditorJodit;
