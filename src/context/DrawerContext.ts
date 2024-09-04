import { createContext } from "react";


interface ContextType {
    openRightDrawer: () => void;
    closeRightDrawer: () => void;
    rightDrawerOpen: boolean,
    setRightDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: ContextType = {
    openRightDrawer: () => { },
    closeRightDrawer: () => { },
    rightDrawerOpen: false,
    setRightDrawerOpen: () => { }
};

const DrawerContext = createContext<ContextType>(initialValue);

export default DrawerContext;