import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle, XCircle } from 'lucide-react';

const Wireframe = ({ title, children }) => (
  <Card className="w-full max-w-3xl mx-auto">
    <CardHeader className="text-lg font-bold border-b">{title}</CardHeader>
    <CardContent className="p-4">{children}</CardContent>
  </Card>
);

const InstrumentSelector = ({ instruments, instrument, setInstrument }) => (
  <Select value={instrument} onValueChange={setInstrument}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select instrument" />
    </SelectTrigger>
    <SelectContent>
      {instruments.map((inst) => (
        <SelectItem key={inst} value={inst}>{inst}</SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const InstrumentManager = ({ instruments, setInstruments, instrument, setInstrument }) => {
  const [newInstrument, setNewInstrument] = useState('');

  const addInstrument = () => {
    if (newInstrument && !instruments.includes(newInstrument)) {
      setInstruments([...instruments, newInstrument]);
      setNewInstrument('');
    }
  };

  const removeInstrument = (instrumentToRemove) => {
    const updatedInstruments = instruments.filter(i => i !== instrumentToRemove);
    setInstruments(updatedInstruments);
    if (instrument === instrumentToRemove) {
      setInstrument(updatedInstruments[0] || '');
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Manage Your Instruments</h2>
      <div className="flex space-x-2">
        <Input
          placeholder="Add new instrument"
          value={newInstrument}
          onChange={(e) => setNewInstrument(e.target.value)}
        />
        <Button onClick={addInstrument}><PlusCircle className="mr-2 h-4 w-4" /> Add</Button>
      </div>
      <div className="space-y-2">
        {instruments.map((inst) => (
          <div key={inst} className="flex justify-between items-center">
            <span>{inst}</span>
            <Button variant="ghost" size="sm" onClick={() => removeInstrument(inst)}>
              <XCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = ({ instrument }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold">Welcome, User!</h2>
    <p>Current Instrument: {instrument}</p>
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>Current Goals</CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Learn scales for {instrument}</li>
            <li>Master basic techniques for {instrument}</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>Recent Progress</CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Practiced scales - 15 mins</li>
            <li>Worked on techniques - 30 mins</li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <Button>Start Practice Session</Button>
  </div>
);

const GoalsList = ({ instrument }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold">Your Goals for {instrument}</h2>
    <ul className="space-y-2">
      <li className="flex justify-between items-center">
        <span>Learn scales for {instrument}</span>
        <Button variant="outline" size="sm">View</Button>
      </li>
      <li className="flex justify-between items-center">
        <span>Master basic techniques for {instrument}</span>
        <Button variant="outline" size="sm">View</Button>
      </li>
    </ul>
    <Button variant="secondary">Add New Goal</Button>
  </div>
);

const PracticeSession = ({ instrument }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold">Current Practice Session - {instrument}</h2>
    <div className="space-y-2">
      <div>Time Elapsed: 00:15:30</div>
      <div>Current Exercise: Basic scales for {instrument}</div>
    </div>
    <div className="space-y-2">
      <Button variant="secondary">Add Exercise</Button>
      <Button variant="destructive">End Session</Button>
    </div>
  </div>
);

const Progress = ({ instrument }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-bold">Your Progress - {instrument}</h2>
    <div className="space-y-2">
      <div>Total Practice Time: 5h 30m</div>
      <div>Completed Goals: 2</div>
      <div>Current Streak: 3 days</div>
    </div>
    <Button>View Detailed Report</Button>
  </div>
);

export default function MusicPracticeWireframes() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [instruments, setInstruments] = useState(['Guitar', 'Piano', 'Drums', 'Violin']);
  const [instrument, setInstrument] = useState(instruments[0]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <InstrumentSelector 
        instruments={instruments}
        instrument={instrument}
        setInstrument={setInstrument}
      />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="instruments">Instruments</TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent value="dashboard"><Wireframe title="Dashboard"><Dashboard instrument={instrument} /></Wireframe></TabsContent>
          <TabsContent value="goals"><Wireframe title="Goals"><GoalsList instrument={instrument} /></Wireframe></TabsContent>
          <TabsContent value="practice"><Wireframe title="Practice Session"><PracticeSession instrument={instrument} /></Wireframe></TabsContent>
          <TabsContent value="progress"><Wireframe title="Progress"><Progress instrument={instrument} /></Wireframe></TabsContent>
          <TabsContent value="instruments">
            <Wireframe title="Instrument Management">
              <InstrumentManager 
                instruments={instruments} 
                setInstruments={setInstruments}
                instrument={instrument}
                setInstrument={setInstrument}
              />
            </Wireframe>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
