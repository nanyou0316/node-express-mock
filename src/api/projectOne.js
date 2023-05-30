import Mock from 'mockjs'

let projectOne = {
  '/api/getme': {
    code:200,
    status:'success',
    result:{
      name: 'xiaohong',
      age: 21,
      gender: '男',
      xuexi: 'cha11'
    }
  },
  '/api/getshe': Mock.mock({
    'error': 0,
    'message': 'success',
    'result|1': [{
      'author': '@name',
      'comment': '@cparagraph',
      'date': '@datetime'
    }]
  }),
  '/api/liyitong': Mock.mock({
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
