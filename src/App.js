import { useFetch } from './useFetch';
import './App.css';

function App() {
  const { data, loading } = useFetch('http://localhost:8092/api/v1/futbolistas');

  return (
    <div className="App">
      <h1>Futbolistas</h1>
      <div className="card">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nacimiento</th>
                <th>Características</th>
                <th>Posición</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr key={user.idFutbolista}>
                  <td>{user.idFutbolista}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.fechaNacimiento}</td>
                  <td>{user.caracteristicas}</td>
                  <td>{user.posicion.nombrePosicion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
