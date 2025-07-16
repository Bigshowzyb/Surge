/**
 * Sub-Store 脚本
 *
 * 当前脚本功能: 组合订阅下，在每个节点名称前面添加对应机场的名称，方便判断机场节点状态
 * 入门案例: https://github.com/sub-store-org/Sub-Store/blob/master/scripts/demo.js
 */
function operator(proxies, targetPlatform, context) {

    /**
     * 机场订阅配置清单
     * singleSubscribeName: 单条订阅(名称)，不是组合订阅！！！
     * prefix: 当前订阅下所有节点的名称前缀
     */
    const airports = [
        {singleSubscribeName: 'VikingLinks', prefix: 'VikingLinks'},
        {singleSubscribeName: 'AiFun', prefix: 'AiFun'},
        {singleSubscribeName: '赔钱机场', prefix: 'Loop'},
    ]

    return proxies.map(proxy => {
        // _subName: 单条订阅的名称
        const airport = airports.find(item => proxy._subName === item.singleSubscribeName);
        if (airport) {
            proxy.name = airport.prefix + ' - ' + proxy.name;
        } else {
            proxy.name = '⚠️' + ' - ' + proxy.name;
        }
        return proxy;
    })
}