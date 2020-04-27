import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { default as MUITabs } from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import EmployeeForm from '../../molecules/Form/EmployeeForm';
import EmployerForm from '../../molecules/Form/EmployerForm';
import {
    StyledTabsWrapper,
    StyledEmployeeFormWrapper,
    StyledEmployerFormWrapper,
} from './Tabs.style';
const a11yProps = (index: any) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};
const Tabs = () => {
    const [value, setValue] = React.useState(0);
    const [toggleForm, setToggleForm] = React.useState(true);

    const handleChange = (
        event: React.ChangeEvent<{}>,
        newValue: number,
    ) => {
        setValue(newValue);
        setToggleForm(prevToggleForm => !prevToggleForm);
    };

    return (
        <StyledTabsWrapper>
            <AppBar position="static">
                <MUITabs
                    value={value}
                    onChange={handleChange}
                    aria-label="negotiations tabs"
                >
                    <Tab label="Employee" {...a11yProps(0)} />
                    <Tab label="Employer" {...a11yProps(1)} />
                </MUITabs>
            </AppBar>
            <StyledEmployeeFormWrapper toggleForm={toggleForm}>
                <TabPanel index={0}>
                    <EmployeeForm />
                </TabPanel>
            </StyledEmployeeFormWrapper>
            <StyledEmployerFormWrapper toggleForm={toggleForm}>
                <TabPanel index={1}>
                    <EmployerForm />
                </TabPanel>
            </StyledEmployerFormWrapper>
        </StyledTabsWrapper>
    );
};

export default Tabs;
