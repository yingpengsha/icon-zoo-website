import request from '@/tools/request'
import { AxiosResponse } from 'axios'

export function createIcon(params: API.ICON.CreateIconDTO) {
  const formData = new FormData()
  formData.append('name', params.name)
  formData.append('file', params.file)
  return request.post('/icon/create', formData)
}

export function fetchIconList(params: API.ICON.FetchIconListDTO) {
  return request.get<API.ICON.FetchIconListDTO, AxiosResponse<{ data: API.ICON.IconItemResponse[], total: number }>>('/icon/query', {
    params
  })
}