/*
 * @Author: 张天昊
 * @Date: 2020-05-07 11:01:02
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 15:25:23
 * @Description:
 */
import Vue from 'vue'
import {
  Icon,
  Button,
  Menu,
  MenuItem,
  Layout,
  Header,
  Content,
  Footer,
  Card,
  Message,
} from 'view-design'
;[
  Icon,
  Button,
  Menu,
  MenuItem,
  Layout,
  Header,
  Content,
  Footer,
  Card,
  Message,
].forEach(c => {
  Vue.component(c.name, c)
})
Vue.prototype.$Message = Message
import 'view-design/dist/styles/iview.css'
