import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "LearnKu",
		imgurl: "https://www.google.com/s2/favicons?domain=learnku.com&sz=128",
		desc: "LearnKu 终身编程者的知识社区",
		siteurl: "https://learnku.com/",
		tags: ["Community"],
		weight: 8,
		enabled: true,
	},
	{
		title: "V2EX",
		imgurl: "https://www.v2ex.com/favicon.ico",
		desc: "V2EX 创意工作者们的社区",
		siteurl: "https://www.v2ex.com/",
		tags: ["Community"],
		weight: 7,
		enabled: true,
	},
	{
		title: "LINUX DO",
		imgurl: "https://www.google.com/s2/favicons?domain=linux.do&sz=128",
		desc: "LINUX DO 开发者社区",
		siteurl: "https://linux.do/",
		tags: ["Community"],
		weight: 7,
		enabled: true,
	},
	{
		title: "烧饼社区",
		imgurl: "https://linux.sb/app/assets/index.svg",
		desc: "烧饼社区 LINUX.SB - 人人都有饼吃的 AI 社区",
		siteurl: "https://linux.sb/",
		tags: ["AI", "Community"],
		weight: 6,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
