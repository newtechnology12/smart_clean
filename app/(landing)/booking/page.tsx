'use client'
import { useFormik } from "formik";
import { CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import * as Yup from "yup";

function Booking() {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(0); // Default to first service (id 0)

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      Service: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      Service: Yup.string().required("Service is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }
        resetForm();
        toast.success("Message sent successfully!");
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  const services = [
    {
      id: 0,
      name: "Commercial Office Cleaning",
      description:
        "Elevate your workplace environment with our professional office cleaning solutions. We combine smart scheduling, advanced cleaning technology, and trained professionals to maintain a pristine, healthy workplace.",
      features: [
        "Smart monitoring system for cleaning task management",
        "Hospital-grade sanitization protocols",
        "Air quality monitoring and improvement services",
        "24/7 emergency cleaning response availability",
      ],
      startingPrice: 100,
    },
    {
      id: 1,
      name: "Residential Cleaning",
      description:
        "Clean your home with our residential cleaning services. We combine smart scheduling, advanced cleaning technology, and trained professionals to maintain a pristine, healthy living environment.",
      features: [
        "Smart monitoring system for cleaning task management",
        "Hospital-grade sanitization protocols",
        "Air quality monitoring and improvement services",
        "24/7 emergency cleaning response availability",
      ],
      startingPrice: 80,
    },
    {
      id: 2,
      name: "Healthcare Cleaning",
      description:
        "Clean your hospital with our healthcare cleaning services. We combine smart scheduling, advanced cleaning technology, and trained professionals to maintain a pristine, healthy environment.",
      features: [
        "Smart monitoring system for cleaning task management",
        "Hospital-grade sanitization protocols",
        "Air quality monitoring and improvement services",
        "24/7 emergency cleaning response availability",
      ],
      startingPrice: 120,
    },
  ];

  const selectedServiceDetails = services.find(
    (service) => service.id === selectedService
  );

  useEffect(() => {
    if (selectedService === null) {
      setSelectedService(0); // Ensure the first service is selected by default
    }
  }, [selectedService]);

  // Reusable FeaturesList component
  const FeaturesList = () => {
    if (!selectedServiceDetails) {
      return (
        <div className="p-4 bg-gray-100 text-center rounded-xl">
          Please select a service
        </div>
      );
    }
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {selectedServiceDetails.name} Features
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {selectedServiceDetails.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-start bg-white mt-12 md:mt-24 px-4 md:px-24 py-12 gap-10">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <span className="text-2xl max-w-md font-semibold text-gray-800">
          Book a Service, We deliver
        </span>
        <form onSubmit={contactFormik.handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-neutral-600"
              >
                Name
              </label>
              <input
                name="name"
                onChange={contactFormik.handleChange}
                value={contactFormik.values.name}
                type="text"
                placeholder="Enter Name"
                className="w-full p-4 rounded-xl bg-gray-100 outline-none"
              />
              {contactFormik.touched.name && contactFormik.errors.name && (
                <span className="text-xs text-red-500">
                  {contactFormik.errors.name}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-neutral-600"
              >
                Email
              </label>
              <input
                name="email"
                onChange={contactFormik.handleChange}
                value={contactFormik.values.email}
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 rounded-xl bg-gray-100 outline-none"
              />
              {contactFormik.touched.email && contactFormik.errors.email && (
                <span className="text-xs text-red-500">
                  {contactFormik.errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-neutral-600"
              >
                Phone
              </label>
              <input
                name="phone"
                onChange={contactFormik.handleChange}
                value={contactFormik.values.phone}
                type="number"
                placeholder="Enter Phone"
                className="w-full p-4 rounded-xl bg-gray-100 outline-none"
              />
              {contactFormik.touched.phone && contactFormik.errors.phone && (
                <span className="text-xs text-red-500">
                  {contactFormik.errors.phone}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Service"
                className="text-sm font-semibold text-neutral-600"
              >
                Service
              </label>
              <select
                name="Service"
                onChange={(e) => {
                  setSelectedService(Number(e.target.value));
                  contactFormik.handleChange(e);
                }}
                value={contactFormik.values.Service}
                className="w-full p-4 rounded-xl bg-gray-100 outline-none"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
              {contactFormik.touched.Service && contactFormik.errors.Service && (
                <span className="text-xs text-red-500">
                  {contactFormik.errors.Service}
                </span>
              )}
            </div>
          </div>
          {/* Mobile: Display features immediately after select dropdown */}
          <div className="block md:hidden">
            <FeaturesList />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-neutral-600"
            >
              Message
            </label>
            <textarea
              name="message"
              onChange={contactFormik.handleChange}
              value={contactFormik.values.message}
              rows={4}
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-gray-100 outline-none"
            />
            {contactFormik.touched.message && contactFormik.errors.message && (
              <span className="text-xs text-red-500">
                {contactFormik.errors.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-4 rounded-xl bg-primary text-white"
          >
            {loading ? (
              <span className="text-sm font-semibold">Sending...</span>
            ) : (
              <span className="text-sm font-semibold">
                Send book request
              </span>
            )}
          </button>
        </form>
      </div>
      {/* Desktop: Display features on the right side */}
      <div className="w-full md:w-1/2 hidden md:block mt-8">
        <FeaturesList />
      </div>
    </div>
  );
}

export default Booking;
