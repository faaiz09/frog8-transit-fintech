import React from "react";
import HeroSection from "./HeroSection";
import CommuterGraph from "./CommuterGraph";
import ModularComponents from "./ModularComponents";
import ValueProposition from "./ValueProposition";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Commuter Graph Section */}
      <CommuterGraph />

      {/* Who We're Building For Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Who We're Building For
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-blue-600">
            India Next: Rising, Mobile, Ready — But Under-Captured.
          </h3>

          <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
            India's metro systems carry a uniquely valuable segment of the
            population — professionally employed, upwardly mobile, and digitally
            active.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-lg">Income Level</h4>
              <p>Earning ₹25,000–₹40,000 per month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-lg">Digital Savvy</h4>
              <p>Habitual users of UPI, QR codes, and smartphones</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-lg">Women</h4>
              <p>Who trust metro safety and routine</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-lg">Students</h4>
              <p>Aged 18–22, forming lifelong financial habits</p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg font-medium mb-4">
              This isn't the bottom of the pyramid. This is India Next — the 100
              million commuters after the top 50 — and they are underserved not
              by lack of access, but by lack of attention.
            </p>
            <p className="text-xl font-bold text-blue-600">
              They are under-captured. And we're building for them.
            </p>
          </div>
        </div>
      </section>

      {/* B2N Distribution Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Go-To-Market: Business to Node (B2N)
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-blue-600">
            We Don't Chase Customers. We Build Where They Already Are.
          </h3>

          <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
            Frog8 deploys financial infrastructure at the nodes of daily life —
            metro stations, ticketing counters, kiosks, mobile chat flows.
          </p>

          <div className="flex justify-center mb-12">
            <div className="bg-blue-50 p-8 rounded-lg max-w-2xl">
              <h4 className="text-xl font-bold mb-6 text-center">
                We call this B2N — Business to Node.
              </h4>

              <p className="mb-6 text-center">Each node becomes:</p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p>A recurring access point for financial services</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p>A trusted physical context to transact, onboard, engage</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p>
                    A data-rich interface that helps banks, insurers, and
                    service providers reach the right commuter with the right
                    product
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg font-medium text-center">
            No downloads. No agents. No churn.
            <br />
            Just infrastructure where intent already exists.
          </p>
        </div>
      </section>

      {/* Modular Components Section */}
      <ModularComponents />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Where We're Live Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Where We're Live
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&q=80"
                alt="Bengaluru Metro"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                TVM deployments across Bengaluru
              </h3>
              <p>Purple & Green Lines with expanding coverage</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=800&q=80"
                alt="Raahi Card"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Raahi Card issuance stack
              </h3>
              <p>Integrated with NSDL PB and ready for scale</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg mb-4">
              Onboarding flows used by NBFCs and insurers
            </p>
            <p className="text-lg font-medium text-blue-600">
              Ready for rollout across India's Tier 1 & Tier 2 metros
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Who We Work With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transit Systems</h3>
              <p>BMRCL and metro operators</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Banks</h3>
              <p>NSDL PB (live), ICICI (in discussion)</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Regulatory Networks
              </h3>
              <p>NPCI, Visa, Mastercard</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tech Partners</h3>
              <p>AUM, ISG, FIME, B2B onboarding clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk</h2>
          <p className="text-xl mb-10">
            If you're building for India Next —<br />
            Frog8 is your infrastructure partner.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Partner With Us <Mail className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Investor Deck <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Frog8</h3>
              <p className="text-slate-300">
                Empowering Commuter-First Financial Access
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-slate-300">info@frog8.com</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-slate-300">Bengaluru, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Frog8. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
