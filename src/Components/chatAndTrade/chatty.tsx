import React, { useState } from "react";
import { fetchData } from "./Data";
import './styles/App.css';
import './styles/ChatBubble.css';
import './styles/ConversationList.css';
import './styles/getMsg.css';

import makeToast from "../../Toaster";

interface TailwindButtonProps {
    icon: string;
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}
function mkLs(ls:any){
    if (isArray(ls)==false){
       ls = [ls]; 
    }
    return(ls);
}
function isArray(obj:any){return obj !== undefined && obj !== null && obj.constructor == Array;}
function isBoolean(obj:any){return obj !== undefined && obj !== null && obj.constructor == Boolean;}
function isFunction(obj:any){return obj !== undefined && obj !== null && obj.constructor == Function;}
function isNumber(obj:any){return obj !== undefined && obj !== null && obj.constructor == Number;}
function isString(obj:any){return obj !== undefined && obj !== null && obj.constructor == String;}
function isInstanced(obj:any)
{
    if(obj === undefined || obj === null)
    { return false; }
    if(isArray(obj)) { return false; }
    if(isBoolean(obj)) { return false; }
    if(isFunction(obj)) { return false; }
    if(isNumber(obj)) { return false; }
    if(ifJson(obj)) { return false; }
    if(isString(obj)) { return false; }
    return true;
}


function concateStrings(ls:any){
    var ls = mkLs(ls);
    var y = ls[0];
    for(var i=1;i<len(ls);i++){
        y = concateStr(y,String(ls[i]))
    }
    return(y);
}
function appLs(ls:any,y:any){if(isArray(ls)){ls.push(y);}return ls;} 
function concateStr(x:any,y:any){
    return String(x)+String(y);
}
function len(x:any){
    return x.length
}
function mkJson(js:any){
    return JSON.parse(js)

}
function ifJson(x:any){
        try {
            var testIfJson = JSON.parse(x);
            if (typeof testIfJson == "object"){
                return true;
            }
        }
        catch {
            return false;
        }
}
function ifJsonRet(js:any){
    return JSON.parse(js);
    
}
function getKeys(js:any){
    let x = mkJson(js)
    return Object.keys(x);

}
function stringIt(x:any){
    return(JSON.stringify(x));
}
function ifInJs(js:any,y:any){
    let x = JSON.parse(js)
    return getKeys(x).includes(y);
}
function addJson(js: any,y:string,z:any){
    let x = mkJson(js)
    x[y] = z;
    return x

}
type MessageInfo = {
  userName: string;
  outgoingh:string;
  incoming:string;
}

function exportUserInfo(message: MessageInfo) {
  const fileData = JSON.stringify(message);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "user-info.json";
  link.href = url;
  link.click();
}
function getDefaults(x:string){
    return JSON.stringify({'chat':{"model": "text-davinci-003","n": 1,"max_tokens": 2000,"temperature": 0.7,"best_of": 1, "top_p": 0.0, "frequency_penalty": 0.0, "presence_penalty": 0.0, "echo": false, "prompt":'','user':''}}[x]);

}
function ifInJsOg(jsOg:any,x:string){
    var js = JSON.parse(getDefaults(x))
    var keys =Object.keys(js)
    for(var i=0;i<Number(keys.length);i++){
        if (Object.keys(jsOg).includes(keys[i])==false){
            jsOg[keys[i]] = js[keys[i]];
        }if (jsOg[keys[i]]==''){
            jsOg[keys[i]] = js[keys[i]];
        }
    }return jsOg;
}
function strFyIt(js:any){
    return JSON.stringify(js);
}

const currentMonth=  Date(); 
function Car(color:string){
    return(<h2>{color}</h2>);
  }
    
function ChattyApp() {
  


  const apiKey = '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';
  const [input, setInput] = useState('');
  const [model, setModel] = useState(JSON.parse(getDefaults('chat'))['model']);
  const [textQ, setTextQ] = useState('');
  const [textR, setTextR] = useState('');
  const [username, setUsername] = useState('generalUser');
  const [messages, setMessages] = useState([]);
  const [completedSentence, setCompletedSentence] = useState('');
  async function handleClick(inIt:string,user:string) {
  let prompt = "please answer the query as best you can. after your response is determined, please reply with and Please provide a concise and informative title that accurately reflects the main topic of the coding question and its corresponding response, considering the programming language, concepts, techniques, and context discussed in both the query and the response.response must be in json format with the key variables being 1) Title, 2) Query, 3) Answer, 4) Type:(text or Problem, 5) Code:(language), 6) Date";
    let data = strFyIt(ifInJsOg({"prompt": inIt+'\n','user':user},'chat'));
    makeToast('chat Query','processing');
    try {
    const completedSentence =await fetchData(data,apiKey);
    makeToast('chat Query','success');
    setUsername(user);
    setModel(JSON.parse(data)['model']);
    setCompletedSentence(completedSentence);
    setTextQ(String(inIt));
    setTextR(String(completedSentence));
    } 
    catch (error) {console.error(error);}}

  return (
    <div className="container">

        <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
        <div className='conversation-list' >
            <h3>{username}:</h3><p className='send' id='previousQuery'><button className="button" onClick={(event) => navigator.clipboard.writeText(textQ)}>Copy</button>{textQ,currentMonth}</p>
            <h3>{model}:</h3><p className='receive' id='previousResponse'>{textR}<button className="button" onClick={(event) => navigator.clipboard.writeText(textR)}>Copy</button>{currentMonth}</p>
        </div>
        <div className="inputs"><textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder="Enter message here..." />
            <br /><br />
            <button className="button" onClick={() => handleClick(input,username)}>send query</button>
        </div>
   </div>
  );
}

export default ChattyApp;
