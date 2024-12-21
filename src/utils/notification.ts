import { chatMessage, sendMessage, sendTitle, releaseFireworks } from '../api/minecraftApi';

export const notification_minecraft = function (chat: Mess, uuid: string | null) {
    if (chat.type && uuid) {
        console.log(chat);
        switch (chat.type) {
            // 进入
            case 'member':
                sendMessage(uuid, `欢迎${chat.nickname}来到直播间`);
                break;
            // 关注
            case 'social':
                break;
            // 聊天
            case 'chat':
                chatMessage(uuid, chat.nickname, chat.content);
                break;
            // 点赞
            case 'like':
                releaseFireworks(uuid);
                break;
            // 礼物
            case 'gift':
                sendTitle(uuid, `感谢${chat.nickname}送出${chat.gift.count}个${chat.gift.name}`);
                break;
            case 'room':
                break;
        }
    }
};
