tests.add("enum [1], was 1", function () {
	var data = 1;
	var schema = {"enum": [1]};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("enum [1], was \"1\"", function () {
	var data = "1";
	var schema = {"enum": [1]};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("enum [{}], was {}", function () {
	var data = {};
	var schema = {"enum": [{}]};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("enum [{\"key\":\"value\"], was {}", function () {
	var data = {};
	var schema = {"enum": [{"key": "value"}]};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("enum [{\"key\":\"value\"], was {\"key\": \"value\"}", function () {
	var data = {};
	var schema = {"enum": [{"key": "value"}]};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("Enum with array value - success", function () {
	var data = [1,true, 0];
	var schema = {"enum": [[1, true, 0], 5, {}]};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("Enum with array value - failure 1", function () {
	var data = [1,true, 0, 5];
	var schema = {"enum": [[1, true, 0], 5, {}]};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("Enum with array value - failure 2", function () {
	var data = [1, true, 5];
	var schema = {"enum": [[1, true, 0], 5, {}]};
	var valid = tv4.validate(data, schema);
	return !valid;
});
