import React, { useEffect, useState } from 'react';

type Container = {
    id: number;
    name: string;
    color: string;
};

const ItemsPage: React.FC = () => {
    const [items, setItems] = useState<Container[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/containers')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load containers:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-medium">Loading...</p>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Containers</h1>
            {items.length === 0 ? (
                <p className="text-center text-gray-500">No containers found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-5"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <span
                                    className="w-6 h-6 rounded-full border"
                                    style={{ backgroundColor: item.color }}
                                    title={item.color}
                                ></span>
                            </div>
                            <p className="text-sm text-gray-600">ID: {item.id}</p>
                            <p className="text-sm text-gray-600">Color: {item.color}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemsPage;
