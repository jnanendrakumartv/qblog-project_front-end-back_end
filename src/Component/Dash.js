import React,{Component} from 'react';
import {connect} from 'react-redux';
import zz from '../images/zz.png';
import data from '../images/data.jpg';
// import {LOGIN} from '../Actions/Action';
import '../CSS/LogIn.css';
import '../CSS/Dash.css';
// import tra from'../images/tra.jpg';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"

class Dash extends Component{
    
    handleSubmit1=(event)=> {
        browserHistory.push("/reg");
    }
    handleSubmit5=(event)=>{
        browserHistory.push("/login")
    }
    handleSubmit4=(event)=> {
        browserHistory.push("/first");
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    
    
    render(){
        return(
            <div >
                <div className="Header">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={zz} alt={"zz"} height="80" width="80" onClick={this.handleSubmit4}></img><h4 id="h4"><i>TECHNOLOGIES</i></h4> </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select><option value="platform">PLATFORM</option>
                <option >Windows</option><option >MAC OS</option><option >LINEX</option></select></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select><option value="marketplace">MARKETPLACE</option></select></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select><option value="marketingtools">MARKETING TOOLS</option></select></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><select><option value="solution">SOLUTIONS</option></select></div> 
                </div>
            </div>

            <div className="body">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="dashbordfirstimage" src={data} alt={"data"} height="140" width="140" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                            
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  < div className="dashbordcontent"> <h4> CONTENT MARKETING</h4>    </ div>
                    
                    </div>                                                      
                </div>    
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="dashbordfirstimage" src={data} alt={"data"} height="140" width="140" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    
                    
                    </div>                                                      
                </div>  
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="dashbordfirstimage" src={data} alt={"data"} height="140" width="140" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>                                                      
                </div>  
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="dashbordfirstimage" src={data} alt={"data"} height="140" width="140" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>                                                      
                </div>              
            </div>
            <div className="footer">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="address">
                    <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    <div id="name" className="col-xs-8 col-sm-8 col-md-8 col-lg-48"><h6><b>JK TECHNOLOGIES</b></h6>
                    <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru-570001, Karnataka -INDIA.</p></div>                              
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    </div> </div> </div>
                    <div className="icon">
                    <SocialIcon id="twitter" url="https://twitter.com/" />
                    <SocialIcon id="facebook" url="https://www.facebook.com/" />
                    <SocialIcon id="whatsapp" url="https://www.whatsapp.com/" />
                    <SocialIcon id="skype" url="https://www.skype.com/" />
                    <SocialIcon id="email" url="https://www.email.com/" />
                    <SocialIcon id="linkedein" url="http://linkedin.com/" /><br/><p>Copyright @ All rights reserved</p>
                        </div>  
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                    
                </div>
            </div>
            </div>
        )
    }
}
// const mapStateToprops=(state)=>{
//     const {loginmsg}=state.Register_reducer;
//     const {regmsg}=state.Register_reducer;
//     return {loginmsg,regmsg};
// };
export default Dash;