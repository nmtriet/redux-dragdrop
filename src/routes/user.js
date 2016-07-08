module.exports =  {
	path: 'user',
	childRoutes: [
		{
			path: 'detail/:id',
			component: require('../components/UserDetail.jsx'),
		},
	]
}
