import './App.css'
import {Button} from "@/components/ui/button.tsx";
import TopBar from "@/components/top-bar.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import AppSidebar from "@/components/app-sidebar.tsx";

function App() {
  return (
    <>
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
                <TopBar></TopBar>
                <main className="p-[20px]">
                    <h1>App Page!</h1>
                    <Button>First Button</Button>
                </main>
            </div>
        </SidebarProvider>
    </>
  )
}

export default App
