import React,{Component} from 'react';
import {connect} from 'react-redux';
import {LOGIN} from '../Actions/Action';
import Real from '../images/Real.png';
import qblg from '../images/qblg.jpg';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory";
import '../CSS/Home.css';
import '../CSS/Signin.css';


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            mail:'',
            pwd:'' 
        }
    }
    handleSubmit1=(event)=> {
        browserHistory.push("/signup");
    }
    handleSubmit=(event)=>{
        browserHistory.push("/signin")
    }
    handleSubmit2=(event)=>{
        browserHistory.push("/dash")
    }
    handleSubmit4=(event)=> {
        browserHistory.push("/home");
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    // signup=()=>{
    //     browserHistory.push('signup');
    // }
    signin=()=>{
        let reg_mail=/^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$/;
        let reg_pwd=/^[@#*&_%$][A-Za-z0-9]{6,13}$/;
        let emaill=this.state.email.length, pwdl=this.state.password.length;
        let temp=0;
        
        if(emaill===0)this.setState({mail:'Email is required'});
        else if(!reg_mail.test(this.state.email)) this.setState({mail:'Invalid Email'});
        else {
            temp++;
            this.setState({mail:''});
        }
        if(pwdl===0){this.setState({pwd:'Password is required'});}
        else if(!reg_pwd.test(this.state.password)){this.setState({pwd:'Invalid Password'});}
        else {
            temp++;
            this.setState({pwd:''});
        }
        if(temp>1){ 
            
            this.props.LOGIN();
            browserHistory.push('/dash');
        }
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
                  <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="row">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"><img className="image" src={qblg} alt={"blog"} height="450" width="500"></img></div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      </div>                      
                      </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="rowsignup">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                      <h2>{this.props.regmsg}</h2>
                          <h3 className="signintext">Sign In</h3>
                          <label className="label" id='uname'>Email</label><br/>
                          <input className="input_box " placeholder="Email" type='text' name='email' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.mail}</p>
                          <label className="label" id='pwd'>Password</label><br/>
                          <input className="input_box " placeholder="Password" type='password' name='password' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.pwd}</p>
                          <button className="submitbutton" onClick={this.signin}>Submit</button>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      </div>
                  </div>
                  </div>
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
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
const mapStateToprops=(state)=>{
    const {loginmsg}=state.Register_reducer;
    const {regmsg}=state.Register_reducer;
    return {loginmsg,regmsg};
};
export default connect(mapStateToprops, {LOGIN}) (SignIn);