const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-32 pb-10 max-md:px-10">
      <div className="text-center mb-10 max-lg:mb-5">
        <h2 className="text-3xl max-lg:text-xl font-bold">About TaskNest</h2>
        <p className="mt-2 text-lg max-md:text-sm">Empowering buyers and workers through secure, rewarding task collaboration.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-lg:gap-5">
        {/* Mission */}
        <div className="bg-base-200 p-10 rounded-xl shadow-sm max-md:p-5 max-lg:p-6">
          <h3 className="text-xl font-semibold max-lg:text-lg">🎯 Our Mission</h3>
          <p className="mt-2 text-sm">
            TaskNest connects buyers and workers in a trusted ecosystem where tasks are rewarded fairly, securely, and transparently.
          </p>
        </div>

        {/* Roles */}
        <div className="bg-base-200 p-10 rounded-xl shadow-sm max-md:p-5 max-lg:p-6">
          <h3 className="text-xl font-semibold max-lg:text-lg">🧑‍💼 Roles & Rewards</h3>
          <p className="mt-2 text-sm">
            Whether you're a buyer creating tasks, a worker earning coins, or an admin ensuring integrity—TaskNest is built for you.
          </p>
        </div>

        {/* Security */}
        <div className="bg-base-200 p-10 rounded-xl shadow-sm max-md:p-5 max-lg:p-6">
          <h3 className="text-xl font-semibold max-lg:text-lg">🔒 Security & Trust</h3>
          <p className="mt-2 text-sm">Stripe-powered payments, role-based access, and admin oversight ensure a safe and reliable experience for all users.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg max-lg:text-sm">Built with ❤️ in Bangladesh. Join TaskNest and redefine how tasks and rewards work online.</p>
      </div>
    </section>
  );
};

export default AboutUs;
