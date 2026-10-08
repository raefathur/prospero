import React from 'react';

import Hero from '../components/Hero';
import UpcomingTraining from '../components/UpcomingTraining';
import CompanyOverview from '../components/CompanyOverview';
import ProgramServices from '../components/ProgramServices';
import Testimonials from '../components/Testimonials';
import OurClients from '../components/OurClients';
import BlogSection from '../components/BlogSection';

export default function Home() {
    return (
        <>
            <Hero />
            <UpcomingTraining />
            <CompanyOverview />
            <ProgramServices />
            <Testimonials />

            <div className="bg-white">
                <OurClients />
            </div>

            <BlogSection />
        </>
    );
}