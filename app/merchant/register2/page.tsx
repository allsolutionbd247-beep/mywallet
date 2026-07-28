'use client';

import { useState } from 'react';

export default function MerchantRegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    brand: 'MY WALLET',
    country: '',
    legalName: '',
    tradingName: '',
    businessType: '',
    companyNumber: '',
    taxId: '',
    accountType: '',
    adminEmail: '',
    techEmail: '',
    industry: '',
    subIndustry: '',
    address1: '',
    address2: '',
    city: '',
    postcode: '',
    primaryCurrency: '',
    additionalCurrency1: '',
    infoQuestion: '',
    termsAccepted: false,
    trueInfoAccepted: false,
    marketingAccepted: false,
    sanctionsConfirmed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Merchant Registration Data:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* টপ গ্রিন বার */}
      <div className="bg-[#006633] text-white py-2.5 px-6 flex justify-between items-center text-sm shadow-sm">
        <span className="font-medium tracking-wide">My Wallet Business Experience</span>
        <div className="flex items-center space-x-6">
          <button type="button" className="hover:text-gray-200 transition">English</button>
          <button type="button" className="hover:text-gray-200 transition">Help</button>
        </div>
      </div>

      {/* হেডার */}
      <div className="bg-white border-b border-gray-200 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-[#006633] text-white flex items-center justify-center font-bold rounded shadow-sm">
            MW
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">My Wallet</span>
        </div>
        <span className="text-gray-600 font-semibold text-sm md:text-base">Business registration</span>
      </div>

      {/* মেইন কন্টেন্ট */}
      <main className="flex-grow flex justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-12">
          
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Create A Business Account</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Accept payments via cards and direct debit over phone or email quickly and easily.
            </p>

            <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-lg text-xs sm:text-sm text-gray-700 space-y-2">
              <p>To apply for a MY WALLET Merchant Account you need to provide the below information and provide documentation that will enable us to verify your account.</p>
              <p className="text-gray-500">
                My Wallet Financial Services Limited / My Wallet Payment Solutions Limited is part of the My Wallet Group. The My Wallet Group may use any details you give about yourself and others to provide payment services, manage your account, conduct research and analysis, to prevent and detect fraud and to comply with our regulatory obligations.
              </p>
            </div>

            {/* ব্র্যান্ড সিলেকশন */}
            <div className="mt-6">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
Select business account brand *
              </label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] focus:border-[#006633] outline-none text-sm text-gray-800"
              >
                <option value="MY WALLET">MY WALLET</option>
              </select>
            </div>

            {/* ইনফো নোটিশ */}
            <div className="mt-4 bg-[#e6f4ea] border border-[#34a853] p-3 rounded-lg flex items-start space-x-3 text-xs sm:text-sm text-gray-800">
              <div className="w-5 h-5 rounded-full bg-[#34a853] text-white flex items-center justify-center font-bold flex-shrink-0 mt-0.5">i</div>
              <p>Under certain conditions you can not apply for a combined MY WALLET business application.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* কর্পোরেশন ও লিগ্যাল ইনফো */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Country of Incorporation *</label>
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                >
                  <option value="">Select country</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Singapore">Singapore</option>
                  <option value="UK">United Kingdom</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">If you cannot find your country of incorporation, please refer to the Brand section and conditions.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Legal name *</label>
                  <input
                    type="text"
                    name="legalName"
                    required
                    value={formData.legalName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Trading name *</label>
                  <input
                    type="text"
                    name="tradingName"
                    required
                    value={formData.tradingName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Business type *</label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  >
                    <option value="">Select business type</option>
                    <option value="Private Limited">Private Limited Company</option>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Company Number *</label>
                  <input
                    type="text"
                    name="companyNumber"
                    required
                    value={formData.companyNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Tax Identification Number *</label>
                <input
                  type="text"
                  name="taxId"
                  required
                  value={formData.taxId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Account type *</label>
                  <select
                    name="accountType"
                    required
                    value={formData.accountType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  >
                    <option value="">Select account type</option>
                    <option value="Standard">Standard</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Administrator e-mail *</label>
                  <input
                    type="email"
                    name="adminEmail"
                    required
                    value={formData.adminEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Technical email *</label>
                  <input
                    type="email"
                    name="techEmail"
                    required
                    value={formData.techEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Industry *</label>
<select
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  >
                    <option value="">Select industry</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Services">Services</option>
                    <option value="Digital Goods">Digital Goods</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Sub-industry *</label>
                  <select
                    name="subIndustry"
                    required
                    value={formData.subIndustry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  >
                    <option value="">Select sub-industry</option>
                    <option value="Retail">Retail</option>
                    <option value="Jewelry">Jewelry & Accessories</option>
                    <option value="Software">Software</option>
                  </select>
                </div>
              </div>
            </div>

            {/* অ্যাড্রেস সেকশন */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Address</h2>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Address line 1 *</label>
                <input
                  type="text"
                  name="address1"
                  required
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Address line 2</label>
                <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Postcode *</label>
                  <input
                    type="text"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  />
                </div>
              </div>
<p className="text-xs text-gray-500">You can create additional currencies at a later stage when your account is created.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Primary currency *</label>
                  <select
                    name="primaryCurrency"
                    required
                    value={formData.primaryCurrency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  >
                    <option value="">Select currency</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="BDT">BDT (৳)</option>
                    <option value="THB">THB (฿)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Additional Currency</label>
                  <select
                    name="additionalCurrency1"
                    value={formData.additionalCurrency1}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
                  >
                    <option value="">Select currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ওয়েবসাইট সেকশন */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Website</h2>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                  No Websites added. Add new Website using the button above. Websites are optional for Expense accounts.
                </p>
                <button
                  type="button"
                  className="px-5 py-2.5 bg-[#006633] text-white text-sm font-medium rounded-md hover:bg-[#00552b] transition"
                >
                  + Add Website
                </button>
              </div>
            </div>

            {/* বিজনেস কন্টাক্ট এবং ডিরেক্টর */}
            <div className="border-t border-gray-200 pt-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Business Contact And Ownership</h2>
              <p className="text-xs text-gray-500">If you provide details of another person in this application, you confirm that you have their consent to do so.</p>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Business Contact</h3>
                  <p className="text-xs text-gray-600 mt-1">No Business contact added. Add new Business contact using the button above.</p>
                </div>
                <button
                  type="button"
                  className="mt-4 sm:mt-0 px-5 py-2.5 bg-[#006633] text-white text-sm font-medium rounded-md hover:bg-[#00552b] transition"
                >
                  + Add Contact
                </button>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
<div>
                  <h3 className="text-sm font-bold text-gray-900">Director</h3>
                  <p className="text-xs text-gray-600 mt-1">No Director added. Add Director using the Add button.</p>
                </div>
                <button
                  type="button"
                  className="mt-4 sm:mt-0 px-5 py-2.5 bg-[#006633] text-white text-sm font-medium rounded-md hover:bg-[#00552b] transition"
                >
                  + Add Director
                </button>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Ultimate Beneficial Owner</h3>
                  <p className="text-xs text-gray-600 mt-1">Ultimate Beneficial Owner is the natural person who ultimately owns or controls the business.</p>
                </div>
                <button
                  type="button"
                  className="mt-4 sm:mt-0 px-5 py-2.5 bg-[#006633] text-white text-sm font-medium rounded-md hover:bg-[#00552b] transition"
                >
                  + Add Owner
                </button>
              </div>
            </div>

            {/* অ্যাডিশনাল বিজনেস ইনফো ও স্যাংশন */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Additional Business Information</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Please confirm that you comply with all applicable sanctions regimes and in particular that you do not operate in or have any exposure to the following countries or regions:
              </p>
              <div className="text-xs font-medium text-gray-800 bg-gray-50 p-3 rounded border border-gray-200">
                <p>Cuba, Iran, North Korea, Syria</p>
                <p>Crimea, Donetsk, Kherson, Luhansk, Zaporizhzhia</p>
              </div>

              <div className="flex items-center space-x-6 pt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sanctions"
                    required
                    onChange={() => setFormData((prev) => ({ ...prev, sanctionsConfirmed: true }))}
                    className="text-[#006633] focus:ring-[#006633]"
                  />
                  <span className="text-sm font-medium text-gray-800">Confirmed</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sanctions"
                    required
                    onChange={() => setFormData((prev) => ({ ...prev, sanctionsConfirmed: false }))}
                    className="text-[#006633] focus:ring-[#006633]"
                  />
                  <span className="text-sm font-medium text-gray-800">Not confirmed</span>
                </label>
              </div>
            </div>

            {/* ইনফরমেশন / কোশ্চেন */}
            <div className="border-t border-gray-200 pt-6 space-y-2">
              <label className="block text-sm font-semibold text-gray-900">Information/question</label>
              <textarea
                name="infoQuestion"
                rows={3}
                value={formData.infoQuestion}
                onChange={handleChange}
                placeholder="Inquiries related to personal accounts will not be addressed"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#006633] outline-none text-sm text-gray-800"
              />
            </div>
{/* টার্মস এবং সাবমিট সেকশন */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">By submitting this application, you hereby represent:</h3>
              
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    required
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 rounded text-[#006633] focus:ring-[#006633]"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">
                    I have read and accept the Merchant Account Terms and Conditions and My Wallet Group Privacy Notice.
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="trueInfoAccepted"
                    required
                    checked={formData.trueInfoAccepted}
                    onChange={handleChange}
                    className="mt-1 rounded text-[#006633] focus:ring-[#006633]"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">
                    The information provided during this application process is true and correct and I agree to notify MY WALLET promptly of any changes.
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingAccepted"
                    checked={formData.marketingAccepted}
                    onChange={handleChange}
                    className="mt-1 rounded text-[#006633] focus:ring-[#006633]"
                  />
                  <span className="text-xs sm:text-sm text-gray-700">
                    My Wallet will occasionally send you marketing messages about fee promotions, offers, other relevant services, features and payment options we think will benefit you.
                  </span>
                </label>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition text-sm"
                >
                  Save and exit
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3 bg-[#006633] text-white font-medium rounded-md shadow hover:bg-[#00552b] transition text-sm"
                >
                  Submit
                </button>
              </div>

            </div>

          </form>
        </div>
      </main>
    </div>
  );
}