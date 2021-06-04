//import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
//import { VectorMap } from "react-jvectormap";

//import AddAlert from "@material-ui/icons/AddAlert";
//import Close from "@material-ui/icons/Close";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import Tooltip from "@material-ui/core/Tooltip";
//import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
//import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
//import Warning from "@material-ui/icons/Warning";
//import DateRange from "@material-ui/icons/DateRange";
//import LocalOffer from "@material-ui/icons/LocalOffer";
//import Update from "@material-ui/icons/Update";
//import ArrowUpward from "@material-ui/icons/ArrowUpward";
//import AccessTime from "@material-ui/icons/AccessTime";
//import Refresh from "@material-ui/icons/Refresh";
//import Edit from "@material-ui/icons/Edit";
//import Place from "@material-ui/icons/Place";
//import ArtTrack from "@material-ui/icons/ArtTrack";
//import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
//import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

//import Instruction from "components/Instruction/Instruction.js";

import Code from "@material-ui/icons/Code";

//import stylesnot from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";

//import noticeModal1 from "assets/img/card-1.jpeg";
//import noticeModal2 from "assets/img/card-2.jpeg";

//import DeleteIcon from '@material-ui/icons/Delete';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
//import Icon from '@material-ui/core/Icon';
//import SaveIcon from '@material-ui/icons/Save';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BugReport from "@material-ui/icons/BugReport";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  } from "variables/charts";
import { bugs, website, server } from "variables/general.js";
import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import Cloud from "@material-ui/icons/Cloud";
//import priceImage1 from "assets/img/card-2.jpeg";

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import stylesBut from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";
import AutorenewIcon from '@material-ui/icons/Autorenew';

import ReceiptIcon from '@material-ui/icons/Receipt';
import Assignment from "@material-ui/icons/Assignment";

const useStylesBut = makeStyles(stylesBut);


const useStyles = makeStyles(styles);

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};


export default function Dashboard() {
  const classes = useStyles();
  const classesBut = useStylesBut();
  return (
    <div>

      <GridContainer spacing={2}>
        
        <GridItem xs={24}>
        
            <div className={classesBut.cardContentRight}>
              
              <div className={classesBut.buttonGroup}>
                <Button color="danger" round className={classesBut.firstButton}
                        size="large"
                        startIcon={<MonetizationOnIcon />} >
                  Generar oferta 
                   de Ventas
                </Button>
                <Button  color="danger" round className={classesBut.middleButton}
                       
                        size="large"
                        startIcon={<AutorenewIcon />} >
                  Evaluar Oferta 
                   de Compra
                </Button>
                <Button color="danger" round className={classesBut.middleButton}
               
                        size="large"
                        startIcon={<ReceiptIcon />} >
                  Visualizar Resumen
                   de Clientes
                </Button>
                <Button color="danger" round className={classesBut.lastButton}  
                      
                        size="large"
                        startIcon={<AssessmentIcon />} >
                 Mercado
                </Button>
              </div>
              </div>
          </GridItem>
        <GridItem>
       <br />
              <br />
            <hr />  
              
       <br />
              <br />
              
          </GridItem>      
       <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="danger"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      
         <GridItem xs={12} sm={12} md={6}>
          <Card chart className={classes.cardHover}>
             <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
              />
            
          </Card>
        </GridItem>       
       
          <GridItem xs={12}>
        <Card>
          <CardHeader color="danger" icon>
            <CardIcon color="danger">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Regular Table with Colors</h4>
          </CardHeader>
          <CardBody className={classes.customCardContentClass}>
            <Table
              hover
              tableHead={["ID", "Name", "Salary", "Country", "City"]}
              tableData={[
                {
                  color: "success",
                  data: [
                    "1",
                    "Dakota Rice (Success)",
                    "$36,738",
                    "Niger",
                    "Oud-Turnhout",
                  ],
                },
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                {
                  color: "info",
                  data: [
                    "3",
                    "Sage Rodriguez (Info)",
                    "$56,142",
                    "Netherlands",
                    "Baileux",
                  ],
                },
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park",
                ],
                {
                  color: "danger",
                  data: [
                    "5",
                    "Doris Greene (Danger)",
                    "$63,542",
                    "Malawi",
                    "Feldkirchen in Kärnten",
                  ],
                },
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
                {
                  color: "warning",
                  data: [
                    "7",
                    "Mike Chaney (Warning)",
                    "$38,735",
                    "Romania",
                    "Bucharest",
                  ],
                },
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Atenea Graphic</h4>
            </CardBody>
            
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle}>Atenea Graphic</h4>
            </CardBody>
          </Card>
        </GridItem>
        
         <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger" className={classes.cardHeaderHover}>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
                <h4 className={classes.cardTitle}>Atenea Graphic</h4>
            </CardBody>
          </Card>
        </GridItem>
        
      </GridContainer>
     
    </div>
  );
}
