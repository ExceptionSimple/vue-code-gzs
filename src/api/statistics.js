import request from '@/utils/request'

export const getType1 = () => {
  return request.get('/statistics/type1')
}
