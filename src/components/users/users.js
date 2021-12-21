import React, { useEffect , useState } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditUserDialog from './editUserDialog'
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import Notification from '../utils/notification'

import './users.css'

export default function Users(){

    const [ users, setUsers] = useState([]);
    const [ selectedUser, setSelectedUser] = useState( null )
    const [dialogOpen, setDialogOpen]=useState(false)
    const [snackbarOpen, setSnackbarOpen]=useState(false)

    useEffect(() => {
        const usersArray = [];
        for (let i = 0; i < 20; i++) {
          const user = {
            id: i,
            name: "user" + i,
            age: Math.floor(Math.random() * 100),
            gender: i % 2 === 0 ? "m " : "f"
          };
          usersArray.push(user);
        }
        setUsers(usersArray);
      }, []);

      const editUser=(user)=> (event)=>{
       setSelectedUser(user)
       setDialogOpen(true)
      }

      const deleteUser = (value) => (event) => {
        //api delete
        //api getAll in then
        event.stopPropagation();
        const filteredArray = users.filter((element) => element.id !== value);
        setUsers(filteredArray);
      };

      const handleClose=()=>{
          console.log('dialog closing')
          setDialogOpen(false)
      }

      const handleSaveAndClose=(user)=>{
          setDialogOpen(false)
          setSnackbarOpen(true)
          const usersArray = [...users] // shallow copy - we are not mutating the original state
          let changedUser = usersArray.find(x=> x.id === user.id) // find the changed user
          let indexOfChangedElement = usersArray.indexOf(changedUser) // get his index, we need it
          usersArray[indexOfChangedElement] = user // change the user, keep the order in the array
          setUsers(usersArray) // set state
      }

      const hideNotification=()=>{
        setSnackbarOpen(false)
      }

    return (<div className="table-container">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row, index) => (
                <TableRow key={index} onClick={editUser(row)} classes={{root:"tableRow"}}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>
                    <Tooltip title="Delete user" placement="top" arrow={true}>
                      <DeleteIcon
                        className="actionIcon"
                        onClick={deleteUser(row.id)}
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      {selectedUser && 
      <EditUserDialog open={dialogOpen} handleClose={handleClose} selectedUser={selectedUser} handleSaveAndClose={handleSaveAndClose}/>
      }
        <Notification snackbarOpen={snackbarOpen} handleClose={hideNotification} notificationText={"User successfully updated"}/>
    </div>
    )
}
























   

    
