import React ,{ useState } from "react";
import ReactDOM from 'react-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import logo from 'assets/img/logo-white.svg'
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockIcon from '@material-ui/icons/Lock';
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import ReCAPTCHA from "react-google-recaptcha";
import Amplify,  { Auth } from 'aws-amplify';
import Alert from '@material-ui/lab/Alert';
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
//var Recaptcha = require("react-recaptcha");
import Collapse from '@material-ui/core/Collapse';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(styles);

Amplify.configure({
    Auth: {
    mandatorySignIn: false,
    region: 'us-east-1',
    userPoolId: 'us-east-1_9awUOWSR5',
    identityPoolId: 'us-east-1_9awUOWSR5',
    userPoolWebClientId: '3o7fignsojejujuh6qp0ua7aun'
    }
});


//Amplify.configure(awsconfig);
function onChange(value) {
  console.log("Captcha value:", value);
}


function handleChange(event) {
    this.setState({value: event.target.value});
  }
export default function LoginPage() {
  //const message = ""; 
    //handleChange = handleChange.bind(this);
  const [username, setUser] = useState();
  const [password, setPass] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const Alerta = (message) => (
   <Alert severity="error">{message}</Alert>
   )

  async function login() {
    try {
      setOpen(false);
      console.log("User: " + username);
      console.log("Pass: " + password);
      let result = await Auth.signIn(username, password);
        
      if (result) {
        console.log(result);
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      setMessage(err.message);
      setOpen(true); 
      console.log(message); // out message
      console.log(err);
    
      setErrorMessage(err.message);
    }
  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
          
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="danger"
              >
                <img src={logo} style={{height:110, width: 170}} />
              </CardHeader>
              <CardBody>
               <CustomInput
                  labelText="Usuario"
                  id="email"
                  color="danger"
                  formControlProps={{
                    fullWidth: true,
                    color: "red",
                  }}
                  onChange={(e) => setUser(e.target.value)}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                  
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  onChange={(e) => setPass(e.target.value)}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          <LockIcon/>
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                  }}
                />
              
              </CardBody>
              <Collapse in={open}>
                <Alert severity="error">{message}</Alert>
              </Collapse>
              <CardFooter className={classes.justifyContentCenter}>
                <Button variant="contained" color="danger" simple size="lg" block onClick={login}> 
                  Log In
                </Button>
              </CardFooter>
              <CardFooter>
              <Typography className={classes.root} textCenter>
                <Link href="#">
                  Recuperar Contraseña
                </Link>
              </Typography>
              </CardFooter>
              <CardFooter>
               <ReCAPTCHA sitekey="6Leuqg0bAAAAAL6-sSG2uzJTJfgEpACngfw9kjty" onChange={onChange} size="normal"/>
              </CardFooter>
            </Card>
            
          </form>
        </GridItem>
              
      </GridContainer>
        
    </div>
  );
}


