'use client'
import { useFormik } from "formik";
import { CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { useServices } from "@/components/provider/ServicesContext";
import { useSearchParams } from "next/navigation";
import Image from 'next/image';

function Booking() {
  const services = useServices();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    // Use optional chaining to safely access searchParams
    const serviceParam = searchParams?.get('service');
    if (serviceParam) {
      const foundService = services.find(
        service => service.id === parseInt(serviceParam, 10)
      );
      if (foundService) {
        setSelectedService(foundService.id);
        contactFormik.setFieldValue("Service", foundService.id.toString());
      } else {
        setSelectedService(services.length > 0 ? services[0].id : null);
      }
    } else {
      setSelectedService(services.length > 0 ? services[0].id : null);
    }
  }, [searchParams, services]);

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      Service: "",
      message: "",
      date: "",
      time: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      Service: Yup.string().required("Service is required"),
      message: Yup.string().required("Message is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
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

  const selectedServiceDetails = services.find(
    (service) => service.id === selectedService
  );

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
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Starting From</p>
          <p className="text-2xl font-bold text-gray-900">
            ${selectedServiceDetails.startingPrice}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative bg-primary pt-10 md:pt-16 overflow-hidden flex flex-col items-center justify-center mt-20 md:mt-12">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="/image/background.svg"
            className="w-full h-full object-cover"
            alt="background pattern"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Book A Service
          </h1>
          <p className="text-blue-100 text-base md:text-lg">
            We deliver
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full min-h-screen items-start bg-white mt-12 md:mt-24 px-4 md:px-24 py-12 gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-2xl max-w-md font-semibold text-gray-800">
            Book a Service, We deliver
          </span>
          <form onSubmit={contactFormik.handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-semibold text-neutral-600">
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
                <label htmlFor="email" className="text-sm font-semibold text-neutral-600">
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
                <label htmlFor="phone" className="text-sm font-semibold text-neutral-600">
                  Phone
                </label>
                <input
                  name="phone"
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.phone}
                  type="tel"
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
                <label htmlFor="date" className="text-sm font-semibold text-neutral-600">
                  Date
                </label>
                <input
                  name="date"
                  type="date"
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.date}
                  className="w-full p-4 rounded-xl bg-gray-100 outline-none"
                />
                {contactFormik.touched.date && contactFormik.errors.date && (
                  <span className="text-xs text-red-500">
                    {contactFormik.errors.date}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="time" className="text-sm font-semibold text-neutral-600">
                  Time
                </label>
                <input
                  name="time"
                  type="time"
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.time}
                  className="w-full p-4 rounded-xl bg-gray-100 outline-none"
                />
                {contactFormik.touched.time && contactFormik.errors.time && (
                  <span className="text-xs text-red-500">
                    {contactFormik.errors.time}
                  </span>
                )}
              </div>
            </div>
            <div className="block md:hidden">
              <FeaturesList />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-semibold text-neutral-600">
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
            <button type="submit" className="w-full p-4 rounded-xl bg-primary text-white">
              {loading ? (
                <span className="text-sm font-semibold">Sending...</span>
              ) : (
                <span className="text-sm font-semibold">Send book request</span>
              )}
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 hidden md:flex md:flex-col md:justify-between md:h-full">
          <FeaturesList />
        </div>
      </div>
    </>
  );
}

export default Booking;
