import ContactForm from '@/components/contactform';
import { Metadata } from 'next';

export const metadata = {
  title: 'Contact | Schrijnwerkerij De Haes',
  description: 'Neem contact op met Schrijnwerkerij De Haes voor offertes, vragen of informatie over schrijnwerk en dakwerken.',
  keywords: 'contact, schrijnwerkerij, de haes, offerte, schrijnwerk, dakwerken, België',
};

export default function Contact() {
    return (
      <main className='pt-40'>
          <ContactForm />
      </main>
    )
}