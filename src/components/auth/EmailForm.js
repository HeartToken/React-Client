import { useState } from 'react';
import { Input, Icon, MonochromeIcons, CallToAction } from '@magiclabs/ui';


const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
    <div className='flex-container'>

      <form onSubmit={handleSubmit}>
        <h3 className='form-header'>LOGIN</h3>
        <div className='input-wrapper'>
          <Input
            placeholder='Enter your email'
            size='sm'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            prefix={<Icon inline type={MonochromeIcons.Envelope} size={22} />}
          />
        </div>
        <div>
          <CallToAction
            leadingIcon={MonochromeIcons.PaperPlane}
            color='primary'
            size='sm'
            disabled={disabled}
            onClick={handleSubmit}
          >
            Send Magic Link
          </CallToAction>
        </div>
      </form>
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
          text-align: center;
        }
        .form-header {
          font-size: 30px;
          margin: 25px 0;
          font-family: "Lucida Console";
        }
        .input-wrapper {
          width: 80%;
          margin: 0 auto 20px;
        }
        .flex-container{
          display: flex;
          height: 200px;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
 
</>
  );
};

export default EmailForm;