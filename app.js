var app = angular.module('glucosio',[ ]);

   app.directive('appTabs', function() {
        return {
            restrict: 'E',
            templateUrl: "views/app-tabs.html",
            <!-- actually not working -->
            controller:function() {
                this.tab = 1;

                this.isSet = function(checkTab){
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: 'tabs'
        };
    });

    app.directive('appBanner', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/app-banner.html',
        }
    });

    app.directive('historyContent', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/history-content.html',
        }
    });

    app.directive('assistantContent', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/assistant-content.html',
        }
    });

    app.directive('footerContent', function(){
      return {
        restrict: 'E',
        templateUrl: 'views/footer-content.html',
      }
    });
