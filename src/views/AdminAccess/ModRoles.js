import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);

export default function RegularForms() {
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeEnabled = (event) => {
    setSelectedEnabled(event.target.value);
  };
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="danger" icon>
            <CardIcon color="danger">
              <MailOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Editar Roles</h4>
          </CardHeader>
          <CardBody>
            <form>
              <CustomInput
                labelText="Nombre del Rol"
                id="nombre_rol"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                }}
              />
              <CustomInput
                labelText="Descripción"
                id="descripcion"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "password",
                }}
              />
              <div className={classes.checkboxAndRadio}>
          
              </div>
              <Button color="danger">Guardar</Button>
            </form>
            
            
            <GridContainer> 
     <GridItem>
                  <FormLabel
                    className={
                      classes.labelHorizontal +
                      " " +
                      classes.labelHorizontalRadioCheckbox
                    }
                  >
                    Politicas
                  </FormLabel>
                </GridItem>
                <GridItem >
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(21)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        root: classes.labelRoot,
                      }}
                      label="AdministratorPolicie"
                    />
                  </div>
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(22)}
                          checked={checked.indexOf(22) !== -1 ? true : false}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        root: classes.labelRoot,
                      }}
                      label="SuministryPolicies"
                    />
                  </div>
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormControlLabel
                      disabled
                      control={
                        <Checkbox
                          tabIndex={-1}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.labelRoot,
                      }}
                      label="EmployeePolicies"
                    />
                  </div>
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormControlLabel
                      disabled
                      control={
                        <Checkbox
                          tabIndex={-1}
                          checked={checked.indexOf(24) !== -1 ? true : false}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.labelRoot,
                      }}
                      label="RiesgosPolicies"
                    />
                  </div>
             
   </GridItem>
    </GridContainer>
          </CardBody>
        </Card>
      </GridItem>

  </GridContainer>
  );
}
