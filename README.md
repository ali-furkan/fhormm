<div align="center">
 <br />
 <p>
    <a><img src="https://i.hizliresim.com/zM9927.png" alt= "fhormm"></a>
 </p>    
 <br />   
 <p>
   <a href="https://nodei.co/npm/fhormm/"><img src="https://nodei.co/npm/fhormm.png" alt="NPM info"></a>
 </p>
</div>

## About
   Fhormm is a calculation module.But what is this do calculating?
   A calculator with which you can calculate download time for a file depending on download speed.
   How long time it will take depends on file size, your own download speed and the server's upload speed.And this very useful.

## Installation
Just type `npm install fhormm` in terminal
## Usage
- fhormm(size: `number|string`, speed: `number|string`, type: `date|duration`)
    This Module is general expression.
### For Example
```js
    const fhormm = require('fhormm');
    fhormm("1GB","16mb/s","duration")
    //Return: 64000
```
### Parameters
|Param|Type|Usage|
| --- | --- | --- |
| size | String or Number | "1GB","1" or 1 |
| speed | String or Number |"1MB/s","1" or 1 |
| type | Enum | 'date','duration' |
- **size**: This param means file size.Use number or string.If it's number,size's type is `byte`.If it's string, You must use different options. These `Byte` `KB` `MB` `GB` `TB`,`PB`,`EB`,`ZB`,`YB`
- **speed**: Use number or string.If you use it as a number,Internet speed's type be `bps`.If you want use it as a string, You must use different options. These: `Byteps` `Byte/s` `kbps` `KB/s` `mbps` `MB/s` `gbps` `GB/s` `tbps` `TB/s`, **ps, **/s ...
- **type**: Result is depend type parameter .It has 2 options.These `date` and `duration`.
    - **date:** return `Date` data
    - **duration** return `Number` data. And type is milisecond
If this parameter is undefined, param is `date`.

# Note
- If size and speed's types are not specified, The values ​​are read type of byte and bit/s
- If Type (Paramaters) is undefined, Type is read "0 byte or 0 bit/s"