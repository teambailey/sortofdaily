import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import PostForm from './components/PostForm'
import Posts from './components/Posts'

render(
  <Provider store={store}>
    <div>
      <PostForm />
      <Posts />
    </div>
  </Provider>,
  document.getElementById('root')
)
