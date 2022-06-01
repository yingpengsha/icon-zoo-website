import request from '@/tools/request'

export function uploadFile(file: Blob) {
  const formData = new FormData()
  formData.append('file', file)
  return request.post('/file/upload', formData)
}