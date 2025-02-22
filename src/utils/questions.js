import image1 from '@assets/images/ON2-Photoroom_1.jpg';
import image2 from '@assets/images/ON2-Photoroom_3.jpg';
import image3 from '@assets/images/ON2-Photoroom_4.jpg';

const images = [image1, image2, image3];

export const questions = [
   {
      id: 1,
      question: 'What is the number of Oxygen Exam/Comfort outlets?',
      options: [
         { label: '1 Outlet (5 lpm)', value: '1' },
         { label: '2 Outlets (10 lpm)', value: '2' },
         { label: '3 Outlets (15 lpm)', value: '3' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 2,
      question: 'What is the number of Oxygen Kennel/Run outlets?',
      options: [
         { label: '1 Outlet (5 lpm)', value: '1' },
         { label: '2 Outlets (10 lpm)', value: '2' },
         { label: '3 Outlets (15 lpm)', value: '3' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 3,
      question: 'What is the number of Oxygen Imaging (X-Ray, CT, MRI, LINAC) outlets?',
      options: [
         { label: '3 Outlets (15 lpm)', value: '3' },
         { label: '5 Outlets (25 lpm)', value: '5' },
         { label: '10 Outlets (50 lpm)', value: '10' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 4,
      question: 'How many outlets for Oxygen Treatment Area?',
      options: [
         { label: '1 Outlet (5 lpm)', value: '1' },
         { label: '2 Outlets (10 lpm)', value: '2' },
         { label: '3 Outlets (15 lpm)', value: '3' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 5,
      question: 'How many outlets for Oxygen Surgery?',
      options: [
         { label: '3 Outlets (15 lpm)', value: '3' },
         { label: '5 Outlets (25 lpm)', value: '5' },
         { label: '6 Outlets (30 lpm)', value: '6' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 6,
      question: 'How many outlets for Oxygen ICU/Emergency?',
      options: [
         { label: '1 Outlet (10 lpm)', value: '1' },
         { label: '2 Outlets (20 lpm)', value: '2' },
         { label: '3 Outlets (30 lpm)', value: '3' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 7,
      question: 'How many Oxygen Cage outlets?',
      options: [
         { label: '1 Outlet (15 lpm)', value: '1' },
         { label: '2 Outlets (30 lpm)', value: '2' },
         { label: '3 Outlets (45 lpm)', value: '3' },
         { label: 'None', value: '0' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 8,
      question: 'Do you require a Jet Ventilator?',
      options: [
         { label: 'Yes (35 lpm)', value: 'Yes' },
         { label: 'No', value: 'No' },
         { label: 'Not Sure', value: 'Not Sure' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 9,
      question: 'Do you require a Hyperbaric Chamber?',
      options: [
         { label: 'Yes (150 lpm)', value: 'Yes' },
         { label: 'No', value: 'No' },
         { label: 'Need Consultation', value: 'Consultation' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 10,
      question: 'Recommended Oxygen Concentrator',
      options: [
         { label: 'OC8V80', value: 'OC8V80' },
         { label: 'OC10V100', value: 'OC10V100' },
         { label: 'OC12V120', value: 'OC12V120' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 11,
      question: 'How many OC8V80 units do you require?',
      options: [
         { label: '1 Unit', value: '1' },
         { label: '2 Units', value: '2' },
         { label: '3 Units', value: '3' },
         { label: 'More than 3 Units', value: 'More' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 12,
      question: 'Total Retail Price',
      options: [
         { label: 'CAD $103,040.34', value: '103040.34' },
         { label: 'CAD $150,000.00', value: '150000.00' },
         { label: 'CAD $200,000.00', value: '200000.00' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
];
