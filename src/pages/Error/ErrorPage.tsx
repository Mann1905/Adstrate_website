import React from 'react';
import Button from '../../components/common/Button/Button';

interface ErrorPageProps {
  statusCode?: number;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ 
  statusCode = 404, 
  message = 'Page not found' 
}) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#dc3545' }}>
        {statusCode}
      </h1>
      <h2 style={{ marginTop: '1rem', color: '#212529' }}>{message}</h2>
      <p style={{ marginTop: '1rem', color: '#6c757d' }}>
        The page you're looking for doesn't exist.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Button 
          variant="primary" 
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;

