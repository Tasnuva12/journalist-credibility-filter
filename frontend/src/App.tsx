import { useTest } from "./hooks/useTest";
export default function App() {
  const { data, isLoading } = useTest();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">Credibility Filter MVP</h1>
      </header>

      <main className="p-6 space-y-6 max-w-4xl mx-auto">
        {/* Search + Filters Section */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Search & Filters</h2>
          <input
            type="text"
            placeholder="Search topic… (e.g., Bangladesh, Election)"
            className="w-full p-2 border rounded"
          />
        </section>

        {/* Feed Section */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Live Feed</h2>

          <div className="p-4 border rounded">
            <div className="font-medium">Example Feed Item</div>
            <div className="text-sm text-gray-600">
              Tweets/news will appear here once APIs are added.
            </div>
            <div className="mt-2 text-right text-green-600 font-semibold">
              Credibility: 85
            </div>
          </div>
        </section>
      </main>
      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">API Test</h2>
        {isLoading ? (
          <p>Loading…</p>
        ) : (
          <p className="text-green-600 font-medium">{data?.message}</p>
        )}
      </section>
    </div>
  );
}
