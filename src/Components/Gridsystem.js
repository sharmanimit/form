// import {
//   Button,
//   Grid,
//   makeStyles,
//   TextField,
//   Select,
//   MenuItem,
// } from "@material-ui/core";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
// import React, { useEffect, useState } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import {
//   ColumnDirective,
//   ColumnsDirective,
//   Filter,
//   GridComponent,
//   Inject,
//   Page,
//   Resize,
//   Sort,
// } from "@syncfusion/ej2-react-grids";
// import axios from "axios";
// import "./Gridsystem.css";

// const useStyles = makeStyles({
//   root: {
//     padding: "2rem",
//     minHeight: "100vh",
//     backgroundColor: "#ddd",
//   },
//   input: {
//     backgroundColor: "#fff",
//   },
//   submitButton: {
//     float: "right",
//   },
// });

// export const Gridsystem = () => {
//   const classes = useStyles();
//   const [product, setProduct] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState({
//     search: "",
//     to: "",
//     from: "",
//     names: "",
//     files: "",
//   });

//   const { names, search, to, from, files } = searchTerm;
//   let toDate =
//     to &&
//     to
//       .split("-")
//       .reverse()
//       .reduce((a, c, i) => (a = a.concat(-c)));
//   let formDate =
//     from &&
//     from
//       .split("-")
//       .reverse()
//       .reduce((a, c, i) => (a = a.concat(-c)));
//   console.log(toDate, formDate);

//   const getProductData = async () => {
//     const response = await axios.get(
//       `date/${names}/${search}/16-07-2022/05-08-2022`
//     );
//     setProduct(response.data);
//     console.log(response.data);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setSearchTerm({
//       ...searchTerm,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     getProductData();
//   }, []);

//   const handleClick = (e) => {
//     setOpen(true);
//   };
//   return (
//     <div>
//       (
//       <Grid className={classes.root}>
//         <div
//           onClick={handleClick}
//           style={{
//             marginBottom: "1rem",
//             float: "left",
//             border: "1px",
//             textDecoration: "underline",
//           }}
//         >
//           <b>ADVANCE SEARCH PAGE</b>
//         </div>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <div style={{ marginBottom: "0.5rem", float: "left" }}>DATE:</div>

//             <div className="control-pane">
//               <div className="control-section">
//                 <div className="daterangepicker-control-section">
//                   <DateRangePickerComponent>date</DateRangePickerComponent>
//                 </div>
//               </div>
//             </div>
//           </Grid>
          
//           {open && (
//             <>
//             <Grid item xs={6}>
//             <TextField
//               className={classes.input}
//               variant="outlined"
//               fullWidth
//               size="small"
//               label="UPLOADED BY:"
//               value={searchTerm.names}
//               onChange={handleInputChange}
//               name="names"
//             />
//           </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   select
//                   native="true"
//                   className={classes.input}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   label="TYPE:"
//                 >
//                   <MenuItem value="">Choose one option</MenuItem>
//                   <MenuItem value="3">NOTING</MenuItem>
//                   <MenuItem value="6">ENCLOSURE</MenuItem>
//                   <MenuItem value="9">SERVICE LETTER</MenuItem>
//                   <MenuItem value="12">SERVICE NOTE</MenuItem>
//                   <MenuItem value="16">MINUTE OF METTING</MenuItem>
//                   <MenuItem value="18">DEMO OFFICIAL</MenuItem>
//                 </TextField>
//               </Grid>
//               <Grid item xs={4}>
//                 <TextField
//                   className={classes.input}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   label="FILE NO:"
//                   value={searchTerm.files}
//                   onChange={handleInputChange}
//                   name="files"
//                 />
//               </Grid>
//               <Grid item xs={4}>
//                 <TextField
//                   className={classes.input}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   label="FILE SUBJECT:"
//                 />
//               </Grid>
//               <Grid item xs={4}>
//                 <TextField
//                   className={classes.input}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   label="OLD FILE REFERENCE:"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   className={classes.input}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   label="CONTENT:"
//                   value={searchTerm.search}
//                   onChange={handleInputChange}
//                   name="search"
//                 />
//               </Grid>
//             </>
//           )}

//           <Grid item xs={12}>
//             <Button
//               startIcon={<SearchIcon />}
//               className={classes.submitButton}
//               variant="contained"
//               color="primary"
//               onClick={() => setOpen(!open)}
//               style={{ marginBottom: "0.5rem" }}
//             >
//               {open ? "Hide" : "Show"}
//             </Button>
//             <Button
//               startIcon={<SearchIcon />}
//               className={classes.submitButton}
//               variant="contained"
//               color="primary"
//               onClick={getProductData}
//               style={{ marginBottom: "0.5rem" }}
//             >
//               Search
//             </Button>
//           </Grid>
//           <Grid>
//           <GridComponent
//             dataSource={product}
//             height="400"
//             allowResizing={true}
//             allowSorting={true}
//             allowPaging={true}
//             pageSettings={{ pageCount: 5, pageSizes: true }}
//             allowFiltering={true}
//             filterSettings={{ type: "Menu" }}
//           >
//             <ColumnsDirective>
//               <ColumnDirective
//                 field="bucketId"
//                 headerText={"UPLOADED BY"}
//                 width="90"
//                 textAlign="left"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="data"
//                 width="200"
//                 headerText={"CONTENT"}
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="Doc subject"
//                 headerText={"TYPE"}
//                 width="150"
//                 textAlign="center"
//               />
//               <ColumnDirective
//                 field="fileName"
//                 headerText={"FILE NO"}
//                 width="130"
//                 format="yMd"
//                 textAlign="center"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="modified date"
//                 headerText={"MODIFIED DATE"}
//                 // template={statusTemplate}
//                 width="120"
//                 textAlign="Right"
//               />
//               <ColumnDirective
//                 field="Date"
//                 headerText={"CREATED DATE"}
//                 width="130"
//                 format="yMd"
//                 textAlign="Right"
//               ></ColumnDirective>
//             </ColumnsDirective>
//             <Inject services={[Resize, Sort, Filter, Page]} />
//           </GridComponent>
//         </Grid>
//         </Grid>
       
//       </Grid>
//       )
//     </div>
//   );
// };

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import {
     
     Grid
    
     
   
   
   } from "@material-ui/core";
//import { Gridsystem } from "./Components/Gridsystem";

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function Gridsystem() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <form className={classes.form} noValidate>
        
     <p>vhvhv</p>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
    





   