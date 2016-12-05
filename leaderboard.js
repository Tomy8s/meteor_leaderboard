PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  console.log('Hello!');
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
  })
  Template.leaderboard.events({
      'click .player' : function(){
          console.log('Click' );
          Session.set('selectedPlayer', 'Session Value test');
          var selectedPlayer = Session.get('selectedPlayer');
          console.log(selectedPlayer);
      }
  });
}

if(Meteor.isServer){
  console.log('Server');
}
