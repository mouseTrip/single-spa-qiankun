/*
 * @Author: 张天昊
 * @Date: 2020-05-07 15:51:21
 * @LastEditors: 张天昊
 * @LastEditTime: 2020-05-07 16:00:56
 * @Description:
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import rootReducer from './reducer'

const middlewares = [
  thunkMiddleWare
]

const enhancer = compose(applyMiddleware(...middlewares))

export default createStore(rootReducer, enhancer)
