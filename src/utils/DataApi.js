var SampleData = require('../data/SampleData');

module.exports = {
	getUserById: (id) => {
		var data = JSON.parse(SampleData.initUsers());
		for (var i = data.length - 1; i >= 0; i--) {
			if (id == data[i]['id']) {
				return data[i];
			}
		};
		return false;
	}
};