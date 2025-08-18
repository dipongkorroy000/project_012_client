import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-text-primary">Contact Us</h2>
        <p className="mt-2 text-lg text-gray-300">
          Reach out to TaskNest for support, partnership, or general inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md flex items-start gap-4">
          <MdEmail className="text-3xl text-accent" />
          <div>
            <h3 className="text-lg font-semibold ">Email</h3>
            <p className="text-sm text-gray-300">dipongkorroy000@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md flex items-start gap-4">
          <MdPhone className="text-3xl text-accent" />
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-sm text-gray-300">+880 1234 567890</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-base-200 p-6 rounded-lg shadow-md flex items-start gap-4">
          <MdLocationOn className="text-3xl text-accent" />
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-sm text-gray-300">Dinajpur, Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          We typically respond within 24 hours. Thank you for choosing TaskNest!
        </p>
      </div>
    </section>
  );
};

export default Contact;