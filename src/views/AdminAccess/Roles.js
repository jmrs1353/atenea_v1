import React from "react";
import Link from '@material-ui/core/Link';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

import { dataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

import stylesBut from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DeleteIcon from '@material-ui/icons/Delete';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';



const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
};

const useStylesBut = makeStyles(stylesBut);
const useStyles = makeStyles(styles);


export default function ReactTables() {
  const [data, setData] = React.useState(
    dataTable.dataRows.map((prop, key) => {
    
      
      return {
        id: key,
        name: prop[0],
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          
          
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            
            <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>
            
            
            
          </div>
          
          
          
          
        ),
      };
    })
  );
  const classes = useStyles();
  const classesBut = useStylesBut();
    function addRoles() {
              window.location.href = "/admin/addroles";
       }
    function modRoles() {
              window.location.href = "/admin/modroles";
       }
  return (
    <GridContainer>
    
            <GridItem xs={24}>
        
            <div className={classesBut.cardContentRight}>
              
              <div className={classes.cardContentRight}>
              <Button color="danger" round className={classes.marginRight}
                        size="large"
                        startIcon={<AddCircleIcon />}  onClick={addRoles}>
                  Agregar Rol
                </Button>
                 <Button  color="danger" round className={classes.marginRight}
                       
                        size="large"
                        startIcon={<DeleteIcon />} >
                  Borrar Rol
                </Button>
                <Button  color="danger" round className={classes.marginRight}
                       
                        size="large"
                        startIcon={<CreateIcon />}  onClick={modRoles} >
                  Editar Rol
                </Button>
              </div>
              </div>
          </GridItem>
    
    
      <GridItem xs={12}>
        <Card>
          <CardHeader color="danger" icon>
            <CardIcon color="danger">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Roles</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Rol Name",
                  accessor: "name",
                },
                {
                  Header: " ",
                  accessor: " ",
                },
               
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
