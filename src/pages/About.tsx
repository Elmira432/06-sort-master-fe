

export default function About() {
  return <div className="text-2xl font-bold "> About Page
    <div className="p-6 bg-gray-100 rounded-xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-3">♻️ Trash Sort</h2>
      <p className="text-gray-600 mb-6">
        Your smart assistant for waste sorting. Quickly find out where to throw your trash:
        recycling, organics, or general waste.
      </p>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-lg font-semibold">♻️ Recycling</h3>
          <p className="text-sm text-gray-600">Plastic, glass, paper, and more — all sorted for reuse.</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-lg font-semibold">🌱 Organics</h3>
          <p className="text-sm text-gray-600">Food scraps, coffee grounds, and compostable waste.</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-lg font-semibold">🚮 General Waste</h3>
          <p className="text-sm text-gray-600">Everything else that can’t be recycled or composted.</p>
        </div>
      </div>
    </div>
  </div>;
}
