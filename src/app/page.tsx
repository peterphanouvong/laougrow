"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-900">TaskMaster</h1>
        <p className="mt-2 text-lg text-blue-700 max-w-xl">
          The ultimate task management app to organize your work and life.
        </p>
      </header>

      <section className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Features</h2>
        <ul className="space-y-4 max-w-3xl text-left text-blue-700">
          <li>• Create, edit, and delete tasks with ease</li>
          <li>• Organize tasks by projects and tags</li>
          <li>• Set due dates and reminders</li>
          <li>• Mark tasks as completed</li>
          <li>• View analytics and productivity reports</li>
          <li>• Collaborate with team members in real-time</li>
        </ul>
      </section>

      <footer className="max-w-7xl mx-auto p-6 text-center text-blue-600">
        <p>Get started by signing up or logging in.</p>
      </footer>
    </div>
  );
}

