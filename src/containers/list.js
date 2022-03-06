import Component from '../core/Component';
import Card from '../components/card';

export default class List extends Component {
  setup() {
    this.$state = { items: ['todo', 'doing', 'done'] };
  }

  template() {
    const { items } = this.$state;

    return `
      ${'<div class="list" style="display:flex;text-align:center;">'}
      ${items.reduce(
        (acc, cur) =>
          `${acc}
          <div class="inner" style="max-width:300px;background:#ededed;padding:0 20px;min-width:200px;margin: 20px;">
          <h1>${cur}</h1>
          ${this.getInitCard(cur)}
          ${this.getCard(cur)}
          </div>`,
        ''
      )}
      </div>`;
  }

  setEvent() {
    // this.$target.querySelector('button').addEventListener('click', () => {
    //   const { items } = this.$state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });
  }

  getInitCard(title) {
    const card = new Card();
    return card.initCardTemplate(title);
  }

  getCard(title) {
    const card = new Card();
    return card.cardTemplate(title);
  }
}
