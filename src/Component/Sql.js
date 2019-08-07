
import React,{Component} from 'react';
import clear from '../images/clear.png';
import sql from '../images/sql.jpg';
import likes from '../images/likes.png';
import sql1 from '../images/sql1.pdf';
import sqlwritter from '../images/sqlwritter.jpg';
import '../CSS/Text.css';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"
import axios from 'axios';


class Sql extends Component{
    constructor(props) {
        super(props);
        this.state = { name:"", array:[],  count:0, Users: [] };
    }
    componentDidMount(){
        axios.get('http://localhost:9000/details')
        
        .then(res => {
     
        this.setState({Users: res.data});
        console.log(this.state.Users);
        });
        }
  
handleChange=(event) =>{
    this.setState({name: event.target.value});
}

add=()=>{
    this.state.arry.push(this.state.name);
    this.setState({array:this.state.array});  
}
  
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }
    
      handleSubmit4=(event)=> {
        browserHistory.push("/");
    }
    handleSubmit1=(event)=> {
        browserHistory.push("/test");
    }
    
  
    render(){
        return(
            <div >
                <div className="Header"> <div className="element">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" onClick={this.handleSubmit1}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div  className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div  className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div></div>
            </div>

            <div className="quotes">     
                <div class="box box2">
                <div id="net" className="row">                      
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>                          
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><img className="cbook" src={sql} alt={"sql"} height="500" width="400" ></img><h3><b>Andrew J</b></h3></div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>                          
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"> </div>                          
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <img className="cbook" src={sqlwritter} alt={"swlwritter"} height="200" width="200" ></img>
                    { this.state.Users.map(category => {
                          if(category.author==='Andrew J')
                             return (
                                 <div>
                                    <p>{category.author}</p> 
                                    <p>{category.books}</p> 
                                    <p>{category.price}</p>
                                    <p>{category.edition}</p>
                                    <p>{category.published}</p>
                                 </div>
                                    )
                                  })}
                                  <a href = {sql1} target = "_blank"><b id="read">Read</b></a>

                     {/* <h3 > <b>SQL </b></h3> <h4><i>The Complete Reference SQL</i></h4> <h4><b>3rd Edition</b></h4> <h5>Rs: 1050/-</h5> */}
                  <h5>{this.state.name}</h5>
                  <input type='text' onChange={this.handleChange} placeholder="write your comment..."></input>
                  <h5>{this.state.array}</h5>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={likes} alt={"likes"} height="30" width="30" ></img> </button>
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

export default Sql;