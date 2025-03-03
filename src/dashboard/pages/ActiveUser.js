import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField
} from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../css/ActiveUser.css';

function ActiveUser() {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', mobile: '9876543210', email: 'john@example.com', password: 'password123' },
        { id: 2, name: 'Jane Smith', mobile: '8765432109', email: 'jane@example.com', password: 'password456' },
        { id: 3, name: 'Alice Brown', mobile: '7654321098', email: 'alice@example.com', password: 'password789' }
    ]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="dashboard">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="dashboard-content">
                <Navbar toggleSidebar={toggleSidebar} />

                <div className="active-table-container">
                    <h3>Active Users</h3>
                    <TextField
                        label="Search by name"
                        variant="outlined"
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                        margin="normal"
                    />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>SL</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile Number</TableCell>
                                    <TableCell>Email ID</TableCell>
                                    <TableCell>Password</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.filter(user =>
                                    user.name.toLowerCase().includes(searchQuery.toLowerCase())
                                ).map((user, index) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.mobile}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.password}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

export default ActiveUser;
