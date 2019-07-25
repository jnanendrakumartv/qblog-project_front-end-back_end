import React,{Component} from 'react';
import {connect} from 'react-redux';
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
    state = {
        count:0
    }
    // incrementMe = () =>{
    //     console.log("Give")
    // }
    incrementMe = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }
      incrementMe1 = () => {
        let newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }
   
    handleSubmit4=(event)=> {
        browserHistory.push("/first");
    }
   
  
    render(){
        return(
            <div >
                <div className="Header">
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="logo" src={clear} alt={"clear"} height="80" width="80" onClick={this.handleSubmit4}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-"></div>
               <div id="a" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select className="languagebutton"><option value="volvo">Language</option>
  <option >.NET</option>
  <option >C++</option>
  <option >JAVA</option>
  <option >SQL</option>
</select>
    </div>
                <div id="b" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><select className="authorbutton"><option value="volvo">Author</option>
  <option >Rajaraman</option>
  <option >Balgurusamy</option>
  <option >Padmareddy</option>
  <option >Andrew</option>
</select></div>
                <div id="c" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="pricebutton">Price</button></div>
                <div id="d" className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><button className="solutionbutton">Solutions</button></div>
                </div>
            </div>

            <div className="body">

                <div id="net" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="netbook" src={net} alt={"net"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="raman" src={rajaraman} alt={"rajaraman"} height="100" width="100" ></img><p className="color"><b>RajaRaman</b></p>  </div>                          
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  < div className="dashbordcontent"> <h6 > <b> .NET PROGRAMING </b></h6> 
                  <p>A .NET Programmer is responsible for designing and developing software and web pages based on given performance requirements and design.</p>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button><input placeholder="write your comment..."></input>
                   </ div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
                    </div>  <div className="one">  <SocialIcon url="https://twitter.com/" />
                    <SocialIcon  url="https://www.facebook.com/" />
                    <SocialIcon url="https://www.whatsapp.com/" />
                    <SocialIcon  url="https://www.skype.com/" />
                    <SocialIcon  url="https://www.email.com/" />
                    <SocialIcon  url="http://linkedin.com/" />

</div>

                                                 
               </div>

                <div id="cpg" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="sqlbook" src={cbook} alt={"cbook"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="balu" src={balagurusamy} alt={"balagurusamy"} height="100" width="100" ></img><p className="color"><b>BalaGuruSamy</b></p> </div>                              
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                < div className="dashbordcontent"> <h6 > <b> C++ Programming </b></h6> 
                  <p>C++ Programmer is responsible for designing and developing software and web pages based on given performance requirements and design.</p>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button> <input  placeholder="write your comment..."></input>
                   </ div>
                  </div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>                                                     
                </div>     
                

                <div id="java" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="java" src={javabook} alt={"javabook"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="padma" src={padma} alt={"padma"} height="100" width="100" ></img><p className="color"><b>Padmareddy</b></p> </div>                              
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">< div className="dashbordcontent"> <h6 > <b> JAVA PROGRAMING </b></h6> 
                  <p>JAVA Programmer is responsible for designing and developing software and web pages based on given performance requirements and design.</p>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button> <input placeholder="write your comment..."></input>
                   </ div></div> 
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>                                                    
                </div>  

                <div id="sqlb" className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>                              
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="sqlbook" src={sql} alt={"sql"} height="100" width="100" ></img></div>                              
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"><img className="java1" src={java} alt={"java"} height="100" width="100" ></img><p className="color"><b>Andrew</b></p> </div>                              
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> < div className="dashbordcontent"> <h6 > <b> SQL PROGRAMING </b></h6> 
                  <p>SQL Programmer is responsible for designing and developing software and web pages based on given performance requirements and design.</p>
                  <button className="clickbutton" onClick={this.incrementMe} > Likes:{this.state.count}<img className="netbook" src={like} alt={"like"} height="30" width="30" ></img> </button> <input placeholder="write your comment..."></input>
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
                    <div id="name" className="col-xs-8 col-sm-8 col-md-8 col-lg-48"><h6><b>JK TECHNOLOGIES</b></h6>
                    <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru-570001, Karnataka -INDIA.</p></div>                              
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> 
                    </div> </div> </div>
                    {/* <div className="icon">
                    <SocialIcon id="twitter" url="https://twitter.com/" />
                    <SocialIcon id="facebook" url="https://www.facebook.com/" />
                    <SocialIcon id="whatsapp" url="https://www.whatsapp.com/" />
                    <SocialIcon id="skype" url="https://www.skype.com/" />
                    <SocialIcon id="email" url="https://www.email.com/" />
                    <SocialIcon id="linkedein" url="http://linkedin.com/" /><br/><p>Copyright @ All rights reserved</p>
                        </div>   */}
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