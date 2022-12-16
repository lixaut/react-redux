
import { Component } from 'react'
import { connect } from 'react-redux'
import {
  createAdd5Action
} from 'redux/count_action'

// 定义 Name UI组件
class Name extends Component {
  // 加 5 函数
  add5 = () => {
    this.props.add5(5)
  }
  // 渲染函数
  render() {
    return (
      <div className="name">
        <h1>当前和为：{this.props.state}</h1>
        <button onClick={this.add5}>+ 5</button>
      </div>
    )
  }
}

// 定义 Name 容器组件
export default connect(state => ({ state }), {
  add5: createAdd5Action
})(Name)