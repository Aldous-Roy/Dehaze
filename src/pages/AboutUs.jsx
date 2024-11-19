import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Vetri Selvi M",
      designation: "Member 1",
      description: "A seasoned professional with over 10 years of experience in image processing and management.",
      image: "/src/assets/Unknown.jpg" 
    },
    {
      name: "Aldous Roy",
      designation: "Member 2",
      description: "Innovative and Creative web developer and a machine learnering enthusiast with a passion for learning.",
      image: "/src/assets/aldous.jpeg" 
    },
    {
      name: "Janani VS",
      designation: "Member 3",
      description: "Specializes in visual design and user experience, ensuring clarity in our services.",
      image: "/src/assets/Unknown.jpg"
    }
  ];

  return (
    <div class="flex items-center justify-center h-screen bg-gray-50 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col h-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="rounded-full w-40 h-40 mx-auto mb-4" 
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 italic">{member.designation}</p>
                <p className="mt-2 text-gray-500 flex-grow">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
