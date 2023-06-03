import React from "react";
import { useFetchJson } from "./hooks/useFetchJson";

export default function Data() {
  const [data, loading, error] = useFetchJson("http://localhost:7070/data");
  return (
    <React.Fragment>
      {data ? (
        <div className="data">Получение данных: {data.status}</div>
      ) : null}
    </React.Fragment>
  );
}