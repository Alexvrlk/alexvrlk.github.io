function upperFirst(st) {
    'use strict';
    var tmpStr = st[0];
    if (st === '') {
        return st;
    } else {
        return tmpStr.toUpperCase() + st.substring(1);
    }
    
}
console.log(upperFirst('malishok'));