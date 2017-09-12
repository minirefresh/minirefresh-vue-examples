<template>
    <div class="example">
        <ul class="example-list">
            <li class="example-item">
                <router-link to="/examples/base-list">
                    <img :src="baseListImg">
                    <span>基础列表示例</span>
                </router-link>
            </li>
            <li class="example-item">
                <router-link to="/examples/theme-applet">
                    <img :src="themeAppletImg">
                    <span>【applet】 仿小程序主题</span>
                </router-link>
            </li>
        </ul>
        <li class="example-item placeholder">
        </li>
        
        <transition name="move">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseListImg: require('../../assets/base_default.gif'),
                themeAppletImg: require('../../assets/theme_applet.gif')
            }
        }
    }
</script>

<style scoped >
    .example .example-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .example .example-list .example-item {
        background-color: #FFFFFF;
        padding: 0.8rem;
        border: 1px solid rgba(0, 0, 0, .1);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
        text-align: center;
        margin-bottom: 2rem;
        
    }
    
    .example .example-list .example-item.placeholder {
        visibility: hidden;
        height: 0;
        margin: 0;
        padding: 0;
    }
    
    .example .example-list .example-item img {
        border: 1px solid rgba(0, 0, 0, .1);
    }
    
    .example .example-list .example-item a {
        line-height: 3rem;
        color: #606c71;
    }
    
    .example .view {
        transition: all 0.3s;
        transform: translate3d(0, 0, 0);       
    }
    
    .example .view.move-enter-active,
    .example .view.move-leave-active {
        transform: translate3d(100%, 0, 0);
     }
     
    @media screen and (min-width: 42rem) {
        .example .example-list {
            margin: 2rem 0 2rem 0;
        }
        
        .example .example-list .example-item {
            flex: 0 1 28%;
        }
    }
    
    @media screen and (max-width: 42rem) {
        .example .example-list {
            margin: 1rem 0;
        }
        
        .example .example-list .example-item {
            flex: 0 1 100%;
            margin-bottom: 2rem;
        }
    }
</style>