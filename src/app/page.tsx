import Gallery from "@/components/Gallery";
import ProfileSection from "@/components/ProfileSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 flex ">
      <div className="ml-auto max-w-4xl ">
        <div className="flex space-x-4 mb-4">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="AboutMe">About Me</TabsTrigger>
              <TabsTrigger value="experiences">Experiences</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>
            <TabsContent value="AboutMe"><ProfileSection/></TabsContent>
            <TabsContent value="password">Other Details</TabsContent>
            <TabsContent value="recommended">Use these recommended settings </TabsContent>
          </Tabs>
        
        </div>
        <Separator  className="my-4" />
        <Gallery />
      </div>
    </div>
  );
}
