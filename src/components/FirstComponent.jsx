import React from "react";
import { useJsonFetch } from "./hooks/useJsonFetch.jsx";

export default function Component() {
  const [data, loading, error] = useJsonFetch(
    "https://ra-8-task-2-server.herokuapp.com/data",
    []
  );
  return <div className="component">{data.status}</div>;
}
