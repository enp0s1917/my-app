import type { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
    title: 'Prising Title',
    description: 'Praicing Description',
    keywords: 'prrrecios baratillos'
}

export default function PricingPage() {
    return (        
            <h1 className='text-4xl'>Pricing Page</h1>    
        
    );
};
