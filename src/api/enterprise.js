import request from '@/utils/request'

export const getEnterpriseListAPI = (data) => {
  return request.post('/enterprise/page', data)
}

export const findByIdAPI = (data) => {
  return request.get('/enterprise/findOne/' + data)
}
