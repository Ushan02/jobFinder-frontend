import React from 'react';

const ContactCard = ({ title, details }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800 mb-2">
        {title}
      </h3>
      <div className="space-y-1">
        {details.map((item, index) => (
          <p key={index} className="text-sm text-slate-600">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;