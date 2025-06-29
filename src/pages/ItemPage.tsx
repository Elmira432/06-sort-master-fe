import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Item {
    id: number;
    name: string;
    containerId: number;
}

interface Container {
    id: number;
    name: string;
    color: string;
    description: string;
}

const ItemPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState<Item | null>(null);
    const [container, setContainer] = useState<Container | null>(null);

    useEffect(() => {
        const fetchItemAndContainer = async () => {
            try {
                const itemRes = await fetch(`/api/items/${id}`);
                const itemData = await itemRes.json();
                setItem(itemData);

                const containerRes = await fetch(`/api/containers/${itemData.containerId}`);
                const containerData = await containerRes.json();
                setContainer(containerData);
            } catch (error) {
                console.error("Failed to load item details:", error);
            }
        };

        fetchItemAndContainer();
    }, [id]);

    if (!item || !container) {
        return <div className="p-6 text-gray-500">Loading...</div>;
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow bg-white space-y-4">
            <h1 className="text-2xl font-bold">Item: {item.name}</h1>
            <div>
                <h2 className="text-lg font-semibold mb-2">Container Info:</h2>
                <p><strong>Name:</strong> {container.name}</p>
                <p><strong>Description:</strong> {container.description}</p>
                <div className="flex items-center gap-2">
                    <strong>Color:</strong>
                    <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: container.color }} />
                    <span className="text-sm text-gray-600">{container.color}</span>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;
