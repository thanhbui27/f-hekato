import { errorResponeUser } from "src/types/users"

export const handleMessagerErrorLogin =  (value : string)   =>   {
    return {
        [errorResponeUser.ACCOUNT_IS_LOCK] : "Tài khoản đã bị khoá",
        [errorResponeUser.ERROR_PLEASE_TRY_AGAIN] : "Có lỗi xảy ra vui lòng đăng nhập lại",
        [errorResponeUser.INFO_NOT_EXITS] : "Thông tin User không tồn tại",
        [errorResponeUser.CREATE_ACCOUNT_FAILED] : "Đăng ký tài khoản thất bại",
    }[value] 
}