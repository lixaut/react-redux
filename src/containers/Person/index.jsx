
import { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from 'store/actions/person'

// 定义 Name UI组件
class Person extends Component {
  // 添加一个人
  addPerson = () => {
    this.props.addPerson({
      id: this.props.person.length,
      name: this.nameNode.value,
      age: this.ageNode.value
    })
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  // 渲染函数
  render() {
    return (
      <div className="person">
        <h1>求和为：{this.props.count}</h1>
        <input type="text" ref={r => this.nameNode = r} placeholder="请输入姓名"/>
        <br />
        <input type="text" ref={r => this.ageNode = r} placeholder="请输入年龄"/>
        <br />
        <button onClick={this.addPerson}>加人</button>
        <ul>
          {
            this.props.person.map(p => {
              return <li key={p.id}>{p.name} -- {p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 定义 Name 容器组件
export default connect(state => ({
  person: state.person,
  count: state.count
}), { addPerson })(Person)