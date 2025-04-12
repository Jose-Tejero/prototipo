export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Mi App</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-600 hover:text-blue-600">Inicio</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600">Servicios</a></li>
        <li><a href="#" className="text-gray-600 hover:text-blue-600">Contacto</a></li>
      </ul>
    </nav>
  );
}
