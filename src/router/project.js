import express from 'express'
import * as project from '../controller/project'
import projectOne from '../api/projectOne'

const router = express.Router()

router.get('/api/test', project.test)
router.get('/api/geturl', project.geturl)
router.post('/api/postUrl', project.postUrl)

for (let k in projectOne) {
  router.get(`${k}`, function (req, res) {
    res.json(projectOne[k])
  })
}

export default router
