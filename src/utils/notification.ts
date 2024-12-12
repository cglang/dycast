import { chatMessage, sendMessage, sendTitle } from "../api/minecraftApi";

export const notification_minecraft = function (chat: Mess, uuid: string) {
  if (chat.type) {
    // console.log(chat.type);
    switch (chat.type) {
      // 进入
      case "member":
        sendMessage(uuid, `欢迎${chat.nickname}来到直播间`);
        break;
      case "social":
        break;
      // 聊天
      case "chat":
        chatMessage(uuid, chat.nickname, chat.content);
        break;
      case "like":
        break;
      // 礼物
      case "gift":
        // console.log(chat);
        sendTitle(
          uuid,
          `${chat.nickname}送给主播${chat.gift.count}个${chat.gift.name}`
        );
        break;
      case "room":
        break;
    }
  }
};
