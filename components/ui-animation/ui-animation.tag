require('lib/animate.css');

<ui-animation>
    <style scoped>
        :scope {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    </style>

    <yield />

    <script>
        // 有一样的动画控制属性，父容器动画和子元素动画可以同时进行，常见的控制属性，如：duration、delay、count
        // 内置一些基础动画，比如fadeIn，fadeOut，zoomIn，zoomOut等等，可以设置动画的按序执行
        // 内置一些常用的delay时间class，供选择
        var styles = require('./ui-animation.css');
        var injectStyle = require('lib/injectStyle');

        this.tagName = 'ui-animation';
        this.animationName = this.opts.name;
        this.animationDelay = 'delay_' + this.opts.delay;
        this.animationDuration = 'duration_' + this.opts.duration;
        this.animationCount = 'count_' + this.opts.count;

        console.log(styles);

        function injectDurationStyle(){

        }

        function injectDelayStyle(){

        }

        this.on('mount', function(){
            console.log('animation mounted');
            $(this.root)
                .addClass( styles[ this.animationName ] )
                .addClass( styles[ this.animationDuration ] )
                .addClass( styles[ this.animationDelay ] )
                .addClass( styles[ this.animationCount ] );
        });
    </script>
</ui-animation>
