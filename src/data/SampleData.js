module.exports = {
    initUsers: function() {
        var userList = JSON.stringify([
            {
                'id': 0,
                'name': 'User1',
                'email': 'user1@gmail.com',
                'company': 'Google'
            },
            {
                'id': 1,
                'name': 'User2',
                'email': 'user2@gmail.com',
                'company': 'Facebook'
            },
            {
                'id': 2,
                'name': 'User3',
                'email': 'user3@gmail.com',
                'company': 'Amazon'
            },
            {
                'id': 3,
                'name': 'User4',
                'email': 'user4@gmail.com',
                'company': 'Uber'
            },
        ]);

        return userList;
    },
};