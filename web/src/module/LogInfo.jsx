import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {LogInfoElem} from "./Component";

// Создание страницы информации о логе
export function LogInfo() {
    const [log, setLog] = useState({});
    const [search, setSearch] = useSearchParams();
    useEffect(() => {
        // Запрос к апи с id
        fetch(`api/logs/${search.get('id')}`).then(res => res.ok && res.json()).then(data => setLog(data.logs))
    }, []);
    return(
        <>
            {log && <LogInfoElem computer_name={log.computer_name}
                                 timestamp={log.timestamp}
                                 event_type={log.event_type}
                                 screenshot_url={log.screenshot_url}
                                 application={log.application}
                                 content={log.content}/>}
        </>
    )
}