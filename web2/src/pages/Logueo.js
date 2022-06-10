import React, {useRef, useState} from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography,} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { app_db } from '../fb';





const Logueo = (props) => {
    // constantes para estilo 
    const paperStyle={
        padding : 20, 
        height :'70vh',
        width : 280, 
        margin : '0px  auto'
        
    }
    const avatarStyle = {backgroundColor : '#1264d8'}
    const [isRegister, setIsResgister] = useState(false);
    const bgImage = {backgroundImage: 'url(/assets/images/LoginBackground.jpg)', backgroundSize: 'cover', height: '100vh', padding:'80px'}
    
    const email_user = useRef('')
    const password_user = useRef('')

    // funcion para registrar usuario 
    const regUser = () =>{
        app_db.auth().createUserWithEmailAndPassword(email_user.current.value,password_user.current.value).then((userFirebase)=>{
            console.log("user creado", userFirebase);
            props.setUsuario(userFirebase);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });

    }
    // funcion para loguear usuario
    const logUser = () =>{
        app_db.auth().signInWithEmailAndPassword(email_user.current.value,password_user.current.value).then((userFirebase) =>{
            console.log("sesion iniciada :",userFirebase.user);
            props.setUsuario(userFirebase);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
    }

    // funcion que maneja el loguin y registro
    const submitHandler = (e) =>{
        e.preventDefault();
        if(isRegister){
            regUser()
        }
        if(!isRegister){
            logUser()
        }
       
        
       
        

    }
    return(
        <div style={bgImage}>
            <Grid>
                <Paper elevation={10} style={paperStyle}> 
                    <Grid align='center' >
                        <Avatar style ={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h1>{isRegister ? "Sign Up" : "Sign In"}</h1>
                    </Grid>
                    <TextField id='emailField' variant="standard" label='email' placeholder='Enter e-mail' type='email' inputRef={email_user} fullWidth required/>
                    <TextField id='passwordField' variant="standard" label='password' placeholder='Enter password' type='password' inputRef={password_user} fullWidth required/>
                
                    <br/>
                    <br/>
                    <Button type='submit' color='primary' variant='contained' fullWidth onClick={submitHandler}>{isRegister ? "Sign Up" : "Sign In"}</Button>
                    <br/>
                    <br/>
                    <Typography>{isRegister ? "Have an Account?" : "Don't Have an Account?"}</Typography>
                    <Button type='submit' color='primary' variant='contained' fullWidth onClick={() => setIsResgister(!isRegister)}>{isRegister ? "Sign In" : "Sign Up For Free"}</Button>
                </Paper>
            </Grid>
        </div>
    )
    
}
export default Logueo;