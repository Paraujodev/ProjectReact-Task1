import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/historico_receitas.json", {
      headers: { "X-API-Key": "420e6730" }
    })
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro na API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

