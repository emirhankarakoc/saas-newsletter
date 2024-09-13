import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Firstpart } from "./Firstpart";
import { Secondpart } from "./Secondpart";

export default function Page() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Firstpart />
        <Secondpart />
      </div>
    </div>
  );
}
