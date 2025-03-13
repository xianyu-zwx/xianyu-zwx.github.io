// index.js
// 动态计算窗口宽度
const isMobile = window.matchMedia("(max-width: 768px)").matches;

// 初始化聊天实例
const chatInstance = new CozeWebSDK.WebChatClient({
    config: {
        bot_id: '7474071375268282406',
    },
    auth: {
        type: 'token',
        token: 'pat_aco1fMlTrb0sb0VDSTl24Em71JzusvkRADBX0JHJubr8qyewIYzf7Athj2uvEXsP',
        onRefreshToken: async () => 'pat_aco1fMlTrb0sb0VDSTl24Em71JzusvkRADBX0JHJubr8qyewIYzf7Athj2uvEXsP',
    },
    userInfo: {
        id: 'user',
        url: 'https://p3-pc-sign.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_o0AXAz6CFC5iAqieiEIAqNADvXgfEx3vACVEOB.jpeg?lk3s=93de098e&x-expires=1740988800&x-signature=n92Ss7LH1npjyOm3T%2BT5Wn5x4Lk%3D&from=2480802190&s=profile&se=false&sc=avatar&l=202503011605135464A82DB454471B0F8C',
        nickname: 'CodingNinja',
    },
    ui: {
        base: {
            icon: 'https://p6-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/e26442b607c24827830c1e7ca09ab5ff~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1743407805&x-signature=fQPlNfYhuBbzerTK%2BYn6%2FnE15Wo%3D',
            layout: isMobile ? 'mobile' : 'pc',
            lang: 'zh-CN',
            zIndex: 1000
        },
        chatBot: {
            title: 'chat Bot',
            uploadable: true,
            width: isMobile ? window.innerWidth : 1230,
        },
        asstBtn: {
            isNeed: true,
        },
        footer: {
            isShow: true,
            expressionText: 'Powered by & copy; Coze',
            linkvars: {
                name: {
                    text: 'A',
                    link: 'https://www.test1.com'
                },
                name1: {
                    text: 'B',
                    link: 'https://www.test2.com'
                }
            }
        }
    },
});

// 响应窗口尺寸变化
window.addEventListener('resize', () => {
    const isMobileNow = window.matchMedia("(max-width: 768px)").matches;
    chatInstance.updateUI({
        base: {
            layout: isMobileNow ? 'mobile' : 'pc'
        },
        chatBot: {
            width: isMobileNow ? window.innerWidth : 1230
        }
    });
});

// 显示聊天窗口
window.onload = () => {
    try {
        chatInstance.showChatBot();
    } catch (error) {
        console.error('Failed to show chat window:', error);
    }
};