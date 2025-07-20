const express = require('express')
const { getConnectionStatus } = require('../db')
const router = express.Router()

// 增强健康检查端点
router.get('/healthcheck', async (req, res) => {
  try {
    const dbStatus = await getConnectionStatus()
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Household Finance Manager',
      version: process.env.npm_package_version,
      database: dbStatus,
      memoryUsage: process.memoryUsage()
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: '服务状态异常',
      error: error.message
    })
  }
})

module.exports = router
