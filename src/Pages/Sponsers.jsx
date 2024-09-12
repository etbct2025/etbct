import React from 'react';

const SponsorsTable = () => {
  const sponsors = [
    {
      category: 'Platinum Sponsor',
      offer: 'A Booth for presentation of product + one color page Introduction in Conference Proceeding with company logo',
      rate: 'Rs 1,50,000/-',
    },
    {
      category: 'Gold Sponsor',
      offer: 'One color page Introduction + Logo',
      rate: 'Rs 1,00,000/-',
    },
    {
      category: 'Silver Sponsor',
      offer: 'Half color page Introduction + logo',
      rate: 'Rs 50,000/-',
    },
  ];

  return (
    <section className="py-8 px-4">
      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-xl leading-normal">
              <th className="py-3 px-6">Sponsors (Category)</th>
              <th className="py-3 px-6">Offer(s)</th>
              <th className="py-3 px-6">Rate</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            {sponsors.map((sponsor, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6">{sponsor.category}</td>
                <td className="py-3 px-6">{sponsor.offer}</td>
                <td className="py-3 px-6">{sponsor.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Flex-based layout for mobile */}
      <div className="block md:hidden">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 px-4 mb-4 bg-gray-50 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{sponsor.category}</h3>
            <p className="text-gray-600 mb-1">
              <strong>Offer:</strong> {sponsor.offer}
            </p>
            <p className="text-gray-600">
              <strong>Rate:</strong> {sponsor.rate}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsTable;
