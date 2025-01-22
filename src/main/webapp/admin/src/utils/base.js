const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmpt64q/",
            name: "ssmpt64q",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmpt64q/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的网络在线考试系统"
        } 
    }
}
export default base
