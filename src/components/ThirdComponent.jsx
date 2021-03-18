import React from "react";
import { useJsonFetch } from "./hooks/useJsonFetch.jsx";

export default function ThirdComponent() {
  const [data, loading, error] = useJsonFetch(
    "https://ra-8-task-2-server.herokuapp.com/loading",
    []
  );
  return <div className="component">{loading && "Идет загрузка..."}</div>;
}
