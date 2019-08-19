(function ($) {
    function Swiper(options, wrap) {
        this.wrap = wrap;
        this.width = options.width;
        this.height = options.height;
        this.imgList = options.imgList;
        this.animate = options.animate;
        this.showBtn = options.showBtn;
        this.changeImg = options.changeImg;
        this.length = options.imgList.length;
        this.flag = false;
        this.index = 0;
        this.timer = null;
        this.init = function () {
            this.createDom();
            this.addCss();
            this.bindEvent();
            this.changeImage();
        }
    }
    Swiper.prototype.createDom = function () {
        var wrap = $(this.wrap);
        var oUl = $("<ul></ul>");
        var listWrap = $("<div class='list'></div>");
        for (var i = 0; i < this.length; i++) {
            $("<li><a href=" + this.imgList[i].href + "><img src=" + this.imgList[i].src + " /></a></li>").appendTo(oUl);
            $("<span></span>").appendTo(listWrap).get(0).index = i;
        }
        wrap.append(oUl);
        if (this.animate == "animate") {
            $("ul li", this.wrap).eq(this.length - 1).clone().prependTo(oUl);
            this.length++;
        }
        wrap.append("<span class='btn btn-left'><</span>").append("<span class='btn btn-right'>></span>");
        if (this.showBtn) {
            wrap.append(listWrap)
        }
    }
    Swiper.prototype.addCss = function () {
        $(this.wrap).css({
            width: this.width,
            height: this.height,
            border: "1px solid red",
            position: "relative",
            overflow: "hidden"
        })
        $("*", this.wrap).css({
            padding: 0,
            margin: 0,
            textDecoration: "none",
            listStyle: "none"
        })
        if (this.animate == "fade") {
            $("ul li img", this.wrap).css({
                width: this.width,
                height: this.height,
                position: "absolute",
                display: "none"
            })
        } else if (this.animate == "animate") {
            console.log(this.wrap)
            $("ul li img", this.wrap).css({
                width: this.width,
                height: this.height,
                float: "left",
            })
            $("ul", this.wrap).css({
                width: this.length * this.width,
                position: "absolute",
                left: 0,
            })

        }
        $("span.btn", this.wrap).css({
            width: 40,
            height: 40,
            position: "absolute",
            top: this.height / 2 - 20,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#fff",
            lineHeight: "40px",
            textAlign: "center",
            cursor: "pointer"
        }).filter(".btn-right").css({
            right: 0,
        }).end().filter(".btn-left").css({
            left: 0
        })
        $("div", this.wrap).css({
            position: "absolute",
            transform: "translate(-50%,-50%)",
            bottom: 10,
            left: "50%"
        }).find("span").css({
            display: "inline-block",
            width: 10,
            height: 10,
            borderRadius: "5px",
            margin: "0 5px",
            backgroundColor: "#fff",
            cursor: "pointer"
        })
        $("div span", this.wrap).eq(0).css({
            backgroundColor: "#f40"
        })
        $("ul li img", this.wrap).eq(0).css({
            display: "block",
        })
    }
    Swiper.prototype.bindEvent = function () {
        var self = this;
        $(".btn-right", self.wrap).on("click", function () {
            if (self.flag) {
                return false;
            }
            if (self.index == self.length - 1) {
                self.index = 0;
            } else {
                self.index++
            }
            if (self.animate == "animate") {
                self.flag = true;
                var len = parseInt($("ul", self.wrap).css("left"));
                if (len == -(self.length - 1) * self.width) {
                    $("ul", self.wrap).css({
                        left: 0
                    })
                    self.index = 1;
                }
                changeShowImg(self.index);
                styleBtn(self.index);
            } else {
                changeShowImg(self.index);
                styleBtn(self.index);
            }

        })
        $(".btn-left", self.wrap).on("click", function () {
            if (self.flag) {
                return false;
            }
            if (self.index == 0) {
                self.index = self.length - 1;
            } else {
                self.index--
            }
            if (self.animate == "animate") {
                if (parseInt($("ul", self.wrap).css("left")) == 0) {
                    $("ul", self.wrap).css({
                        left: -(self.length - 1) * self.width
                    })
                    self.index = self.length - 2;
                }
                changeShowImg(self.index);
                styleBtn(self.index);
            } else {
                changeShowImg(self.index);
                styleBtn(self.index);
            }

        })
        function changeShowImg(index) {
            self.flag = true;
            if (self.animate == "animate") {
                $("ul", self.wrap).animate({
                    left: -self.index * self.width
                }, 1000, function () {
                    self.flag = false
                })
            } else {
                $("ul li img", self.wrap).fadeOut(1000); // 解决方式所有都给我淡出
                $("ul li img", self.wrap).eq(index).fadeIn(1000, function () {
                    self.flag = false;
                });
            }

        }
        function styleBtn(index) {
            if (self.animate == "animate") {
                if (self.length - 1 == index) {
                    index = 0;
                }
            }
            $("div span", self.wrap).css({
                backgroundColor: "#fff"
            }).eq(index).css({
                backgroundColor: "#f40"
            })
        }
        $("div span", self.wrap).click(function () {
            self.index = this.index;
            changeShowImg(this.index)
            $(this).css({
                backgroundColor: "#fff"
            })
            styleBtn(this.index);
        })
        $(self.wrap).on("mouseenter", function () {
            clearInterval(self.timer)
        })
        $(self.wrap).on("mouseleave", function () {
            self.changeImage();
        })
    }
    Swiper.prototype.changeImage = function () {
        var self = this;
        if (self.changeImg) {
            self.timer = setInterval(function () {
                $(".btn-right", self.wrap).trigger('click');
            }, 3000)
        }
    }
    $.fn.extend({
        swiper: function (options) {
            var obj = new Swiper(options, this);
            obj.init();
        }
    })
})(window.$)