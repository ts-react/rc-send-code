<h1 align="center">rc-send-code</h1>

[![NPM version](https://img.shields.io/npm/v/@jiumao/rc-send-code.svg?style=flat)](https://npmjs.org/package/@jiumao/rc-send-code)
[![NPM downloads](http://img.shields.io/npm/dm/@jiumao/rc-send-code.svg?style=flat)](https://npmjs.org/package/@jiumao/rc-send-code)

> 发送验证码倒计时组件，基于[ant-design](https://ant.design/index-cn)Button组件

## 安装和使用

* 安装依赖

```
yarn add @jiumao/rc-send-code
```

* 使用示例

```
import React from 'react';
import SendCode from '@jiumao/rc-send-code';

class App extends React.Component {
  render() {
    return (
      <SendCode
        onCaptcha={() => { return true; }}
      />
    );
  }
}

```

# Props

* second 倒计时时长（秒）默认60
* initText 初始化按钮显示文本
* runText 运行时显示文本
* resetText 运行结束后显示文本
* onEnd 倒计时结束执行函数
* onCaptcha 获取验证码执行函数
