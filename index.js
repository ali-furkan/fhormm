const {
    TIME,
    FILE,
    SPEED,
} = require("./lib/constants");

const analyze = (arr,v) => parseInt(arr.reduce((acc,cur,idx)=>v.endsWith(cur)?idx:acc))||0

/**
 * A number, or a string containing a number
 * @typedef {String|Number} TYPE_PARAMS
 */

/**
 * @typedef {'date'|'when'} TYPE_TIME - Date Type - Usage ```date: Return the when will file download ```
 */

/**
 * Fhormm returns Date with params you assigned
 * @param {TYPE_PARAMS} size - Assign File Size - Use number or string.If it's number,size's type is `byte`.If it's string, You must use different options. These `Byte` `KB` `MB` `GB` `TB`,`PB`,`EB`,`ZB`,`YB`
 * @param {TYPE_PARAMS} speed - Assign Internet Speed - Use number or string.If you use it as a number,Internet speed's type be `bps`.If you want use it as a string, You must use different options. These: `Byteps` `Byte/s` `kbps` `KB/s` `mbps` `MB/s` `gbps` `GB/s` `tbps` `TB/s`, **ps, etc.
 * @param {'date'|'duration'} type - Time Type *Default value is date -Result is depend type parameter .It has 2 options.These `date` and `duration`.
 *- **date:** return `Date` data
 *- **duration** return `Number` data. And type is milisecond
 *- **Note:** If this parameter is undefined, param is ``
 * @returns {Date|number} - Return depends your type's choice.
## Usage
- fhormm(size: `number|string`, speed: `number|string`, type: `date|duration`)
    This Module is general expression.
### For Example
```js
    const fhormm = require('fhormm');
    fhormm("1GB","16mb/s","duration")
    //Return: 64000
```
 */
const calculate = (size=0,speed=0,type="date") => {
    let curSize=size
        ,curSpeed=speed
        ,curType=TIME.some(t=>t==type)?type:"date"
    if(typeof size === "string") curSize = parseInt(size)*(2**(analyze(FILE,size.toLowerCase())*10));
    if(typeof speed === "string") {
        let nSpeed = analyze(SPEED,speed.toLowerCase())
        curSpeed = nSpeed%2==0?parseInt(speed)*(2**((10*nSpeed/2)-3)):parseInt(speed)*(2**(10*Math.floor(nSpeed/2)));
    }
    if(curType==="date") return new Date(Date.now()+(1000*curSize/curSpeed));
    else return 1000*curSize/curSpeed;
}

module.exports = calculate