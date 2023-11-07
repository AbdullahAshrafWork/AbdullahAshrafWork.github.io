export default function Home() {
  return (
    <div className="flex justify-center block mt-6">
      
      <div className="mb-6 mt-6 text-center auto">
        <a href="/dogs/register_dogs" className="mb-6 mt-6 block max-w-sm md:auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p>Register Dogs</p>
        </a>
        <a href="/search_dogs" className="mb-6 mt-6 block max-w-sm md:auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p>Search Dogs</p>
        </a>
        <a href="/register_dog_walkers" className="mb-6 mt-6 block max-w-sm md:auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p>Register Dog Walkers</p>
        </a>
        <a href="/search_dog_walkers" className="mb-6 mt-6 block max-w-sm md:auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <p>Search Dog Walkers</p>
        </a>
      </div>
    </div>
    
  );
}
