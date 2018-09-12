import React, { Component } from "react";

class CountryDetail extends Component {
	render() {
		return (
			<div className="countrydetail">
				<h3>{this.props.title}</h3>
				<table>
					<tbody>
						<tr>
							<td>Capital</td>
							<td>{this.props.capital}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>{this.props.area}</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								{this.props.borders.map((b, i) => {
									return (
										<li key={i} onClick={() => this.props.select(b)}>
											{b}
										</li>
									);
								})}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default CountryDetail;
