import { forwardRef } from 'react';
// @mui
import { Box, SxProps, Theme } from '@mui/material';


// ----------------------------------------------------------------------
interface PropsSvg {
  src?: string,
  sx?: SxProps<Theme> | undefined
};
const SvgColor : React.FC<PropsSvg> = forwardRef(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));



export default SvgColor;
