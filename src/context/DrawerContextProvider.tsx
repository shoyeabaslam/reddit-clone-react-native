import { ReactNode, useMemo, useState } from "react"
import DrawerContext from "./DrawerContext"



const DrawerContextProvider = ({ children }: { children: ReactNode }) => {
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
    const value = useMemo(
        () => ({
            openRightDrawer: () => setRightDrawerOpen(true),
            closeRightDrawer: () => setRightDrawerOpen(false),
        }),
        []
    );
    return (
        <DrawerContext.Provider value={{ rightDrawerOpen, setRightDrawerOpen, ...value }}>
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerContextProvider;