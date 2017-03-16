App = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return {
			beers: Beers.find({}).fetch()
		}
	},

	mapData: function() {
		var data = [
			{ quantity: 0, xLabel: "Sun"},
			{ quantity: 0, xLabel: "Mon"},
			{ quantity: 0, xLabel: "Tue"},
			{ quantity: 0, xLabel: "Wed"},
			{ quantity: 0, xLabel: "Thu"},
			{ quantity: 0, xLabel: "Fri"},
			{ quantity: 0, xLabel: "Sat"}
		];

		this.data.beers.map(function(d) {
			console.log(moment(d.date).weekday())
			data[moment(d.date).weekday()].quantity += d.beers;
		});

		return data;
	},

	render: function() {
		return (
			<div>
				<div className="page-header">
					<center>
						<h1>
							<i className="fa fa-beer"></i> Beer
							<small> Dashboard</small>
						</h1>
					</center>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<BeerForm />
							<BeerList data={this.data.beers}/>
						</div>

						<div className="col-md-offset-2 col-md-6">
							<BarChart data={this.mapData()} width="480" height="320" />
						</div>
					</div>
				</div>
			</div>
		);
	}
})