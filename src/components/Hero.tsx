'use client';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-34 px-6"
      style={{
        backgroundImage: "url('/image1.jpg')",
      }}
    >
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Therapy for Women<br />
          Heal, Grow, and Thrive with <span className="text-orange-400">Dr. Serena Blake</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Licensed Clinical Psychologist (PsyD) offering in-person and virtual therapy
          to help you manage anxiety, improve relationships, and recover from trauma.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Schedule a Session
        </a>
      </div>
    </section>
  );
}
