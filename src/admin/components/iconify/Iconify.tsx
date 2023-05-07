import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// icons
import { Icon, IconifyIcon } from '@iconify/react';
// @mui
import { Box, SxProps, Theme } from '@mui/material';

// ----------------------------------------------------------------------

interface Props  {
  sx?: SxProps<Theme> | undefined
  width? : number | string,
  icon: string | IconifyIcon
}

const Iconify : React.FC<Props> = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));

// Iconify.propTypes = {
//   sx: PropTypes.object,
//   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
// };

export default Iconify;
