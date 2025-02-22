import { useSelector } from 'react-redux';
import ProgressBar from '@components/ProgressBar';
import QuestionStep from '@components/QuestionStep';
import ResultPage from '@components/ResultPage';
import { questions } from '@utils/questions';
import { Container, Title, Subtitle, ContentContainer } from '@styles/selectionStyle';

const CylinderSelection = () => {
   const { resultPage } = useSelector((state) => state.selection);

   return (
      <Container>
         <Title>{resultPage ? 'System Pricing' : 'ON2 SYSTEM SELECTION'}</Title>
         <Subtitle>
            {resultPage
               ? 'Based on your clinic requirements the below system will meet your Needs'
               : 'Find the right oxygen plant for your facility'}
         </Subtitle>

         {/* ✅ Pass `questions` prop */}
         <ProgressBar questions={questions} />

         <ContentContainer>
            {!resultPage ? <QuestionStep questions={questions} /> : <ResultPage />}
         </ContentContainer>
      </Container>
   );
};

export default CylinderSelection;
