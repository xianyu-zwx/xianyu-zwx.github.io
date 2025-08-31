// 加载 SDK 并初始化
let chatInstance = new CozeWebSDK.WebChatClient({
    config: {
        bot_id: '7474071375268282406',
    },
    auth: {
        type: 'token',
        token: 'pat_4w9lkQ8wyxAoCtPv5BrDWDGjerIc8345p4OP1X2kKWoyrau25va8xzdq4dfBv1Xe',
        onRefreshToken: async () => 'pat_aco1fMlTrb0sb0VDSTl24Em71JzusvkRADBX0JHJubr8qyewIYzf7Athj2uvEXsP',
    },
    userInfo: {
        id: 'user',
        url: 'https://p3-passport.byteacctimg.com/img/user-avatar/8127150172144246cd54c896289d3146~300x300.image',
        nickname: 'CodingNinja',
    },
    ui: {
        base: {
            icon: 'https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/FileBizType.BIZ_BOT_ICON/1212123717576812_1740193357904037465.jpeg?lk3s=50ccb0c5&x-expires=1740578561&x-signature=%2BEJ0ovw5fCUAwWM9A6vxt7hcphg%3D',
            layout: 'pc',
            lang: 'zh-CN',
            zIndex: 1000
        },
        chatBot: {
            title: 'Coze Bot',
            uploadable: true,
            width: 1230,
        },
        asstBtn: {
            isNeed: false, // 隐藏悬浮球
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

// 页面加载完成后调用显示聊天窗口
window.onload = () => {
    try {
        chatInstance.showChatBot();
    } catch (error) {
        console.error('Failed to show chat window:', error);
    }
};
