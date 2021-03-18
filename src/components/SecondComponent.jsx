import React from "react";
import { useJsonFetch } from "./hooks/useJsonFetch.jsx";

export default function SecondComponent() {
  const [data, loading, error] = useJsonFetch(
    "https://ra-8-task-2-server.herokuapp.com/error",
    []
  );
  return <div className="component">{error}</div>;
}
