import { observable, action } from 'mobx';
import { message } from 'antd';
import API from '../services/app';

class Test {
  @observable helloWorld = ['hello', 'warld'];
  @action.bound
   async getToolList() {
    return await API.getToolList().then(data => {
      const { arr } = data;
      this.helloWorld = arr;
    }).catch(err => {
      this.helloWorld = [];
      message.error(`错误：${err}`, 3);
    });
  }
}

export default new Test();
