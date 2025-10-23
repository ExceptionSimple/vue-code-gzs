import request from '@/utils/request'

export const getGzsBaseInfoAPI = () => {
  return request.get('/baseInfo/all')
}
