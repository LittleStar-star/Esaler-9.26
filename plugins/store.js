export default ({ app }) => {
    // 获取到store
    const store = app.store
    // 获取到session中store数据 有就存入
    if (localStorage.getItem('store')) {
      store.replaceState(Object.assign({}, store.state, JSON.parse(localStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('store', JSON.stringify(store.state))
    })
    window.addEventListener('pagehide', () => {
      localStorage.setItem('store', JSON.stringify(store.state))
    })
  }
