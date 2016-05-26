class ProcedureList extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value.substr(0,20)});

	}

	render() {
		return (
			<ul>
				<li>Scott 555 555 555</li>
			</ul>
			)
	}
}