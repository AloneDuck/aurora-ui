import { useState } from "react";
import { Button, Card, Dialog, Field, Switch, Tab, TabList, TabPanel, Tabs } from "./components/primitives";
import { engineeringRegistry, registrySize } from "./registry";

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <main className="au-shell">
      <header className="au-hero">
        <p className="au-eyebrow">Frontend platform · v1.0</p>
        <h1>Aurora UI</h1>
        <p>Accessible React primitives, semantic tokens, and executable quality contracts.</p>
        <div className="au-actions"><Button onClick={() => setDialogOpen(true)}>Open dialog</Button><Button intent="secondary">View Storybook</Button></div>
      </header>

      <section aria-labelledby="quality-heading">
        <h2 id="quality-heading">Engineering registry</h2>
        <div className="au-grid">
          {Object.entries(engineeringRegistry).map(([name, entries]) => <Card key={name}><strong>{entries.length}</strong><span>{name}</span></Card>)}
          <Card><strong>{registrySize}</strong><span>executable contracts</span></Card>
        </div>
      </section>

      <section className="au-playground" aria-labelledby="playground-heading">
        <h2 id="playground-heading">Component playground</h2>
        <Tabs defaultValue="forms">
          <TabList aria-label="Playground sections"><Tab value="forms">Forms</Tab><Tab value="feedback">Feedback</Tab></TabList>
          <TabPanel value="forms"><div className="au-form"><Field label="Workspace name" hint="Visible to every collaborator" defaultValue="Aurora" /><Switch label="High contrast preview" /></div></TabPanel>
          <TabPanel value="feedback"><p>Every interactive state is keyboard reachable and covered by automated checks.</p></TabPanel>
        </Tabs>
      </section>

      <Dialog open={dialogOpen} title="Release checklist" onClose={() => setDialogOpen(false)}>
        <p>Token compatibility, keyboard navigation, and visual contracts are ready for review.</p>
      </Dialog>
    </main>
  );
}
