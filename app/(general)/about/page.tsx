import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'About Title',
    description: 'About Description',
    keywords: 'METADATA para el about, consoleees'
}

export default function AboutPage() {
    return (
        <h1 className='text-4xl'>About Page</h1>
    );
};
