export default function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
