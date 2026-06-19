"use client"
import { BillingHealth } from '../types/index';
import { useApi } from "../hooks/useFetch";

function App() {

  const { data, error, isLoading } = useApi<BillingHealth>('/billing/health');

  if (isLoading) return <button disabled>Cargando...</button>;
  if (error) return <button>Error en el Back</button>;

  return <button onClick={() => console.log(data)}>Probar Back</button>;
}

export default App;