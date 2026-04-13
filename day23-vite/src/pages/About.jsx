const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">About React Reactor</h1>
        <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
          <p>
            This application is a comprehensive demonstration of modern React concepts built with Vite and TailwindCSS v4. 
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">Core Features</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Context API for Global State</li>
                <li>useReducer for Complex Logic</li>
                <li>React Router DOM for Navigation</li>
                <li>Lazy Loading with Suspense</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-900/30">
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3">UI/UX highlights</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Dark/Light Mode Theme</li>
                <li>Protected Dashboard Routes</li>
                <li>Lucide Iconography</li>
                <li>Responsive Grid Layouts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
