// import { useEffect, useState } from "react";
//
// interface Advert {
//     id: number;
//     title: string;
//     description: string;
//     photo: string;
// }
//
// const Advert = () => {
//     const [adverts, setAdverts] = useState<Advert[]>([]);
//     const [error, setError] = useState<string | null>(null);
//
//     const fetchAdverts = async () => {
//         try {
//             const res = await fetch("/api/adverts");
//             const data = await res.json();
//             setAdverts(data);
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         } catch (err) {
//             setError("Failed to fetch adverts.");
//         }
//     };
//
//     const deleteAdvert = async (id: number) => {
//         try {
//             await fetch(`/api/adverts/${id}`, { method: "DELETE" });
//             setAdverts((prev) => prev.filter((ad) => ad.id !== id));
//         } catch {
//             setError("Failed to delete advert.");
//         }
//     };
//
//     useEffect(() => {
//         fetchAdverts();
//     }, []);
//
//     return (
//         <div className="max-w-3xl mx-auto mt-10 p-4">
//             <h1 className="text-2xl font-bold mb-6">Adverts</h1>
//
//             {error && <p className="text-red-600 mb-4">{error}</p>}
//
//             <div className="space-y-4">
//                 {adverts.map((advert) => (
//                     <div
//                         key={advert.id}
//                         className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
//                     >
//                         <div>
//                             <h2 className="text-lg font-semibold">{advert.title}</h2>
//                             <p className="text-sm text-gray-600">{advert.description}</p>
//                             <img
//                                 src={advert.photo}
//                                 alt={advert.title}
//                                 className="w-32 mt-2 rounded"
//                             />
//                         </div>
//                         <button
//                             onClick={() => deleteAdvert(advert.id)}
//                             className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Advert;
