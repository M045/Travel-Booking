const MODULE_NAME = 'sample-project.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
  .component('helloWorld', require('../components/main/main'));