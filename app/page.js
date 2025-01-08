import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Skills />
      <Projects />
    </Container>
  );
}
