declare namespace API.ICON {
  export interface CreateIconDTO {
    name: string
    file: File
  }

  export interface FetchIconListDTO extends API.ListQuery {
    name: string
  }

  export interface IconItemResponse {
    _id: string
    name: string
    path: string
    keyword: string[]
    creatTime: number
  }
}