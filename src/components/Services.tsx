'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  const services = [
    {
      title: 'Anxiety & Stress Management',
      image: '/image3.jpg',
      desc:
        'Learn to manage overwhelming thoughts, reduce chronic stress, and build healthy coping mechanisms. Dr. Blake uses mindfulness and CBT to help you regain a sense of calm and control in daily life.',
    },
    {
      title: 'Relationship Counseling',
      image: '/image4.jpg',
      desc:
        "Whether you're navigating conflict, disconnection, or transitions, relationship therapy can help. Dr. Blake works with individuals and couples to strengthen communication and emotional connection.",
    },
    {
      title: 'Trauma Recovery',
      image: '/image5.jpg',
      desc:
        'Healing from trauma is possible. Dr. Blake creates a safe space to explore painful memories and emotions, using gentle, research-backed techniques to support post-traumatic growth and resilience.',
    },
  ];

  return (
    <section id="services" className="bg-orange-50 py-20 px-6 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Services & Specialties
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Compassionate, evidence-based therapy to support your healing journey.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-orange-100 hover:shadow-lg transition-all"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Box */}
        <div className="bg-[#FFF4EE] rounded-2xl p-8 max-w-4xl mx-auto mt-16 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-[#D0634A] mb-3 tracking-tight">
            Session Fees & Professional Details
          </h3>

          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            We believe therapy is an investment in your well-being. The rates below are designed to reflect the dedicated, compassionate care you’ll receive. Every session is a step toward healing, growth, and thriving.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-semibold text-[#D0634A]">
            <span className="bg-white px-5 py-2 rounded-full border border-[#D0634A] shadow-sm">
              $240 / Couples Session
            </span>
            <span className="bg-white px-5 py-2 rounded-full border border-[#D0634A] shadow-sm">
              $200 / Individual Session
            </span>
          </div>

          <div className="text-black text-left md:text-center text-base">
            <p className="mt-4 font-semibold">🕒 <span className="font-bold">Office Hours:</span></p>
            <p>In-person: Tue & Thu, 10 AM – 6 PM</p>
            <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM – 5 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
