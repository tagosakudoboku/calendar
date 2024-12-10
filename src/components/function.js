import { watch } from "vue";

export function isToday(date)
{
    const local_date = new Date();
    return local_date === date;
}

export function isSameDateID(a, b) 
{

}
export function getThisWeek(date)
{
    let d = new Date(date);
    d.setDate(d.getDate() - d.getDay());
    const sunday = new Date(d);

    let rtn = [];
    for (let i=0;i<7;++i) {
        rtn.push(new Date(sunday));
        sunday.setDate(sunday.getDate()+1);
    }
    return rtn;
}

export function addDay(date, offset = 1)
{
    const local_date = new Date(date);
    local_date.setDate(local_date.getDate() +offset);
    return local_date;
}

export function calcDateID(date)
{
    const l_date= new Date(date);
    const offset =l_date.getTimezoneOffset() *60 *1000;
    return Math.floor((l_date.getTime()- offset)/(1000 * 60 * 60 *24));
}

function calcActivityID()
{
    return crypto.randomUUID();
}

export function convert2ActivityObj(param)
{
    return {
        'id': calcActivityID(),
        'date_id': calcDateID(param.start_time),
        'title': param.title,
        'start_time': param.start_time,
        'end_time': param.end_time,
        'description':param.description,
        'color': param.color,
        'owner': '',
        'height': calcHeight(param.start_time,param.end_time),
        'width': '',
        'top': calcTop(param.start_time),
    };
}

export function calcHeight(start_time, end_time)
{
    let s= new Date(start_time);
    let e= new Date(end_time);

    return Math.floor(
        (e.getTime()-s.getTime())/
        (1000 * 60)
    );
}

export function calcTop(time)
{
    let d= new Date(time);
    return 60 * d.getHours() + d.getMinutes();
}

function splitActivity(activity)
{
    // const activities = [];
    // while (!isSameDateID(activity.start_time, activity.end_time)) {

    //     let act = {

    //     };
    //     let end = new Date();
    //     end.set
    //     activities.push({});
    // }
}

export function runCalendar(activities, date = new Date())
{
    
    const local_acts = activities.map(
        (param) => {return convert2ActivityObj(param)}
    );

    const dates = getThisWeek(date);
    const rtn = [];
    for (let i=0;i<7;++i) {
        rtn[i] = [];
        rtn[i].push(
            ...local_acts.filter(
                (act) => act.date_id === calcDateID(dates[i])
            )
        );
    }
    
    return rtn;
}