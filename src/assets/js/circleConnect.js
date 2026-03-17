class circle {
  constructor(dom, setting) {
    this.canvas = document.createElement("canvas");
    dom.appendChild(this.canvas);
    this.canvas.width = setting.width;
    this.canvas.height = setting.height;
    this.ctx = this.canvas.getContext("2d");

    // 创建随机状态小球
    this.arr = Array.from(
      new Array(
        Math.round(
          setting.num || (this.canvas.width * this.canvas.height) / 10000
        )
      )
    ).map(() => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      speed: Math.random() * 0.4 + 0.1,
      xDir: Math.random() > 0.5 ? -1 : 1,
      yDir: Math.random() > 0.5 ? -1 : 1,
      r: 2
    }));
    // 小球连线距离
    this.dist = 100;

    this.animation();

    window.addEventListener("resize", this.resizeHandler);
  }
  resizeHandler = () => {
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
  };

  // 计算小球位置并判断方向与绘制
  drawCircle() {
    this.arr.forEach(item => {
      item.x += item.xDir * item.speed;
      item.y += item.yDir * item.speed;

      item.x <= 0 && (item.xDir = 1);
      item.x > this.canvas.width - 1 &&
        ((item.xDir = -1), (item.x = this.canvas.width - 1));

      item.y <= 0 && (item.yDir = 1);
      item.y > this.canvas.height - 1 &&
        ((item.yDir = -1), (item.y = this.canvas.height - 1));

      this.ctx.beginPath();
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.arc(item.x, item.y, item.r, 0, 2 * Math.PI);
      this.ctx.fill();
    });
  }

  // 计算连线距离内的小球，并插入坐标至lineArr
  calcLine() {
    var arr = this.arr.concat();
    this.lineArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      for (let y = i + 1; y < len; y++) {
        let val = Math.sqrt(
          Math.pow(arr[i].x - arr[y].x, 2) + Math.pow(arr[i].y - arr[y].y, 2),
          2
        );
        if (val < this.dist) {
          this.lineArr.push({
            start: arr[i],
            end: arr[y],
            val: val,
            ratio: val / this.dist
          });
        }
      }
    }
  }

  // 绘制小球
  drawLine() {
    while (this.lineArr.length) {
      this.ctx.beginPath();
      let item = this.lineArr.shift();
      // let c = 255 - 255 * item.ratio;
      this.ctx.strokeStyle = `rgba(${255},${255},${255}, ${1 - item.ratio})`;
      this.ctx.moveTo(item.start.x, item.start.y);
      this.ctx.lineTo(item.end.x, item.end.y);
      this.ctx.stroke();
    }
  }

  // 动画过渡
  animation() {
    this.canvas.width = this.canvas.width;
    this.drawCircle();
    this.calcLine();
    this.drawLine();
    this.timer = setTimeout(() => {
      this.animation();
    }, 1000 / 60);
  }

  distory() {
    clearTimeout(this.timer);
    window.removeEventListener("resize", this.resizeHandler);
    this.canvas.remove();
  }
}

export default circle;
