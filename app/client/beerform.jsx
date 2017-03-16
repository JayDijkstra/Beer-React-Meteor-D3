BeerForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		var quantity = this.refs.quantity.value;
		var date     = this.refs.date.value;

		Meteor.call("insertBeer", quantity, moment(date).toDate(), function(e, r) {
			if (e) alert(e.reason)
		});

		quantity.value = '';
		date.value     = '';
	},
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title"> Beers Consumption</h3>
				</div>
				<div className="panel-body">
					<form className="form-horizontal" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<div className="col-sm-10">
								<input type="number" className="form-control" placeholder="How many Beers?" ref="quantity" />
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-10">
								<input type="date" className="form-control" ref="date" />
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-10">
								<button type="submit" className="btn btn-primary btn-block">Add</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
})