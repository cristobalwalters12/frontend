import React from "react";
import '../assets/css/Login.css'
import logo from '../assets/img/logo.png'
import {Apiurl}from '../services/apirest';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
class Login extends React.Component{

    state={
        form:{
            "email":"",
            "password":""
        },
        error:false,
        errorMsg:""
    }
    
    manejadorSubmit(e){
        e.preventDefault();
    }

    manejadorChange = async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }
    
    manejadorBoton=()=>{
       
       let url=Apiurl ;
       

       axios.post(url,this.state.form)
       .then(Response=>{
        if(Response.statusText==='OK'){
            localStorage.setItem("token",Response.data.access_token);
            
        }
           

       })
    }


    render(){
        return(
            <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={logo} width="100px" alt="User Icon" />
                        <br /><br />
                    </div>
                        <form onSubmit={this.manejadorSubmit}>
                            <input type="text"  className="fadeIn second" name="email" placeholder="email" onChange={this.manejadorChange}/>
                            <input type="password"  className="fadeIn third" name="password" placeholder="Password" onChange={this.manejadorChange}/>
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                        </form>

                    {this.state.error === true &&
                        <div id="formFooter">
                            <div className="alert alert-danger" role="alert">
                                {this.state.error}
                            </div>
                        </div>
                    }
                </div>
            </div>

            </React.Fragment>
        );
    }
}
export default Login