export function AboutUs() {
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (
      document.getElementById("name") as HTMLInputElement
    ).value.trim();
    const company = (
      document.getElementById("company") as HTMLInputElement
    ).value.trim();
    const email = (
      document.getElementById("email") as HTMLInputElement
    ).value.trim();
    const message = (
      document.getElementById("message") as HTMLTextAreaElement
    ).value.trim();

    if (!name || !company || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const text = `Hello, I'm ${name} from ${company}. My email is ${email}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/918590808078?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img
            src="assets/hero.png"
            alt="Agricultural products"
            className="w-fit h-[100%] absolute right-0 bottom-0 md:bottom-5 md:h-full"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)] [--stroke-color:black] [--stroke-width:1px] [webkit-text-stroke:1px_black]">
              Estate-Direct Malabar Spices — From Our Family Estate to Your
              Global Table
            </h1>
            <p className="text-lg md:text-xl opacity-90 [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)] [--stroke-color:black] [--stroke-width:1px] [webkit-text-stroke:1px_black]">
              Premium nutmeg and mace, cultivated on the fertile Malabar Coast
              of Kerala. Zero Production Delay. Guaranteed Freshness. Total
              Traceability.
            </p>
          </div>
        </div>
      </div>
      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-green-700 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Rooted in the fertile hills of Kerala’s Malabar Coast, Kappil
                Exports began as a family-run nutmeg plantation — a legacy
                passed down through generations of planters who understood that
                true quality starts at the soil. What started as a humble estate
                operation has evolved into a vertically integrated export house,
                built on the same principles of purity, consistency, and
                integrity. We cultivate, cure, process, and package every nutmeg
                and mace under our direct supervision, ensuring zero production
                delays and complete traceability from tree to shipment. Our
                journey is guided by one belief: “When you grow it yourself,
                quality is not a promise — it’s a responsibility.”
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Decades of Experience
                  </h3>
                  <p className="text-gray-600">
                    Established traditions with modern innovation
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Global Reach</h3>
                  <p className="text-gray-600">
                    Serving clients across continents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What We Offer */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-green-700 mb-6"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            At{" "}
            <span className="font-semibold text-green-700">Kappil Exports</span>
            , we specialize in premium-grade Malabar Nutmeg and Mace —
            cultivated, cured, and processed directly from our family-owned
            estates in Kerala. Our vertical integration ensures freshness,
            traceability, and zero production delay from harvest to shipment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Whole Nutmeg Kernel
              </h3>
              <p className="text-gray-600">
                Precisely graded kernels with high volatile oil content —
                harvested, shelled, and cured to preserve Malabar’s signature
                aroma and flavor.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Nutmeg Mace (Jathi Pathri)
              </h3>
              <p className="text-gray-600">
                Vibrant red-orange blades processed immediately after splitting
                — ensuring freshness, minimal breakage, and rich, sweet aroma.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-amber-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Nutmeg Powder</h3>
              <p className="text-gray-600">
                Freshly ground upon order using hygienic third-party facilities
                under our supervision — 100% pure, additive-free, and rich in
                natural oils.
              </p>
            </div>
          </div>
        </section>
        {/* Manufacturing & Quality Assurance */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Manufacturing & Quality Assurance
              </h2>
              <div className="w-20 h-1 bg-green-700 mb-6"></div>
              <p className="text-gray-600 mb-4">
                At{" "}
                <span className="font-semibold text-green-700">
                  Kappil Exports
                </span>
                , our estate-direct processing ensures every nutmeg and mace
                meets global standards of purity, consistency, and food safety.
                From curing and drying to grading and packaging, we operate
                under a closed-loop system that maintains full control and zero
                production delays.
              </p>
              <p className="text-gray-600 mb-4">
                Each batch is tested for volatile oil content, microbial safety,
                and moisture levels to guarantee unmatched freshness and
                export-grade quality. Our quality team collaborates with
                accredited labs for batch-wise
                <span className="font-medium">
                  {" "}
                  Certificate of Analysis (COA)
                </span>
                before dispatch.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  FSSAI Compliant
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  GMP Certified
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  ISO Standards
                </span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  Third-Party COA Verified
                </span>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4 text-gray-800">
                  Our Quality Process
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-700 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Estate Cultivation</h4>
                      <p className="text-gray-600 text-sm">
                        Nutmeg grown on our own plantations under monitored,
                        sustainable farming conditions.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-700 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Curing & Processing</h4>
                      <p className="text-gray-600 text-sm">
                        Precision drying, shelling, and grading at our farm-side
                        facility for optimal freshness.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-700 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Testing & Verification</h4>
                      <p className="text-gray-600 text-sm">
                        Each lot undergoes sensory, chemical, and microbial
                        tests to ensure export compliance.
                      </p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-700 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Certification & Export</h4>
                      <p className="text-gray-600 text-sm">
                        Final COA issued, documentation verified, and goods
                        cleared for global shipment via Kochi Port.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Global Reach */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Export & Global Reach
          </h2>
          <div className="w-20 h-1 bg-green-700 mb-6"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            From our estates in Kerala to partners across the world,
            <span className="font-semibold text-green-700">
              {" "}
              Kappil Exports{" "}
            </span>
            delivers Malabar’s authentic nutmeg and mace with consistency and
            reliability. Our export operations are centered around efficiency,
            traceability, and zero production delay — ensuring that your
            shipment arrives on time, every time.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">
                  25+
                </div>
                <p className="text-gray-600">Export Destinations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">
                  99%
                </div>
                <p className="text-gray-600">On-Time Shipment Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">
                  7–10 Days
                </div>
                <p className="text-gray-600">Average Lead Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">
                  FOB Kochi
                </div>
                <p className="text-gray-600">Primary Load Port</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-gray-600 max-w-3xl">
            <p>
              Our logistics network operates from{" "}
              <span className="font-medium">Cochin Port (INKOC)</span>,
              supported by a streamlined export management process. We provide
              custom packaging, documentation, and flexible Incoterms (FOB, CIF,
              CFR) to suit your business model.
            </p>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-green-700 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Dependability</h3>
              <p className="text-gray-600">
                On-time delivery, transparent supply chains and a proven track
                record.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuous investment in processing, packaging and R&D to stay
                ahead.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Ethical sourcing, eco-conscious operations and respect for
                farming communities.
              </p>
            </div>
          </div>
        </section>
        {/* Our Commitment */}
        <section className="mb-20">
          <div className="bg-green-50 p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Commitment
            </h2>
            <div className="w-20 h-1 bg-green-700 mb-6"></div>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl">
              At{" "}
              <span className="font-semibold text-green-700">
                Kappil Exports
              </span>
              , we believe that long-term partnerships are built on trust,
              transparency, and uncompromising quality. We are committed to
              ensuring every client receives exceptional service — from product
              selection to timely delivery.
            </p>
            <a
              href="#"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition"
            >
              Learn More About Our Process
            </a>
          </div>
        </section>
        {/* Get in Touch */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-green-700 mb-6"></div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            For trade enquiries, partnership opportunities, or sample requests,
            reach out to our export desk. Let’s bring the authentic flavor of
            Malabar to your market — efficiently and reliably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4" onSubmit={handleWhatsApp}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+91 8590808078</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">kappilexports@gmail.com</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-green-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      Shahal Mohammed Jinan
                      <br />
                      [Kappil House]
                      <br />
                      Pulvetta P.O., Karuvarakundu
                      <br />
                      Malappuram District, Kerala - 676523
                      <br />
                      INDIA
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
