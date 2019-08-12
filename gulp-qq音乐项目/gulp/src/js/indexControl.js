(function ($, root) {
    function Contorl() {
        this.index = 0;
    }
    Contorl.prototype = {
        prev: function () {
            this.index--;
            if (this.index == -1) {
                this.index = len - 1
            }
            return this.index;
        },
        next: function () {
            this.index++;
            if(this.index == len){
                this.index = 0
            }
            return this.index;
        }
    }
    root.ContorlIndex = new Contorl()
})(window.$, window.player || (window.player = {}))