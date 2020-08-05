/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
import ReactDemo from '../../src' // 组件源代码
// import ReactDemo from 'lzy-react-component'; // npm link 测试打包组件的功能
// import 'lzy-react-component/lib/main.min.css'; // npm link 测试打包组件的功能

const App = () => <ReactDemo />
render(<App />, document.getElementById('root'))
