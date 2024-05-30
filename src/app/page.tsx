
import { Navbar } from "@/components/Navbar";
import { VideoGrid } from "@/components/VideoGrid";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <VideoGrid/>
    </div>
  );
}


// I have made custom classes for styling and making components responsive so check out tailwind.config.ts file for that.
