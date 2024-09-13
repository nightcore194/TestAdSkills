import {useEffect, useState} from "react";
import {LogCard} from "./Component";

// Создание компонента Index
export function IndexPage(){
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        // Запрос к API
        fetch("/api/logs/").then(res => res.json()).then(data => setLogs(data.logs))
    }, []);
    return(<div className="index-container">
        <div className="index-title">Логи</div>
        <div className="card-container">
            {logs.length > 0 && logs.map(log => <LogCard id={log.id} date={log.timestamp} name={log.computer_name} type={log.event_type}/>)}
        </div>
    </div>)
}