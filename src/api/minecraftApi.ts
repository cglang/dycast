import axios from 'axios';

const serverUrl = 'http://192.168.1.100:23333';
const apikey = '4603983196e24992843a5e2432475115';
const daemonId = '08e8509362ac44d7ac5b7f611ec71c50';

const userName = 'TimelyDart';

function sendCommand(uuid: string, command: string) {
    axios
        .get(`${serverUrl}/api/protected_instance/command`, {
            params: {
                apikey: apikey,
                uuid: uuid,
                daemonId: daemonId,
                command: command
            }
        })
        .then(function (response) {})
        .catch(function (error) {
            console.log(error);
        });
}

export const sendMessage = function (uuid: string, content: string) {
    sendCommand(uuid, `tellraw ${userName} {"text":"${content}","color":"gold"}`);
};

export const chatMessage = function (uuid: string, nickname: string, content: string) {
    sendCommand(uuid, `tellraw ${userName} [{"text":"${nickname}:","color":"green","bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"text":"${content}","color":"white","bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
};

export const sendTitle = function (uuid: string, content: string) {
    sendCommand(uuid, `title ${userName} title "${content}"`);
};

export const releaseFireworks = function(uuid:string){
    sendCommand(uuid, `bingo TimelyDart`);
}
