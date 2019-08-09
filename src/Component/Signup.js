import React,{Component} from 'react';
import clear from '../images/clear.png';
import home from '../images/home.png';
import axios from 'axios';
import api from '../Api/index';
import { userSignup, userSignin} from  './user';
// import {REG} from '../Actions/Action';
import '../CSS/Reg.css';
import tra from'../images/tra.jpg';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"


class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            fnameError:'',
            lnameError:'',
            emailError:'',
            passwordError:'',
        }
    }
    handleSubmit1=(e)=> {
        browserHistory.push("/signup");
    }
   
    handleSubmit5=(e)=> {
        browserHistory.push("/signin");
    }
    handleSubmit4=(e)=> {
        browserHistory.push("/");
    }
    handleSubmit = async () => {
     debugger;
        const { firstname,lastname,email,password } = this.state
        const payload = { firstname,lastname,email,password }
        
        let reg_user=/^[A-Za-z]{2,10}$/;
        let reg_pwd=/^[@#*&_%$!][A-Za-z0-9]{6,13}$/;
        let reg_email=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        
        let t=0;
        if(!this.state.firstname) this.setState({fnameError:'Firstname is required'});
        else if(!reg_user.test(this.state.firstname)) this.setState({fnameError:'Invalid Firstname'});
        else{
             t++;
             this.setState({fnameError:''});
        }
           
        if(!this.state.lastname) this.setState({lnameError:'Lastname is required'});
        else if(!reg_user.test(this.state.lastname)) this.setState({lnameError:'Invalid Lastname'}); 
        else {
            t++;
            this.setState({lnameError:''});
        }
        if(!this.state.email) this.setState({emailError:'Email is required'});
        else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
        else {
            t++;
            this.setState({emailError:''});
        }

        if(!this.state.password) this.setState({passwordError:'Password is required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Password should standerd format'});
        else {
            t++;
            this.setState({passwordError:''});
        }
        
        
        if(t>3) {
            console.log("hii")
            await api.signup(payload).then(res => {
                this.setState({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password:''
                })
                console.log('hello')
                browserHistory.push("/signin");
            });
                
        }       
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSignin=async()=>{       
        const { email,password} = this.state;
        const payload = { email,password }
        const signinRes = await api.signin(payload)
        sessionStorage.setItem('authentication', signinRes.data.token)
        sessionStorage.setItem('userEmail', signinRes.data.email)

            // const token = res.data.token;
            //     localStorage.setItem('jwtToken',token);
            //     setAuthorizationToken(token);

           
            // if(res.data==="Signin succesfully"){
            //     alert(res.data)
                browserHistory.push("/test");
            // }
            // else
            //     alert(res.data);
        // })
    }
   
    render(){
        return(
            <div >
                <div className="Header"><div className="element">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" ></img><h4 id="h4"><i>CLEARVOICE</i></h4></div>
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
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>              
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div className="signupbody"><h2 className='red'>{this.props.regmsg}</h2>
                  <h1 className="signuptext"><b>Sign Up</b></h1>
                  <div className="middlebox">
                   <lable className="label">First Name</lable><br/>   
                   <input className="input_box" placeholder="first name" type='text' name='firstname' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.fnameError}</p>
                   <lable className="label">Last Name</lable><br/>   
                   <input className="input_box" placeholder="last name" type='text' name='lastname' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.lnameError}</p>
                   <lable className="label">Email</lable><br/>   
                   <input className="input_box" placeholder="email" type='text' name='email' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.emailError}</p>
                   <lable className="label">Password</lable><br/>   
                   <input className="input_box" placeholder="password" type='password' name='password' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.passwordError}</p>
                   <button className="submitbutton" onClick={this.handleSubmit} ><b>Submit</b></button><a id="link" href="/signin"><b>Already Have an Account</b></a>            
                   </div>
                   </div>        
                    </div> <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>  
                    </div>                           
                    </div>                
            </div>
            <div className="footer1"> <div className="element">
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

export default Signup;