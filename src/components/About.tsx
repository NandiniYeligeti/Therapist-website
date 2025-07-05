'use client';

import { motion, useAnimation, easeOut } from 'framer-motion'; // ✅ Corrected ease import
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // ✅ Correct usage
      },
    },
  };

  return (
    <section ref={ref} id="about" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Headshot */}
        <motion.div
          className="md:w-1/2 w-full"
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
        >
          <Image
            src="/image2.jpg"
            alt="Dr. Serena Blake"
            width={600}
            height={500}
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right: Info */}
        <motion.div
          className="md:w-1/2 w-full text-left"
          initial="hidden"
          animate={controls}
          variants={fadeInVariant}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA. With over eight years
            of experience and more than 500 successful client sessions, she brings a grounded, compassionate approach to
            therapy. Serena specializes in treating anxiety, strengthening relationships, and guiding trauma recovery.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Drawing from evidence-based practices like cognitive-behavioral therapy (CBT) and mindfulness, she tailors
            each session to meet your unique needs. Whether you&rsquo;re visiting her calm and welcoming office on Maplewood
            Drive or connecting virtually through secure Zoom sessions, Dr. Blake is committed to helping you feel safe,
            supported, and empowered.
          </p>
          <p className="mt-4 text-gray-700">
            <strong>🎓 Experience:</strong> 8 years of practice, 500+ sessions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
