import request from '@/utils/request'

export const getGzsBaseInfoAPI = () => {
  return request.get('/baseInfo/all')
}

export const getGzsByKeyAPI = (data) => {
  return request.get('/baseInfo/findByKey/' + data)
}
