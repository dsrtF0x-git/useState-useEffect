import React from "react";
import "./App.css";
import useFetchUsers from "./hooks/useFetchUsers";
import { UsersList, ErrorWrapper } from "./components";
import { CircularProgress } from '@material-ui/core';


function App() {
  const { users, isLoading, error } = useFetchUsers();
  return (
    <>
      {error ? <ErrorWrapper /> : isLoading ? <CircularProgress /> : <UsersList users={users} />}
    </>
  );
}

export default App;
