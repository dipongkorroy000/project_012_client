const HowWorksComponent = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-10 max-md:text-xl">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card shadow-sm p-10">
          <h3 className="text-xl font-semibold mb-5 max-md:text-lg">👷 Worker</h3>
          <p className="max-md:text-sm">Browse tasks → Submit work → Earn coins → Withdraw rewards</p>
        </div>
        <div className="card shadow-sm p-10">
          <h3 className="text-xl font-semibold mb-5 max-md:text-lg">💼 Buyer</h3>
          <p className="max-md:text-sm">Create tasks → Review submissions → Pay workers → Manage coins</p>
        </div>
        <div className="card shadow-sm p-10">
          <h3 className="text-xl font-semibold mb-5 max-md:text-lg">🛡️ Admin</h3>
          <p className="max-md:text-sm">Monitor activity → Resolve reports → Manage roles → Ensure integrity</p>
        </div>
      </div>
    </section>
  );
};

export default HowWorksComponent;
