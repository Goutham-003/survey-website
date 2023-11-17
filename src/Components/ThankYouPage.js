// ThankYouPage.js 

import React from 'react'; 

function ThankYouPage() { 
return ( 
	<div className="container-fluid qform"> 
			<div className="col-md-5 m-auto"> 
				<div className="mt-3"> 
						<div className="card my-3 p-3"> 
							<h3>Thank You for your Response!</h3>
							<img className='tick-img' src={"/submitted.png"} alt="Submitted"/>
							<h6>You may close this tab now.</h6> 
						</div> 
				</div> 
			</div> 
		</div> 
); 
} 

export default ThankYouPage;
