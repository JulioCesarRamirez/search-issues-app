import { useEffect, useState } from "react";
import { getIssues } from "../helpers/getIssues";

export const useFetch = (issue) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getIssues(issue).then((items) => {
      setState({ data: items, loading: false });
    });
  }, [issue]);

  return state;
};
