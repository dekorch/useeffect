import React from "react";
import { useFetchJson } from "./hooks/useFetchJson";

export default function Error() {
  const [data, loading, error] = useFetchJson("http://localhost:7070/error");
  return (
    <React.Fragment>
      {error ? <div className="error">{error}</div> : null}
    </React.Fragment>
  );
}