import { useCallback, useEffect, useState } from "react";
import { ICardProps } from "./Components/CardElement/Index";
import { Form } from "./Components/Form";
import DataSet from "./Components/DataSet/Index";
import DatasetService from "./Services/DatasetService";
import { Typography } from '@mui/material'

import { useAppStyles } from "./AppStyles";

const colors = ["#203f52", "#4d137f", "#ff9900"];
const dataSetIds = ["1234", "4321"];

const App = () => {
  const dataSetService = DatasetService.getInstance();
  const [dataSet, setDataSet] = useState<Array<ICardProps>>([]);
  const [toggle, setToggleDataSet] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>(dataSetIds[+toggle]);
  const [errorMessage, setErrorMessage] = useState<string | null>();
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
    try {
      const dataSetResponse = await dataSetService.getDataSet(id);
      dataSetResponse.forEach((data, i) => data.color = colors[i]);
      setDataSet(dataSetResponse);
      setErrorMessage(null);
    } catch (error) {
      if (error instanceof Error) {
        setDataSet([]);
        setErrorMessage(error.message);
      }
    }
  }

  const onSubmit = useCallback(
    async (value: number) => {
      try {
        const dataSetResponse = await dataSetService.addValue(selectedId, value);
        dataSetResponse.forEach((data, i) => data.color = colors[i]);
        setDataSet(dataSetResponse);
        setErrorMessage(null);
      } catch (error) {
        if (error instanceof Error) {
          setDataSet([]);
          setErrorMessage(error.message);
        }
      }
    },
    [],
  )


  async function onReload() {
    setToggleDataSet(!toggle);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" > Current Dataset Id : {dataSetIds[+toggle]} </Typography>
      <DataSet dataSet={dataSet} />
      <Form onSubmit={onSubmit} onReload={onReload} />
      {errorMessage && <Typography color="red" > {errorMessage} </Typography>}
    </div>
  );
};

export default App;
