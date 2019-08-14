
import React,{Component} from 'react';
// import {connect} from 'react-redux';
import clear from '../images/clear.png';
import srirama from '../images/srirama.jpeg';
import home from '../images/home.png';
import geetha1 from '../images/geetha1.jpg';
import vivekananda from '../images/vivekananda.jpg';
import rc from '../images/rc.png';
import rx from '../images/rx.png';
import node from '../images/node.png';
import cobol1 from '../images/cobol1.png'
import jk from '../images/jk.jpg';
import '../CSS/Test.css';
import '../CSS/Books.css';
import '../CSS/Dash.css';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"



class Test extends Component{
  
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
    
    // handleSubmit4=(event)=> {
    //     browserHistory.push("/test");
    // }
    handleSubmit12=(event)=> {
      browserHistory.push("/java");
  }
  handleSubmit3=(e)=> {
    browserHistory.push("/c");
}
handleSubmit10=(e)=> {
    browserHistory.push("/net");
}

handleSubmit11=(e)=> {
    browserHistory.push("/cobol");
}
handleSubmit13=(e)=> {
    browserHistory.push("/sql");
}
  
handleSubmit14=(e)=> {
    browserHistory.push("/react");
}
handleSubmit15=(e)=> {
    browserHistory.push("/redux");
}
handleSubmit16=(e)=> {
    browserHistory.push("/node");
}
handleSubmit40=(e)=> {
    browserHistory.push("/books");
}
    render(){
        return(
            <div >
                <div className="Header"> <div className="element">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" onClick={this.handleSubmit4}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
              <div id="a" className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                {/* <select className="languagebutton"><option value="language">Language</option>
                    <option >.NET </option>
                    <option >C++</option>
                    <option>Java</option>
                    <option >SQL</option>
                    <option >ReactJS</option>
                    <option >Redux</option>
                    <option>NodeJs</option>
                    <option >COBOL</option>
              </select> */}
             </div>
            <div id="b" className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
             {/* <select className="authorbutton"><option value="volvo">Author</option>
                <option >Rajaraman</option>
                <option >Balgurusamy</option>
                <option >Padmareddy</option>
                <option >Andrew</option>
                <option >Artemij</option>
                <option >Maximilian</option>
                <option >Schwarzmuller</option>
                <option >ThaneHubbeli</option>
            </select> */}
            </div>
                <div id="c" className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    {/* <button className="pricebutton">Price</button> */}
                    </div>
                <div id="d" className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    {/* <button className="solutionbutton">Solutions</button> */}
                    </div>
                    
                </div>
                </div>
            </div>

            <div className="quotes">     
                <div class="box box2">
                <div id="net" className="row">                     
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="netbook" src={srirama} alt={"srirama"} height="200" width="200"  onClick={this.handleSubmit10}  ></img><h3><b>KUVEMPU</b></h3> </div>                          
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="cbook" src={geetha1} alt={"geetha1"} height="200" width="200" onClick={this.handleSubmit3} ></img><h3><b>Prabhupada</b></h3></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="java" src={vivekananda} alt={"vivekananda"} height="200" width="200" onClick={this.handleSubmit12} ></img><h3><b>RakeshTripathi</b></h3> </div>                          
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="sqlbook" src={jk} alt={"jk"} height="200" width="200" onClick={this.handleSubmit13} ></img> <h3><b>Jnanendra</b></h3></div>                                  
                </div>
                </div>
                <div class="box box3"><div class="bg"></div>
                <div id="net" className="row">                      
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="reactbook" src={rc} alt={"rc"} height="200" width="200" onClick={this.handleSubmit14} ></img><h3><b>Artemij</b></h3> </div>                          
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="reduxbook" src={rx} alt={"rx"} height="200" width="200" onClick={this.handleSubmit15} ></img><h3><b>Maximilian</b></h3></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="noodebook" src={node} alt={"node"} height="200" width="200" onClick={this.handleSubmit16} ></img><h3><b>Schwarzmuller</b></h3> </div>                          
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="cobolbook" src={cobol1} alt={"cobol1"} height="200" width="200" onClick={this.handleSubmit11}></img> <h3><b>ThaneHubbeli</b></h3></div>                                  
               
                </div> <img className="home" src={home} alt={"home"} height="30" width="30" onClick={this.handleSubmit40}></img> 
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
// const mapStateToprops=(state)=>{
//     const {loginmsg}=state.Register_reducer;
//     const {regmsg}=state.Register_reducer;
//     return {loginmsg,regmsg};
// };
export default Test;