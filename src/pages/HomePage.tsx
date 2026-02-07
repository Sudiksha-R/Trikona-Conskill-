import React from 'react';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { ServiceGrid } from '../components/ServiceGrid';
import { ProcessRoadmap } from '../components/ProcessRoadmap';
export function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServiceGrid />
      <ProcessRoadmap />
    </>);

}