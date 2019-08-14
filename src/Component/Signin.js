import React,{Component} from 'react';
import {connect} from 'react-redux';
import clear from '../images/clear.png';
import home from '../images/home.png';
import {LOGIN} from '../Actions/Action';
import {signin} from  './user';
import '../CSS/LogIn.css';
import tra from'../images/tra.jpg';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"

class Signin extends Component{

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
    handleSubmit5=(event)=>{
        browserHistory.push("/signin")
    }
    handleSubmit4=(event)=> {
        browserHistory.push("/");
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
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
        else if(!reg_pwd.test(this.state.password)){this.setState({pwd:'passwors should contain !,@,#,$,%,&,*,'});}
        else {
            temp++;
            this.setState({pwd:''});
        }
        if(temp>1){ 
            
            this.props.LOGIN();
            browserHistory.push('/books');
        }
    }
    
    render(){
        return(
            <div >
                <div className="Header"><div className="element">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" ></img><h4 id="h4"><i>CLEARVOICE</i></h4> </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button id="signup" onClick={this.handleSubmit1}>Sign Up</button></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button id="signin" onClick={this.handleSubmit5}>SignIn</button></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="home" src={home} alt={"home"} height="30" width="30" onClick={this.handleSubmit4}></img></div>
                </div>
                </div>
            </div>
            <div className="quotes"><div class="box box2">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div ><img className="regimage" src={tra} alt={"tra"} ></img> </div></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="signinbody"> <h2 className="red">{this.props.loginmsg}</h2>
                <h1 className="signintext">Sign In</h1><br/>
                   <div className="signinbox1">
                        <label className="label" id='uname'>Email</label><br/>
                          <input className="input_box " placeholder="Email" type='text' name='email' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.mail}</p>
                          <label className="label" id='pwd'>Password</label><br/>
                          <input className="input_box " placeholder="Password" type='password' name='password' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.pwd}</p>
                          <button className="submitbutton" onClick={this.signin}><b>Submit</b></button>
                      </div>
                   </div>        
                    </div> <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                             
                    </div> 
                    </div>               
                 </div>
            <div className="footer1"><div className="element">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="address">
                    <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    <div id="name" className="col-xs-8 col-sm-8 col-md-8 col-lg-48"><h6><b>CLEAR VOICE</b></h6>
                    <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru-570001, Karnataka -INDIA.</p></div>                              
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    </div> </div> </div>
                    <div className="icon">
                    <SocialIcon id="twitter" url="https://twitter.com/" />
                    <SocialIcon id="facebook" url="https://www.facebook.com/" />
                    <SocialIcon id="whatsapp" url="https://www.whatsapp.com/" />
                    <SocialIcon id="skype" url="https://www.skype.com/" />
                    <SocialIcon id="email" url="https://www.instagram.com/" />
                    <SocialIcon id="linkedein" url="http://linkedin.com/" /><br/><p id="copy">Copyright @ All rights reserved</p>
                        </div>  
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToprops=(state)=>{
    const {loginmsg}=state.Register_reducer;
    const {regmsg}=state.Register_reducer;
    return {loginmsg,regmsg};
};
export default connect(mapStateToprops , {LOGIN}) (Signin);