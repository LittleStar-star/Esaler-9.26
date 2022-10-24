export default function ({ app,route }) {
	app.router.beforeEach((to, from, next)=> {
console.log('from :>> ', from);
	  console.log(to,"321");
	  console.log(next);
		next()
	})

}
