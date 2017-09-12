<template>
    <page type="index-list"
        title="BaseList（基础新闻列表）">
        <div slot="content">
            <div class="split"></div>
            <div class="view-wrapper">
                <div class="index-list-wrapper">
                    <minirefresh id="minirefresh"
                                 ref="minirefresh"
                                 :options="options"
                                 @pullingDown="onPullingDown"
                                 @pullingUp="onPullingUp">
                                 
                        <ul slot="content" class="data-list" id="listdata">
                            <li v-for="item in listData" class="list-item">
                                <h3 class="msg-title">
                                    {{item.title}}
                                </h3>
                                <span class="msg-fs14 msg-date">
                                    {{item.date}}
                                </span>
                            </li>
                        </ul>
                    </minirefresh>
                </div>
            </div>    
        </div>
    </page>
</template>

<script>
    import Page from '../../components/page/page.vue'
    import MiniRefresh from '../../components/minirefresh/minirefresh.vue'
    
    export default {
        components: {
            Page,
            minirefresh: MiniRefresh
        },
        data() {
            return {
                baseListImg: require('../../assets/base_default.gif'),
                themeAppletImg: require('../../assets/theme_applet.gif'),
                maxDataSize: 30,
                requestDelayTime: 600,
                count: 0,
                listData: [],
                options: {
                    container: '#minirefresh',
                    up: {
                        isAuto: true,
                        loadFull: {
                            isEnable: true
                        }
                    }
                }
            }
        },
        methods: {
            onPullingDown() {
                setTimeout(() => {
                    console.log('pulling down and load data')
                    this.listData = this.createTestData(10, true)
                    this.$refs.minirefresh.endDownLoading(true)
                }, this.requestDelayTime)
            },
            onPullingUp() {
                setTimeout(() => {
                    console.log('pulling up and load data')
                    this.listData = this.listData.concat(this.createTestData(2))
                    this.$refs.minirefresh.endUpLoading(this.listData.length >= this.maxDataSize)
                }, this.requestDelayTime)
            },
            createTestData(count, isReset) {
                if (isReset) {
                    this.count = 0
                }
                let res = []
                let dateStr = (new Date()).toLocaleString()
                for (let i = 0; i < count; i++) {
                    res.push({
                        title: '测试第【' + this.count + '】条新闻标题',
                        date: dateStr
                    })
                }
                this.count++
                return res
            }
        }
    }
</script>

<style scoped >
    .split {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 10px;
        margin-top: -10px;
        background: #fff;
    }
    
    .view-wrapper {
        position: fixed;
        top: 54px;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    
    .view-wrapper .index-list-wrapper {
        height: 100%;
        width: 95%;
        margin: 0 auto;
    }
    
    .data-list {
        position: relative;
        margin-top: 0;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        background-color: #fff;
        text-align: left;
    }
    
    .list-item {
        position: relative;
        overflow: hidden;
        padding: 11px 15px;
        -webkit-touch-callout: none;
    }
    
    .list-item:after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 15px;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }
    
    .list-item:active {
        background: #F5F5F5;
    }
    
    .list-item .msg-title {
        display: block;
        font-size: 15px;
        margin: 5px;
        color: #000;
        font-weight: bold;
    }
    
    .msg-fs14 {
        font-size: 14px;
        color: #999;
    }
    
    .msg-date {
        float: right;
        margin: 5px;
    }
    
    .list-item a,
    .navbar-header a {
        text-decoration: none;
        color: #18B4FE;
    }
    
    .nav-tips {
        font-size: 14px;
        padding: 12px;
        border-bottom: 1px solid #c8c7cc;
        color: red;
    }
    
    .navbar-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-bottom: 1px solid #c8c7cc;
        background-color: #FFFFFF;
        z-index: 999;
    }
    
    .nav-control {
        position: fixed;
        top: 45px;
        left: 0;
        width: 100%;
        height: 44px;
        line-height: 17px;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }
    
    .nav-control .active {
        border-bottom: 1px solid #FF6990;
        color: #FF6990;
    }
    
    .nav-control p {
        display: inline-block;
        width: 32%;
        padding: 5px 0;
    }
    
    .nav-btn-left {
        position: absolute;
        top: 0;
        left: 0;
        padding: 12px;
        line-height: 22px;
    }
    
    .content {
    /*    padding-top: 45px;*/
    }
    
    .notice {
        padding: 5px;
        text-align: center;
    }
    
    .btn-switch {
        display: inline-block;
        margin-top: 14px;
        font-size: 14px;
        padding: 3px 15px;
        text-align: center;
        border: 1px solid #FF6990;
        border-radius: 20px;
        color: #FF6990;
    }
    
</style>