import BjumperLogo from '../assets/svg/logoBjumperLogin.svg'
import {SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger
} from "@/components/ui/menubar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Check, Languages, MessageCircleQuestion, Settings, User} from "lucide-react";
import {cn} from "@/lib/utils.ts";


function TopBar() {

    return (
        <>
            <header className="sticky top-0 z-1 h-[50px] flex items-center gap-4 border-b bg-background px-4 md:px-6 p-3">
                <div className="w-full h-full flex items-center justify-between gap-4">
                    <div className="h-full flex items-center">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="ml-[10px] mr-[10px]" />
                        <div className="logo bg-transparent h-full">
                            <a className="max-h-fit" href="/">
                            <img
                                className="block ml-2 h-full"
                                src={BjumperLogo}
                                alt="Company Logo"
                            />
                        </a>
                    </div>
                </div>
                    <Menubar className="border-none shadow-none">
                        <MenubarMenu>
                            <MenubarTrigger>
                                <a href="/docs/TakeData-Manual-de-Usuario-v2.0.0.pdf">
                                    <MessageCircleQuestion />
                                </a>
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Settings />
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <User />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    usuario@email.com
                                </MenubarItem>
                                <MenubarItem>
                                    Cambiar Contraseña
                                </MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem onClick={() => console.log('auth.logout()')}>
                                    Logout
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Languages />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <span  className="flex w-full gap-2">
                                        <span className="w-[20px]"></span>
                                        <span>English</span>
                                    </span>
                                </MenubarItem >
                                <MenubarItem highlighted={true}>
                                    <span className="flex w-full gap-2">
                                        <Check size="20" />
                                        <span>Español</span>
                                    </span>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </header>
        </>
    )
}

export default TopBar
