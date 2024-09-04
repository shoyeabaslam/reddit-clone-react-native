import { Drawer } from "react-native-drawer-layout";
import DrawerContext from "../context/DrawerContext";
import { useContext } from "react";
import LeftDrawerNavigator from "./LeftDrawerNavigator";
import RightDrawerContent from "../components/RightDrawerContent";
import { useSafeAreaInsets } from "react-native-safe-area-context";



function RightDrawerNavigator() {
    const { rightDrawerOpen, setRightDrawerOpen } = useContext(DrawerContext);
    const inset = useSafeAreaInsets();
    return (
        <Drawer
            open={rightDrawerOpen}
            onOpen={() => setRightDrawerOpen(true)}
            onClose={() => setRightDrawerOpen(false)}
            drawerPosition="right"
            drawerStyle={{ paddingTop: inset.top, paddingBottom: inset.bottom, paddingLeft: inset.left, paddingRight: inset.right }}
            renderDrawerContent={() => <RightDrawerContent />}
        >
            <LeftDrawerNavigator />
        </Drawer>
    );
}

export default RightDrawerNavigator