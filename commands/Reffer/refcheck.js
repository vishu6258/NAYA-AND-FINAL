/*CMD
  command: refcheck
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Reffer
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();

var msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(var i in refList){
    user = refList[i];
    msg+= "\nš¤ " +  user.first_name + " @" + user.username + "";
  }
}else{
  msg = "YOU DIDN'T REFERRED ANY USER āā";
}
Bot.sendMessage(msg);
