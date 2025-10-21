import request from '@/utils/request'

export const recentActivitiesAPI = () => {
  return request.get('/activities/recent')
}

export const recentComingAPI = () => {
  return request.get('/activities/recent-coming')
}

export const finishedAPI = () => {
  return request.get('/activities/finished')
}

export const getActivitiesListAPI = (data) => {
  return request.post('/admin/activities/page', data)
}
