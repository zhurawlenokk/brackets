module.exports = function check(str, conf) {
  let confs = [];
    let check = true;
    conf.forEach(element => {
        confs.push(element[0]+element[1]);
    });

    let listString = str.split('');
    let joinConfig = confs.join('');
    let string = listString.filter(testFilter).join('');
    console.log(string);
    let start;

    function testFilter(char) {
        if (joinConfig.indexOf(char) != -1) {
            return true;
        } else {
            return false;
        } 
    }
    
    function delFoundCoincedense (index) {
        start = string.indexOf(index);
        if (start != -1 && string != '') {
            string = string.replace(index, '');
            delFoundCoincedense(index);
            check++;
        }
    }

    while(check) {
        check = 0;
        confs.forEach(e => {
            delFoundCoincedense(e);
        })
    }    

    if(string == '') {
        return true;             
    } else {
        return false;
    }

}
