import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/root.actions';


export default function Dropdown({ id }) {
  const dispatch = useDispatch();
  const useStyles = makeStyles(theme => ({
    button: {
      width: '105px',
      margin: theme.spacing(-0.5),
    },
  }));

  const classes = useStyles();

  const BtnEdit = () => (
    <div className="btnEdit">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
    </div>
  );

  const BtnDelete = () => (
    <div className="btnDelete">
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

    </div>
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseDelete = () => {
    setAnchorEl(null);
    dispatch(deleteProduct(id))
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Link to={`/edit-products/${id}`} >
          <MenuItem onClick={handleClose}> <BtnEdit /> </MenuItem>
        </Link>
        <MenuItem onClick={handleCloseDelete}> <BtnDelete /> </MenuItem>
      </Menu>
    </div>
  );
}
