import { useEffect, useState } from "react";
import { ICardProps } from "./Components/CardElement/Index";
import { Form } from "./Components/Form";
import DataSet from "./Components/DataSet/Index";
import DatasetService from "./Services/DatasetService";
import {Typography} from '@mui/material'

import { useAppStyles } from "./AppStyles";

const colors = ["#203f52", "#4d137f", "#ff9900"];
const dataSetIds = ["1234", "4321"];

const App = () => {
  const dataSetService = DatasetService.getInstance();
  const [dataSet, setDataSet] = useState<Array<ICardProps>>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>(dataSetIds[+toggle]);
  const classes = useAppStyles();

  useEffect(() => {
    getDataSet(dataSetIds[+toggle]);
  }, [])

  useEffect(() => {
    getDataSet(selectedId);
  }, [selectedId])

  useEffect(() => {
    setSelectedId(dataSetIds[+toggle])
  }, [toggle])

  async function getDataSet(id: string) {
    const dataSetResponse = await dataSetService.getDataSet(id);
    dataSetResponse.forEach((data, i) => data.color = colors[i]);
    setDataSet(dataSetResponse);
  }

  async function onSubmit(value: number) {
    await dataSetService.addValue(selectedId, value);
    getDataSet(selectedId);
  }

  async function onReload() {
    setToggle(!toggle);
  }

  return (
    <div className={classes.root}>
      <Typography > {dataSetIds[+toggle]} </Typography>
      <DataSet dataSet={dataSet} />
      <Form onSubmit={onSubmit} onReload={onReload}/>
    </div>
  );
};

export default App;
