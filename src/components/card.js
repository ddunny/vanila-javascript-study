import { listItem } from '../store/store';

export default class Card {
  initCardTemplate(title) {
    return `
    <div style="background:gray;width:100%;margin: 20px 0;padding: 10px 0;min-height:40px;line-height:2">
        <form style="display:block">
          <input type="text" value="" placeholder="todo 입력" name="context">
          <input type="hidden" value="${title}" name="type">
         <button>입력</button>
        </form>

      </div>
    `;
  }

  cardTemplate(title) {
    const items = [...listItem];
    return `
      <div class="item" style="color:white;">
        ${items
          .filter((item) => item.tag === title)
          .map(
            (item) =>
              `<div style="background:gray;width:100%;margin: 20px 0;padding: 10px 0;">
                <h3 style="padding:20px 10px;">${item.context}</h3>
                <button>수정</button>
                <button>삭제</button>
              </div>`
          )
          .join('')}
      </div>
    `;
  }
}
