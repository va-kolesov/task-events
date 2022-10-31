/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.onclick = () => {
        button.remove();
    };
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const listElements = arr.map((text) => {
        const li = document.createElement('li');
        li.innerHTML = text;
        li.onmouseover = () => li.setAttribute('title', text);
        return li;
    });
    const list = document.createElement('ul');
    list.append(...listElements);
    document.body.appendChild(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.innerHTML = 'tensor';
    link.onclick = (e) => {
        if (link.innerHTML === 'tensor') {
            e.preventDefault();
            link.innerHTML = link.innerHTML + ' ' + link.getAttribute('href');
        }
    };
    document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    function li() {
        const element = document.createElement('li');
        element.innerHTML = 'Пункт';
        element.onclick = () => {
            element.innerHTML = element.innerHTML + '!';
        };
        return element;
    }
    const list = document.createElement('ul');
    list.append(li());
    document.body.appendChild(list);

    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.onclick = () => {
        list.append(li());
    };
    document.body.appendChild(button);
}
