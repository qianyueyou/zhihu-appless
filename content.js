var pathname = location.pathname;
var url = '';
var prefix = 'https://wjrsbu.smartapps.cn/zhihu/question?id=' ;

/* TODO Remove trailing query string parameters. */
if (pathname.startsWith('/question/')) {

    pathname = pathname.substring(10);
    var slash = pathname.indexOf('/');

    if (pathname.includes('/answer/')) {

        pathname = pathname.substring(pathname.indexOf('/answer/') + 8);
        slash = pathname.indexOf('/');

        prefix = 'https://wjrsbu.smartapps.cn/zhihu/answer?id=';
    }

    if (slash == -1) {
        slash = pathname.indexOf('?');
    }

    if (slash != -1) {
        pathname = pathname.substring(0, slash);
    }

    window.location = prefix + pathname;
}
