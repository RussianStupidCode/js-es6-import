import Button from "./button";
import { getRandomColor } from "./utils";

export default function initApp() {
  const bodyEl = document.querySelector('body');

  const button = new Button('button', 'Изменить цвет страницы');

  button.bind(bodyEl);
  button.addClickListener(() => {
    bodyEl.style.backgroundColor = getRandomColor();
  });
}