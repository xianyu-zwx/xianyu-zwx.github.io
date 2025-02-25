const app = Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: true,
            showMenu: false,
            barLocal: 0,
            renderers: [],
            // 新增：控制是否延迟隐藏导航栏
            hideTimeout: null,
        };
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = false;
        });
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
        document.addEventListener("mousemove", this.handleMouse); // 监听鼠标移动事件
        this.render();
    },
    beforeDestroy() {
        // 移除事件监听器
        window.removeEventListener("scroll", this.handleScroll, true);
        document.removeEventListener("mousemove", this.handleMouse);
    },
    methods: {
        render() {
            if (typeof this.renderers === "undefined") return;
            for (let i of this.renderers) i();
        },
        handleScroll() {
            let menu = this.$refs.menu,
                wrap = this.$refs.homePostsWrap;
            let newlocal = document.documentElement.scrollTop;
            this.barLocal = newlocal;

            // 页面滚动时隐藏导航栏，但鼠标位于顶部时例外
            if (!this.isMouseNearTop()) {
                this.showMenu = false;
                menu.classList.add("hidden");
            }

            // 背景颜色逻辑保持不变
            if (wrap) {
                if (newlocal <= window.innerHeight - 100) menu.classList.add("menu-color");
                else menu.classList.remove("menu-color");
                if (newlocal <= 400) wrap.style.marginTop = -newlocal / 5 + "px";
                else wrap.style.marginTop = "-80px";
            }
        },
        handleMouse(event) {
            const mouseY = event.clientY;
            const threshold = 70; // 鼠标接近顶部的距离阈值（根据导航栏高度调整）

            clearTimeout(this.hideTimeout); // 清除隐藏定时器

            if (mouseY < threshold) {
                // 鼠标在顶部附近，显示导航栏
                this.showMenu = true;
                const menu = this.$refs.menu;
                menu.classList.remove("hidden");
            } else {
                // 鼠标不在顶部附近，延迟隐藏导航栏
                this.hideTimeout = setTimeout(() => {
                    this.showMenu = false;
                    this.$refs.menu.classList.add("hidden");
                }, 300); // 延迟 300ms 后隐藏，防止频繁切换
            }
        },
        // 辅助方法：判断鼠标是否在顶部附近
        isMouseNearTop() {
            return this.hideTimeout && this.hideTimeout._idlePrev; // 判断是否有延迟隐藏任务
        },
    },
});
app.mount("#layout");
