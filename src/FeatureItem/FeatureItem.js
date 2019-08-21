import React, { Component } from 'react';

import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

class FeatureItem extends Component {
	
	render() {
		const itemHash = slugify(JSON.stringify(this.props.item));
		return (
			<div key={itemHash} className="feature__item">
				<input
					type="radio"
					id={itemHash}
					className="feature__option"
					name={slugify(this.props.feature)}
					checked={this.props.item.name === this.props.selectedItems[this.props.feature].name}
					onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
				/>
				<label htmlFor={itemHash} className="feature__label">
					{this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
				</label>
			</div>
		);
	}
}

export default FeatureItem;
