import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full ">
      <main className="pt-40 pb-20 ">
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}; 

export default layout;
