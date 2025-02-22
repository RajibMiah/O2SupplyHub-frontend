import image1 from '@assets/images/image1.jpg';
import image2 from '@assets/images/image2.jpg';
import image3 from '@assets/images/image3.jpg';

const images = [image1, image2, image3];
console.log('images', images);
export const questions = [
   {
      id: 1,
      question: 'What is the number of Oxygen Exam/Comfort outlets?',
      options: [
         { label: '1 Outlet (5 lpm)', value: '1' },
         { label: '2 Outlets (10 lpm)', value: '2' },
         { label: '3 Outlets (15 lpm)', value: '3' },
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
      ],
      image: images[Math.floor(Math.random() * images.length)],
   },
];
