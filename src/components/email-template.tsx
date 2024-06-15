import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName : string;
  message : string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  message
}) => (
  <div>
    <p>sender : {firstName} {" "} {lastName}</p>
    <p>message : {message}</p>
  </div>
);
