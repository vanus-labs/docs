import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    window.onclick = function(){
        $('#__docusaurus img').unbind();
        $('#__docusaurus img').imgbox({
            zoom:true,
            drag:true,
            scale:1
        });
    }
    window.onload = function(){
        $('body').trigger('click');
    }
}
