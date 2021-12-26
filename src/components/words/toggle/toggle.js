import * as React from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import GridTemplateColumns from '../layout/columns';
import GridTemplateRows from '../layout/rows';

export default function HorizontalToggleButtons() {
    const [view, setView] = React.useState('list');
    const [cards, setCards] = React.useState([]);

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    React.useEffect(() => {
        const cardsArray = [
            {
                id: 1,
                word: 'penetralia',
                pronunciation: 'pen.i.trey.lee.uh',
                typeword: 'noun',
                text: 'the innermost parts of recesses of a place or thing.'
            },{
                id: 2,
                word: 'forgetive',
                pronunciation: 'fawr.ji.tiv.fohr',
                typeword: 'adjective',
                text: 'inventive. creative.'
            },{
                id: 3,
                word: 'bucolic',
                pronunciation: 'bu.col.ic',
                typeword: 'noun',
                text: 'relating to the pleasant aspects of countryside and country life.'
            },
        ];
        setCards(cardsArray);
    }, []);



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
                        <TableRowsIcon />
                    </ToggleButton>
                    <ToggleButton value="colume" aria-label="module">
                        <ViewWeekIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                {view === 'row' && (
                    <GridTemplateRows cardsArray={cards}/>
                )}

                {view === 'colume' && (
                    <GridTemplateColumns cardsArray={cards}/>
                )}
            </div>
        </div>


    );
}
