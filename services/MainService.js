let current = angular.module("ProjectServices")

current.factory('MainService',['$http',function($http){
  let pusher= []
  let pushevent= []
  let eventlist = []
  let name = []
return{
  getUser: function(user){
    let guy = []
    pusher.length = 0
    $http({
      url:'/api/volunteers.json',
      method:'GET'
    }).then(function(response){
      let data = response.data
      data.forEach(function(el){
        if(user === el.host.name)
        guy.push({
          name:el.name,
          typeEvent:el.event,
          host:el.host.name,
          date:el.date,
          mainhost:el.host.name,
        })
      })
      angular.copy(guy,pusher)
    })
    return pusher
  },
getEvents: function(){
return pusher
},
getName: function(){
  pusher.forEach(function(el){
  name.push(el.mainhost)
  })
  return name
},
submitEvents: function(eventz,info,date){
  pushevent.push({
    eventz: eventz
  })
},
viewEvents: function(){
  eventlist.length = 0
  $http({
    url:'/api/volunteers.json',
    method:'GET'
  }).then(function(response){
    let data = response.data
    data.forEach(function(el){
        eventlist.push({
        name:el.name,
        typeEvent:el.event,
        host:el.host.name,
        date:el.date,
        participants:el.host.participants
      })
    })
  })
  return eventlist
},
Participate: function(item){
    pusher.push({
      host: item.host,
      name: item.name,
      typeEvent: item.typeEvent,
      date: item.date

    })
    console.log(pusher)

}
}
}])
