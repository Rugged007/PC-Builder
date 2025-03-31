import { Link } from "react-router-dom";

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Documentation</h1>

        <div className="bg-white rounded-xl shadow-md p-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">
            Getting Started
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-2">
                PC Builder Overview
              </h3>
              <p className="text-gray-700">
                Our PC Builder tool allows you to create custom PC
                configurations with real-time compatibility checking and
                pricing. Follow the steps below to build your perfect PC.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-2">
                Using the Component Selector
              </h3>
              <p className="text-gray-700 mb-4">
                The component selector interface allows you to choose each part
                of your PC build:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Select a component category from the left sidebar</li>
                <li>Browse available options for that category</li>
                <li>Click on a component to add it to your build</li>
                <li>
                  The system will automatically check compatibility with your
                  existing selections
                </li>
                <li>Continue until you've selected all required components</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-2">
                Compatibility Checking
              </h3>
              <p className="text-gray-700">
                Our system automatically verifies that all selected components
                work together. If you select incompatible parts, you'll receive
                a warning with suggestions for alternatives. This ensures your
                final build will function properly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-blue-800 mb-2">
                Saving Your Build
              </h3>
              <p className="text-gray-700">
                Once you've created a configuration you like, you can save it to
                your account for future reference. You'll need to be logged in
                to use this feature. Saved builds can be modified, shared, or
                purchased later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
