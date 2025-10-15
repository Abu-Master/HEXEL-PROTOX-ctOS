
import React, { useState } from 'react';
import PageWrapper from '@/components/Layout/PageWrapper.tsx';
import GlitchText from '@/components/ui/GlitchText.tsx';
import TerminalText from '@/components/ui/TerminalText.tsx';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [showTerminal, setShowTerminal] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission with delay
    setTimeout(() => {
      setFormStatus('sent');
      setShowTerminal(true);
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  const terminalLines = [
    "Initializing secure transmission...",
    "Encrypting message payload...",
    "Establishing connection to secure server...",
    "Verifying recipient public key...",
    "Message encrypted using AES-256-GCM...",
    "Transmission complete. Message delivered.",
    "Connection terminated."
  ];

  return (
    <PageWrapper title="SECURE TRANSMISSION">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="ctos-border p-6 bg-black/30 mb-6">
            <h3 className="text-ctos-red font-orbitron mb-4">
              <GlitchText text="ENCRYPTED CHANNEL" intensity="low" color="red" />
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Use this secure form to establish direct communication. All transmissions are encrypted and routed through multiple proxies to ensure privacy.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs text-gray-400 mb-1">IDENTIFIER</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-ctos-red/30 text-white p-2 focus:outline-none focus:border-ctos-red focus:ring-1 focus:ring-ctos-red/30"
                  placeholder="Enter your name"
                  required
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs text-gray-400 mb-1">UPLINK</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-ctos-red/30 text-white p-2 focus:outline-none focus:border-ctos-red focus:ring-1 focus:ring-ctos-red/30"
                  placeholder="Enter your email"
                  required
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs text-gray-400 mb-1">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-ctos-red/30 text-white p-2 focus:outline-none focus:border-ctos-red focus:ring-1 focus:ring-ctos-red/30"
                  placeholder="Message subject"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs text-gray-400 mb-1">MESSAGE PAYLOAD</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-ctos-red/30 text-white p-2 h-32 focus:outline-none focus:border-ctos-red focus:ring-1 focus:ring-ctos-red/30"
                  placeholder="Enter your message"
                  required
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  className={`px-5 py-2 bg-ctos-red/10 border border-ctos-red/50 text-ctos-red hover:bg-ctos-red/20 transition-colors ${
                    (formStatus === 'sending' || formStatus === 'sent') ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'idle' && '>> Send Signal'}
                  {formStatus === 'sending' && '>> Transmitting...'}
                  {formStatus === 'sent' && '>> Signal Sent!'}
                  {formStatus === 'error' && '>> Transmission Failed. Retry.'}
                </button>
              </div>
            </form>
          </div>
          
          {showTerminal && (
            <div className="ctos-border p-4 bg-black/70 animate-slide-up">
              <h4 className="text-xs text-gray-400 font-mono mb-2">TRANSMISSION LOG:</h4>
              <div className="font-mono text-xs">
                <TerminalText lines={terminalLines} typingSpeed={40} />
              </div>
            </div>
          )}
        </div>
        
        <div className="ctos-border p-6 bg-black/30 h-fit">
          <h3 className="text-ctos-cyan font-orbitron mb-4">CONNECTION METHODS</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-ctos-cyan/10 border border-ctos-cyan/30 mr-4">
                <span className="text-ctos-cyan">@</span>
              </div>
              <div>
        <h4 className="text-white font-orbitron text-sm">EMAIL</h4>
            <p className="text-gray-400 text-sm mt-1">
              <a 
                  href="mailto:hexel-protox@anypsj.com" 
                  className="text-blue-400 hover:underline" 
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  hexel-protox@anypsj.com
              </a>
            </p>

    <div className="text-xs text-gray-500 mt-1">Encrypted PGP available</div>
</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-ctos-cyan/10 border border-ctos-cyan/30 mr-4">
                <span className="text-ctos-cyan">#</span>
              </div>
              
              <div>
    <h4 className="text-white font-orbitron text-sm">Telegram</h4>
        <p className="text-gray-400 text-sm mt-1">
          <a 
            href="tg://openmessage?user_id=8025766724" 
            className="text-blue-400 hover:underline" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Message
          </a>
       </p>

    <div className="text-xs text-gray-500 mt-1">Secure messaging available</div>
</div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-ctos-cyan/10 border border-ctos-cyan/30 mr-4">
                <span className="text-ctos-cyan">!</span>
              </div>
              <div>
                <h4 className="text-white font-orbitron text-sm">EMERGENCY</h4>
                <p className="text-gray-400 text-sm mt-1">For urgent matters only</p>
                <div className="text-xs text-gray-500 mt-1">Response time: &lt; 24 hours</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700/30">
            <h4 className="text-ctos-cyan text-sm mb-2">ENCRYPTION NOTICE</h4>
            <p className="text-xs text-gray-400">
              Public key available upon request. All communication is end-to-end encrypted. For maximum security, use PGP encryption when sending sensitive information.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
