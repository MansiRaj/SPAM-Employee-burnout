import React from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {CircularProgress,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Toolbar,Paper,Checkbox,Button} from "@material-ui/core"
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';
import {selectrow} from '../Components';


const StyledTableCell = withStyles((theme) => ({
  head: {
    background:"#283A46",
    opacity: 1,
    padding:"0.3vh",
    color:"#97A1A9",
    border:"none",
    spacing: 5 ,
    zIndex: 1,
    position: "sticky",
  },
  body: {
    fontSize:"calc(0.08vw+0.08vh)",
    padding:"0.01vh",
    color: "#ffff",
    font: "Ubuntu",
    spacing: 2,
    opacity: 1,
    border:"none",   
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  invoice_body: {
    '&:nth-of-type(odd)': {
      background:"#2F4451",
      opacity: 1.5,
    },
    '&:nth-of-type(even)': {
      background:"#283A46",
      opacity: 1,
    },
  },
}))(TableRow);

const invoice_bar_styles = makeStyles((theme) => ({
  invoice_body: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  buttonStyle:{
    padding: 10,
    borderRadius: 5
  },
  but: {
        color: '#FFFFFF',
        borderColor: '#FFFFFF'
  },
  buttonStyle1:{
    padding: 10
  },
  search: {
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    position: 'Absolute',
    paddingLeft: 10,
    minHighth: 50
  },
  btn_primary: {
    background: "#14AFF1 0% 0% no-repeat padding-box",
    borderRadius: 10,
    opacity: 1,
    border: "1px solid #14AFF1",
    color: "#fff",
    paddingTop: 4 ,
    paddingBottom: 4,
    fontSize: 14
  },
  left_invoice_body: {
    marginLeft: 1,
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gridGap: 20,
    width: "50vw",
    justifyContent:"left"
  },
  right_invoice_body: {
    marginLeft: "5vw",
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gridGap: 10,
    listStyle: "none",
    textAlign: "right",
    width: "50vw",
    justifyContent: "end",
    marginRight: "1rem",
  },
  button_search:{
   background: "#283A46 0% 0% no-repeat padding-box",
   borderRadius: "10px",
   border:"1px solid #356680",
    padding: "1px 5px",
    fontSize: "5px",
  },
  button_1:{
    padding: "1px 5px",
    fontSize: "5px",
    background: "#283A46 0% 0% no-repeat padding-box"
  }
}));




const useStyles = makeStyles((theme) => ({
  invoice_body: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    backgroundColor: '#2D424F', 
  },
  table: {
    height: '100vh',
    overflow: "unset",
  position: "relative",
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  '@global': {
    '*::-webkit-scrollbar': {
      top: "303px",
      left: "1869px",
      width: "6px",
      height: "6px",
      
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        
    },
    '*::-webkit-scrollbar-thumb': {
      background:"#61707B 0% 0% no-repeat padding-box",
      borderRadius: "8px",
      opacity: 1,
    }
  }
}));

export default function Invoice_Table() {
  const [data, setData] = React.useState([]);
  const[checkID,setCheckID]=React.useState([])
  const[checked_BurnRate,set_checked_BurnRate]=React.useState(0)
  const [check,setCheck]=React.useState(false)
  const [disableCounter,setdisableCounter]=React.useState(0)
  const [temp, setTemp] = React.useState(0)
  const dispatch=useDispatch();
    const count = React.useRef(0);
    let c = 0;
    let d = 20;

    const getApiData = React.useCallback(async () => {
      try {
        const response = await axios.get(
            "http://localhost:8080/milestone2/see"
        );
        setData((prevData) => [...prevData, ...response.data.slice(c, d)]);
        count.current += 1;
      } catch (error) {
        console.log(error);
      }
      c=d;
      d = d+20;
    }, []);

    React.useEffect(() => {
      setData([]);
      getApiData();
    }, [getApiData]);

    React.useEffect(() => {
      let p=checkID
      if(check==true)
      {p.push(checked_BurnRate);
      setdisableCounter(disableCounter+1)
      }
      else{
        for( var i = 0; i < p.length; i++){ 
    
          if ( p[i] === checked_BurnRate) { 
      
              p.splice(i, 1); 
              setdisableCounter(disableCounter-1);
          }
      
      }
      }
     setCheckID(p);
    }, [checked_BurnRate,temp]);

  
    console.log(data);
    /////////////////
  const classes = useStyles();

  return (
    <div className={classes.invoice_body}>
      <Paper className={classes.paper}>
      <div id='container'>
        <TableContainer
        id="test-table"
        component={Paper}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          width: "95vw",
          height: "50vh",
          overflowY: "scroll",
          backgroundColor:"#2D424F"
        }}>
          <InfiniteScroll
            scrollableTarget="test-table"
            dataLength={data.length}
            loader={
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  padding: "50px"
                }}
              >
                <CircularProgress color="secondary" />
              </div>
            }
            hasMore={count.current < 500}
            next={getApiData}
          >
          <Table
            className={classes.table}
          >
            <TableHead >  
                <TableRow>
                    <StyledTableCell align="center" className="checkbox" type="checkbox" width="2px" >
                    </StyledTableCell>                   
                      <StyledTableCell align="left">Employee ID</StyledTableCell>
                      <StyledTableCell align="left">Date of Joining</StyledTableCell>
                      <StyledTableCell align="left">Gender</StyledTableCell>
                      <StyledTableCell align="right">Company Type</StyledTableCell>
                      <StyledTableCell align="right">WFH Setup Available</StyledTableCell>
                      <StyledTableCell align="center">Designation</StyledTableCell>
                      <StyledTableCell align="left">Resource Allocation</StyledTableCell>
                      <StyledTableCell align="left">Mental Fatigue Score</StyledTableCell>
                      <StyledTableCell align="left">Burn Rate</StyledTableCell>
                </TableRow>
            </TableHead> 

            <TableBody>

                {data.length != 0 && data.map((n) => {
                      return (
                        <StyledTableRow
                            role="checkbox"
                            tabIndex={-1}
                            key={n.cust_number}>
                        <StyledTableCell align="center" className="checkbox" padding="checkbox"  >
                        <Checkbox onChange={(event)=>{setCheck(event.target.checked); setTemp(temp+1); dispatch(selectrow(event.target.value));}} value={n.Burn_Rate} style={{ transform: "scale(0.7)",color:"#ffff" ,opacity:0.5}}
                        />
                        </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="left" >{n.Employee_ID}</StyledTableCell>
                            <StyledTableCell align="left" >{n.Date_of_Joining}</StyledTableCell>
                            <StyledTableCell align="left" >{n.Gender}</StyledTableCell>
                            <StyledTableCell align="right" >{n.Company_Type}</StyledTableCell>
                            <StyledTableCell align="right" >{n.WFH_Setup_Available}</StyledTableCell>
                            <StyledTableCell align="center" >{n.Designation}</StyledTableCell>
                            <StyledTableCell align="center" >{n.RESOURCE_Allocation}</StyledTableCell>
                            <StyledTableCell align="left" >{n.Mental_Fatigue_Score}</StyledTableCell>
                            <StyledTableCell align="left" >{n.Burn_Rate}</StyledTableCell>                        
                        </StyledTableRow>
                      );
                    })}
            </TableBody>
          </Table>
          </InfiniteScroll>
        </TableContainer>
        </div>
      </Paper>
    </div>
  );
}