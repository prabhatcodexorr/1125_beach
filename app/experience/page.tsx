import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="bg-[#f8f6f1] min-h-screen">

      <section className="px-4 mt-4">
        <div className="relative h-[350px] md:h-[420px]  overflow-hidden rounded-2xl">
          <Image
            src="/images/experience-banner.jpg"
            alt="Experience"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#000]/40" />

          <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="font-serif text-white text-[45px] md:text-[65px] font-[400] font-ogg-regular text-center tracking-wide leading-none">
              Host your most unforgettable <br />event
            </h1>
          </div>
        </div>
      </section>


      {/* <section className="px-4 mt-4">
                      <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl">
                         <Image
            src="/images/experience-banner.jpg"
            alt="Experience"
            fill
            priority
            className="object-cover"
          />
      
                          <div className="absolute inset-0 bg-black/20" />
      
                          <div className="absolute inset-0 flex items-center justify-center">
                              <h1 className="font-ogg-regular font-[400] text-white text-[50px] md:text-[55px] lg:text-[65px] text-center">
                                  Host your most unforgettable <br />event
                              </h1>
                          </div>
                      </div>
                  </section> */}

      {/* Event Cards */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Wedding */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative h-[320px]">
              <Image
                src="/images/wedding.jpg"
                alt="Wedding"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="text-[11px] font-[700] font-manrope-regular uppercase tracking-[2px] text-[#b8322a]">
                Celebrations
              </p>

              <h3 className="mt-3 text-[24px] lg:text-[24px] font-[400] font-ogg-regular text-[#89a7cb]">
                Weddings & Ceremonies
              </h3>

              <p className="mt-4 text-[#555555]  text-[14px] font-[400]  leading-7 font-manrope-regular">
                Exchange vows with the ocean as your witness. Our property
                accommodates up to 200 guests for ceremonies and receptions,
                with catering partnerships and full event coordination.
              </p>
            </div>
          </div>

          {/* Corporate */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative h-[320px]">
              <Image
                src="/images/corporate.jpg"
                alt="Corporate"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="text-[11px] font-[700] font-manrope-regular uppercase tracking-[2px] text-[#b8322a]">
                Corporate
              </p>

             <h3 className="mt-3 text-[24px] lg:text-[24px]  font-[400] font-ogg-regular text-[#89a7cb]">
                Executive Retreats
              </h3>

              <p className="mt-4 text-[#555555] text-[14px] font-[400] leading-7 font-manrope-regular">
                Foster strategy and team building in a relaxed environment.
                High-speed Wi-Fi, presentation areas, and team-building
                activity coordination are all available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[900px] mx-auto px-6 pb-24">
        <div className="bg-[#FAF0E2] rounded-2xl p-12 text-center">
          <p className="text-[11px] font-[700] font-manrope-regular uppercase tracking-[2px] text-[#AE2020]">
            Get In Touch
          </p>

          <h2 className="font-ogg-regular text-[32.11px] font-[400]  text-[#AE2020] mt-4">
            Let's plan your event together
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-[#242424] text-[14px] font-[400] leading-7 font-manrope-regular">
            Every event is unique. Contact our team to discuss requirements,
            check availability, and receive a personalised proposal.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-[#AE2020] text-white cursor-pointer px-8 py-4 rounded-full uppercase text-[12px] font-[700] tracking-[2px] font-manrope-regular">
              Enquire Now
            </button>

            <button className="border border-black cursor-pointer px-8 py-4 text-[#242424]  rounded-full text-[12px] font-[700] font-manrope-regular">
              +233 (0) 502 000 000
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}