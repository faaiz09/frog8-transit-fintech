import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Coffee,
  CreditCard,
  Gift,
  Home,
  MapPin,
  Car,
} from "lucide-react";

interface CommuterGraphProps {
  className?: string;
}

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const CommuterGraph: React.FC<CommuterGraphProps> = ({ className = "" }) => {
  const timelineEvents: TimelineEvent[] = [
    {
      time: "8:04 AM",
      title: "Ride Booking",
      description: "A Rapido or Uber Auto booked to start the day",
      icon: <Home className="h-6 w-6" />,
      color: "bg-blue-100",
    },
    {
      time: "8:22 AM",
      title: "Parking Entry",
      description: "A Fastag-linked parking gate entered",
      icon: <Car className="h-6 w-6" />,
      color: "bg-green-100",
    },
    {
      time: "8:35 AM",
      title: "Coffee Stop",
      description: "A coffee purchase on the station concourse",
      icon: <Coffee className="h-6 w-6" />,
      color: "bg-amber-100",
    },
    {
      time: "12:30 PM",
      title: "Card Offer",
      description: "A Raahi card offer sent via WhatsApp",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-purple-100",
    },
    {
      time: "6:15 PM",
      title: "Reward Redemption",
      description: "A reward voucher redeemed on the way back home",
      icon: <Gift className="h-6 w-6" />,
      color: "bg-red-100",
    },
  ];

  return (
    <div className={`bg-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Capturing the Commuter Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Ride-Booking to Platform, We're Mapping Financial Intent.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0" />

          <div className="relative z-10 flex justify-between max-w-5xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center mb-3`}
                >
                  {event.icon}
                </div>
                <div className="text-sm font-semibold">{event.time}</div>
                <div className="text-center mt-2 max-w-[120px]">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection arrows */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between max-w-4xl mx-auto px-20 transform -translate-y-1/2 z-0">
            {[...Array(4)].map((_, i) => (
              <ArrowRight key={i} className="text-gray-400" />
            ))}
          </div>
        </div>

        {/* Description Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">The Commuter Graph</h3>
              <p className="text-gray-700">
                These micro-moments form a commuter graph — an ecosystem of
                behavior, timing, and transaction that no traditional channel
                can replicate.
              </p>
              <div className="mt-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">
                  Daily touchpoints across the commuter journey
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-700">
                This consented alternative data gives Frog8 the ability to
                personalize financial products, improve credit models, and
                enable real-time engagement.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                  <span className="text-sm">
                    Personalized financial products
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
                  <span className="text-sm">
                    Improved credit and risk models
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2" />
                  <span className="text-sm">
                    Real-time, hyperlocal engagement
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-primary">
            This is our moat.
            <br />
            This is how we capture — and serve — the next 100 million.
            <br />
            This is why India Next will be built on Frog8.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommuterGraph;
