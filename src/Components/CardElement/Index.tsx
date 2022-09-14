import { CardActionArea, Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react'
import { Response } from '../../Models/Response';
import { useStyles } from './styles';

export interface ICardProps extends Response {
  color?: string;
}

const CustomCard: FC<ICardProps> = (props) => {

  const { name, value, color } = props;
  const classes = useStyles({ color });

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {name}
          </Typography>
          <Typography className={classes.subtitle}>{value}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

export default CustomCard