import React from 'react';
import { FiSend } from 'react-icons/fi';
import Section from '../shared/Section';
import message from '../../assets/message.webp';
import Socials from '../shared/Socials';
import Button from '../shared/Button';

const ContactForm = () => (
  <Section
    title="Contact me!"
    sectionName="contact"
    imgSrc={message}
    imgClassName="rotate-[-10deg] top-auto -bottom-20 -right-20"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <p className="mb-4">
          If you liked what you saw, reach out to me. <br />
          If you're curious to know more about me, get in touch. <br />
          If I can help you with anything (I dream of it), contact me!
        </p>
        <p className="mb-4">Can't wait to hear from you 👋:</p>
        <Socials />
      </div>

      <form action="https://getform.io/f/PdyZEPeQ" method="POST" className="flex gap-4 flex-col">
        <div>
          <label htmlFor="name" className="block mb-2 font-bold">
            Your name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Enter your name"
            required
            className="w-full rounded-3xl py-2 px-3 ring-2 ring-inset ring-fuchsia-800/40 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-800 outline-none invalid:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-bold">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-3xl py-2 px-3 ring-2 ring-inset ring-fuchsia-800/40 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-800 outline-none invalid:border-red-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Enter your message"
            required
            className="w-full min-h-12 rounded-3xl py-2 px-3 ring-2 ring-inset ring-fuchsia-800/40 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-800 outline-none invalid:border-red-500"
          />
        </div>
        <Button className="self-start">
          Submit <FiSend />
        </Button>
      </form>
    </div>
  </Section>
);

export default ContactForm;
