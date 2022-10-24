// export default function ({ app,route }) {
// 	app.router.beforeEach((to, from, next)=> {
// 	  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
// 	  const isAuthenticated = firebase.auth().currentUser;
// 	  console.log(to);
// 	  console.log(next);
// 	  if(requiresAuth && !isAuthenticated) {
// 	    next("/reserveren")
// 	  } else {
// 	    next()
// 	  }
// 	})

// }
