import React,{Component} from 'react';
import {connect} from 'react-redux';
import Real from '../images/Real.png';
import browserHistory from "../Utils/browserHistory";
import { SocialIcon } from 'react-social-icons';
import '../CSS/Home.css';
import '../CSS/Signin.css';


class DashBoard extends Component{
    handleSubmit1=(event)=> {
        browserHistory.push("/signup");
    }
    handleSubmit=(event)=>{
        browserHistory.push("/signin")
    }
    handleSubmit4=(event)=>{
        browserHistory.push("/home")
    }
    render(){
        return(
            <div className="main">
            <div className="row header">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img id="logo1" src={Real} alt={"Real"} height="60" width="60" onClick={this.handleSubmit4}></img></div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>
            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signupbutton" onClick={this.handleSubmit1}>SignUp</button></div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signinbutton" onClick={this.handleSubmit}>SignIn</button></div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
            <div className="Signupdashboard">
               
            </div>
            <div className="footer">
            <div className="row footer">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
               </div><h5 className="qwinix"><b>Jk Technologies</b></h5>
             <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru,Karnataka.</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            </div>
            </div>
            <div  className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div id="icon" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <SocialIcon url="https://twitter.com/" />
                <SocialIcon url="https://www.facebook.com/" />
                <SocialIcon url="https://www.whatsapp.com/" />
                <SocialIcon url="https://www.skype.com/" />
                <SocialIcon url="https://www.email.com/" />
                <SocialIcon url="http://linkedin.com/" /><br/> <p>Copyright @ All rights reserved</p></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            </div>
            </div>
        </div>
        );
    }
}
export default DashBoard;