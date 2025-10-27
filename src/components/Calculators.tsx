import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Target, Clock } from "lucide-react";

const Calculators = () => {
  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Lumpsum Calculator State
  const [lumpAmount, setLumpAmount] = useState(100000);
  const [lumpRate, setLumpRate] = useState(12);
  const [lumpYears, setLumpYears] = useState(10);

  // Goal Calculator State
  const [goalAmount, setGoalAmount] = useState(5000000);
  const [goalYears, setGoalYears] = useState(15);
  const [goalRate, setGoalRate] = useState(12);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const futureValue =
      sipAmount *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));
    const invested = sipAmount * months;
    const returns = futureValue - invested;
    return { futureValue, invested, returns };
  };

  const calculateLumpsum = () => {
    const futureValue =
      lumpAmount * Math.pow(1 + lumpRate / 100, lumpYears);
    const returns = futureValue - lumpAmount;
    return { futureValue, invested: lumpAmount, returns };
  };

  const calculateGoal = () => {
    const monthlyRate = goalRate / 12 / 100;
    const months = goalYears * 12;
    const monthlyInvestment =
      goalAmount /
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));
    return { monthlyInvestment, totalInvested: monthlyInvestment * months };
  };

  const sipResult = calculateSIP();
  const lumpResult = calculateLumpsum();
  const goalResult = calculateGoal();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculators" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investment Calculators
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your financial future with our interactive calculators
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-2 bg-card rounded-2xl shadow-lg">
              <TabsTrigger
                value="sip"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-4 text-base font-semibold transition-all"
              >
                <Calculator className="w-5 h-5 mr-2" />
                SIP Calculator
              </TabsTrigger>
              <TabsTrigger
                value="lumpsum"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-4 text-base font-semibold transition-all"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Lumpsum Calculator
              </TabsTrigger>
              <TabsTrigger
                value="goal"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-4 text-base font-semibold transition-all"
              >
                <Target className="w-5 h-5 mr-2" />
                Goal Calculator
              </TabsTrigger>
            </TabsList>

            {/* SIP Calculator */}
            <TabsContent value="sip" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8">
                  <CardTitle className="text-3xl">SIP Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Calculate returns on your Systematic Investment Plan
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="sipAmount" className="text-base font-semibold mb-3 block">
                          Monthly Investment Amount
                        </Label>
                        <Input
                          id="sipAmount"
                          type="number"
                          value={sipAmount}
                          onChange={(e) => setSipAmount(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sipRate" className="text-base font-semibold mb-3 block">
                          Expected Annual Return (%)
                        </Label>
                        <Input
                          id="sipRate"
                          type="number"
                          value={sipRate}
                          onChange={(e) => setSipRate(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="sipYears" className="text-base font-semibold mb-3 block">
                          Investment Period (Years)
                        </Label>
                        <Input
                          id="sipYears"
                          type="number"
                          value={sipYears}
                          onChange={(e) => setSipYears(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Investment Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total Investment</span>
                          <span className="text-xl font-bold">{formatCurrency(sipResult.invested)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Expected Returns</span>
                          <span className="text-xl font-bold text-green-600">{formatCurrency(sipResult.returns)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Maturity Value</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(sipResult.futureValue)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Lumpsum Calculator */}
            <TabsContent value="lumpsum" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent to-primary text-primary-foreground p-8">
                  <CardTitle className="text-3xl">Lumpsum Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Calculate returns on your one-time investment
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="lumpAmount" className="text-base font-semibold mb-3 block">
                          Investment Amount
                        </Label>
                        <Input
                          id="lumpAmount"
                          type="number"
                          value={lumpAmount}
                          onChange={(e) => setLumpAmount(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lumpRate" className="text-base font-semibold mb-3 block">
                          Expected Annual Return (%)
                        </Label>
                        <Input
                          id="lumpRate"
                          type="number"
                          value={lumpRate}
                          onChange={(e) => setLumpRate(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lumpYears" className="text-base font-semibold mb-3 block">
                          Investment Period (Years)
                        </Label>
                        <Input
                          id="lumpYears"
                          type="number"
                          value={lumpYears}
                          onChange={(e) => setLumpYears(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Investment Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total Investment</span>
                          <span className="text-xl font-bold">{formatCurrency(lumpResult.invested)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Expected Returns</span>
                          <span className="text-xl font-bold text-green-600">{formatCurrency(lumpResult.returns)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Maturity Value</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(lumpResult.futureValue)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Goal Calculator */}
            <TabsContent value="goal" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8">
                  <CardTitle className="text-3xl">Goal Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Plan monthly investments to reach your financial goal
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="goalAmount" className="text-base font-semibold mb-3 block">
                          Target Amount
                        </Label>
                        <Input
                          id="goalAmount"
                          type="number"
                          value={goalAmount}
                          onChange={(e) => setGoalAmount(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="goalYears" className="text-base font-semibold mb-3 block">
                          Time to Achieve Goal (Years)
                        </Label>
                        <Input
                          id="goalYears"
                          type="number"
                          value={goalYears}
                          onChange={(e) => setGoalYears(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="goalRate" className="text-base font-semibold mb-3 block">
                          Expected Annual Return (%)
                        </Label>
                        <Input
                          id="goalRate"
                          type="number"
                          value={goalRate}
                          onChange={(e) => setGoalRate(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Required Investment</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Target Goal</span>
                          <span className="text-xl font-bold">{formatCurrency(goalAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total to Invest</span>
                          <span className="text-xl font-bold">{formatCurrency(goalResult.totalInvested)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Monthly SIP Required</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(goalResult.monthlyInvestment)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Calculators;
