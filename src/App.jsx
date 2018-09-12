import React, { Component } from "react";
import data from "./countries.json";

import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			selectedCountry: null,
			query: null
		};
	}
	componentDidMount() {
		this.setState({
			data
		});
	}
	render() {
		// listFiltered
		let filteredCountries;
		if (this.state.query) {
			const countries = this.state.data;
			const results = countries.filter(c => {
				return c.name.official.toLowerCase().indexOf(this.state.query) !== -1;
			});
			filteredCountries = results.map((c, i) => {
				return (
					<CountryList
						index={i}
						key={i}
						country={c.name.official}
						flag={c.flag}
						select={this._select}
					/>
				);
			});
		} else {
			filteredCountries = this.state.data.map((c, i) => {
				return (
					<CountryList
						index={i}
						key={i}
						country={c.name.official}
						flag={c.flag}
						select={this._select}
					/>
				);
			});
		}
		// selectedCountry
		let selectedCountry;
		if (!this.state.selectedCountry) {
			selectedCountry = <p>Choose a country...</p>;
		} else {
			selectedCountry = (
				<CountryDetail
					title={this.state.selectedCountry.name.official}
					capital={this.state.selectedCountry.capital[0]}
					area={this.state.selectedCountry.area}
					borders={this.state.selectedCountry.borders}
					select={this._selectFromDetail}
				/>
			);
		}

		return (
			<React.Fragment>
				<div className="container-fluid nav">
					<h1>WikiCountries</h1>
				</div>
				<div className="container mt-3">
					<input
						onChange={this._search}
						placeholder="search..."
						type="text"
						className="form-control"
					/>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-7 mt-3">
							<h2>List of countries</h2>
							<div className="list-group">{filteredCountries}</div>
						</div>
						<div className="col-5 mt-3">{selectedCountry}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

	_select = index => {
		this.setState({
			selectedCountry: data[index]
		});
	};

	_selectFromDetail = b => {
		for (let i = 0; i < data.length; i++) {
			if (b === data[i].cca3) {
				this.setState({
					selectedCountry: data[i]
				});
			}
		}
	};

	_search = e => {
		this.setState({
			query: e.target.value
		});
	};
}

export default App;
