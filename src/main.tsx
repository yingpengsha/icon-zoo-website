import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale/zh_CN';

import App from './views/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
