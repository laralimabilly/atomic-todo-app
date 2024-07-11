import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TemplateWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;
  background: #f9f9f922;
  border-radius: 8px;
`;

interface TodoTemplateProps {
    children: ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
    return <TemplateWrapper>{children}</TemplateWrapper>;
};
  

export default TodoTemplate;