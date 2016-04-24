import React from "react";


export default class Footer extends React.Component {
	render() {
		const footerStyles = {
			bottom: 0,
			marginTop: "30px",
			position: "absolute"
		};

		return (
			<footer style={footerStyles}>
				<div class="row">
					<div class="col-lg-12">
						<p><i class="fa fa-copyright" aria-hidden="true"></i> Time Tracker Application - By marton987</p>
					</div>
				</div>
			</footer>
		);
	}
}
