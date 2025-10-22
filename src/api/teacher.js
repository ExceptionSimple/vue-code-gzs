import request from '@/utils/request'

export const getTeacherListAPI = (data) => {
  return request.post('/teacher/page', data)
}

export const findByIdAPI = (data) => {
  return request.get('/teacher/findOne/' + data)
}

export const mainShowAPI = (data) => {
  return request.get('/teacher/main_show')
}
