import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import '../css/ProductListTable.css';

function ProductListTable() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [users, setUsers] = useState([
        { id: 1, name: 'qr', price: '9876543210', description: 'fdgtfytfy'},
        { id: 2, name: 'car', price: '8765432109', description: 'hgvj'},
        { id: 3, name: 'bike', price: '7654321098', description: 'fytffytft'}
    ]);

    const [editingProduct, setEditingProduct] = useState(null);

    const handleSort = (column) => {
        const newOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortColumn(column);
        setSortOrder(newOrder);
        
        const sortedUsers = [...users].sort((a, b) => {
            if (a[column] < b[column]) return newOrder === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return newOrder === 'asc' ? 1 : -1;
            return 0;
        });
        setUsers(sortedUsers);
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingProduct({ ...editingProduct, [name]: value });
    };

    const handleSaveEdit = () => {
        setUsers(users.map(user => user.id === editingProduct.id ? editingProduct : user));
        setEditingProduct(null);
    };

    return (
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
                <TableHead >


                        <TableRow sx={{ backgroundColor: "#070534", color: "white" }}>
                            <TableCell onClick={() => handleSort('id')} sx={{color: "white" }}>SL</TableCell>
                            <TableCell onClick={() => handleSort('name')} sx={{color: "white" }}>Product Name</TableCell>
                            <TableCell onClick={() => handleSort('price')} sx={{color: "white" }}>Price</TableCell>
                            <TableCell onClick={() => handleSort('description')} sx={{color: "white" }}>Description</TableCell>
                            <TableCell sx={{color: "white" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.filter(user => 
                            user.name.toLowerCase().includes(searchQuery.toLowerCase())
                        ).map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.price}</TableCell>
                                <TableCell>{user.description}</TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={() => handleEditClick(user)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => handleDelete(user.id)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Edit Product Dialog */}
            {editingProduct && (
                <Dialog open={true} onClose={() => setEditingProduct(null)}>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Product Name"
                            name="name"
                            fullWidth
                            margin="dense"
                            value={editingProduct.name}
                            onChange={handleEditChange}
                        />
                        <TextField
                            label="Price"
                            name="price"
                            fullWidth
                            margin="dense"
                            value={editingProduct.price}
                            onChange={handleEditChange}
                        />
                       <TextField
                            label="Description"
                            name="description"
                            fullWidth
                            margin="dense"
                            value={editingProduct.description}
                            onChange={handleEditChange}
                            multiline
                            rows={4} // You can adjust the number of rows as needed
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setEditingProduct(null)} color="secondary">Cancel</Button>
                        <Button onClick={handleSaveEdit} color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
}

export default ProductListTable;
