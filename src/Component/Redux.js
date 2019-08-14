
import React,{Component} from 'react';
import clear from '../images/clear.png';
import rx from '../images/rx.png';
import likes from '../images/likes.png';
import redux1 from '../images/redux1.pdf';
import home from '../images/home.png';
import api from '../Api/index';
import rd from '../images/rd.jpg';
import '../CSS/Text.css';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"
import axios from 'axios';

class Redux extends Component{
    constructor(props) {
        super(props);
        this.state = { name:"", array:[],  count:1, Users: [], RDUsers:[] ,comments:'', cError:'' };
    }
    incrementMe =async () => {
        debugger;
            const count=this.state;
            const payload=count;
            await api.increment(payload).then(res=>{
                this.setState({count:this.state.count+1})
                browserHistory.push("/redux");
        })
    }
    handleSubmit40=(e)=> {
        browserHistory.push("/test");
    }
    
    handleSubmit = async () => {
        // debugger;
           const { comments } = this.state
           const payload = { comments }
           
           let t=0;
           if(!this.state.comments) this.setState({cError:''});
           else{
                t++;
                this.setState({cError:''});
           }
           if(t=1) {
               console.log("hii")
               await api.details(payload).then(res => {
                   this.setState({
                       comments:''
                   })
                   console.log('hello')
                   browserHistory.push("/redux");
               });
           }       
       }
       handleChange=(e)=>{
           this.setState({[e.target.name]:e.target.value});
       }

       componentDidMount(){
        axios.get('http://localhost:9000/details')
        .then(res => {
        this.setState({Users: res.data});
        console.log(this.state.Users);
        });

        axios.get('http://localhost:9000/like')
        .then(res => {
        this.setState({RDUsers: res.data});
        console.log(this.state.RDUsers);
        });

        }
            add=()=>{
                this.state.arry.push(this.state.name);
                this.setState({array:this.state.array});  
            }
  
      handleSubmit4=(event)=> {
        browserHistory.push("/");
    }
    handleSubmit1=(event)=> {
        browserHistory.push("/test");
    }
    render(){
        var like=0;
        return(
            <div >
                <div className="Header"> <div className="element">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" onClick={this.handleSubmit1}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10"></div>
                </div></div>
            </div>

            <div className="quotes">     
                <div class="box box2"><img className="home" src={home} alt={"home"} height="30" width="30" onClick={this.handleSubmit40}></img>
                <div id="net" className="row">                      
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>                          
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><img className="cbook" src={rx} alt={"rx"} height="500" width="400" ></img><h3><b>Maximilian</b></h3></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>                          
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <img className="cbook1" src={rd} alt={"rd"} height="200" width="200" ></img>
                    { this.state.Users.map(category => {
                          if(category.authorname==='Maximilian')
                             return (
                                 <div>
                                    <p>{category.authorname}</p> 
                                    <p>{category.bookname}</p> 
                                    <p>{category.price}</p>
                                    <p>{category.edition}</p>
                                    <p>{category.published}</p>
                                 </div>
                                    )
                                  })}
                                  <div>
                                        Comments  : {this.state.Users.map(user => <div>{user.comments}</div>)}
                                    </div> 
                                    <a href = {redux1} target = "_blank"><b id="read">Read</b></a>
                                    {this.state.RDUsers.map(category => {
                                        if(category.count)
                                            like=like+1;
                                                })}
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{like}                  
                  <img className="netbook" src={likes} alt={"likes"} height="30" width="30" ></img> </button>
                  <input className="input_box" placeholder="write your comments" type='text' name='comments' onChange={this.handleChange}></input>
                  <p className='red'>{this.state.cError}</p>
                  <button className="submitbutton" onClick={this.handleSubmit} ><b>Submit</b></button>
                  </ div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>                                 
                </div>
                </div>
               
         
            </div>
            <div className="footer">
               <div className="element">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                              
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><div className="address">
                    <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    <div id="name" className="col-xs-8 col-sm-8 col-md-8 col-lg-48"><h6><b>CLEAR VOICE</b></h6>
                    <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru-570001, Karnataka -INDIA.</p></div>                              
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    </div> </div> </div>
                    <div className="icon">  <SocialIcon className="twitter" url="https://twitter.com/" />
                    <SocialIcon className="facebook"  url="https://www.facebook.com/" />
                    <SocialIcon className="whatsapp"  url="https://www.whatsapp.com/" />
                    <SocialIcon className="skype" url="https://www.skype.com/" />
                    <SocialIcon className="email"  url="https://www.instagram.com/" />
                    <SocialIcon className="linkedin"  url="http://linkedin.com/" />
                    </div>  
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                                
                </div>
            </div></div>
            </div>
        )
    }
}

export default Redux;