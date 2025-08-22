import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle } from "lucide-react";

export default function LandingPageOSC() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Constituição e Regularização de ONGs, OSCs e Associações
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Formalize sua entidade com segurança jurídica e tenha acesso a
          recursos públicos, isenções e parcerias.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5511941013135"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 flex items-center gap-2">
              <MessageCircle size={20} /> Fale Agora no WhatsApp
            </Button>
          </a>
          <a href="tel:+5511941013135">
            <Button className="bg-green-900 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-green-800 flex items-center gap-2">
              <Phone size={20} /> Ligar Agora
            </Button>
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Por que Regularizar sua Entidade?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Acesso a recursos públicos e privados",
            "Credibilidade perante parceiros e apoiadores",
            "Isenção ou redução de tributos",
            "Segurança jurídica para dirigentes e associados",
          ].map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-4 font-medium">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Como Podemos Ajudar</h2>
        <ul className="max-w-3xl mx-auto space-y-3 text-lg">
          <li>✔️ Constituição de ONGs e OSCs (estatuto, assembleia, cartório, CNPJ)</li>
          <li>✔️ Regularização em cartório e Receita Federal</li>
          <li>✔️ Adequação à Lei nº 13.019/2014 (MROSC)</li>
          <li>✔️ Consultoria em parcerias públicas e privadas</li>
          <li>✔️ Assessoria jurídica contínua para o Terceiro Setor</li>
        </ul>
      </section>

      {/* Diferenciais */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Por que Escolher Nosso Escritório?</h2>
        <p className="mb-4">
          ✔️ Atuação nacional, online e presencial <br />
          ✔️ Especialização em Direito Público, Eleitoral e Terceiro Setor <br />
          ✔️ Experiência prática com entidades e coletivos culturais <br />
          ✔️ Atendimento personalizado e sigiloso
        </p>
      </section>

      {/* CTA Final */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Sua ONG pronta para crescer com segurança jurídica
        </h2>
        <p className="text-lg mb-6">
          Entre em contato agora e receba uma consultoria inicial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5511941013135"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200 flex items-center gap-2">
              <MessageCircle size={20} /> WhatsApp
            </Button>
          </a>
          <a href="tel:+5511941013135">
            <Button className="bg-green-900 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-green-800 flex items-center gap-2">
              <Phone size={20} /> Ligar Agora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
