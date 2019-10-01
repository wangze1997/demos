module.exports = {
    // 配置文件一点都不能出错
    devServer: {
        open: true,   
        host: "localhost",
        port:8080,
        https:false,
        hotOnly:false,         
        proxy: {
            '/api': {
                target: "http://api.duyiedu.com/api",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}

// https://developer.duyiedu.com 真怪了,不用这个地址了。。。