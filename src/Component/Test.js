
import React,{Component} from 'react';
// import {connect} from 'react-redux';
import clear from '../images/clear.png';
import net from '../images/net.jpg';
import cbook from '../images/cbook.jpg';
import javabook from '../images/javabook.jpg';
import rc from '../images/rc.png';
import rx from '../images/rx.png';
import node from '../images/node.png';
import cobol1 from '../images/cobol1.png'
import sql from '../images/sql.jpg';
import '../CSS/Test.css';
import '../CSS/Books.css';
import '../CSS/Dash.css';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"



class Test extends Component{
  constructor(props) {
    super(props);
    this.state = { name:"", array:[],  count:0, };
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
    handleSubmit=(event)=> {
      browserHistory.push("/java");
  }
  
    render(){
        return(
            <div >
                <div className="Header">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={clear} alt={"clear"} height="50" width="50" onClick={this.handleSubmit4}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
              <div id="a" className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <select className="languagebutton"><option value="language">Language</option>
                    <option >.NET</option>
                    <option >C++</option>
                    <option>Java</option>
                    <option >SQL</option>
                    <option >ReactJS</option>
                    <option >Redux</option>
                    <option>NodeJs</option>
                    <option >COBOL</option>
              </select>
             </div>
            <div id="b" className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
             <select className="authorbutton"><option value="volvo">Author</option>
                <option >Rajaraman</option>
                <option >Balgurusamy</option>
                <option >Padmareddy</option>
                <option >Andrew</option>
                <option >Artemij</option>
                <option >Maximilian</option>
                <option >Schwarzmuller</option>
                <option >ThaneHubbeli</option>
            </select></div>
                <div id="c" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="pricebutton">Price</button></div>
                <div id="d" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="solutionbutton">Solutions</button></div>
                </div>
            </div>

            <div className="quotes">     
                <div class="box box2">
                <div id="net" className="row">                      
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="netbook" src={net} alt={"net"} height="200" width="200" ></img><h3><b>Rajaraman</b></h3> </div>                          
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="cbook" src={cbook} alt={"cbook"} height="200" width="200" ></img><h3><b>Balagurusamy</b></h3></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="java" src={javabook} alt={"javabook"} height="200" width="200" ></img><h3><b>PadmaReddy</b></h3> </div>                          
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="sqlbook" src={sql} alt={"sql"} height="200" width="200" ></img> <h3><b>Andrew</b></h3></div>                                  
                </div>
                </div>
                <div class="box box3"><div class="bg"></div>
                <div id="net" className="row">                      
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="reactbook" src={rc} alt={"rc"} height="200" width="200" ></img><h3><b>Artemij</b></h3> </div>                          
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="reduxbook" src={rx} alt={"rx"} height="200" width="200" ></img><h3><b>Maximilian</b></h3></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="noodebook" src={node} alt={"node"} height="200" width="200" ></img><h3><b>Schwarzmuller</b></h3> </div>                          
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"><img className="cobolbook" src={cobol1} alt={"cobol1"} height="200" width="200" ></img> <h3><b>ThaneHubbeli</b></h3></div>                                  
                </div>
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
                    <SocialIcon className="email"  url="https://www.email.com/" />
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
export default Test;