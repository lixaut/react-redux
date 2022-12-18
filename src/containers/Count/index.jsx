
import { Component } from "react"
import { connect } from 'react-redux'
import { add, sub, addAsync } from 'store/actions/count'

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
    if (this.props.count % 2 === 0) return
    this.add()
  }
  // 异步加
  asyncAdd = () => {
    const { value } = this.selectNumber
    this.props.addAsync(value, 1000)
  }
  render() {
    return (
      <div className="count">
        <h1>当前总人数为：{this.props.person.length}</h1>
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
export default connect(state => ({
  count: state.count,
  person: state.person
}), { add, sub, addAsync })(Count)