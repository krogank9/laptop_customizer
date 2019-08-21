import React, { Component } from 'react';

import TotalDisplay from '../TotalDisplay/TotalDisplay.js';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

class CartItems extends Component {
	
	render() {	
		const items = Object.keys(this.props.selectedItems).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const selectedOption = this.props.selectedItems[feature];

			return (
				<div className="summary__option" key={featureHash}>
					<div className="summary__option__label">{feature} </div>
					<div className="summary__option__value">{selectedOption.name}</div>
					<div className="summary__option__cost">
						{USCurrencyFormat.format(selectedOption.cost)}
					</div>
				</div>
			);
		});

		return (
			<>
				{items}
			</>
		);
	}
}

export default CartItems;
