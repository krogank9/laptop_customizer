import React, { Component } from 'react';

import slugify from 'slugify';

import FeatureItem from '../FeatureItem/FeatureItem.js';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

class FeatureList extends Component {
	
	render() {
		return Object.keys(this.props.features).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const options = this.props.features[feature].map(item => {
				return (
					<FeatureItem
						item={item}
						feature={feature}
						selectedItems={this.props.selectedItems}
						updateFeature={this.props.updateFeature}
					/>
				);
			});

			return (
				<fieldset className="feature" key={featureHash}>
					<legend className="feature__name">
						<h3>{feature}</h3>
					</legend>
					{options}
				</fieldset>
			);
		});
	}
}

export default FeatureList;
