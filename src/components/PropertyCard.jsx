export default function PropertyCard({ property }) {
  return (
    <div className="bg-white/80 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">${property.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          View Details
        </button>
      </div>
    </div>
  );
}
