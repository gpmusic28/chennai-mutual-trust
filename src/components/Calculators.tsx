import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Target, GraduationCap, Armchair, Heart, Diamond } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

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

  // Child Education Calculator state
  const [currentAge, setCurrentAge] = useState(5);
  const [educationAge, setEducationAge] = useState(18);
  const [educationCost, setEducationCost] = useState(2000000);
  const [educationInflation, setEducationInflation] = useState(8);
  const [educationReturn, setEducationReturn] = useState(12);

  // Retirement Calculator state
  const [retirementAge, setRetirementAge] = useState(30);
  const [retirementTargetAge, setRetirementTargetAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [retirementInflation, setRetirementInflation] = useState(6);
  const [retirementReturn, setRetirementReturn] = useState(12);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);

  // Human Life Value Calculator state
  const [age, setAge] = useState(30);
  const [annualIncome, setAnnualIncome] = useState(600000);
  const [annualExpense, setAnnualExpense] = useState(300000);
  const [workingYears, setWorkingYears] = useState(30);
  const [inflationRate, setInflationRate] = useState(6);

  // Marriage Planning Calculator state
  const [marriageYears, setMarriageYears] = useState(10);
  const [marriageCost, setMarriageCost] = useState(1000000);
  const [marriageInflation, setMarriageInflation] = useState(7);
  const [marriageReturn, setMarriageReturn] = useState(12);

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

  const calculateChildEducation = () => {
    const yearsToEducation = educationAge - currentAge;
    const futureCost = educationCost * Math.pow(1 + educationInflation / 100, yearsToEducation);
    const monthlyRate = educationReturn / 100 / 12;
    const months = yearsToEducation * 12;
    const monthlySIP = (futureCost * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalInvestment = monthlySIP * months;
    
    return {
      futureCost: Math.round(futureCost),
      monthlySIP: Math.round(monthlySIP),
      totalInvestment: Math.round(totalInvestment),
      years: yearsToEducation,
    };
  };

  const calculateRetirement = () => {
    const yearsToRetirement = retirementTargetAge - retirementAge;
    const yearsInRetirement = lifeExpectancy - retirementTargetAge;
    const futureMonthlyExpense = monthlyExpense * Math.pow(1 + retirementInflation / 100, yearsToRetirement);
    const corpusNeeded = futureMonthlyExpense * 12 * yearsInRetirement * Math.pow(1 + retirementInflation / 100, yearsInRetirement / 2);
    const monthlyRate = retirementReturn / 100 / 12;
    const months = yearsToRetirement * 12;
    const monthlySIP = (corpusNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalInvestment = monthlySIP * months;
    
    return {
      corpusNeeded: Math.round(corpusNeeded),
      monthlySIP: Math.round(monthlySIP),
      totalInvestment: Math.round(totalInvestment),
      years: yearsToRetirement,
    };
  };

  const calculateHumanLifeValue = () => {
    const annualSavings = annualIncome - annualExpense;
    const futureValue = annualSavings * ((Math.pow(1 + inflationRate / 100, workingYears) - 1) / (inflationRate / 100));
    const presentValue = futureValue / Math.pow(1 + inflationRate / 100, workingYears);
    
    return {
      humanLifeValue: Math.round(presentValue),
      totalSavings: Math.round(annualSavings * workingYears),
      futureValue: Math.round(futureValue),
    };
  };

  const calculateMarriagePlanning = () => {
    const futureCost = marriageCost * Math.pow(1 + marriageInflation / 100, marriageYears);
    const monthlyRate = marriageReturn / 100 / 12;
    const months = marriageYears * 12;
    const monthlySIP = (futureCost * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalInvestment = monthlySIP * months;
    const expectedReturns = futureCost - totalInvestment;
    
    return {
      futureCost: Math.round(futureCost),
      monthlySIP: Math.round(monthlySIP),
      totalInvestment: Math.round(totalInvestment),
      expectedReturns: Math.round(expectedReturns),
    };
  };

  const sipResult = calculateSIP();
  const lumpResult = calculateLumpsum();
  const goalResult = calculateGoal();
  const childEducationResult = calculateChildEducation();
  const retirementResult = calculateRetirement();
  const humanLifeValueResult = calculateHumanLifeValue();
  const marriagePlanningResult = calculateMarriagePlanning();

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
            Financial Calculators
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your financial future with our comprehensive calculators
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 h-auto p-2 bg-card rounded-2xl shadow-lg gap-2">
              <TabsTrigger
                value="sip"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <Calculator className="w-4 h-4 mr-1 lg:mr-2" />
                SIP
              </TabsTrigger>
              <TabsTrigger
                value="lumpsum"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <TrendingUp className="w-4 h-4 mr-1 lg:mr-2" />
                Lumpsum
              </TabsTrigger>
              <TabsTrigger
                value="goal"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <Target className="w-4 h-4 mr-1 lg:mr-2" />
                Goal
              </TabsTrigger>
              <TabsTrigger
                value="child"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <GraduationCap className="w-4 h-4 mr-1 lg:mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="retirement"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <Armchair className="w-4 h-4 mr-1 lg:mr-2" />
                Retirement
              </TabsTrigger>
              <TabsTrigger
                value="hlv"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <Heart className="w-4 h-4 mr-1 lg:mr-2" />
                HLV
              </TabsTrigger>
              <TabsTrigger
                value="marriage"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl py-3 text-sm font-semibold transition-all"
              >
                <Diamond className="w-4 h-4 mr-1 lg:mr-2" />
                Marriage
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
                      
                      {/* Donut Chart */}
                      <div className="h-64 mb-6">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: "Invested amount", value: sipResult.invested },
                                { name: "Est. returns", value: sipResult.returns }
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              <Cell fill="hsl(var(--primary) / 0.3)" />
                              <Cell fill="hsl(var(--primary))" />
                            </Pie>
                            <Legend 
                              verticalAlign="top" 
                              height={36}
                              formatter={(value) => <span className="text-sm">{value}</span>}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

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
                      
                      {/* Donut Chart */}
                      <div className="h-64 mb-6">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: "Invested amount", value: lumpResult.invested },
                                { name: "Est. returns", value: lumpResult.returns }
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              <Cell fill="hsl(var(--primary) / 0.3)" />
                              <Cell fill="hsl(var(--primary))" />
                            </Pie>
                            <Legend 
                              verticalAlign="top" 
                              height={36}
                              formatter={(value) => <span className="text-sm">{value}</span>}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

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

            {/* Child Education Calculator */}
            <TabsContent value="child" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8">
                  <CardTitle className="text-3xl">Child Education Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Plan and save for your child's education expenses
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="currentAge" className="text-base font-semibold mb-3 block">
                          Current Age of Child
                        </Label>
                        <Input
                          id="currentAge"
                          type="number"
                          value={currentAge}
                          onChange={(e) => setCurrentAge(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="educationAge" className="text-base font-semibold mb-3 block">
                          Age When Education Starts
                        </Label>
                        <Input
                          id="educationAge"
                          type="number"
                          value={educationAge}
                          onChange={(e) => setEducationAge(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="educationCost" className="text-base font-semibold mb-3 block">
                          Current Education Cost (₹)
                        </Label>
                        <Input
                          id="educationCost"
                          type="number"
                          value={educationCost}
                          onChange={(e) => setEducationCost(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="educationInflation" className="text-base font-semibold mb-3 block">
                          Education Inflation Rate (%)
                        </Label>
                        <Input
                          id="educationInflation"
                          type="number"
                          value={educationInflation}
                          onChange={(e) => setEducationInflation(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="educationReturn" className="text-base font-semibold mb-3 block">
                          Expected Return Rate (%)
                        </Label>
                        <Input
                          id="educationReturn"
                          type="number"
                          value={educationReturn}
                          onChange={(e) => setEducationReturn(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Planning Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Future Education Cost</span>
                          <span className="text-xl font-bold">{formatCurrency(childEducationResult.futureCost)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total Investment</span>
                          <span className="text-xl font-bold">{formatCurrency(childEducationResult.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Time to Save</span>
                          <span className="text-xl font-bold">{childEducationResult.years} years</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Monthly SIP Required</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(childEducationResult.monthlySIP)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Retirement Calculator */}
            <TabsContent value="retirement" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent to-primary text-primary-foreground p-8">
                  <CardTitle className="text-3xl">Retirement Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Plan your retirement corpus for a financially secure future
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="retirementAge" className="text-base font-semibold mb-3 block">
                          Current Age
                        </Label>
                        <Input
                          id="retirementAge"
                          type="number"
                          value={retirementAge}
                          onChange={(e) => setRetirementAge(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="retirementTargetAge" className="text-base font-semibold mb-3 block">
                          Retirement Age
                        </Label>
                        <Input
                          id="retirementTargetAge"
                          type="number"
                          value={retirementTargetAge}
                          onChange={(e) => setRetirementTargetAge(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyExpense" className="text-base font-semibold mb-3 block">
                          Current Monthly Expense (₹)
                        </Label>
                        <Input
                          id="monthlyExpense"
                          type="number"
                          value={monthlyExpense}
                          onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lifeExpectancy" className="text-base font-semibold mb-3 block">
                          Life Expectancy
                        </Label>
                        <Input
                          id="lifeExpectancy"
                          type="number"
                          value={lifeExpectancy}
                          onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="retirementInflation" className="text-base font-semibold mb-3 block">
                          Inflation Rate (%)
                        </Label>
                        <Input
                          id="retirementInflation"
                          type="number"
                          value={retirementInflation}
                          onChange={(e) => setRetirementInflation(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="retirementReturn" className="text-base font-semibold mb-3 block">
                          Expected Return Rate (%)
                        </Label>
                        <Input
                          id="retirementReturn"
                          type="number"
                          value={retirementReturn}
                          onChange={(e) => setRetirementReturn(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Retirement Plan</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Corpus Needed</span>
                          <span className="text-xl font-bold">{formatCurrency(retirementResult.corpusNeeded)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total Investment</span>
                          <span className="text-xl font-bold">{formatCurrency(retirementResult.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Years to Save</span>
                          <span className="text-xl font-bold">{retirementResult.years} years</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Monthly SIP Required</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(retirementResult.monthlySIP)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Human Life Value Calculator */}
            <TabsContent value="hlv" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8">
                  <CardTitle className="text-3xl">Human Life Value Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Calculate your human life value for adequate insurance coverage
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="age" className="text-base font-semibold mb-3 block">
                          Current Age
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          value={age}
                          onChange={(e) => setAge(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="annualIncome" className="text-base font-semibold mb-3 block">
                          Annual Income (₹)
                        </Label>
                        <Input
                          id="annualIncome"
                          type="number"
                          value={annualIncome}
                          onChange={(e) => setAnnualIncome(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="annualExpense" className="text-base font-semibold mb-3 block">
                          Annual Expense (₹)
                        </Label>
                        <Input
                          id="annualExpense"
                          type="number"
                          value={annualExpense}
                          onChange={(e) => setAnnualExpense(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="workingYears" className="text-base font-semibold mb-3 block">
                          Working Years Remaining
                        </Label>
                        <Input
                          id="workingYears"
                          type="number"
                          value={workingYears}
                          onChange={(e) => setWorkingYears(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inflationRate" className="text-base font-semibold mb-3 block">
                          Inflation Rate (%)
                        </Label>
                        <Input
                          id="inflationRate"
                          type="number"
                          value={inflationRate}
                          onChange={(e) => setInflationRate(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Life Value Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total Savings Capacity</span>
                          <span className="text-xl font-bold">{formatCurrency(humanLifeValueResult.totalSavings)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Future Value</span>
                          <span className="text-xl font-bold">{formatCurrency(humanLifeValueResult.futureValue)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Human Life Value</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(humanLifeValueResult.humanLifeValue)}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                          This is the recommended life insurance coverage to protect your family's financial future.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Marriage Planning Calculator */}
            <TabsContent value="marriage" className="mt-8">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent to-primary text-primary-foreground p-8">
                  <CardTitle className="text-3xl">Marriage Planning Calculator</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-base">
                    Plan and save for your dream wedding
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="marriageYears" className="text-base font-semibold mb-3 block">
                          Years Until Marriage
                        </Label>
                        <Input
                          id="marriageYears"
                          type="number"
                          value={marriageYears}
                          onChange={(e) => setMarriageYears(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="marriageCost" className="text-base font-semibold mb-3 block">
                          Current Estimated Cost (₹)
                        </Label>
                        <Input
                          id="marriageCost"
                          type="number"
                          value={marriageCost}
                          onChange={(e) => setMarriageCost(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="marriageInflation" className="text-base font-semibold mb-3 block">
                          Inflation Rate (%)
                        </Label>
                        <Input
                          id="marriageInflation"
                          type="number"
                          value={marriageInflation}
                          onChange={(e) => setMarriageInflation(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="marriageReturn" className="text-base font-semibold mb-3 block">
                          Expected Return Rate (%)
                        </Label>
                        <Input
                          id="marriageReturn"
                          type="number"
                          value={marriageReturn}
                          onChange={(e) => setMarriageReturn(Number(e.target.value))}
                          className="h-12 text-lg rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Wedding Plan</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Future Marriage Cost</span>
                          <span className="text-xl font-bold">{formatCurrency(marriagePlanningResult.futureCost)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Total Investment</span>
                          <span className="text-xl font-bold">{formatCurrency(marriagePlanningResult.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Expected Returns</span>
                          <span className="text-xl font-bold text-green-600">{formatCurrency(marriagePlanningResult.expectedReturns)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-semibold">Monthly SIP Required</span>
                          <span className="text-3xl font-bold text-primary">{formatCurrency(marriagePlanningResult.monthlySIP)}</span>
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
