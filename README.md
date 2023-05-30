# node-mock
使用node+express 搭建本地mock‘数据服务器 配置快捷语法  支持自定义配置 和实时刷新
###  搭建本地 mock 服务器 ---为了更好的前端开发

>  工作中，有时候前端的很多工作需要后端的支持，但是可能后端的接口还没有开发完，或者有些时候在联调阶段，修复某个 bug 的时候，环境挂了。。。 那么这个时候，我们的很多工作无法顺利的进行下去。于是萌生了搭建本地服务器的想法。

 
api/projectOne
```js
import Mock from 'mockjs'

let projectOne = {
  getme: {
    name: 'xiaohong',
    age: 21,
    gender: '男',
    xuexi: 'cha11'
  },
  getshe: Mock.mock({
    'error': 0,
    'message': 'success',
    'result|1': [{
      'author': '@name',
      'comment': '@cparagraph',
      'date': '@datetime'
    }]
  }),
  liyitong: Mock.mock({
    'error': 0,
    'message': 'success',
    'result|3': [{
      'author': '@name',
      'comment': '@cparagraph',
      'date': '@datetime'
    }]
  })
}

export default projectOne

```

- controller 配置动态查询参数的请求  示例中给出了 get 和 post 的两种情况

controller/project.js

```js
import Mock from 'mockjs'

export function test(req, res) {
  var arr = Mock.mock({
    'error': 0,
    'message': 'success',
    'result|10': [{
      'author': '@name',
      'comment': '@cparagraph',
      'date': '@datetime'
    }]
  })
  res.json({
    arr
  })
}

export function geturl(req, res) {
  //  对于接口中的 get 参数  我们使用 query 获取即可
  const {
    num
  } = req.query
  res.json({
    name: 111,
    age: 11,
    message: req.originalUrl,
    num: `get 请求中的接口 num 为${num}`,
  })
}


export function postUrl(req, res) {
  //   针对普通的 post 请求 如果是表单格式的需要单独配置一下
  res.json({
    name: `post 请求的接口中，post参数为${req.body}`,
    age: 11,
    message: req.originalUrl,
  })
}


```
- router 中为路由配置
- app.js  启动端口服务，接受路由和接口配置
- main.js  babel 配置es6 语法


![image.png](https://upload-images.jianshu.io/upload_images/5703029-e77b7e7486bb8400.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


######  运行预览
>  这个项目，没有预览所有接口的功能。感兴趣的读者可以自己添加(当访问指定链接时，获取router 中的信息 进行展示出来，解决方法不唯一，可以查文档 自己添加)。

![image.png](https://upload-images.jianshu.io/upload_images/5703029-22badb80e74ecb9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/5703029-bf8dd09a0322ac0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





######  项目启动

[项目地址](https://github.com/majunchang/node-mock)
```

git clone https://github.com/majunchang/node-mock

cd node-mock
npm i 
npm run start 

```

##  End 
文章如有错误和不正之处，欢迎指正和批评，同时也希望大家多多支持,非常感谢。



![image.png](https://upload-images.jianshu.io/upload_images/5703029-9f9f1f8cf4eed957.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





