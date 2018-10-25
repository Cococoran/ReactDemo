import React from 'react';
import Remarkable from 'remarkable';

import './editor.css'


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    var mdString = '输入 *markdown 语法* 就能看到效果'
    this.state = {
        value: mdString,
    }
  }

  handleChange() {
    this.setState({value: this.refs.input.value});
  }

  getRawMarkup() {
    var md = new Remarkable()
    return {
      __html: md.render(this.state.value)
    }
  }

  render() {
    // 注意 dangerouslySetInnerHTML 这个属性
    // 这就是 innerHTML 在 jsx 里面的写法
    // ref 是给 this.refs 用的
    return (
      <div className="MarkdownEditor">
        <p className="MarkdownTitle">一个简单的 markdown 编辑器</p>
        <div className="MarkdownLeft">
          <h1 className="MarkdownLeftTitle">原始文本</h1>
          <textarea className="MarkdownTextarea" placeholder="输入 *markdown 语法* 就能看到效果" 
          onChange={this.handleChange}
          ref="input"
          defaultValue={this.state.value} />
        </div>
        <div className="MarkdownLeft"> 
          <h1 className="MarkdownLeftTitle">结果预览</h1>
        <div
          className="MarkdownContent"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
        </div>
        
      </div>
    );
  }
}

module.exports = MarkdownEditor
