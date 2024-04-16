import React from "react";
import { View } from "react-native";
import { ServerIcon } from "../../shared/Reusables";
import useAppColor from "../../themed/useAppColor";
import data from "../../shared/data";
// @ts-ignore
import IconMessage from '../../assets/iconMessage.svg';
// @ts-ignore
import PlusGreenIcon from '../../assets/guildAddCategoryChannel.svg';
// @ts-ignore
import DiscoveryIcon from '../../assets/discoveryStudentHubs.svg';
import { TServerData } from "../../shared/types";
import { useAppDispatch } from "../../shared/rdx-hooks";
import { setChannelData, setServerData } from "../../shared/rdx-slice";

const ServerList = React.memo((props: any) => {
    const colorMode = useAppColor();
    const serverData = data as unknown as TServerData[];
    const dispatch = useAppDispatch()

    React.useLayoutEffect(() => {
        dispatch(setServerData(serverData[1]));
    }, [])

    return (
        <View style={{height: '100%', paddingTop: 20, width: '22%', justifyContent: 'flex-start'}}>
            <ServerIcon 
                icon={<IconMessage width={30} height={30} />} 
                data={serverData[0]}
             />
            <View style={{width: '100%', alignItems: 'center', marginBottom: 10}}>
                <View style={{borderWidth: .5, borderColor: 'lightgray', width: '50%'}} />
            </View>
            {
                serverData.slice(1, serverData.length).map(server => 
                    <ServerIcon data={server} />
                )
            }
            <ServerIcon icon={<PlusGreenIcon width={30} height={30} />} data={{} as TServerData} />
            <ServerIcon icon={<DiscoveryIcon width={30} height={30} />} data={{} as TServerData} />
        </View>
    )
})

export default ServerList;