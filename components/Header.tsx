export default function AppHeader() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-12 h-12 mr-2" />
        <h1 className="text-2xl font-bold">Pet battle game</h1>
      </div>
      <div className="flex items-center">
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/pets" className="mr-4">
          Pets
        </a>
        <a href="/battle" className="mr-4">
          Battles
        </a>
      </div>
      <div>
        <a href="/login">Login</a>
      </div>
    </header>
  );
}
