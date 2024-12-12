interface Mess {
  id: number;
  type: string | undefined;
  content: string;
  nickname: string;
  /**
   * 在线观众
   */
  memberCount: number;
  /**
   * 点赞数
   */
  likeCount: number;
  /**
   * 主播粉丝数
   */
  followCount: number;
  /**
   * 累计观看人数
   */
  totalUserCount: number;
  rank: RankItem[];
  gift: Gift;
}

interface Gift {
  name: string;
  // 礼物数量
  count: number;
  url: string;
  desc: string;
  // 单个价值-抖音币
  diamondCount?: number;
  // 可能为重复参数，大于0时为重复的
  repeatEnd?: number;
}

/**
 * 送礼点赞榜
 */
interface RankItem {
  nickname: string;
  avatar: string;
  rank: number;
}
