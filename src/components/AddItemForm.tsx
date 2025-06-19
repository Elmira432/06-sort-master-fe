import { useState } from "react";

type Props = {
    containerId: string;
    onItemAdded: () => void;
};

const AddItemForm: React.FC<Props> = ({ containerId, onItemAdded }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, containerId })
        });

        if (res.ok) {
            onItemAdded();
            setName("");
            setDescription("");
        } else {
            alert("Failed to add item.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-2 bg-white bg-opacity-30 p-3 rounded shadow"
        >
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="New item name"
                required
                className="block w-full border p-1 rounded text-black"
            />
            <button
                type="submit"
                className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
            >
                Add Item
            </button>
        </form>
    );
};

export default AddItemForm;
