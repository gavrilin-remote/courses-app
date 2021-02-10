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
      .then(data => sortWords(data))
      .then(sorted => console.log(sorted))
      .catch(err => console.log('ERRORRRR', err.message))

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

    const state = {
        validatedIds: []
    };

    const getIdsService = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res([5, 55, 12, 153, null, 345, 56, undefined, -103, 10, 67, 3.14])
            }, 2000)
        })
    }

    const checkIdStatusService = (id) => {
        return new Promise((res, rej) => {
            const condition = Number.isInteger(id) && id > 0;
            setTimeout(() => {
                if (condition) {
                    res(id)
                } else {
                    rej(id)
                }
            }, 1000)
        })
    }

    getIdsService()
      .then(data => {
          return Promise.allSettled(data.map(id => {
              return checkIdStatusService(id)
          }))
      })
      .then(validated => {
          validated.map(el => {
              if(el.status === 'rejected') {
                  return state.validatedIds = [...state.validatedIds, {id: el.reason, responseInfo: 'incorrect id'}];
              }
              return state.validatedIds = [...state.validatedIds, {id: el.value, responseInfo: 'correct id'}];
          })
      })
      .then(() => console.log('OUTPUT', state.validatedIds))
      .catch(err => console.log('HERE IS AN ERROR', err.message))

    //Задача 3
    /*
     Обновить вес синтаксис чтобы работал через async/await
   */

    // Первая задача
    const theFirstTask = async () => {
        try {
            const caps = await makeAllCaps(['bbb', 'ccc', 'aaa', 'zzz']);
            const sorted = await sortWords(caps);
            console.log('SORTED RESUlT', sorted)
        }
        catch (err) {
            console.log(err)
        }
    }

    const theSecondTask = async () => {
        try {
            const ids = await getIdsService();
            const validated = await Promise.allSettled(ids.map(id => {
                return checkIdStatusService(id)
            }));
            await validated.map(el => {
                if(el.status === 'rejected') {
                    return state.validatedIds = [...state.validatedIds, {id: el.reason, responseInfo: 'incorrect id'}];
                }
                return state.validatedIds = [...state.validatedIds, {id: el.value, responseInfo: 'correct id'}];
            });
            console.log('OUTPUT', state)
        }
        catch (err) {
            console.log(err)
        }
    }

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
