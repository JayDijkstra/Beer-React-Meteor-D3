Beers = new Meteor.Collection("beers");

Meteor.methods({
	"insertBeer": function(quantity, date) {
		quantity = parseInt(quantity);
		return Beers.insert({beers: quantity, date: date});
	},

	"removeBeer": function(id) {
		return Beers.remove(id);
	}
});