import axios from "axios";

const apiUrl = 'http://127.0.0.1:8000/api'; // Reemplaza con la URL de tu API en el archivo .env

// Configuración global de Axios para manejar los encabezados
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    // Agrega otros encabezados necesarios aquí, como encabezados de autorización, por ejemplo:
    // 'Authorization': 'Bearer ' + token,
  },
});