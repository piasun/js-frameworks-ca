import styled from 'styled-components';


const ContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;


  form {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 400px;

    label {
      margin: 2px;
      font-weight: 600;
    }

    input, textarea {
      margin-top: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-width: 380px;
      &:focus {
        border-color: #375287;
      }
    }

    button {
      padding: 10px 0;
      background-color: #375287;
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: #375287;
        border: 1px solid #375287;
      }
    }

    .error-message {
      color: #dc3545;
      margin-top: -10px;
      margin-bottom: 10px;
    }
  }
`;

export default ContactForm;
