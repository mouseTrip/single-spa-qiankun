/*
 * @Author: 张天昊
 * @Date: 2020-05-06 17:41:56
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 16:23:15
 * @Description:
 */
import React from 'react'
import { useSelector } from 'react-redux'
import { setSpaState } from '../utils/spa-store'
import logo from '../logo.svg'

export default function () {
  const spaState = useSelector((state) => state.spa.spaState)
  const user = spaState.user
  const sendMsg2Base = (msg) => {
    setSpaState({
      ...spaState,
      msg,
    })
  }
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p style={{ color: '#333' }}>接受到基座传来的信息{user}</p>
      <button onClick={sendMsg2Base.bind(null, '来着react子应用的消息')}>给基座传消息</button>
    </header>
  )
}
