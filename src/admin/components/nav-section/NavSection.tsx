import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

interface Props {
  data: any,
};

const NavSection : React.FC<Props> = ({ data = [], ...other }) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item : any) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

export default NavSection

// ----------------------------------------------------------------------

interface PropsNavItem{
  item: any,
};

const NavItem : React.FC<PropsNavItem> = ({ item }) => {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
