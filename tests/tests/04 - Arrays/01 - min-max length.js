tests.add("no length constraints", function () {
	var data = [1,2,3];
	var schema = {};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("minimum length success", function () {
	var data = [1,2,3];
	var schema = {minItems: 3};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("minimum length failure", function () {
	var data = [1,2,3];
	var schema = {minItems: 5};
	var valid = tv4.validate(data, schema);
	return !valid;
});

tests.add("maximum length success", function () {
	var data = [1,2,3,4,5];
	var schema = {maxItems: 10};
	var valid = tv4.validate(data, schema);
	return valid;
});

tests.add("maximum length failure", function () {
	var data = [1,2,3,4,5];
	var schema = {maxItems: 3};
	var valid = tv4.validate(data, schema);
	return !valid;
});
