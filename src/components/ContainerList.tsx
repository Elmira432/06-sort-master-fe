import { useEffect, useState } from "react";

interface Container {
    id: string;
    color: string;
    name: string;
    description: string;
}

const ContainerList = () => {
    const [containers, setContainers] = useState<Container[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/containers")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then(setContainers)
            .catch(() => setError("Error loading containers."));
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/containers/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Failed to delete container");

            setContainers((prev) => prev.filter((c) => c.id !== id));
            setMessage("Container deleted successfully.");
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            }
            setMessage("Error deleting container.");
        }

    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Rubbish Containers</h2>

            {error && <div className="text-red-500">{error}</div>}
            {message && <div className="text-blue-600 mb-4">{message}</div>}

            <ul className="space-y-4">
                {containers.map((container) => (
                    <li
                        key={container.id}
                        className="relative p-4 rounded-lg shadow-md text-white"
                        style={{ backgroundColor: container.color }}
                    >
                        <button
                            onClick={() => handleDelete(container.id)}
                            className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                        >
                            Remove
                        </button>
                        <h3 className="text-xl font-semibold">{container.name}</h3>
                        <p>{container.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContainerList;
