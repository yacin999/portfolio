import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName : string;
  email : string;
  message : string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message
}) => (
  <div>
    <p>sender : {firstName} {" "} {lastName}</p>
    <p>email : {email}</p>
    <p>message : {message}</p>
  </div>
);
