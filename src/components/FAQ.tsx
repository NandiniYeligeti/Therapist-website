'use client';
import { useState } from 'react';
 
interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'Do you accept insurance?',
    answer:
      'No, I do not accept insurance directly. However, I provide a superbill that you can submit to your insurance provider for potential reimbursement.',
  },
  {
    question: 'Are online sessions available?',
    answer:
      'Yes, I offer secure virtual sessions via Zoom to ensure accessibility and comfort from your own space.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'A 24-hour notice is required for any cancellations or rescheduling to avoid being charged for the session.',
  },
  {
    question: 'Are my sessions confidential?',
    answer:
      'Absolutely. All sessions are 100% confidential. Your privacy, safety, and trust are always my top priorities.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className=" bg-blue-50 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#D0634A]">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-blue-100 transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl text-[#D0634A]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
