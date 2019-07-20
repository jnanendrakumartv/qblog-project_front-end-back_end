import React,{Component} from 'react';
import {connect} from 'react-redux';
import jk11 from '../images/jk11.png';
import {REG} from '../Actions/Action';
import '../CSS/Reg.css';
import tra from'../images/tra.jpg';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            fname:'',
            lname:'',
            mail:'',
            pwd:'',
            array:[] 
        }
    }
    handleSubmit1=(event)=> {
        browserHistory.push("/reg");
    }
   
    handleSubmit5=(event)=> {
        browserHistory.push("/login");
    }
    handleSubmit4=(event)=> {
        browserHistory.push("/first");
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        // debugger;
        let t=0;
        let reqobj={
            firstname1:this.state.firstname,
            lastname1:this.state.lastname,
            email1:this.state.email,
            password1:this.state.password 
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        let fnamel=this.state.firstname.length, lnamel=this.state.lastname.length, emaill=this.state.email.length, pwdl=this.state.password.length;
        let reg_user=/^[A-Za-z0-9]{2,10}$/;
        let reg_mail=/^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$/;
        let reg_pwd=/^[@#*&_%$][A-Za-z0-9]{6,13}$/;
       
        if(fnamel===0) this.setState({fname:'Firstname is required'});
        else if(!reg_user.test(this.state.firstname)) this.setState({fname:'Invalid Firstname'});
        else{
             t++;
             this.setState({fname:''});
        }
           
        if(lnamel===0) this.setState({lname:'Lastname is required'});
        else if(!reg_user.test(this.state.lastname)) this.setState({lname:'Invalid Lastname'}); 
        else {
            t++;
            this.setState({lname:''});
        }
        
        if(emaill===0) this.setState({mail:'Email is required'});
        else if(!reg_mail.test(this.state.email)) this.setState({mail:'Invalid Email'});
        else { t++;
        this.setState({mail:''});
        }
    
        if(pwdl===0) this.setState({pwd:'Password is required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({pwd:'Invalid Password'});
        else {
            t++;
            this.setState({pwd:''});
        }
        
        if(t>3) {
            this.props.REG();
            browserHistory.push('/login');
        }
    }      
    render(){
        return(
            <div >
                <div className="Header">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={jk11} alt={"jk11"} height="80" width="80" onClick={this.handleSubmit4}></img><h4 id="h4"><i>TECHNOLOGIES</i></h4> </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button id="signup" onClick={this.handleSubmit1}>Sign Up</button></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button id="signin" onClick={this.handleSubmit5}>SignIn</button></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            <div className="body">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div ><img className="regimage" src={tra} alt={"tra"} ></img> </div></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="signupbody"><h2 className='red'>{this.props.regmsg}</h2>
                  <h1 className="signuptext"><b>Sign Up</b></h1>
                   <lable className="label">First Name</lable><br/>   
                   <input className="input_box" placeholder="first name" type='text' name='firstname' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.fname}</p>
                   <lable className="label">Last Name</lable><br/>   
                   <input className="input_box" placeholder="last name" type='text' name='lastname' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.lname}</p>
                   <lable className="label">Email</lable><br/>   
                   <input className="input_box" placeholder="email" type='text' name='email' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.mail}</p>
                   <lable className="label">Password</lable><br/>   
                   <input className="input_box" placeholder="password" type='password' name='password' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.pwd}</p>
                   {/* <lable className="label">Conform Password</lable><br/>   
                   <input className="input_box" placeholder="coform password"></input><br/>  */}
                   <button className="submitbutton" onClick={this.handleSubmit}>Submit</button><a id="link" href="/login"><b>Allready Have an Account</b></a>            
                   </div>        
                    </div> <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                             
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
const mapStateToprops=(state)=>{
    const {regmsg}=state.Register_reducer;
    return {regmsg};
};
export default connect(mapStateToprops, {REG}) (Register);