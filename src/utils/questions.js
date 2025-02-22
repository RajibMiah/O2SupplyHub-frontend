import image1 from '@assets/images/ON2-Photoroom_1.jpg';
import image2 from '@assets/images/ON2-Photoroom_3.jpg';
import image3 from '@assets/images/ON2-Photoroom_4.jpg';

export const questions = [
   {
      id: 1,
      question: 'How many anesthesia machines do you use?',
      options: [
         { label: 'A. 1-5', value: '1-5' },
         { label: 'B. 5-10', value: '5-10' },
         { label: 'C. 10-20', value: '10-20' },
      ],
      image: image1,
   },
   {
      id: 2,
      question: 'How many oxygen cylinders do you need?',
      options: [
         { label: 'A. 10', value: '10' },
         { label: 'B. 20', value: '20' },
         { label: 'C. 30', value: '30' },
      ],
      image: image2,
   },
   {
      id: 3,
      question: 'What is your expected daily oxygen usage?',
      options: [
         { label: 'A. Low', value: 'Low' },
         { label: 'B. Medium', value: 'Medium' },
         { label: 'C. High', value: 'High' },
      ],
      image: image3,
   },
];
