interface ItemCardProps {
    name: string;
    containerId: number;
}

const ItemCard = ({ name, containerId }: ItemCardProps) => {
    return (
        <div className="border rounded-md px-4 py-3 shadow-sm flex justify-between items-center">
            <div>
                <div className="font-medium">{name}</div>
                <div className="text-sm text-gray-500">Container ID: {containerId}</div>
            </div>
            <button className="text-black bg-red-500 hover:bg-red-700 px-3 py-1 text-sm rounded">
                Delete
            </button>
        </div>
    );
};

export default ItemCard;
