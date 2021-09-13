export const is401 = (on_fail) => function(res){
    if(res.status===401){
        on_fail();
        localStorage.removeItem('token');
        throw "401 Unauthorized";
    }
    // TODO: Save the reissued token here
    return res.json();
}
