import { createContext, useState, useContext } from "react";

export const QueryContext = createContext();
const QueryUpdateContext = createContext();

export function useQuery() {
  return useContext(QueryContext);
}

export function useQueryUpdate() {
  return useContext(QueryUpdateContext);
}

export function QueryProvider({children}) {
  const [query, setQuery] = useState('Wizeline');

  function changeQuery(newQuery) {
    setQuery(newQuery);
  }


  return (
  <QueryContext.Provider value={query}>
    <QueryUpdateContext.Provider value={changeQuery}>
      {children}
    </QueryUpdateContext.Provider>
  </QueryContext.Provider>
  );
}
