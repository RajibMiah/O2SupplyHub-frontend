import image1 from '@assets/images/image1.jpg';
import image2 from '@assets/images/image2.jpg';
import image3 from '@assets/images/image3.jpg';

const images = [image1, image2, image3];

export const questions = [
   {
      id: 1,
      question: 'How many anesthesia machine you use? ',
      options: [
         { label: 'A. 1-5', value: 'A.1-2' },
         { label: 'B. 5-10', value: 'B. 5-10' },
         { label: 'C. 10-20', value: 'C. 10-20' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 2,
      question: 'How many oxygen Cages you use?',
      options: [
         { label: 'A. 1-5', value: 'A. 1-5' },
         { label: 'B. 5-10', value: 'B. 5-10' },
         { label: 'C. 10-15', value: 'C. 10-15' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 3,
      question: 'How many oxygen door you use? ',
      options: [
         { label: 'A. 1-5', value: 'A. 1-5' },
         { label: 'B. 5-10', value: 'B. 5-10' },
         { label: 'C. 10-15', value: 'C. 10-15' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 4,
      question: 'Do you use ventilator?',
      options: [
         { label: 'A. Yes', value: 'A. Yes' },
         { label: 'B. No', value: 'B. No' },
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
   {
      id: 5,
      question: 'What is the flow rate?',
      options: [
         { label: 'A. 1-5 LPM', value: 'A. 1-5 LPM' },
         { label: 'B. 5-10 LPM', value: 'B. 5-10 LPM' },
         { label: 'C. 10-40 LPM', value: 'C. 10-40 LPM' },
         { label: 'D. 40+ LPM', value: 'D. 40+ LPM' },
      ],

      image: images[Math.floor(Math.random() * images.length)],
   },
];
