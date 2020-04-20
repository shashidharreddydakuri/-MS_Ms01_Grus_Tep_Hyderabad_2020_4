/**
 *
 * @namespace faker.watch
 */
var Watch = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * watch
   *
   * @method faker.watch.watch
   */
  self.watch = function () {
    return fake('{{watch.manufacturer}} {{watch.model}}');
  };

  self.watch.schema = {
    "description": "Generates a random watch.",
    "sampleResults": ["Titan ATS", "Timex XTS", "Fastrack CTS"]
  };

  /**
   * manufacturer
   *
   * @method faker.watch.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.watch.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Titan", "Timex", "Fastrack"]
  };


  /**
   * model
   *
   * @method faker.watch.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.watch.model);
  };

  self.model.schema = {
    "description": "Generates a watch model.",
    "sampleResults": ["XTS", "ATS", "CTS"]
  };

  /**
   * type
   *
   * @method faker.watch.type
   */
  self.type = function () {
    return faker.random.arrayElement(faker.definitions.watch.type);
  };

  self.type.schema = {
    "description": "Generates a watch type.",
    "sampleResults": ["Digital", "Analog"]
  };

};

module["exports"] = Watch;
