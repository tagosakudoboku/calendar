import { watch } from "vue";

export function isToday(date)
{
    const local_date = new Date();
    return local_date === date;
}

export function isSameDateID(a, b) 
{
    return calcDateID(a)===calcDateID(b);
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
/**
 * その日を含む月を返す
 * @param {*} date 
 * 
 */
export function getThisMonth(date)
{
    const l_date = new Date(date);
    const first_date = new Date(l_date.getFullYear(), l_date.getMonth(), 1);
    const last_date = new Date(l_date.getFullYear(), l_date.getMonth()+1, 0);
    const rtn = [];
    while (first_date <= last_date) {
        rtn.push(new Date(first_date));
        first_date.setDate(first_date.getDate()+1);
    }
    return rtn;
}

export function getThatDates(date, offset=7)
{
    if (offset === 7) {
        return getThisWeek(date);
    }else {
        let d = new Date(date);
        d.setDate(d.getDate() - offset);
        
        const day = new Date(d);
        let rtn = [];
        for (let i=0;i<offset;++i) {
            rtn.push(new Date(day));
            day.setDate(day.getDate()+1);
        }
        return rtn;
    }
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

export function calcActivityID()
{
    return crypto.randomUUID();
}

export function calcDateIDFromPosition(e,)
{

}

export function convert2ActivityObj(param, options = {})
{
    const start_time = options.start_time ?? param.start_time;
    const end_time = options.end_time ?? param.end_time;

    return {
        'id': options.id || param.id || calcActivityID(),
        'date_id': calcDateID(start_time),
        'title': options.title || param.title || "Undefined",
        'start_time': new Date(start_time),
        'end_time': new Date(end_time),
        'description':param.description,
        'color': options.color || param.color || '#ccc',
        'owner': '',
        'height': calcHeight(start_time, end_time),
        'width': 88,
        'top':  calcTop(start_time),
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
    const activities = [];

    let start_time = new Date(activity.start_time);
    let end_time = new Date(activity.end_time);

    while (!isSameDateID(start_time, end_time)) {

        const day_end = new Date(
            start_time.getFullYear(),
            start_time.getMonth(),
            start_time.getDate(),
            23, 59, 59, 999
        );

        //end_timeを使って
        let act = convert2ActivityObj(activity, {'end_time': day_end});
        activities.push(act);

        // 翌日の開始時刻を設定
        start_time = new Date(day_end);
        start_time.setSeconds(start_time.getSeconds() + 1);
    }

    //start_timeを使って
    let last_act = convert2ActivityObj(activity, {'start_time': start_time});
    activities.push(last_act);
    return activities;
}

/**
 * 開始時刻の順でソートする
 * @param {*} activities 
 */
export function sortActivities(activities)
{
    return activities.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
}

function isOverlapping(act1, act2)
{
    const start1 = new Date(act1.start_time).getTime();
    const end1 = new Date(act1.end_time).getTime();
    const start2 = new Date(act2.start_time).getTime();
    const end2 = new Date(act2.end_time).getTime();

    return end1 > start2 && start1 < end2;
}

/**
 * @from chatGPT
 * @param {*} activities 
 * @returns 
 */
function doOverlapping(activities)
{
    let local_acts = sortActivities(activities);

    // 各イベントに重なりグループ情報を追加
    const overlappingGroups = [];
    let currentGroup = [local_acts[0]];

    for (let i=1;i<local_acts.length;++i) {
        const current = local_acts[i];
        const previous = local_acts[i - 1];

        if(isOverlapping(current, previous)) {
            currentGroup.push(current);
        } else {
            overlappingGroups.push(currentGroup);
            currentGroup = [current];
        }
    }

    // 最後のグループを追加
    overlappingGroups.push(currentGroup);


    // グループごとに幅と位置を計算
    overlappingGroups.forEach(group => {
        const groupSize = group.length;
        
        const minWidth = 0.1;  // 最小幅を設定（例：10%）

        group.forEach((act, index) => {
            act.width =(act.width/ groupSize); 
            act.left = index * act.width; // 左端の位置を計算
        });
    });
    return local_acts;
}

export function runCalendar(activities, date = new Date(), offset = 7)
{
    /*
    let local_acts = activities.map(
        (param) => {return convert2ActivityObj(param)}
    );*/

    let local_acts = activities.flatMap((act)=>splitActivity(convert2ActivityObj(act)));
    
    local_acts =doOverlapping(local_acts);
    
    // local_acts.push(local_acts.map((act) => splitActivity(act)));
    let dates = getThisWeek(date);
    switch (offset) {
        case 1:
            dates = [date];
            break;
        case 5:
            dates = get5Days(date);
            break;
        case 29:
        case 30:        
        case 31:
            dates = getThisMonth(date);
            break;
    }
    
    const rtn = [];
    for (let i=0;i<dates.length;++i) {
        rtn[i] = [];
        rtn[i].push(
            ...local_acts.filter(
                (act) => act.date_id === calcDateID(dates[i])
            )
        );
    }
    
    return rtn;
}

/**
 * activitiesからactを除いた配列を返す
 * @param {*} activities 
 * @param {*} act 
 * @returns 
 */
export function deleteActivity(activities, act)
{
    
    /**
     * @todo サーバーからfetchした生データはすでにidが付与されている前提がない
     */
    const rtn = activities.filter((item) => item.id !== act.id );    
    // const rtn = activities;
    // rtn.pop();
    
    return rtn;
}

export function editActs(acts)
{
    const l_acts = acts;
    const rtn = l_acts.map((act) => {
        act.id = calcActivityID();
        return act;
    });
    return rtn;
}

/**
 * ピクセル値から時間を返す
 * @param {*} y 
 */
export function calcTimeFromY(y)
{
    const h = Math.floor(y/60);
    const m = y%60;
    return [h,m];
}

export function getDateSeq(date = new Date(), offset = 7)
{
    let dates = getThisWeek(date);
    switch (offset) {
        case 1:
            dates = [date];
            break;
        case 5:
            dates = get5Days(date);
            break;
        case 29:
        case 30:
        case 31:
            dates = getThisMonth(date);
            break;
    }
    return dates;
}

export function getNumberOfDaysInThisMonth(date = new Date())
{
    let d = new Date(date);
    d.setMonth(d.getMonth()+1, 0);
    return d.getDate();
}

/**
 * 基準日の周辺5日感を適当に返す
 * @param {*} date 
 * @returns 
 */
export function get5Days(date = new Date())
{
    let d = new Date(date);
    d.setDate(d.getDate() -2);

    let rtn = [];
    for (let i=0;i<5;++i) {
        rtn.push(new Date(d));
        d.setDate(d.getDate()+1);
    }
    return rtn;
}

export function getThisMonthFirstDate(date = new Date())
{
    const d = new Date(date.getFullYear(), date.getMonth(), 1);
    return d;
}