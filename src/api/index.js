// axios封装
import Vue from 'vue'
import axios from 'axios'

const vue = new Vue();

// axios的配置
axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://localhost:3000';

// 返回状态判断(也叫响应拦截器)
axios.interceptors.response.use((res)=>{
  // console.log(res)
  if(res.status !== 200){
    alert('网络异常');
    return Promise.reject(res);
  }
  return res;
},(error)=>{
  alert('网络异常')
  return Promise.reject(error);
});

// 对axios.get方法进行封装
export function fetchGet(url, param) {
  return new Promise((resolve,reject)=>{
    axios.get(url,{
      params: param
    })
    .then(response => {//成功
      resolve(response.data);
    },err => {
      reject(err);
    })
    .catch((error) => {
      reject(error);
    })
  })
}