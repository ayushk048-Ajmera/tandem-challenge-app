import React, { FC } from 'react'
import CustomCard, { ICardProps } from '../CardElement/Index'
import { Grid } from '@mui/material'
import { useGridStyles } from '../styles/GridStyles';

interface IDataSetProps {
    dataSet: Array<ICardProps>;
}

const DataSet: FC<IDataSetProps> = (props) => {
    const { dataSet } = props;
    const gridStyles = useGridStyles();
    return (
        <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
            {dataSet.map(data => (
                <Grid item key={data.name} >
                    <CustomCard name={data.name} value={data.value} color={data.color} />
                </Grid>))}

        </Grid>
    )
}

export default DataSet