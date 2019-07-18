import React,{Component} from 'react';
import {connect} from 'react-redux';
import {REG} from '../Actions/Action';
import Real from '../images/Real.png';
import qblg from '../images/qblg.jpg';
import '../CSS/Home.css';
import '../CSS/Signup.css';
import browserHistory from "../Utils/browserHistory";
import { SocialIcon } from 'react-social-icons';



class Signup1 extends Component{
    constructor(props){
        super(props);
        this.state={  firstname:'',
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
        browserHistory.push("/signup");
    }
    handleSubmit4=(event)=> {
        browserHistory.push("/home");
    }
    handleSubmit3=(event)=>{
        browserHistory.push("/signin")
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=>{
        debugger;
        
        let temp=0;
        let reqobj={
            firstname1:this.state.firstname,
            lastname1:this.state.lastname,
            email1:this.state.email,
            password1:this.state.password 
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        let fnamel=this.state.firstname.length, lnamel=this.state.lastname.length, emaill=this.state.email.length,     pwdl=this.state.password.length;
        let reg_fname=/^[A-Za-z]{4,12}$/;
        let reg_lname=/^[A-Za-z]{4,12}$/;
        let reg_mail=/^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$/;
        let reg_pwd=/^[@#*&_%$][A-Za-z0-9]{6,13}$/;
       
        if(fnamel===0) this.setState({fname:'Firstname is required'});
        else if(!reg_fname.test(this.state.firstname)) this.setState({fname:'Invalid Firstname'});
        else{
             temp++;
             this.setState({fname:''});
        }
           
        if(lnamel===0) this.setState({lname:'Lastname is required'});
        else if(!reg_lname.test(this.state.lastname)) this.setState({lname:'Invalid Lastname'}); 
        else {
            temp++;
            this.setState({lname:''});
        }
        
        if(emaill===0) this.setState({mail:'Email is required'});
        else if(!reg_mail.test(this.state.email)) this.setState({mail:'Invalid email'});
        else { temp++;
            this.setState({mail:''})
        }
        if(pwdl===0) this.setState({pwd:'Password is required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({pwd:'Password should contains @ # $ % _ *'});
        else {
            temp++;
            this.setState({pwd:''});
        }
        
        if(temp>1) {
            this.props.REG();
            browserHistory.push('/signin');
            
        }
    }  
    render(){
        return(
           <div className="main">
               <div className="row header">
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={Real} alt={"Real"} height="60" width="60" onClick={this.handleSubmit4}></img></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>
               <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signupbutton" onClick={this.handleSubmit1}>SignUp</button></div>
               <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="signinbutton" onClick={this.handleSubmit3}>SignIn</button></div>
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
                      <div  className="rowsignup">
                      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                      <div id="signupbox" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                          <h1 className="signuptext"><b>Sign Up</b></h1>
                          <label className="label">First name</label><br/>
                          <input className="input_box " placeholder="First Name" type='text' name='firstname' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.fname}</p>
                          <label className="label">Last Name</label><br/>
                          <input className="input_box " placeholder="Last name"  type='text' name='lastname' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.lname}</p>
                          <label className="label">Email</label><br/>
                          <input className="input_box " placeholder="email" type='text' name='email' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.mail}</p>
                          <label className="label">Password</label><br/>
                          <input className="input_box " placeholder="password" type='password' name='password' onChange={this.handleChange}></input><br/>
                          <p className='red'>{this.state.pwd}</p>
                          {/* <label className="label">ConformPassword</label><br/>
                          <input className="input_box " placeholder="conform password."></input><br/> */}
                          <button className="submitbutton" onClick={this.handleSubmit}>Submit</button><label className="allareadyaccount" onClick={this.handleSubmit3}>Already have an Account</label>
                      
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
                <SocialIcon url="https://www.email.com/" />
                <SocialIcon url="https://www.whatsapp.com/" />
                <SocialIcon url="https://www.skype.com/" />
                <SocialIcon url="http://linkedin.com/" /> <br/> <p>Copyright @ All rights reserved</p></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
               </div>
               </div>
               </div>
           </div>
        );
    }
};
const mapStateToprops=(state)=>{
    const {regmsg}=state.Register_reducer;
    return {regmsg};
};
export default connect(mapStateToprops, {REG}) (Signup1);