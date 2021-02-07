export const promises = () => {
  /*
    1. Написать две функции, которые используют промисы. Первая функция makeAllCaps принимает массив слов и делает их
    заглавными, а затем вторая функция sortWords сортирует слова в алфавитном порядке.
    Если массив содержит что-либо, кроме строк, он должен выдать ошибку.
    Эти две функции в конце должны быть связаны  цепочкой then'ов.
   */
  const names = ['lol', "kek", "cheburek"];

  function checkString( val ) {
    return typeof val === 'string'; 
  } 

  const makeAllCaps = (names) => new Promise((resolve, reject) => {
      if (names.every(checkString)) {
        setTimeout(() => {
          resolve(names.map((name) => name.toUpperCase()));
        }, 1000);
      } else  {
        let reason = new Error('"names" is not a string');
        reject(reason); 
      }
    })

  const sortWords = (names) => new Promise((resolve, reject) => {
    if (names.every(checkString)) {
      setTimeout(() => {
        resolve(names.sort());
      }, 2000);
    } else {
      let reason = new Error('"names" is not a string');
      reject(reason); 
    }
  });

  Promise.all([sortWords(names), makeAllCaps(names)])
  .then(item => item.map(sortedArr => console.log(sortedArr))).catch(err => alert(err))

  //Место для реализации задачи 1

  /*
    2. Создать метод, который будет воссоздавать реальный запрос на бэкенд с именем  getIdsService.
      Ответ getIdsService: массив - [5, 55, 12, 153, null, 345, 56, undefined, -103, 10, 67, 3.14].

      После получения ответа getIdsService реализовать логику еще одного запроса c именем CheckIdStatusService,
      который проверяется корректность каждого id:

      Условия для запроса getIdsService - корректные только те id, которые являются целыми числами и больше 0. В случае
      неккоректного id не просто записывается поле responseInfo: 'incorrect id', а отклоняется сам промис.

      Пример выходящих данных:
      [
        {
          id: 5,
          responseInfo: 'correct id',
        },
        {
          id: -103,
          responseInfo: 'incorrect id',
        }
      ]

      Общие условия для задачи: вложеность then или catch должна отсутствовать
  */

  //Место для реализации задачи 2

  //Задача 3
  /*
     Обновить вес синтаксис чтобы работал через async/await
   */

  return [
    {
      id: 5,
      responseInfo: "correct id",
    },
    {
      id: -103,
      responseInfo: "incorrect id",
    },
  ];
};
