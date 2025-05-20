import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Terminal,
  Smartphone,
  CreditCard,
  Layers,
} from "lucide-react";

interface ModularComponentProps {
  className?: string;
}

const ModularComponents = ({ className = "" }: ModularComponentProps) => {
  const components = [
    {
      id: "tvm",
      title: "TVM 2000 & 4000",
      icon: <Terminal className="h-6 w-6" />,
      description: "Smart kiosks for ticketing, top-ups, and card services.",
      features: [
        "Accept UPI, cash, and cards",
        "Self-service ticketing",
        "Card issuance",
        "Financial services",
      ],
      image:
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
      color: "bg-blue-50",
    },
    {
      id: "raahi",
      title: "Raahi Card",
      icon: <CreditCard className="h-6 w-6" />,
      description:
        "NCMC-compliant, co-branded with NSDL PB. Issuance, recharge, and personalization at stations.",
      features: [
        "NCMC-compliant",
        "Co-branded with NSDL PB",
        "Instant issuance",
        "Personalization",
      ],
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80",
      color: "bg-green-50",
    },
    {
      id: "veriphy",
      title: "Veriphy.io",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Secure WhatsApp-based onboarding for financial products.",
      features: [
        "WhatsApp integration",
        "Secure onboarding",
        "No app downloads",
        "Instant verification",
      ],
      image:
        "https://images.unsplash.com/photo-1611746869696-d09bce200020?w=800&q=80",
      color: "bg-yellow-50",
    },
    {
      id: "payments",
      title: "Payments & Signage Stack",
      icon: <Layers className="h-6 w-6" />,
      description:
        "SDKs and terminals for QR, NFC, digital signage, and merchant engagement.",
      features: [
        "QR code integration",
        "NFC terminals",
        "Digital signage",
        "Merchant SDKs",
      ],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      color: "bg-purple-50",
    },
  ];

  return (
    <section className={`py-16 px-4 md:px-8 bg-background ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular Infrastructure for Commuter-First Financial Access
          </p>
        </motion.div>

        <Tabs defaultValue="tvm" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {components.map((component) => (
              <TabsTrigger
                key={component.id}
                value={component.id}
                className="flex items-center gap-2"
              >
                {component.icon}
                <span className="hidden md:inline">{component.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {components.map((component) => (
            <TabsContent key={component.id} value={component.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div
                      className={`${component.color} p-6 md:p-8 flex flex-col justify-between`}
                    >
                      <div>
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            {component.icon}
                            <CardTitle>{component.title}</CardTitle>
                          </div>
                          <CardDescription className="text-base">
                            {component.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <ul className="space-y-2 mt-4">
                            {component.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Badge
                                  variant="outline"
                                  className="rounded-full"
                                >
                                  <ArrowRight className="h-3 w-3 mr-1" />
                                </Badge>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                      <CardFooter className="p-0 mt-6">
                        <button className="text-primary font-medium flex items-center gap-1 hover:underline">
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </CardFooter>
                    </div>
                    <div className="h-64 md:h-auto">
                      <img
                        src={component.image}
                        alt={component.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ModularComponents;
