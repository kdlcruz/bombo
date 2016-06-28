# Bombo

Bombo is an AngularJS service that lets your broadcast messages in between services, controllers and directives.

### Installation

**(1)** Install using either **NPM** or **Bower**

**NPM**
```sh
$ npm install --save bombo
```

**Bower**
```sh
$ bower install --save bombo
```

**(2)** Include **bombo.js** from *node_modules/bombo/* into your project.

**(3)** Add `BomboModule` to your main module's list of dependencies.

```JS
angular.module('MyApp', [
    'BomboModule'
]);
```

### Usage

**To broadcast a message**
```JS
angular.controller('HomeCtrl', function(bombo) {
    bombo.prep('broadcast-key', 'Message');
});
```

**To retrieve the message**
```JS
angular.controller('LoginWidgetController', function($scope, bombo) {
    $scope.$on('broadcast-key', function() {
        console.log(bombo.message);
    });
});
```
License
----

MIT
