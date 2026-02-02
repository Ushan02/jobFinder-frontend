import React from 'react';
import ContactCard from './ContactCard';

const ContactInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* LEFT SIDE - INFO CARDS */}
      <div className="space-y-4">
        
        <ContactCard
          title="University of Ruhuna – Main Campus"
          details={[
            "Wellamadama, Matara",
            "Sri Lanka",
            "(+94) 41-2033250",
          ]}
        />
        <ContactCard
          title="Faculty of Agriculture"
          details={[
            "Mapalana, Kamburupitiya",
            "(+94) 41-2292200",
            "(+94) 41-2292384",
          ]}
        />
        <ContactCard
          title="Faculty of Engineering"
          details={[
            "Hapugala, Galle",
            "(+94) 91-2245764",
            "dean@eng.ruh.ac.lk",
          ]}
        />
        <ContactCard
          title="Faculty of Medicine"
          details={[
            "PO Box 70, Galle",
            "(+94) 91-2234801",
            "deanmedruh@gmail.com",
          ]}
        />
        <ContactCard
          title="Faculty of Technology"
          details={[
            "Karagoda Uyangoda, Matara",
            "(+94) 41-2294751",
            "dean@tec.ruh.ac.lk",
          ]}
        />

      </div>

      {/* RIGHT SIDE – MAP */}
      <div className="w-full h-[480px] rounded-lg overflow-hidden border border-blue-200 shadow-md">
        <iframe
          title="University of Ruhuna Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63492.68067008316!2d80.51866380674845!3d5.938318854084666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13904aaa02325%3A0x52467b7385d1d640!2sUniversity%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1706690000000!5m2!1sen!2slk"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
    </div>
  );
};

export default ContactInfo;