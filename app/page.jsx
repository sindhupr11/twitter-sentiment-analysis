"use client"

import React, { useState } from 'react';
import InputBox from './components/inputbox';
import SubmitButton from './components/submitbutton';

export default function Home() {
  const [query, setQuery] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleAnalyze = async () => {
    try {
      const response = await fetch('/analyze_sentiment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tweet: query })
      });
      const data = await response.json();
      setSentiment(data.sentiment);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col items-center justify-center max-w-5xl w-full h-full before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white lg:text-5xl">Twitter Sentiment Analyzer</h1>
        <div className="z-10 w-full max-w-3xl flex flex-col items-center justify-start font-mono text-sm lg:flex lg:space-x-4">
            <InputBox placeholder="Enter query here" value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="mt-4"></div>
            <SubmitButton onClick={handleAnalyze} label="Analyze" className="text-lg" />
        </div>
      {sentiment !== '' && <p className="mt-4 text-center">Sentiment: {sentiment}</p>}
    </div>
  </main>

  )}
