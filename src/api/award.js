import request from '@/utils/request'

export const allAwardAPI = async () => {
  return request.get('/award/all');
}
