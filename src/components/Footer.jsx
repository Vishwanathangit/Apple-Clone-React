import React, { useState } from 'react';

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-gray-100 text-sm text-gray-600">
      {/* Top disclaimer section */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 border-b border-gray-300">
        <p className="mb-2">
          No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beat products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest range. Exact pricing will be provided by your card issuer, subject to your card issuer's terms and conditions. Minimum order spend applies as per your card issuer's threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. <strong>Terms apply.</strong>
        </p>
        <p className="mb-2">
          Representative example:<br />
          A purchase of ₹75000.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹8558.00. Total amount payable: ₹79900.00.
        </p>
        <p className="mb-2">
          *Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10000.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discounts applied. Any subsequent order adjustments or cancellations may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback. This may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
        </p>
        <p className="mb-2">
          1. Available in two models: AirPods and AirPods 4 with Active Noise Cancellation.
        </p>
        <p className="mb-2">
          Apple Intelligence is available in beta on iPhone 16 models, iPhone 16 Pro, iPhone 16 Pro Max, iPad mini (7th generation), and iPad and Mac models with M1 and later, with Siri and device language set to Chinese (Simplified), English (Australia, Canada, India, Ireland, New Zealand, Singapore, South Africa, UK or US), French, German, Italian, Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
        </p>
        <p className="text-xs mt-4">A subscription is required for Apple TV+.</p>
        <p className="text-xs">Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
      </div>

      {/* Main footer links - responsive columns */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Mobile view with accordion */}
        <div className="md:hidden">
          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-gray-800 font-semibold"
              onClick={() => toggleSection('shop')}
            >
              Shop and Learn
              <span>{openSections.shop ? '↑' : '↓'}</span>
            </button>
            {openSections.shop && (
              <ul className="space-y-2 pb-4">
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Mac</a></li>
                <li><a href="#" className="hover:underline">iPad</a></li>
                <li><a href="#" className="hover:underline">iPhone</a></li>
                <li><a href="#" className="hover:underline">Watch</a></li>
                <li><a href="#" className="hover:underline">AirPods</a></li>
                <li><a href="#" className="hover:underline">TV & Home</a></li>
                <li><a href="#" className="hover:underline">Entertainment</a></li>
                <li><a href="#" className="hover:underline">Accessories</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-gray-800 font-semibold"
              onClick={() => toggleSection('account')}
            >
              Account
              <span>{openSections.account ? '↑' : '↓'}</span>
            </button>
            {openSections.account && (
              <ul className="space-y-2 pb-4">
                <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
                <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                <li><a href="#" className="hover:underline">iCloud.com</a></li>
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-gray-800 font-semibold"
              onClick={() => toggleSection('store')}
            >
              Apple Store
              <span>{openSections.store ? '↑' : '↓'}</span>
            </button>
            {openSections.store && (
              <ul className="space-y-2 pb-4">
                <li><a href="#" className="hover:underline">Find a Store</a></li>
                <li><a href="#" className="hover:underline">Genius Bar</a></li>
                <li><a href="#" className="hover:underline">Today at Apple</a></li>
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-gray-800 font-semibold"
              onClick={() => toggleSection('business')}
            >
              For Business
              <span>{openSections.business ? '↑' : '↓'}</span>
            </button>
            {openSections.business && (
              <ul className="space-y-2 pb-4">
                <li><a href="#" className="hover:underline">Apple and Business</a></li>
                <li><a href="#" className="hover:underline">Shop for Business</a></li>
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-gray-800 font-semibold"
              onClick={() => toggleSection('education')}
            >
              For Education
              <span>{openSections.education ? '↑' : '↓'}</span>
            </button>
            {openSections.education && (
              <ul className="space-y-2 pb-4">
                <li><a href="#" className="hover:underline">Apple and Education</a></li>
                <li><a href="#" className="hover:underline">Shop for Education</a></li>
              </ul>
            )}
          </div>

          <div className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center py-4 text-gray-800 font-semibold"
              onClick={() => toggleSection('values')}
            >
              Apple Values
              <span>{openSections.values ? '↑' : '↓'}</span>
            </button>
            {openSections.values && (
              <ul className="space-y-2 pb-4">
                <li><a href="#" className="hover:underline">Accessibility</a></li>
                <li><a href="#" className="hover:underline">Education</a></li>
                <li><a href="#" className="hover:underline">Environment</a></li>
              </ul>
            )}
          </div>
        </div>

        {/* Desktop view with columns */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Store</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
              <li><a href="#" className="hover:underline">AirPods</a></li>
              <li><a href="#" className="hover:underline">TV & Home</a></li>
              <li><a href="#" className="hover:underline">Entertainment</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
              <li><a href="#" className="hover:underline">Apple Store Account</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Apple Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Find a Store</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Apple</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">For Business</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple and Business</a></li>
              <li><a href="#" className="hover:underline">Shop for Business</a></li>
            </ul>
            <h4 className="font-semibold text-gray-800 mt-6 mb-4">For Education</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Apple and Education</a></li>
              <li><a href="#" className="hover:underline">Shop for Education</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Apple Values</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Education</a></li>
              <li><a href="#" className="hover:underline">Environment</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom footer section */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <p className="text-xs text-gray-500">
            More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 000800 040 1966.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-500">India</p>
            <div className="border-l border-gray-400 h-4"></div>
            <p className="text-xs text-gray-500">Copyright © 2025 Apple Inc. All rights reserved.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          <a href="#" className="text-gray-600 hover:underline">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:underline">Terms of Use</a>
          <a href="#" className="text-gray-600 hover:underline">Sales Policy</a>
          <a href="#" className="text-gray-600 hover:underline">Legal</a>
          <a href="#" className="text-gray-600 hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;