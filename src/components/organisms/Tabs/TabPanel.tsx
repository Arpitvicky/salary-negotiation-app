import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
}

const TabPanel = (props: ITabPanelProps) => {
    const { children, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
};
export default TabPanel;
