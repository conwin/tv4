tests.add("string dependency success", function () {
	var data = {key1: 5, key2:"string"};
	var schema = {
		dependencies: {
			key1: "key2"
		}
	};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("string dependency failure", function () {
	var data = {key1: 5};
	var schema = {
		dependencies: {
			key1: "key2"
		}
	};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("array dependency success", function () {
	var data = {key1: 5, key2:"string"};
	var schema = {
		dependencies: {
			key1: ["key2"]
		}
	};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("array dependency failure", function () {
	var data = {key1: 5};
	var schema = {
		dependencies: {
			key1: ["key2"]
		}
	};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("schema dependency success", function () {
	var data = {key1: 5, key2:"string"};
	var schema = {
		dependencies: {
			key1: {
				properties: {
					key2: {"type": "string"}
				}
			}
		}
	};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("schema dependency failure", function () {
	var data = {key1: 5, key2:5};
	var schema = {
		dependencies: {
			key1: {
				properties: {
					key2: {"type": "string"}
				}
			}
		}
	};
	var valid = tv4.validate(data, schema);
	return !valid;
});
