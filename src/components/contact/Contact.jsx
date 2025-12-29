import {MdEmail, MdPhone, MdLocationOn} from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-2 text-lg">Reach out to TaskNest for support, partnership, or general inquiries.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="bg-base-200 p-10 rounded-lg shadow-sm flex items-start gap-4">
          <MdEmail className="text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-sm">dipongkorroy000@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-base-200 p-10 rounded-lg shadow-sm flex items-start gap-4">
          <MdPhone className="text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-sm">+880 1799760840</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-base-200 p-10 rounded-lg shadow-sm flex items-start gap-4">
          <MdLocationOn className="text-3xl" />
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-sm">Dinajpur, Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slg text-gray-600">We typically respond within 24 hours. Thank you for choosing TaskNest!</p>
      </div>
    </section>
  );
};

export default Contact;
