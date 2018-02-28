module.exports = function check(str, bracketsConfig) {
    
    if (str.length % 2 !== 0) return false;

    //разбиваем переданную строку и преобразуем в массив

    var stringArray = str.split('');
    var brackets = [];

    //пишем двойной цикл сканирующий подмассивы
        
    for (var i = 0; i < str.length; i++) {

        for (var j = 0; j < bracketsConfig.length; j++) {

            if (stringArray[i] == bracketsConfig[j][1]
                && brackets[brackets.length - 1] == bracketsConfig[j][0]) {
                brackets.pop();

            } else if (stringArray[i] == bracketsConfig[j][0]) {
                brackets.push(stringArray[i]);
            }
        }
    }

    if (brackets.length == 0){
        return true;
    } else {
        return false;
    }
    
}