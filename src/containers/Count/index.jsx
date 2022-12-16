
import { Component } from "react"
import { connect } from 'react-redux'
import { 
  createAddAction, 
  createSubAction, 
  createAddAsyncAction
} from 'redux/count_action'

// 定义 Count UI组件
class Count extends Component {
  // 加法
  add = () => {
    const { value } = this.selectNumber
    this.props.add(value)
  }
  // 减法
  sub = () => {
    const { value } = this.selectNumber
    this.props.sub(value)
  }
  // 奇数加
  oddAdd = () => {
    if (this.props.state % 2 === 0) return
    this.add()
  }
  // 异步加
  asyncAdd = () => {
    const { value } = this.selectNumber
    this.props.asyncAdd(value, 1000)
  }
  render() {
    return (
      <div className="count">
        <h1>当前求和为：{this.props.state}</h1>
        <select ref={r => this.selectNumber = r}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.oddAdd}>odd +</button>
        <button onClick={this.asyncAdd}>async +</button>
      </div>
    )
  }
}

// 定义 Count 容器组件
export default connect(state => ({ state }), {
    add: createAddAction,
    sub: createSubAction,
    asyncAdd: createAddAsyncAction
})(Count)