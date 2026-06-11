import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { whatsappUrl } from "../content/site";

const NotFound = () => (
  <Container className="py-24 text-center">
    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
      404
    </p>
    <h1 className="font-heading font-bold text-4xl text-slate-900 mb-4">
      Page not found
    </h1>
    <p className="text-muted mb-8 max-w-md mx-auto">
      That page doesn't exist. Head back home or message me if you need something.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button to="/">Go home</Button>
      <Button href={whatsappUrl()} external variant="outline">
        WhatsApp me
      </Button>
    </div>
  </Container>
);

export default NotFound;
