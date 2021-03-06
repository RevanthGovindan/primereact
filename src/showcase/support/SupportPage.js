import React, {Component} from 'react';

export class SupportPage extends Component {

    render() {
        return (
            <div className="icons-page">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Support</h1>
                        <span>Professional support for the open source innovation</span>
                    </div>
                </div>

                <div className="content-section support">
                    <div className="support-image">
                        <div className="ui-g">
                            <div className="ui-g-12 ui-md-6">
                                <h3>PrimeReact PRO Support</h3>
                                <p>With PrimeReact PRO, it's easy to support, tune and add features to PrimeReact as if it were an in-house framework.</p>
                                <a className="home-button2" href="mailto:PrimeReact@primetek.com.tr">GET A QUOTE</a>
                            </div>
                            <div className="ui-g-12 ui-md-6">
                                <img alt="PRO" src="showcase/resources/images/home/icon-pro-white.svg"></img>
                            </div>
                        </div>
                    </div>
    
                    <p>PrimeReact PRO is a term based commercial support service. With the exclusive services of Pro account, 
                                    you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>
                                    
                    <h4>Standard PRO Services</h4>
                    <ul>
                        <li>Access to pro.primefaces.org</li>
                        <li>Response within 1 business day.</li>
                        <li>Defect patches.</li>
                        <li>Private branch management in case you need.</li>
                        <li>Customized builds.</li>
                        <li>Unlimited number of cases.</li>
                        <li>Remote desktop connection.</li>
                        <li>Conference calls for discussions.</li>
                        <li>High priority to your issues.</li>
                        <li>Notifications about security updates.</li>
                    </ul>
                                
                    <h4>New Features (Optional)</h4>			
                                
                    <p>New feature and enhancement requests are not available in core services and provided via an hour based model instead.  When you have a feature request we provide an estimate, if you confirm we deliver your request within an estimated timeframe and deduct the amount of work from your hours. These requests can be;</p>

                    <ul>
                        <li>New components.</li>
                        <li>New functionality to existing components.</li>
                        <li>Changing the way a certain functionality is implemented.</li>
                        <li>Accessibility improvements.</li>
                        <li>Proof of Concept implementations of a use case.</li>
                        <li>Code reviews to offer best practices.</li>
                    </ul>
                    
                    <p>You can purchase additional hours along with the subscription and also anytime during your subscription period. If your subscription term ends with unused hours, they will be added to your new subscription term in case you extend.</p>    

                    <h3 style={{marginTop:0}}>Community Support</h3>
                    <p><a href="https://forum.primefaces.org/viewforum.php?f=57">Forum</a> is where the community users gather to seek support, post topics and discuss the technology. PrimeTek does not
                    guarantee response at forum although it is monitored and maintained by our staff. If you need to secure our response within 4 business hours, you may consider PrimeReact PRO support.</p>
                </div>
            </div>
        );
    }
}
