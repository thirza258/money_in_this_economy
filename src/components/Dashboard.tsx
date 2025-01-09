import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Personal Finance Dashboard</h1>
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Total Spending</h3>
            <p className="text-3xl font-bold text-gray-900">$3,200.00</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Remaining Budget</h3>
            <p className="text-3xl font-bold text-gray-900">$1,000.00</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Savings</h3>
            <p className="text-3xl font-bold text-gray-900">$800.00</p>
          </div>
        </div>

        {/* Spending by Category */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Spending by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Food</p>
              <p className="text-xl font-bold text-gray-900">$800.00</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Transport</p>
              <p className="text-xl font-bold text-gray-900">$600.00</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Entertainment</p>
              <p className="text-xl font-bold text-gray-900">$400.00</p>
            </div>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Bills</p>
              <p className="text-xl font-bold text-gray-900">$700.00</p>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Comparison with Last Month</h3>
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-700">Spending</p>
              <p className="text-2xl font-bold text-gray-900">$2,800.00</p>
            </div>
            <p className="text-sm text-gray-500">Compared to last month: +$400.00</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Comparison with Last Year</h3>
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-700">Spending</p>
              <p className="text-2xl font-bold text-gray-900">$3,000.00</p>
            </div>
            <p className="text-sm text-gray-500">Compared to last year: +$200.00</p>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-700">Amazon Shopping</p>
              <p className="text-xl font-bold text-gray-900">-$150.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-700">Grocery Store</p>
              <p className="text-xl font-bold text-gray-900">-$200.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg text-gray-700">Uber Ride</p>
              <p className="text-xl font-bold text-gray-900">-$30.00</p>
            </div>
          </div>
        </div>

        {/* Financial Goals */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Financial Goals</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg text-gray-700">Save $5000</p>
            <p className="text-xl font-bold text-gray-900">-$1,200.00</p>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: '24%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
