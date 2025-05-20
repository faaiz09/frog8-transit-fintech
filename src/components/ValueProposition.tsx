import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ValuePropositionProps {
  className?: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
  className = "",
}) => {
  return (
    <section className={`py-16 px-4 md:px-8 lg:px-16 bg-white ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Impact, Inclusion, and Infrastructure That Pays Off
          </p>
        </div>

        <Tabs defaultValue="partners" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="partners">For Partners</TabsTrigger>
              <TabsTrigger value="investors">For Investors</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="partners" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Transit Systems</CardTitle>
                  <CardDescription>BMRCL and metro operators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Modernize ticketing infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Increase non-fare revenue streams</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Enhance commuter experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Banks & Financial Institutions</CardTitle>
                  <CardDescription>
                    NSDL PB (live), ICICI (in discussion)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Access to qualified customer segment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Lower customer acquisition costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Rich transaction data for better products</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Networks</CardTitle>
                  <CardDescription>NPCI, Visa, Mastercard</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Compliant infrastructure deployment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Increased transaction volume</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>New use cases for payment networks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tech Partners</CardTitle>
                  <CardDescription>
                    AUM, ISG, FIME, B2B onboarding clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Integrated solutions for transit-fintech</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Access to established transit networks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Joint go-to-market opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Current Partners</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  BMRCL
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  NSDL PB
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  AUM
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  ISG
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  FIME
                </Badge>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="investors" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We serve a segment that's ready, not risky. India Next is
                    digitally savvy, professionally employed, and increasingly
                    female.
                  </p>
                  <div className="bg-green-50 p-4 rounded-md">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Key Metrics
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span>100M+ addressable commuters</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span>40% female commuters</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        <span>₹25,000-₹40,000 monthly income</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We lower cost-to-serve. No agents. No branches. Just smart,
                    unattended, high-traffic nodes.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Efficiency Gains
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        <span>80% lower customer acquisition cost</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        <span>24/7 unattended service availability</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        <span>
                          5x higher engagement than traditional channels
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Infrastructure ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We enable better products because daily data matters more
                    than outdated credit scores.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <h4 className="font-semibold text-purple-800 mb-2">
                      Revenue Streams
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        <span>Transaction fees</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        <span>SaaS licensing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        <span>Data monetization (consented)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                        <span>Financial product distribution</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Traction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    ✅ <strong>Regulatory-Ready, Field-Tested.</strong> Live
                    with BMRCL, NSDL PB, and NPCI-aligned. FIME and PCI
                    certified.
                  </p>
                  <p className="mb-4">
                    ✅ <strong>Smart Distribution, Not Spray & Pray.</strong>{" "}
                    Low-CAC, high-usage, and hyper-targeted via B2N.
                  </p>
                  <p className="mb-4">
                    ✅ <strong>Infrastructure That Grows With the City.</strong>{" "}
                    As metros expand, so do we.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-md">
                    <h4 className="font-semibold text-amber-800 mb-2">
                      Current Deployment
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        <span>
                          TVM deployments across Bengaluru's Purple & Green
                          Lines
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        <span>
                          Raahi Card issuance stack integrated with NSDL PB
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        <span>
                          Ready for rollout across India's Tier 1 & Tier 2
                          metros
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">
                Investment Opportunity
              </h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Frog8 is positioned at the intersection of transit
                infrastructure, financial inclusion, and data-driven services -
                creating a unique opportunity to build the financial backbone
                for India's next 100 million.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="text-sm py-2 px-4 bg-blue-600">
                  Series A
                </Badge>
                <Badge className="text-sm py-2 px-4 bg-green-600">
                  Sustainable Growth
                </Badge>
                <Badge className="text-sm py-2 px-4 bg-purple-600">
                  Financial Inclusion
                </Badge>
                <Badge className="text-sm py-2 px-4 bg-amber-600">
                  Infrastructure Tech
                </Badge>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ValueProposition;
