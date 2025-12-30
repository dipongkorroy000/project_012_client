import {MdEmail, MdPhone, MdLocationOn} from "react-icons/md";

const Contact = () => {
  return (
    <section className="xl:max-w-5xl lg:max-w-4xl mx-auto mb-12 mt-32 max-lg:mx-20 max-md:mx-10">
      <div className="text-center mb-10 space-y-1">
        <h2 className="text-3xl font-bold max-md:text-xl">Contact Us</h2>
        <p className="text-lg max-md:text-sm">Reach out to TaskNest for support, partnership, or general inquiries.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-md:gap-5">
        {/* Email */}
        <div className="bg-base-200 p-10 rounded-lg shadow-sm flex items-center gap-4 max-md:p-5">
          <MdEmail className="text-3xl max-md:text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-sm">dipongkorroy000@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-base-200 p-10 rounded-lg shadow-sm flex items-center gap-4 max-md:p-5">
          <MdPhone className="text-3xl max-md:text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-sm">+880 1799760840</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-base-200 p-10 rounded-lg shadow-sm flex items-center gap-4 max-md:p-5">
          <MdLocationOn className="text-3xl max-md:text-2xl" />
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-sm">Dinajpur, Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-slg font-semibold dark:text-gray-400 text-gray-600">We typically respond within 24 hours. Thank you for choosing TaskNest!</p>
      </div>
    </section>
  );
};

export default Contact;
