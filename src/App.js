import React, { useState } from 'react';

const lessons = [
  { title: 'AI Explorer', description: 'Basics of neural networks' },
  { title: 'Prompt Master', description: 'Prompt crafting for GPT and Midjourney' },
  { title: 'Neuro Designer', description: 'Generate images with AI' },
  { title: 'Pitch Pro', description: 'Create presentations using AI tools' },
  { title: 'AI Web Builder', description: 'Build websites using neural networks' }
];

function App() {
  const [language, setLanguage] = useState('en');
  const [completed, setCompleted] = useState([]);

  const toggleLesson = (title) => {
    if (completed.includes(title)) return;
    setCompleted([...completed, title]);
  };

  return (
    <div className="p-6 font-sans max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">The Neural Path by Karisha</h1>
        <select
          className="border px-2 py-1 rounded"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </div>

      <ul className="space-y-4">
        {lessons.map((lesson) => (
          <li
            key={lesson.title}
            className={\`p-4 border rounded-lg \${completed.includes(lesson.title) ? 'bg-green-100' : 'bg-white'}\`}
          >
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p className="text-gray-600 text-sm">{lesson.description}</p>
            <button
              className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
              onClick={() => toggleLesson(lesson.title)}
            >
              {language === 'en' ? 'Mark as complete' : 'Отметить как завершено'}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">
          {language === 'en' ? 'Completed Lessons:' : 'Завершённые уроки:'}
        </h3>
        <ul className="list-disc ml-6 text-green-700">
          {completed.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
