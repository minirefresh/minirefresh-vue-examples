<template>
    <div id="app">
        <section class="page-header">
            <nav class="nav">
                <div class="left">
                    <router-link to="/" class="brand">MiniRefresh</router-link>
                    <a class="tab" href="https://minirefresh.github.io/minirefresh-doc/" target="_blank">文档</a>
                    <router-link to="/examples" class="tab">示例</router-link>
                </div>
    
                <div class="right">
                    <a href="https://github.com/minirefresh/minirefresh" target="_blank"><img :src="githubIcon" alt="GitHub"></a>
                </div>
            </nav>
            <h1 class="project-name">MiniRefresh</h1>
    
            <h2 class="project-tagline">A Graceful HTML5 Drop-Down-Refresh Plugin</h2>
            <a href="https://minirefresh.github.io/minirefresh-doc/" class="btn" target="_blank">起步</a>
            <router-link to="/examples" class="btn">示例</router-link>
        </section>
        <section class="main-content">
            <transition name="fade">
                <router-view class="view"></router-view>
            </transition>
            <footer class="site-footer">
                <span class="site-footer-owner"><a href="https://github.com/minirefresh/minirefresh">MiniRefresh</a> is maintained by <a
                href="https://github.com/minirefresh/">minirefresh</a>.</span>
            </footer>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            githubIcon: require('./assets/github.svg')
        }
    }
}
</script>

<style scoped >
    .page-header .nav {
        margin-bottom: 5rem;
        vertical-align: middle;    
    }
    
    .page-header .nav a {
        color: #FFFFFF;
    }
    
    .page-header .nav a:hover {
        text-decoration: none
    }
    
    .page-header .nav .left {
        float: left;
    }
    
    .page-header .nav .left .brand {
        font-size: x-large;
        margin-right: 3rem;
    }
    
    .page-header .nav .left .tab {
        margin-right: 1rem;
        padding-bottom: 5px;
    }
    
    .page-header .nav .left .tab:hover {
        box-shadow: 0 3px 0 rgba(255,255,255,0.5);
    }
    
    .page-header .nav .right {
        float: right;
        vertical-align: middle;
    }
    
    .page-header .nav .right img {
        position: relative;
        top: 0.2rem;
        width: 1.2rem;
    }
    
    .page-header .btn {
        min-width: 6rem;
    }
    
    .main-content {
        text-align: center;
    }
    
    .main-content .site-footer {
        text-align: center;
    }
    
    .view {
        transition: all 0.4s ease-in-out;
    }
    
    .view.fade-enter-active,
    .view.fade-leave-active {
        opacity: 0.01;
    }
    
    .view.fade-enter,
    .view.fade-leave {
        transition: opacity .4s;
    }
    
    @media screen and (min-width: 42rem) {
        .page-header .nav {
            margin-bottom: 5rem;
        }
        
        .page-header h1 {
            margin-bottom: 1rem;
        }
    }
    
    @media screen and (max-width: 42rem) {
        .page-header .nav {
            margin-bottom: 3.5rem;
        }
        
        .page-header h1 {
            margin-bottom: 0.5rem;
        }
        
        .main-content .site-footer {
            margin-top: -1rem;
        }
    }
</style>
