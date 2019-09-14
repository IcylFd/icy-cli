import React, { Component } from 'react';
import { Button } from 'antd';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('test')
@observer
class App extends Component {
  componentDidMount() {
  }

  getToolList = () => {
    const { test: { getToolList } } = this.props;
    getToolList();
  }

  render() {
    const { getToolList } = this;
    const { test: { helloWorld } } = this.props;
    console.log('asdasdasdasd', toJS(helloWorld));
    return (
      <div>
        {
          toJS(helloWorld).map(item => (<div key={item}>{item}</div>))
        }
        <Button type="primary" onClick={() => getToolList()}>Primary</Button>
      </div>
    );
  }
}

export default App;
