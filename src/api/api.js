import http from '@/http/http'
import apis from './ufan/apis'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
//let resquest = '/testIp/request/'
const api = {
  login: (params) => http.post(apis.ufan.AppLogin, params),
  getUser: (params) => http.post(apis.ufanMenu.GetUser, params),
  getPositionList: (params) => http.post(apis.ufanMenu.PositionList, params),
  getGoods: (params) => http.post(apis.ufanMenu.GetMeal, params)
}

//导出
export default api
