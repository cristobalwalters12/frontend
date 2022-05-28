import React from "react";
import '../assets/css/Login.css'
import logo from '../assets/img/logo.png'
import {Apiurl}from '../services/apirest';
import axios from 'axios';
class Login extends React.Component{

    state={
        form:{
            "id_superadmin":"1",
            "nombre_superadmin":"",
            "contraseña":""
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
           console.log(Response);
       })
    }


    render(){
        return(
            <React.Fragment>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={logo} width="100px" alt="User Icon" />
                        </div>


                            <form onSubmit={this.manejadorSubmit}>
                                <input type="text"  className="fadeIn second" name="nombre_superadmin" placeholder="Usuario" onChange={this.manejadorChange}/>
                                <input type="password"  className="fadeIn third" name="contraseña" placeholder="Password" onChange={this.manejadorChange}/>
                                <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorBoton}/>
                            </form>


                        <div id="formFooter">
                      <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
        </div>

            </React.Fragment>
        );
    }
}
export default Login