export default {
    component: '',
    childRoutes: [
        {
            path: '/',
            component: require('../components/App.jsx'),
            childRoutes: [
                require('./user'),
            ],
            indexRoute: {
                components: require('../components/Index.jsx')
            }
        },
    ]
}