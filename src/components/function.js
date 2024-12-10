import { watch } from "vue";

export function isToday(date)
{
    const local_date = new Date();
    return local_date === date;
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

}

export function convert2ActivityObj(param)
{
    return {

    };
}

export function calcHeight()
{

}

export function calcTop()
{
    
}