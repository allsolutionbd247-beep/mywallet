"use client";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
  currency: string;
  firstName: string;
  lastName: string;
  country: string;
  dob: string;
};

export default function JoinPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    currency: "USD",
    firstName: "",
    lastName: "",
    country: "Bangladesh",
    dob: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Join Now</h1>
        
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded" />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded" />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" />
        <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="w-full p-2 border rounded" />
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <select name="currency" value={formData.currency} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="USD">USD</option>
          <option value="BDT">BDT</option>
          <option value="EUR">EUR</option>
        </select>

        <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">
          Create Account
        </button>
      </form>
    </div>
  );
}
