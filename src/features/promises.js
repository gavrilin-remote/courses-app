export const promises = () => {

  /*
    1. Написать две функции, которые используют промисы. Первая функция makeAllCaps принимает массив слов и делает их
    заглавными, а затем вторая функция sortWords сортирует слова в алфавитном порядке.
    Если массив содержит что-либо, кроме строк, он должен выдать ошибку.
    Эти две функции в конце должны быть связаны  цепочкой then'ов.
   */

  //Место для реализации задачи 1

    const makeAllCaps = (words) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                try {
                    const upperCased = words.map((word) => word.toUpperCase());
                    res(upperCased);
                } catch (err) {
                    rej(`WE HAVE AN ERROR HERE:" ${err.message}`);
                }
            }, 2000);
        });
    };

    const sortWords = (words) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                return res([...words.sort()])
            },2000)
        });
    }

    makeAllCaps(['bbb', 'ccc', 'aaa', 'zzz'])
      .then(data => sortWords(data)
        .then(sorted => console.log(sorted))
        .catch(err => console.log(err.message))
      )
      .catch(err => console.log(err));

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

    const getIdsService = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res([5, 55, 12, 153, null, 345, 56, undefined, -103, 10, 67, 3.14])
            }, 2000)
        })
    }

    const checkIdStatusService = (ids) => {
        return new Promise((res, rej) => {
            let result = [];
            const checker = (id) => {
                if (Number.isInteger(id) && id > 0) {
                    result = [...result, {id: id, responseInfo: 'correct id'}]
                } else {
                    result = [...result, {id: id, responseInfo: 'incorrect id'}]
                }
            }
            setTimeout(() => {
                ids.map(id => checker(id))
                if(result.some(el => el.responseInfo === 'incorrect id')) {
                    throw new Error('WE HAVE INCORRECT IDS')
                }
                res(result)
            }, 2000)
        })
    }

    //Задача 3
    /*
     Обновить вес синтаксис чтобы работал через async/await
   */

    return [
        {
            id: 5,
            responseInfo: 'correct id',
        },
        {
            id: -103,
            responseInfo: 'incorrect id',
        }
    ]
};
