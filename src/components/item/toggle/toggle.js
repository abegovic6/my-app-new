import * as React from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import GridTemplateColumns from '../layout/columns';
import GridTemplateRows from '../layout/rows';

export default function HorizontalToggleButtons() {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);

    };

    return (
        <div>
            <div>
                <ToggleButtonGroup
                    orientation="horizontal"
                    value={view}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="row" aria-label="list">
                        <TableRowsIcon/>
                    </ToggleButton>
                    <ToggleButton value="colume" aria-label="module">
                        <ViewWeekIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                {view === 'row' && (
                    <GridTemplateRows />
                )}

                {view === 'colume' && (
                    <GridTemplateColumns/>
                )}
            </div>
        </div>


    );
}
