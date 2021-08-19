/**
 * 
 * @param {JSON} data 
 */

function verify(data) {
    for(var i=0;i+1 <= data.vars.length;i++) {
        if(typeof data.vars[i] != data.type && !String(data.type[i]).startsWith("~")) throw new TypeError(`Expected a ${data.type[i]}, got a ${typeof data.vars[i]}`)
    }
}

module.exports = verify