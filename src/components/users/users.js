import React, { useEffect, useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { FormControlLabel, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import EditUserDialog from './editUserDialog';
import DeleteIcon from "@material-ui/icons/Delete";
import Notification from '../utils/notification'

import './users.css';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [editSuccess, setEditSuccess] = useState(false)
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    useEffect(() => {
        const usersArray = [];
        for (let i = 0; i < 300; i++) {
            const user = {
                id: i,
                name: "user" + i,
                age: Math.floor(Math.random() * 100),
                gender: i % 2 === 0 ? "m" : "f",
            }
            usersArray.push(user);
        };
        setUsers(usersArray);
    }, [])

    const MatDelete = ({ id }) => {
        const handleDeleteClick = (value) => (event) => {
            event.stopPropagation();
            const filteredArray = users.filter((element) => element.id !== value);
            setUsers(filteredArray);
            setDeleteSuccess(true);
        };

        return (
            <FormControlLabel
                control={
                    <IconButton
                        color="secondary"
                        aria-label="add an alarm"
                        onClick={handleDeleteClick(id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            />
        );
    };

    const MatUpdate = ({ user }) => {
        const handleUpdateClick = (value) => (event) => {
            setSelectedUser(value)
            setDialogOpen(true)
        };

        return (
            <FormControlLabel
                control={
                    <IconButton
                        color="secondary"
                        aria-label="add an alarm"
                        onClick={handleUpdateClick(user)}
                    >
                        <EditIcon />
                    </IconButton>
                }
            />
        );
    };

    const handleClose = () => {
        console.log('dialog closing')
        setDialogOpen(false)
    }

    const handleSaveAndClose = (user) => {
        setDialogOpen(false)
        setEditSuccess(true)
        const usersArray = [...users] // shallow copy - we are not mutating the original state
        let changedUser = usersArray.find(x => x.id === user.id) // find the changed user
        let indexOfChangedElement = usersArray.indexOf(changedUser) // get his index, we need it
        usersArray[indexOfChangedElement] = user // change the user, keep the order in the array
        setUsers(usersArray) // set state
    }

    const hideNotification = () => {
        if (editSuccess)
            setEditSuccess(false)
        if (deleteSuccess)
            setDeleteSuccess(false)
    }

    const columns = [
        {
            field: "name",
            headerName: "Name",
            width: 300,
            headerAlign: 'center',
        },
        {
            field: "age",
            headerName: "Age",
            width: 300,
            headerAlign: 'center',
        },
        {
            field: "gender",
            headerName: "Gender",
            width: 300,
            headerAlign: 'center',
        },
        {
            field: "delete",
            headerName: "Delete user",
            filterable: false,
            sortable: false,
            width: 300,
            headerAlign: 'center',
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                    >
                        <MatDelete id={params.row.id} />
                    </div>
                );
            }
        },
        {
            field: "update",
            headerName: "Update user",
            filterable: false,
            sortable: false,
            width: 300,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                    >
                        <MatUpdate user={params.row} />
                    </div>
                );
            }
        },
    ];


    const [filterModel, setFilterModel] = React.useState({
        items: [{ id: 1, columnField: 'gender', value: 'm', operatorValue: 'equals' }],
    });

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                className='table-container'
                rows={users}
                columns={columns}
                getRowClassName={(params) => 'tableRow'}
                filterModel={filterModel}
                onFilterModelChange={(model) => setFilterModel(model)} />
            {selectedUser &&
                <EditUserDialog open={dialogOpen} handleClose={handleClose} selectedUser={selectedUser} handleSaveAndClose={handleSaveAndClose} />}
            <Notification snackbarOpen={editSuccess} handleClose={hideNotification} notificationText={"User successfully updated"} />
            <Notification snackbarOpen={deleteSuccess} handleClose={hideNotification} notificationText={"User successfully deleted"} />
        </div>

    );
}
