import React,{Component} from 'react';
// import {connect} from 'react-redux';
import clear from '../images/clear.png';
import '../CSS/Text.css';
import '../CSS/Dash.css';
import next from '../images/next.png';
import api from '../Api/index';
import { SocialIcon } from 'react-social-icons';
import browserHistory from "../Utils/browserHistory"

class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            authorname:'',
            bookname:'',
            price:'',
            edition:'',
            comments:'',
            cError:'',
            aError:'',
            bError:'',
            pError:'',
            eError:'',
        }
    }
    handleSubmit40=(e)=> {
        browserHistory.push("/test");
    }
    handleSubmit = async () => {
    //  debugger;
        const { authorname,bookname,price,edition,comments } = this.state
        const payload = { authorname,bookname,price,edition, comments }
        
        let t=0;
        if(!this.state.authorname) this.setState({aError:'Author name is required'});
        else{
             t++;
             this.setState({aError:''});
        } 
        if(!this.state.bookname) this.setState({bError:'bookname is required'});
        else {
            t++;
            this.setState({bError:''});
        }
        if(!this.state.price) this.setState({pError:'Price is required'});
        else {
            t++;
            this.setState({pError:''});
        }

        if(!this.state.edition) this.setState({eError:'Edition is required'});
        else {
            t++;
            this.setState({eError:''});
        }
        if(!this.state.comments) this.setState({cError:''});
        else {
            t++;
            this.setState({cError:''});
        }
        if(t>3) {
            console.log("hii")
            await api.details(payload).then(res => {
                this.setState({
                    authorname: '',
                    bookname: '',
                    price: '',
                    edition:'',
                    comments:''
                })
                console.log('hello')
                browserHistory.push("/test");
            });
        }       
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <div >
                <div className="Header"><div className="element">
                <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img className="logo" src={clear} alt={"clear"} height="50" width="50" onClick={this.handleSubmit4}></img><h4 id="h4"><i>CLEARVOICE</i></h4></div> 
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10"></div>
                </div></div></div>

            <div className="quotes"><div class="box box2">             
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="middlebox">
                   <lable className="label">Author Name</lable><br/>   
                   <input className="input_box" placeholder="author name" type='text' name='authorname' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.aError}</p>
                   <lable className="label">Book Name</lable><br/>   
                   <input className="input_box" placeholder="book name" type='text' name='bookname' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.aError}</p>
                   <lable className="label">Price</lable><br/>   
                   <input className="input_box" placeholder="price" type='text' name='price' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.pError}</p>
                   <lable className="label">Edition</lable><br/>   
                   <input className="input_box" placeholder="edition" type='text' name='edition' onChange={this.handleChange}></input><br/> 
                   <p className='red'>{this.state.eError}</p>
                   <button className="submitbutton" onClick={this.handleSubmit} ><b>Submit</b></button>          
                   </div>  
                    </div> <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div><img className="home" src={next} alt={"next"} height="30" width="30" onClick={this.handleSubmit40}></img>                              
            </div> 
             </div>


            <div className="footer"><div className="element">
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

export default Books;