/**
 * Sub-Store 脚本
 *
 * 当前脚本功能: 组合订阅下，在每个节点名称前面添加对应机场的名称，方便判断机场节点状态
 * 入门案例: https://github.com/sub-store-org/Sub-Store/blob/master/scripts/demo.js
 */
function operator(proxies, targetPlatform, context) {

    return proxies.map(proxy => {
        /**
         * _subName: 单条订阅 - 名称 (必填，并且唯一)
         * _subDisplayName: 单条订阅 - 显示名称
         * _collectionName: 组合订阅 - 名称 (必填，并且唯一)
         * _collectionDisplayName: 组合订阅 - 显示名称
         */
        proxy.name = proxy._subName + ' * ' + proxy.name;

        return proxy;
    })
}