import * as ActionTypes from '../Actions/types';
import browserHistory from '../Utils/browserHistory'; 


var intialState = {
   loginmsg:'',
   regmsg:''
};

export default(state=intialState,action)=>{
    debugger;
    switch(action.type){

        case ActionTypes.LOGIN:{
            return{...state,loginmsg:'Login successfull'}
                
        }
        case ActionTypes.REG:{
            return{...state,regmsg:'Register successfull'}
            console.log(this.state.loginmsg);
        }
        
        default: 
            return state; 
    }
}
