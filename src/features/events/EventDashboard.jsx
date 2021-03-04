import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';


export default function EventDashboard() {
    return (<Grid>
            <GridColumn width={10}>
                <h2>Left Column</h2>
            </GridColumn>
            <GridColumn width={6}>
              <h2>Right Column</h2>
            </GridColumn>
            </Grid>)
};