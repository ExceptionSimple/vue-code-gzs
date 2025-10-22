import request from '@/utils/request'

export const getStudentListAPI = (data) => {
  return request.post('/student/page', data)
}

export const findByIdAPI = (data) => {
  return request.get('/student/findOne/' + data)
}

export const mainShowAPI = (data) => {
  return request.get('/student/main_show')
}
