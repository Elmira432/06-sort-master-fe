import { Link } from "react-router-dom";

interface ItemCardProps {
    id: number;
    name: string;
    containerId: number;
    onDelete?: () => void
}

const ItemCard = ({ id, name, containerId, onDelete }: ItemCardProps) => {
    const getContainerColor = (id: number): string => {
        switch (id) {
            case 1: return 'border-red-500';
            case 2: return 'border-blue-500';
            case 3: return 'border-green-500';
            default: return 'border-gray-300';
        }
    }

    const borderColorClass = getContainerColor(containerId);

    return (
        <div className={`border rounded-md px-4 py-3 shadow-sm flex justify-between items-center ${borderColorClass}`}>
            <div>
                <Link to={`/items/${id}`} className="font-medium hover:underline">
                    {name}
                </Link>
                <div className="text-sm text-gray-500">Container ID: {containerId}</div>
            </div>
            <button
                onClick={onDelete}
                className="text-black bg-red-500 hover:bg-red-700 px-3 py-1 text-sm rounded"
                disabled={!onDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default ItemCard;
