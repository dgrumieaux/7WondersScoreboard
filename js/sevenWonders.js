(function (NS, $, ko) {

  var moduleId = 'sevenWonders';
  NS[moduleId] = NS[moduleId] ? NS[moduleId] : {};

  function ScoreSheetViewModel() {
    var self = this,
	  defaultPlayerNumber = 3;
	
	  self.players = ko.observableArray();
	
	  self.addPlayer = function() {
	    self.players.push( new PlayerDataObject() );
	  };
	
	  self.removePlayer = function() {
        self.players.remove( this );
	  };
	  
	  for( var i=0; i < defaultPlayerNumber; i++ ) {
	    self.players.push( new PlayerDataObject() );
	  };
    
  };
  
  
  function PlayerDataObject(params) {
    var opts = params;
	if(!opts) {
	  opts = {
	    name          : '',
	    initials      : '',
	    militaryScore : 0,
	    coinScore     : 0,
	    wonderScore   : 0,
	    blueScore     : 0,
	    yellowScore   : 0,
	    purpleScore   : 0,
	    scienceScore  : 0
	  };
	}
	
	var self = this;
	  self.name = ko.observable(opts.name);
	  self.initials = ko.observable(opts.initials);
	
	  self.militaryScore = ko.observable(opts.militaryScore);
	  self.coinScore     = ko.observable(opts.coinScore);
	  self.wonderScore   = ko.observable(opts.wonderScore);
	  self.blueScore     = ko.observable(opts.blueScore);
	  self.yellowScore   = ko.observable(opts.yellowScore);
	  self.purpleScore   = ko.observable(opts.purpleScore);
	  self.scienceScore  = ko.observable(opts.scienceScore);
	
	  self.totalScore = ko.computed( function() {
	    return parseInt( self.militaryScore() )
	      + parseInt( self.coinScore() ) + parseInt( self.wonderScore() )
	      + parseInt( self.blueScore() ) + parseInt( self.yellowScore() )
	      + parseInt( self.purpleScore() ) + parseInt( self.scienceScore() )
	  })
  };
  
  var viewModelInstance = NS[moduleId].viewModel = new ScoreSheetViewModel();
  ko.applyBindings(viewModelInstance, document.getElementById(moduleId));

}(window.NS = window.NS || {}, jQuery, ko));