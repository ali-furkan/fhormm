exports.calculate = function(fileSize, NetSpeed, DateType) {
  var sec = ["seconds" , "sec", "s"]
  var min = ["minutes" , "min", "m"]
  var hour = ["hours" , "h"]
  var day = ["days" , "d"]
  var month = ["months"]
  var year = ["year", "y"]
  //------------------------------
  var typeofFile = ["Byte","KB","MB","GB","TB"]
  var typeofSpeed = ["byteps","Byte/s","kbps","KB/s","mbps","MB/s","gbps","GB/s","tbps","TB/s"]
  //---------------------------
  var rectypeofFile = "GB"
  var rectypeofSpeed = "mbps"
  var recVFile = fileSize
  var recVSpeed = NetSpeed
  //It is reading input.
  //fileSize Analyzing
  for(var i = 0; i<typeofFile.length; i++) {
    if(fileSize.toString().endsWith(typeofFile[i])) {
      var rectypeofFile = typeofFile[i]
      var recfileofV = Math.pow(2,i*10)
      var recVFile = parseInt(fileSize.slice(0,fileSize.search(typeofFile[i])))
      break;
    }
  }
  //NetSpeed Analyzing
  for(var f = 0; f<typeofSpeed.length; f++) {
    if(NetSpeed.toString().endsWith(typeofSpeed[f])) {
      var rectypeofSpeed = typeofSpeed[f]
        if(rectypeofSpeed.endsWith("ps")){
          var recspeedofV = Math.pow(2,(Math.floor(f/2)*10)-3);
        }else {
          var recspeedofV = Math.pow(2,Math.floor(f/2)*10);
        }
      var recVSpeed = parseInt(NetSpeed.slice(0,NetSpeed.search(typeofSpeed[f])))
      break;
    }
  }
  //Result
  if(rectypeofFile == "GB" && rectypeofSpeed == "mbps") {
      return result0(Math.pow(2,13)*recVFile/(recVSpeed));
  }else{
      return result0(recfileofV*recVFile/(recVSpeed*recspeedofV));
  }
  function result0(resultValue) {
      if(resultValue<60) {
        if(DateType == undefined || DateType.toLowerCase() == "default"||DateType.toLowerCase() == "d") {
          return `${resultValue.toString()} ${sec[0]}`;
        }else if(DateType.toLowerCase() == "custom"|| DateType.toLowerCase() == "cust" || DateType.toLowerCase() == "c") {
          let resCustom = {
            day: 0,
            hour: 0,
            min: 0,
            sec: resultValue,
            totalSec: resultValue 
          }
          return resCustom;
        }
        else if(DateType.toLowerCase() == "shortdate"|| DateType.toLowerCase() == "sd") {
          return `00:00:${resultValue.toString()}`;
        }else if(DateType.toLowerCase() == "longdate"|| DateType.toLowerCase("ld")){
          return `0${hour[0]} 0${min[1]} ${resultValue.toString()}${sec[1]}`;
        }
      }
      if(resultValue<3600) {
        let resVInteger = parseInt(resultValue/60);
        let resVSec = parseInt(resultValue-(resVInteger*60));
        if(DateType == undefined || DateType.toLowerCase() == "default"||DateType.toLowerCase() == "d") {
          return `${resVInteger.toString()} ${min[0]} ${resVSec.toString()} ${sec[0]}`;
        }else if(DateType.toLowerCase() == "custom" || DateType.toLowerCase() == "cust" || DateType.toLowerCase() == "c") {
          let resCustom = {
            day: 0,
            hour: 0,
            min: resVInteger,
            sec: resVSec,
            totalSec: resultValue 
          }
          return resCustom;
        }
        else if(DateType.toLowerCase() == "shortdate"|| DateType.toLowerCase() == "sd") {
          return `00:${resVInteger.toString()}:${resVSec.toString()}`;
        }else if(DateType.toLowerCase() == "longdate"|| DateType.toLowerCase("ld")){
          return `0${hour[0]} ${resVInteger.toString()}${min[1]} ${resVSec.toString()}${sec[1]}`;
        }
      }
      if(resultValue<86400) {
        let resVInteger = parseInt(resultValue/3600);
        let resVMin = parseInt((resultValue-(resVInteger*3600))/60);
        let resVSec = parseInt(resultValue-(resVMin*60)-(resVInteger*3600));
        if(DateType == undefined || DateType.toLowerCase() == "default"||DateType.toLowerCase() == "d") {
          return `${resVInteger.toString()} ${hour[0]} ${resVMin.toString()} ${min[0]} ${resVSec.toString()} ${sec[0]}`;
        }else if(DateType.toLowerCase() == "custom"|| DateType.toLowerCase() == "cust" || DateType.toLowerCase() == "c") {
          let resCustom = {
            day: 0,
            hour: resVInteger,
            min: resVMin,
            sec: resVSec,
            totalSec: resultValue 
          }
          return resCustom;
        }
        else if(DateType.toLowerCase() == "shortdate"|| DateType.toLowerCase() == "sd") {
          return `${resVInteger.toString()}:${resVMin.toString()}:${resVSec.toString()}`;
        }else if(DateType.toLowerCase() == "longdate"|| DateType.toLowerCase("ld")){
          return `${resVInteger.toString()}${hour[0]} ${resVMin.toString()}${min[1]} ${resVSec.toString()}${sec[1]}`;;
        }
      }
      if(resultValue<31536000) {
        let resVInteger = parseInt(resultValue/86400);
        let resVHour = parseInt((resultValue-(resVInteger*86400))/3600);
        let resVMin = parseInt((resultValue-(resVHour*3600)-(resVInteger*86400))/60);
        let resVsec = parseInt(resultValue-(resVMin*60)-(resVHour*3600)-(resVInteger*86400));
        if(DateType == undefined || DateType.toLowerCase() == "default"||DateType.toLowerCase() == "d") {
          return `${resVInteger.toString()} ${day[0]} ${resVHour.toString()} ${hour[0]} ${resVMin.toString()} ${min[0]} ${resVsec.toString()} ${sec[0]}`;
        }else if(DateType.toLowerCase() == "custom"|| DateType.toLowerCase() == "cust" || DateType.toLowerCase() == "c") {
          let resCustom = {
            day: resVInteger,
            hour: resVHour,
            min: resVMin,
            sec: resVsec,
            totalSec: resultValue
          }
          return resCustom;
        }
        else if(DateType.toLowerCase() == "shortdate"|| DateType.toLowerCase() == "sd") {
          return `${resVInteger.toString()}${day[0]} ${resVHour.toString()}:${resVMin.toString()}:${resVsec.toString()}`;
        }else if(DateType.toLowerCase() == "longdate"|| DateType.toLowerCase("ld")){
          return `${resVInteger.toString()}${day[0]} ${resVHour.toString()}${hour[0]} ${resVMin.toString()}${min[1]} ${resVsec.toString()}${sec[1]}`;
        }
      };
      if(resultValue>=31536000) return `${parseInt(resultValue/31536000).toString()} ${year[0]}`;
    }
}
exports.whenllitd = function(fileSize, NetSpeed, Type) {
    var nowDate = new Date()
    var d = new Date(nowDate.getTime()+require("./index").calculate(fileSize, NetSpeed, "c").totalSec*1000);
    var date = `${d.getFullYear()}-${ d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    var result = {
      getYear:  d.getFullYear(),
      getMonth:  d.getMonth()+1,
      getDate: d.getDate(),
      getHours: d.getHours(),
      getMinutes: d.getMinutes(),
      getSeconds: d.getSeconds(),
      getDate: date
    }
    if(Type == undefined || Type.toLowerCase() == "d" ||Type.toLowerCase() == "default") {
      return date;
    }else if(Type.toLowerCase() == "custom" || Type.toLowerCase() == "c") {
      return result;
    }
    
}