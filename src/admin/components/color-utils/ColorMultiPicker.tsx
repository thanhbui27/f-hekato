// @mui
import { Box, Checkbox, SxProps, Theme } from '@mui/material';
//
import Icon from './Icon';

// ----------------------------------------------------------------------

interface Props {
  sx?: SxProps<Theme> | undefined,
  colors?: any,
  onChangeColor?: any,
  selected?: string[],
  name? : string
};

const ColorMultiPicker  : React.FC <Props>= ({ colors, selected, onChangeColor, sx, ...other }) => {
  return (
    <Box sx={sx}>
      {colors.map((color : string) => {
        const whiteColor = color === '#FFFFFF' || color === 'white';

        return (
          <Checkbox
            key={color}
            size="small"
            value={color}
            color="default"
            checked={selected?.includes(color)}
            onChange={() => onChangeColor(color)}
            icon={<Icon whiteColor={whiteColor} />}
            checkedIcon={<Icon checked whiteColor={whiteColor} />}
            sx={{
              color,
              '&:hover': { opacity: 0.72 },
              '& svg': { width: 12, height: 12 },
            }}
            {...other}
          />
        );
      })}
    </Box>
  );
}

export default ColorMultiPicker
