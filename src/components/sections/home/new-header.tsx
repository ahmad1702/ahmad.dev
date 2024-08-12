import Header3d from "@/components/threed/scenes/header-3d";
import Container from "@/components/ui/container";

const Header = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)]" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
      </div>
      <Container className="h-[calc(100vh-4rem)] z-[5] w-full relative py-10 flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-4">
        <div className="col-span-2 row-span-2 bg-background border rounded-xl flex flex-col justify-end">
          <Header3d />
        </div>
        <div className="col-start-1 col-span-1 row-span-1 row-start-3 bg-background border rounded-xl">
          Hik
        </div>
        <div className="col-start-2 col-span-2 row-span-1 row-start-3 bg-background border rounded-xl">
          Hik
        </div>
        <div className="col-start-3 col-span-1 row-span-2 row-start-1 bg-background border rounded-xl">
          Hik
        </div>
      </Container>
    </section>
  );
};

export default Header;
