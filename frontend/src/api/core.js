/*    通信核心
 *    本模块的设计核心思想何作用：对后端程序的接口调用操作；主要负责如：错误捕获，调用队列控制，
 * 身份信息绑定，通信配置，异常处理。
 */

import axios from 'axios'
// import fs from 'fs'
import { Message } from 'element-ui'
console.log(process.env.NODE_ENV)
axios.defaults.baseURL = (process.env.NODE_ENV === 'production' ? '//' : 'http://localhost:100/')
axios.timeout = 1000
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
    // console.log(config)
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

/*
 *  保持线程同步，是一个关键问题
 *  processInLogin  登录开关，如果发现401，则开启登录，设置这个变量为true，
 *                  所有因403返回的问题，全部阻断
 *  waitForLogin    所有阻断的请求，当完成登录之后再次重新启动
 *                  {f:回调函数,a:参数,t:异步结果回调}
 */

// 通用异步调用
function CommonAjax (data, url, method) {
  // console.info(`${url} / ${method} / ${JSON.stringify(data)}`);
  let params = {}
  if (method === 'get') {
    params = {
      method: method,
      url: url,
      params: data
    }
  } else {
    params = {
      method: method,
      url: url,
      data: data
    }
  }
  return new Promise((resolve, reject) => {
    axios(params).then(res => {
      resolve(res.data)
    }).catch(err => {
      if (typeof err.response !== 'undefined' && typeof err.response.status !== 'undefined') {
        const code = err.response.status
        switch (code) {
          case 401: // unauthoried
            console.warn('请求拒绝，需要重新登录，本次请求加入重新请求队列')
            break
          case 403:
            console.warn('无权限')
            Message.error('无权限')
            break
          case 404:
            console.error('===========访问的资源不存在，请检查===========')
            break
          case 406:
            break
          case 500:
            console.error('===========服务器罢工============')
            console.error(`data:${JSON.stringify(data)}, url:${url}, method:${method}`)
            break
          default:
            console.error(`${code} 未做错误代码的捕获的后端端异常`)
            break
        }
        return
      }
      reject(err)
    })
  })
}

function ajax (data, url, method) {
  return new Promise((resolve, reject) => {
    CommonAjax(data, url, method).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  ajax
}
