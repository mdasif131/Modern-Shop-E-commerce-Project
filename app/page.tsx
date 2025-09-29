import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container>
      <div className="p-10 ">
        <h1 className="text-xl font-semibold">hello world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          suscipit temporibus at adipisci est voluptatem cum, voluptatibus rem
          placeat laudantium iusto, cupiditate repellat. Repellat ea maiores
          dolore voluptatum iure assumenda cupiditate quos illum, nobis esse
          facere neque totam similique minima, veritatis ducimus, saepe illo
          ipsa corporis doloremque? Ad, illum quod!
        </p>
        <Button variant="default">Check out</Button>
      </div>
    </Container>
  );
}

export default Home;