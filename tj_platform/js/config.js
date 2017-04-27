/**
 * Created by Administrator on 2017/4/27 0027.
 */
$(".navbar-nav").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active")
})
$(".time-line").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active")
})
$(".nav-tabs").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active")
})
var app=angular.module('myApp',['ui.router'])
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when("","/activity")
    $stateProvider
        .state('activity',{
            url:"/activity",
            templateUrl:"pages/activity.html"
        })
        .state("first",{
            url:"/first",
            templateUrl:"pages/activity.html"
        })
        .state("group",{
            url:"/group",
            templateUrl:"pages/group.html"
        })
        .state("party",{
            url:"/party",
            templateUrl:"pages/party.html"
        })
        .state("resident",{
            url:"/resident",
            templateUrl:"pages/resident.html"
        })
        .state("look",{
            url:"/look",
            templateUrl:"pages/see.html"
        })
        .state("subscribe",{
            url:"/subscribe",
            templateUrl:"pages/views.html"
        })

})
app.directive("inputFile",function(){
    return{
        template:`<div class="input-file">
        <label for="{{inputId}}"></label>
        <input type="file" id="{{inputId}}">
        </div>`,
    restrict:'E',
        scope:{},
    controller:function($scope){
        $scope.inputId='inputFile'+$scope.inputId
    },
    link:function(scope,ele){
        var inputFile=ele.find("div")
        var input=$(inputFile).find("input")
        //console.log(input)
        input.on("change",function(){
            //console.log(this.files)
            var reader= new FileReader()
            reader.readAsDataURL(this.files[0])
            reader.onload=function(){
                //console.log(reader.result)
                $(inputFile).find('label')[0].style.background='url('+this.result+')'
            }

        })
    }
}
})

