<template>
    <div class="minirefresh-wrap">
        <div class="minirefresh-scroll">           
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    import '../../../dist/debug/minirefresh.css'
    import MiniRefreshTools from '../../../dist/debug/minirefresh.js'
    
    const COMPONENT_NAME = 'minirefrsh'
    
    export default {
        name: COMPONENT_NAME,
        props: {
            title: {
                type: String,
                default: ''
            },
            options: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        data() {
            return {
                minirefresh: null
            }
        },
        mounted() {
            setTimeout(() => {
                // 延时生成
                this.initMiniRefresh()
            }, 20)
        },
        methods: {
            initMiniRefresh() {
                // 暂时处理深复制
                this.miniRefresh = new MiniRefreshTools.MiniRefreshTools.theme.defaults(Object.assign(this.options, {
                    down: Object.assign(this.options.down || {}, {
                        callback: () => {
                            this.$emit('pullingDown')
                        }
                    }),
                    up: Object.assign(this.options.up || {}, {
                        callback: () => {
                            this.$emit('pullingUp')
                        }
                    })
                }))
            },
            triggerDownLoading(isShowLoading) {
                this.miniRefresh.triggerDownLoading(isShowLoading)
            },
            triggerUpLoading(isShowLoading) {
                this.miniRefresh.triggerUpLoading(isShowLoading)
            },
            endDownLoading(isSuccess, successTips) {
                this.miniRefresh.endDownLoading(isSuccess, successTips)
            },
            endUpLoading(isFinishUp) {
                this.miniRefresh.endUpLoading(isFinishUp)
            },
            resetUpLoading() {
                this.miniRefresh.resetUpLoading()
            },
            scrollTo(y, duration) {
                this.miniRefresh.scrollTo(y, duration)
            },
            refreshOptions(options) {
                this.miniRefresh.refreshOptions(options)
            }
        }
    }
</script>

<style>
    .minirefresh-scroll {
        background: #FFFFFF;
    }
</style>