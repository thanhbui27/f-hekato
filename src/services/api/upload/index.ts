import request from "src/services/request"

const apiUpload = {
    uploadImage : async (file: FormData) => await request({
        url : 'api/UploadImage/upload',
        method : 'POST',
        data : file
    })
}

export default apiUpload
