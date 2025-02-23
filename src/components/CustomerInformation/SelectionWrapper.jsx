import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
   margin-bottom: 25px;
   padding: 20px;
   border-radius: 8px;
   background: #f9f9f9;

   h3 {
      padding: 14px 0;
      font-size: 18px;
      font-weight: bold;
      color: #2c2c2e;
   }
`;

const SectionWrapper = ({ title, children }) => {
   return (
      <Section>
         <h3>{title}</h3>
         {children}
      </Section>
   );
};

SectionWrapper.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};

export default SectionWrapper;
