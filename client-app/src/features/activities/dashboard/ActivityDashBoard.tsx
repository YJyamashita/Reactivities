import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';
import ActivityFilters from './ActivityFilters';

export default observer (function ActivityDashBoard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities...' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    )
})