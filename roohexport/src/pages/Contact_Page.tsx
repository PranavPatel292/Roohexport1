import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-stone-50 font-sans text-stone-800">
      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="px-8 py-10 md:py-14 bg-stone-50">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">
            Contact Us
          </h2>
          <p className="text-stone-500 max-w-md">
            We would love to hear from you. Visit our boutique or send us a
            message.
          </p>
        </header>

        {/* Content Grid: Map & Form */}
        <div className="flex-1 px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* --- LEFT COLUMN: Info & Map --- */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-stone-100">
                  <div className="flex items-center gap-3 text-stone-400 mb-2">
                    <Phone size={20} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Phone
                    </span>
                  </div>
                  <p className="text-lg font-medium text-stone-900">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div className="bg-white p-6 rounded-sm border border-stone-100">
                  <div className="flex items-center gap-3 text-stone-400 mb-2">
                    <Mail size={20} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Email
                    </span>
                  </div>
                  <p className="text-lg font-medium text-stone-900">
                    hello@kaftan.com
                  </p>
                </div>
              </div>

              {/* The Map Box (from your sketch) */}
              <div className="h-80 w-full bg-stone-200 rounded-sm overflow-hidden border border-stone-200 relative group">
                {/* Visual Placeholder for Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81732767975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f62973b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1645672892345!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) opacity(0.8)" }} // Grayscale to match theme
                  allowFullScreen={false}
                  loading="lazy"
                  className="group-hover:grayscale-0 transition-all duration-500" // Color on hover
                ></iframe>

                {/* Floating Address Tag */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 flex items-center gap-2 shadow-sm rounded-sm">
                  <MapPin size={16} className="text-stone-900" />
                  <span className="text-sm font-medium">
                    123 Silk Road, Dubai
                  </span>
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: The Form (from your sketch) --- */}
            <div className="bg-white p-8 md:p-10 rounded-sm border border-stone-100 shadow-sm h-full">
              <h3 className="text-2xl font-serif text-stone-900 mb-6">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-800 bg-transparent transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-800 bg-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-800 bg-transparent transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border-b border-stone-200 py-2 focus:outline-none focus:border-stone-800 bg-transparent resize-none transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-stone-900 text-white py-4 mt-4 font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer (from your sketch) */}
        <footer className="border-t border-stone-200 bg-white p-8 text-center md:text-left md:flex justify-between items-center text-stone-500 text-sm mt-auto">
          <p>© 2024 Kaftan Collection. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 justify-center">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms of Service
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
