import React,{Component} from 'react';
// import {connect} from 'react-redux';
import clear from '../images/clear.png';
import net from '../images/net.jpg';
import cbook from '../images/cbook.jpg';
import javabook from '../images/javabook.jpg';
import rajaraman from '../images/rajaraman.jpg';
import balagurusamy from '../images/balagurusamy.jpg';
import like from '../images/like.png';
import padma from '../images/padma.png';
import java from '../images/java.jpg';
import sql from '../images/sql.jpg';
// import {LOGIN} from '../Actions/Action';
// import '../CSS/LogIn.css';
import '../CSS/Dash.css';
// import tra from'../images/tra.jpg';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"

class Dash extends Component{
  constructor(props) {
    super(props);
    this.state = { name:"", array:[],  count:0,  };
}
handleChange=(event) =>{
    this.setState({name: event.target.value});
}
// console.log(reqobj)
// getUsers (reqobj).then (res =>{
//     this.props.history.push('/getUsers');
// })



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
    handleSubmit50=(event)=> {
      browserHistory.push("/getUsers");
  }

    handleSubmit=(event)=> {
      browserHistory.push("/java");
      
//       console.log(reqobj)
// getUsers (reqobj).then (res =>{
//     this.props.history.push('/getUsers');
// })
  }
  
    render(){
        return(
            <div >
                <div className="Header">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" onClick={this.handleSubmit4}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
              <div id="a" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select className="languagebutton"><option value="language">Language</option>
  <option value="5d411368e098560eaee0c3cd" >.NET</option>
  <option >C++</option>
  <option>Java</option>
  <option >SQL</option>
 
</select>
    </div>
                <div id="b" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select className="authorbutton"><option value="volvo">Author</option>
  <option >Rajaraman</option>
  <option >Balgurusamy</option>
  <option value="" >Padmareddy</option>
  <option >Andrew</option>
</select></div>
                <div id="c" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="pricebutton">Price</button></div>
                <div id="d" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="solutionbutton">Solutions</button></div>
                </div>
            </div>

            <div className="body1">

                <div id="net" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="netbook" src={net} alt={"net"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="raman" src={rajaraman} alt={"rajaraman"} height="100" width="100" ></img><p className="color"><b>RajaRaman</b></p>  </div>                          
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  < div className="dashbordcontent"> <h6 > <b> .NET PROGRAMING </b></h6> <button value="5d411368e098560eaee0c3cd" onClick={this.handleSubmit50} >Net</button>
                  <h5>{this.state.name}</h5>
                  <input type='text' onChange={this.handleChange} placeholder="write your comment..."></input>
                  <h5>{this.state.array}</h5>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button>
                  <button>.Net</button>
                  </ div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    </div> 
                    

                                                
              </div>

                <div id="cpg" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="sqlbook" src={cbook} alt={"cbook"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="balu" src={balagurusamy} alt={"balagurusamy"} height="100" width="100" ></img><p className="color"><b>BalaGuruSamy</b></p> </div>                              
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                < div className="dashbordcontent"> <h6 > <b> C++ Programming </b></h6> 
                <h5>{this.state.name}</h5>
                  <input type='text' onChange={this.handleChange} placeholder="write your comment..."></input>
                  <h5>{this.state.array}</h5>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button>              
                  </ div>
                  </div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>                                                     
                
                    </div>    
                

                <div id="java" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="java" src={javabook} alt={"javabook"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="padma" src={padma} alt={"padma"} height="100" width="100" ></img><p className="color"><b>Padmareddy</b></p> </div>                              
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">< div className="dashbordcontent"> <h6 > <b> JAVA PROGRAMING </b></h6> 
                <h5>{this.state.name}</h5>
                  <input type='text' onChange={this.handleChange} placeholder="write your comment..."></input>
                  <h5>{this.state.array}</h5>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button>
                  </ div>
                  </div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>                                                    
                
                    </div>  

                <div id="sqlb" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="sqlbook" src={sql} alt={"sql"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="java1" src={java} alt={"java"} height="100" width="100" ></img><p className="color"><b>Andrew</b></p> </div>                              
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> < div className="dashbordcontent"> <h6 > <b> SQL PROGRAMING </b></h6> 
                <h5>{this.state.name}</h5>
                  <input type='text' onChange={this.handleChange} placeholder="write your comment..."></input>
                  <h5>{this.state.array}</h5>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button>
                  </ div></div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>                                                   
                
                      </div>         
            </div>

            <div className="footer">
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