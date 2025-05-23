import React, { useState } from 'react';
import { useScrollAnimation } from '../../utils/animations';
import { AccidentData } from '../../types';

// Sample data - would be replaced with actual statistics
const accidentData: AccidentData[] = [
  { id: 1, location: 'Mumbai', date: '2023-05-12', type: 'Vehicle Collision', severity: 'high', cause: 'Distracted Driving' },
  { id: 2, location: 'Delhi', date: '2023-06-18', type: 'Road Hazard', severity: 'medium', cause: 'Poor Road Condition' },
  { id: 3, location: 'Bangalore', date: '2023-04-22', type: 'Animal Encounter', severity: 'medium', cause: 'Stray Animal' },
  { id: 4, location: 'Chennai', date: '2023-07-08', type: 'Vehicle Collision', severity: 'high', cause: 'Speeding' },
  { id: 5, location: 'Kolkata', date: '2023-03-15', type: 'Road Hazard', severity: 'low', cause: 'Construction' },
];

const StatCard: React.FC<{
  number: string;
  label: string;
  color: string;
  delay: number;
}> = ({ number, label, color, delay }) => {
  const [cardRef, isVisible] = useScrollAnimation(0.1);
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-1000 delay-${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`text-4xl font-bold mb-2 ${color}`}>{number}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const [headingRef, isHeadingVisible] = useScrollAnimation(0.1);
  const [filter, setFilter] = useState('all');
  
  const filteredData = filter === 'all' 
    ? accidentData 
    : accidentData.filter(accident => accident.cause.toLowerCase().includes(filter));
  
  return (
    <section id="stats" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Road Safety Statistics</h2>
          <div className="w-20 h-1 bg-[#F5DF4D] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Understanding the scale of road safety issues in India is crucial to 
            appreciating the potential impact of the AI Helmet project
          </p>
        </div>
        
        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard
            number="150,000+"
            label="Annual Road Fatalities"
            color="text-[#FF304F]"
            delay={100}
          />
          <StatCard
            number="68%"
            label="Due to Human Error"
            color="text-[#F5DF4D]"
            delay={200}
          />
          <StatCard
            number="27%"
            label="Caused by Poor Roads"
            color="text-[#3A86FF]"
            delay={300}
          />
          <StatCard
            number="45 min"
            label="Avg. Emergency Response"
            color="text-[#8338EC]"
            delay={400}
          />
        </div>
        
        {/* Accident Data Table */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">Recent Accident Reports</h3>
          
          {/* Filter Controls */}
          <div className="mb-4 flex flex-wrap gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all' ? 'bg-[#F5DF4D] text-black' : 'bg-gray-200 text-gray-700'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('distracted')}
              className={`px-4 py-2 rounded-md ${
                filter === 'distracted' ? 'bg-[#F5DF4D] text-black' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Distracted Driving
            </button>
            <button 
              onClick={() => setFilter('road')}
              className={`px-4 py-2 rounded-md ${
                filter === 'road' ? 'bg-[#F5DF4D] text-black' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Road Conditions
            </button>
            <button 
              onClick={() => setFilter('animal')}
              className={`px-4 py-2 rounded-md ${
                filter === 'animal' ? 'bg-[#F5DF4D] text-black' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Animal Encounters
            </button>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Location</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left">Severity</th>
                  <th className="py-2 px-4 text-left">Cause</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(accident => (
                  <tr key={accident.id} className="border-t border-gray-200">
                    <td className="py-3 px-4">{accident.location}</td>
                    <td className="py-3 px-4">{accident.date}</td>
                    <td className="py-3 px-4">{accident.type}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        accident.severity === 'high' ? 'bg-red-100 text-red-800' :
                        accident.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {accident.severity.charAt(0).toUpperCase() + accident.severity.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">{accident.cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No accidents matching the selected filter
            </div>
          )}
        </div>
        
        {/* Source note */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          Data sourced from Ministry of Road Transport and Highways, Government of India (2023)
        </div>
      </div>
    </section>
  );
};

export default StatsSection;