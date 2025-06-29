// src/pages/Items.tsx
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

interface Item {
    id: number;
    name: string;
    containerId: number;
}

const ItemsPage = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch("/api/items")
            .then((res) => res.json())
            .then(setItems)
            .catch(console.error);
    }, []);

    return (
        <div className="max-w-3xl mx-auto mt-10 px-4">
            <h1 className="text-2xl font-bold mb-6">Items</h1>
            <div className="space-y-4">
                {items.map((item) => (
                    <ItemCard key={item.id} name={item.name} containerId={item.containerId} />
                ))}
            </div>
        </div>
    );
};

export default ItemsPage;
