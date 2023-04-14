import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
    window.onclick = function(){
        $('main img').unbind();
        $('main img').imgbox({
            zoom:true,
            drag:true,
            scale:1
        });
    }
    window.onload = function(){
        $('body').trigger('click');
    }
}
