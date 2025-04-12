export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition duration-300"
    >
      {children}
    </button>
  );
}
