import List from './containers/list';

export default class App {
  constructor() {
    const $app = document.querySelector('#app');
    new List($app);
  }
}
