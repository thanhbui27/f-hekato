
export enum EView {
    "GRIDVIEW" = "gridview",
    "LISTVIEW" = "listview"
}


export interface IOption {
    id : number,
    title : string,
    value : string,
    icon? : JSX.Element
}

export interface IProductListOption {
    id : number,
    title? : string,
    option? : IOption[],
    keys :string,
    colorChecked : string,
    colorNor : string,
    typeInput : string
}