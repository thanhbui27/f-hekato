import React from 'react'
import { styled } from '@mui/material'
import Iconify from '../iconify/Iconify'
import { useAppDispatch } from 'src/hooks/useAppDispatch'
import { getAllProductImage, uploadImageProduct } from 'src/store/product/slice'
import { alert } from 'src/components/Common/Alert'


const SLabel = styled("label")(({theme}) => ({
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    gap : "10px",
    textTransform:"uppercase",
    color : theme.palette.common.white,
    background : theme.palette.info.main,
    textAlign : "center",
    padding : "10px 20px",
    fontSize : "12px",
    letterSpacing : "1.5px",
    userSelect : "none",
    cursor : "pointer",
    borderRadius : "3px",
    boxShadow : theme.shadows[15]
}))


export type FileUploadProps = {
    id : number
}

export const FileUpload: React.FC<FileUploadProps> = ({id}) => {
    const dispatch = useAppDispatch()

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const listFile : File[] = []
        const fdata = new FormData()
        for(var item of event.target.files!){
            listFile.push(item)
        }
        fdata.append("id",id.toString())
        for(let i =0 ; i< listFile.length ; i++){
            fdata.append(`files`, listFile[i])
        }
        // for (let [key, value] of fdata.entries()) {
        //     console.log(value);
        // }
        const res = await dispatch(uploadImageProduct(fdata))

        if(uploadImageProduct.fulfilled.match(res)){
            alert("success","Thêm ảnh thành công")
            dispatch(getAllProductImage(id))
        }else{
            alert("error","Thêm ảnh Thất bại")
        }

        event.target.files = null
    }

    return (
        <>
            <input type='file' id='upload' style={{display : "none"}} accept=".jpg, .jpeg, .png" onChange={handleChange}  multiple/>
            <SLabel htmlFor='upload'><Iconify icon="eva:upload-fill" /> Upload File</SLabel>
        </>
    )
}
