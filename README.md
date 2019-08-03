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
Only download this module: `npm install fhormm`
## Usage-Calculate
###For Example
```js
    const fhormm = require('fhormm');
    fhormm.calculate(1,16)
    //Output: 8 minutes 32 seconds
```

### Rules for Usage
```js
    const fhormm = require('fhormm');
    fhormm.calculate(fileSize, netSpeed, DateType)
```
###Constructor
- fhormm.calculate(fileSize: `integer|string`, netSpeed: `integer|string`, DateType: `Default|ShortDate|LongDate`)
    This Module is general expression.
### Parameter
|Param|Type|Usage|
| --- | --- | --- |
| fileSize | String or Number | "1GB","1" or 1 |
| netSpeed | String or Number |"1MB/s","1" or 1 |
| DateType | String | "Default" or "d","ShortDate" or "sd","LongDate" or "ld","Custom" or "c" |
- **fileSize**: Used as integer or string.If you use it as a integer,File size type be `GB`.If you want use it as a string, You must use 5 different options. These `Byte` `KB` `MB` `GB` `TB`
- **netSpeed**: Used as integer or string.If you use it as a integer,Internet speed's type be `mbps`.If you want use it as a string, You must use 10 different options. These: `Byteps` `Byte/s` `kbps` `KB/s` `mbps` `MB/s` `gbps` `GB/s` `tbps` `TB/s`
- **DateType**:You must use 3 different options.These `Default` `ShortDate` `LongDate`.If You don't this parameter, DateType be `Default`.
## Usage-Whenllitd
### Example
```js
    const fhormm = require('fhormm');
    fhormm.whenllitd(1,16)
    //Output: 2018-10-10 19:5:12
```
### Rules for Usage
```js
    const fhormm = require('fhormm');
    fhormm.whenllitd(fileSize, netSpeed, Type)
```
### Parameter
|Param|Type|Usage|
| --- | --- | --- |
| fileSize | String or Number | "1GB","1" or 1 |
| netSpeed | String or Number |"1MB/s","1" or 1 |
| Type | String | "Default" or "d", "Custom" or "c" |

## Note
-If fileSize and netSpeed's types are not specified, The values ​​are read type of MB
-If Type (Paramater) is undefined, Type is read "Default"
**These rules are valid for all methods**
