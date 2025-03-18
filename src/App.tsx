import './App.css'
import TopBar from "@/components/top-bar.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import AppSidebar from "@/components/app-sidebar.tsx";
import Login from "@/pages/Login.tsx";
import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";

function App() {

    const [loginPage, setLoginPage] = useState(false);

  return (
    <>
        {
            !loginPage ?
                (
                <SidebarProvider>
                    <AppSidebar />
                    <div className="w-full">
                        <TopBar></TopBar>
                        <main className="p-[20px]">
                            <h1>Title</h1>
                            <Button onClick={() => setLoginPage(true)}>See Login Page</Button>
                        </main>
                    </div>
                </SidebarProvider>
                )
                :
                (
                    <>
                    <Button onClick={() => setLoginPage(false)}>See main layout Page</Button>
                    <Login />
                    </>
                )

        }
    </>
  )
}

export default App
