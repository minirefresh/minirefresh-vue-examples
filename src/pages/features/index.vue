<template>
    <div class="feature">
        <ul class="feature-list">
            <li class="feature-item">
                 <div class="title">体验优化</div>
                 <p>滚动采用原生的硬件加速，下拉动画在独立层进行，采用CSS3动画加硬件加速的方式，可以明显感觉到，在各大主流机型上均能流畅运行。</p>
            </li>
            <li class="feature-item">
                 <div class="title">主题丰富</div>
                 <p>完善的主题拓展机制，可以轻易的拓展出不同场景下的下拉刷新主题，并且官方开箱就提供多种主题，包括默认效果，仿微信小程序，仿淘宝，3D抽屉效果等。</p>
            </li>
            <li class="feature-item">
                <div class="title">零依赖</div>
                <p>不依赖任何框架，既可以原生 JS 引用，支持与任意前端 Vue 框架结合使用。官方提供原生浏览器使用示例以及与Vue结合的使用示例。</p>
            </li>
        </ul>
    </div>
</template>

<style>
    .feature .feature-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .feature .feature-list .feature-item {
        text-align: left;
        padding: 0.8rem;
        margin-bottom: 1rem;
    }
    
    .feature .feature-list .title {
        margin-bottom: 15px;
        color: #333;
        font-size: x-large;
        line-height: 28px;
        font-weight: normal;
    }
    
    .feature .feature-list p {
        text-align: justify;
        line-height: 180%;
    }
    
    @media screen and (min-width: 42rem) {
        .feature .feature-list {
            margin: 2rem 0 2rem 0;
        }
    }
    
    @media screen and (max-width: 42rem) {
        .feature .feature-list {
            margin: 1rem 0;
        }
    }
    
    @media screen and (min-width: 64rem) {
        .feature .feature-list .feature-item {
            flex: 0 1 27%;
        }
    }
    
    @media screen and (max-width: 64rem) {
        .feature .feature-list .feature-item {
            flex: 0 1 100%;
        }
    }
</style>