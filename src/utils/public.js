import Router from '../router';
import request from './reques';

export function gotoUrl(url) {
    Router.push(url);
}

function getData (data){
    return request({
        // url: 'http:///admin/message/add',
        method: 'post',
        data
    });
}


export default getData;