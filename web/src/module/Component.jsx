// Создание компонента карточка с логами
export function LogCard({id, date, type, name}){
    return(<div className="log-card-container" onClick={() => window.location.assign(`/log?id=${id}`)}>
        <div className="log-info log-date">
            <div className="log-info-title">Дата</div>
            <div className="log-info-subtitle">{(new Date(date)).toLocaleString('ru-RU', {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZone: 'UTC'})}</div>
        </div>
        <div className="log-info log-type">
            <div className="log-info-title">Тип</div>
            <div className="log-info-subtitle">{type}</div>
        </div>
        <div className="log-info log-name">
            <div className="log-info-title">Имя устройства</div>
            <div className="log-info-subtitle">{name}</div>
        </div>
    </div>)
}

// Создание компонента с полной информацией о логе
export function LogInfoElem({computer_name, timestamp, event_type, screenshot_url, application, content}){
    return(
        <div className="log-container">
            <div className="log-title-container">
                <div className="log-title">{computer_name}</div>
                <div className="log-subtitle-container">
                    <div className="log-subtitle">{(new Date(timestamp)).toLocaleString('ru-RU', {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZone: 'UTC'
                    })}</div>
                    <div className="log-subtitle"> |</div>
                    <div className="log-subtitle">{event_type}</div>
                </div>
            </div>
            <img className="log-image" src={screenshot_url} alt=""/>
            <div className="log-elems-container">
                <div className="log-elem-container">
                    <div className="log-elem-title">Приложение</div>
                    <div className="log-elem-description">{application}</div>
                </div>
                <div className="log-elem-container">
                    <div className="log-elem-title">Содержимое</div>
                    <div className="log-elem-description">{content}</div>
                </div>
            </div>
        </div>
    )
}