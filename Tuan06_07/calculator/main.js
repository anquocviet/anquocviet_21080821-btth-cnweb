const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnList = $$('button');
const display = $('.calculator__display');

btnList.forEach((btn) => {
   btn.onclick = () => {
      if (!btn.classList.value || btn.classList.value === 'key-operator') {
         let value = btn.innerText;
         console.log(value);
         if (value === 'x') value = '*';
         if (value === '÷') value = '/';
         display.innerText += value;
      }
      if (btn.classList.value === 'key-equal') {
         const display = $('.calculator__display');
         display.innerText = eval(display.innerText);
      }
      if (btn.classList.value === 'clear') display.innerText = '';
   };
});
