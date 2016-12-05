PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  console.log('Hello!');
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
  })
}

if(Meteor.isServer){
  console.log('Server');
}
