export const promises = () => {

    /*
      1. Написать две функции, которые используют промисы. Первая функция makeAllCaps принимает массив слов и делает их
      заглавными, а затем вторая функция sortWords сортирует слова в алфавитном порядке.
      Если массив содержит что-либо, кроме строк, он должен выдать ошибку.
      Эти две функции в конце должны быть связаны  цепочкой then'ов.
     */

    //Место для реализации задачи 1
    const wordsArray = ['fish', 'ant', 'egg', 'car'];

    const makeAllCaps = (wordsArray) => {
        return new Promise((res, rej) => {
            try {
                const convertedToUppercase = wordsArray.map((word) => word.toUpperCase());
                res(convertedToUppercase);
            } catch (err) {
                rej(err.message);
            }
        });
    };

    const sortWords = (words) => {
        return new Promise((res, rej) => {
            res([...words.sort()]);
        });
    }

    makeAllCaps(wordsArray)
        .then(upperCasedArray => sortWords(upperCasedArray))
        .then(sortedArray => console.log(sortedArray))
        .catch(err => console.log('Error:', err));

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

    let resultArray = [];

    const getIdsService = () => {
        return new Promise((res, rej) => {
            res([5, 55, 12, 153, null, 345, 56, undefined, -103, 10, 67, 3.14])
        })
    }

    const checkIdStatusService = (idToCheck) => {
        return new Promise((res, rej) => {
            if (Number.isInteger(idToCheck) && idToCheck > 0) {
                res(idToCheck);
            } else {
                rej(idToCheck);
            }
        })
    }

    getIdsService()
        .then(data => {
            return Promise.allSettled(data.map(idToCheck => checkIdStatusService(idToCheck)));
        })
        .then(checkedIds => {
            checkedIds.forEach(item => {
                if (item.status === 'rejected') {
                    resultArray.push({id: item.reason, responseInfo: 'incorrect id'});
                }
                resultArray.push({id: item.value, responseInfo: 'correct id'});
            })
        })
        .then(() => console.log(resultArray))
        .catch(err => console.log('Error:', err.message))

    //Задача 3
    /*
     Обновить вес синтаксис чтобы работал через async/await
   */

    const asyncFirstTask = async () => {
        try {
            const upperCasedArray = await makeAllCaps(wordsArray);
            const sortedArray = await sortWords(upperCasedArray);
            console.log(sortedArray);
        } catch (err) {
            console.log('Error:', err.message);
        }
    }

    const asyncSecondTask = async () => {
        try {
            const receivedIds = await getIdsService();
            const checkedIds = await Promise.allSettled(receivedIds.map(idToCheck =>
                checkIdStatusService(idToCheck)
        ));
            await checkedIds.forEach(item => {
                if (item.status === 'rejected') {
                    resultArray.push({id: item.reason, responseInfo: 'incorrect id'});
                }
                resultArray.push({id: item.value, responseInfo: 'correct id'});
            });
            console.log(resultArray);
        } catch (err) {
            console.log('Error:', err.message);
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
