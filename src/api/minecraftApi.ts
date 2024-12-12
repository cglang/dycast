import axios from "axios";

const serverUrl = "http://192.168.1.100:23333";
const apikey = "4603983196e24992843a5e2432475115";
const daemonId = "08e8509362ac44d7ac5b7f611ec71c50";

// const uuid = "b459d4784a484ab5b1b20aa3205859b9";    //  原版
// const uuid = "80f06cf9e3004923b6adbb4252d60760"; //  Better

const userName = "TimelyDart";

function sendCommand(uuid: string, command: string) {
  axios
    .get(`${serverUrl}/api/protected_instance/command`, {
      params: {
        apikey: apikey,
        uuid: uuid,
        daemonId: daemonId,
        command: command,
      },
    })
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}

export const sendMessage = function (uuid: string, content: string) {
  sendCommand(
    uuid,
    `tellraw ${userName} {"text":"${content}","color":"gold"}`
  );
};

export const chatMessage = function (
  uuid: string,
  nickname: string,
  content: string
) {
  // sendCommand(`/tellraw ${userName} {"text":"${content}","color":"gold"}`);
  sendCommand(
    uuid,
    `tellraw ${userName} [{"text":"${nickname}:","color":"green","bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"text":"${content}","color":"white","bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`
  );
};

export const sendTitle = function (uuid: string, content: string) {
  sendCommand(uuid, `title ${userName} title "${content}"`);
};
