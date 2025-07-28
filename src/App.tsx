
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    document.title = "EchoMedia.ai | AI-Powered Content & Cloud Services";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans">
      <header className="w-full bg-slate-950 shadow-md p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="mr-2">🎙️</span> EchoMedia.ai
        </h1>
        <Button variant="outline" className="text-white border-white">
          Contact
        </Button>
      </header>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          AI-Powered Voice, Cloud, and Automation Services
        </h2>
        <p className="text-lg mb-8">
          EchoMedia.ai brings advanced AI tools to content creation, cloud support, and
          productivity workflows. From multilingual voice synthesis to Microsoft 365 automation,
          we deliver intelligent solutions tailored for modern business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">🤖 AI Automation & Copilot</h3>
              <p>Deploy intelligent copilots using Azure OpenAI & Microsoft Graph.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">🔊 Voice Generation</h3>
              <p>Realistic, multilingual narration from your scripts or presentations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">📄 Transcription & Summaries</h3>
              <p>High-accuracy transcription and GPT-powered summaries.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">☁️ Microsoft Cloud Support</h3>
              <p>End-to-end Azure, M365, and security services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">🌍 Multilingual Translation</h3>
              <p>Localize your content in any language with synced voice dubbing.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">⚡ Emergency Support</h3>
              <p>Proactive and on-call support for urgent cloud or AI issues.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center p-6 text-sm text-slate-400">
        © 2025 EchoMedia.ai — Built on Microsoft Azure
      </footer>
    </main>
  );
}
