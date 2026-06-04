import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="bg-[#f7f4ef] min-h-screen">
            
              <section className="px-4 mt-4">
                      <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl">
                          <Image
                             src="/images/accommodation-banner.jpg"
                              alt="Gallery"
                              fill
                              priority
                              className="object-cover"
                          />
      
                          <div className="absolute inset-0 bg-black/20" />
      
                          <div className="absolute inset-0 flex items-center justify-center">
                              <h1 className="font-ogg-regular font-[400] text-white text-[50px] md:text-[55px] lg:text-[65px]">
                                  Contact Us
                              </h1>
                          </div>
                      </div>
                  </section>

            {/* Contact Section */}
            <section className="max-w-[1200px] mx-auto px-6 lg:px-12 py-24">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left */}
                    <div>
                        <h2 className="font-ogg-regular text-[70px] lg:text-[96px] leading-none text-[#222]">
                            Get in
                        </h2>

                        <h2 className="font-ogg-regular text-[70px] lg:text-[96px] leading-none text-[#9BB9DA]">
                            Touch
                        </h2>

                        <p className="mt-8 max-w-md font-jako-medium text-[#5A4F4D] lg:text-[18px] font-[400] leading-7">
                            For exclusive inquiries, private events, or to simply begin your
                            journey to barefoot luxury. We await your whisper.
                        </p>

                        <form className="mt-12 space-y-8">
                            <div>
                                <label className="block font-jako-bold text-[11px] font-[400] uppercase tracking-[2px] text-gray-400 mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b border-gray-300 text-[20px] font-[400] text-[#D5C2C2] font-jako-medium pb-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-jako-bold text-[11px] font-[400] uppercase tracking-[2px] text-gray-400 mb-2">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-transparent font-jako-medium border-b text-[20px] font-[400] border-gray-300 text-[#D5C2C2] pb-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block font-jako-bold text-[11px] font-[400] uppercase tracking-[2px] text-gray-400 mb-2">
                                    The Whisper
                                </label>

                                <textarea
                                    rows={4}
                                    placeholder="How may we assist you?"
                                    className="w-full bg-transparent font-jako-medium border-b text-[20px] font-[400] border-gray-300 text-[#D5C2C2] pb-3 resize-none outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#AF2F2C] text-white font-manrope-regular font-[500] rounded-full px-8 py-4 uppercase tracking-[2px] text-[12px]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right */}
                    <div className="relative">
                        <div className="relative h-[600px]">
                            <Image
                                src="/images/contact-room.jpg"
                                alt="Room"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute bottom-0 right-0 bg-[#f7f4ef] p-10 w-[250px]">
                            <p className="text-[11px] font-[400] uppercase font-jako-bold tracking-[2px] text-gray-400">
                                Direct
                            </p>

                            <p className="mt-4 font-manrope-regular text-[#2C2422] font-[400] text-[20px]">+233 50 940 4673</p>
                            <p className="font-manrope-regular mt-1 text-[#2C2422] font-[400] text-[20px]">+233 24 970 8679</p>

                            <p className="mt-8 text-[11px] font-[400] uppercase font-jako-bold tracking-[2px] text-gray-400">
                                Location
                            </p>

                            <p className="mt-2 font-manrope-regular text-[#2C2422] font-[400] text-[20px]">Kokrobite</p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}