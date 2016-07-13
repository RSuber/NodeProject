let current = angular.module("ProjectServices")

current.factory('MainService',['$http',function($http){
  let pusher= []
  let pushevent= []
return{
  getUser: function(user){
    pusher.length = 0
    $http({
      url:'/api/volunteers.json',
      method:'GET'
    }).then(function(response){
      let data = response.data
      data.forEach(function(el){
        if(user === el.host.name)
        pusher.push({
          name:el.name,
          typeEvent:el.event,
          host:el.host.name,
          date:el.date
        })
      })
      console.log(pusher)
    })
    return pusher
  },
getEvents: function(){
return pusher
}
}
}])
