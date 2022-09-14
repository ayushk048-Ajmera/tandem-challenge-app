import React, { FC } from 'react'
import {Button} from '@mui/material'
import { useFormStyles } from './styles';

interface IReLoadButtonProps {
  onClick: () => void
}

export const ReLoadButton: FC<IReLoadButtonProps> = (props) => {
  const classes = useFormStyles();
  return (
    <div className={classes.reLoadButton}>
      <Button size="large" variant="outlined" color="primary"  onClick={props.onClick}> {props.children} </Button>
    </div>
  )
}
