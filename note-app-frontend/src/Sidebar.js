import React, { useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import NotesIcon from '@mui/icons-material/Notes';
import TaskIcon from '@mui/icons-material/Task';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CategoryContext from './CategoryContext';

const styles = {
  sidebar: {
    background: '#716040',
    color: '#eaddcf',
    padding: '20px',
    height: '100vh',
    minWidth: '200px',
  },
  listItem: {
    marginBottom: '15px',
    '&:hover': {
      background: '#444',
    },
  },
  active: {
    background: '#8c7851',
  },
};

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  let addLink = '/';

  if (location.pathname.startsWith('/notes')) {
    addLink = '/notes/new';
  } else if (location.pathname.startsWith('/tasks')) {
    addLink = '/tasks/new';
  }

  const handleAddTask = () => {
    navigate('/tasks/new', { state: { selectedCategory } });
  };  

  return (
    <List style={styles.sidebar}>
      <ListItem>
      <IconButton component={Link} to="/notes/new" color="inherit">
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => handleAddTask()} color="inherit">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/notes"
        style={
          location.pathname.startsWith('/notes')
            ? { ...styles.listItem, ...styles.active }
            : styles.listItem
        }
      >
        <ListItemIcon>
          <NotesIcon fontSize="large" style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Notes" primaryTypographyProps={{ variant: 'h6' }} />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/tasks"
        style={
          location.pathname.startsWith('/tasks')
            ? { ...styles.listItem, ...styles.active }
            : styles.listItem
        }
      >
        <ListItemIcon>
          <TaskIcon fontSize="large" style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Tasks" primaryTypographyProps={{ variant: 'h6' }} />
      </ListItem>
      <ListItem button component={Link} to="/journal" style={styles.listItem}>
        <ListItemIcon>
          <BookIcon fontSize="large" style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Journal" primaryTypographyProps={{ variant: 'h6' }} />
      </ListItem>
      <ListItem button component={Link} to="/chat" style={styles.listItem}>
        <ListItemIcon>
          <ChatIcon fontSize="large" style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Chat" primaryTypographyProps={{ variant: 'h6' }} />
      </ListItem>
    </List>
  );
}

export default Sidebar;
