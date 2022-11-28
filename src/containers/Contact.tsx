import React from 'react'
import CommonButton from '../components/CommonButton';

const Contact = () => {
  return (
      <section>
          <div>
              <h4>What's next?</h4>
              <h2>Get In Touch</h2>
          </div>

          <div>
              <p>
                  Although I’m not currently looking for any new opportunities,
                  my inbox is always open. Whether you have a question or just
                  want to say hi, I’ll try my best to get back to you!
              </p>
              <CommonButton buttonText='Say Hello' isPrimary={false} />
          </div>
      </section>
  );
}

export default Contact