import Part from './part';

export class Roulette {

  constructor(targetElementSelector, {
    translateXPerSecond = 1000,
    minTranslateXPerSecond = 10,
    fps = 60,
    partWidth,
    xReductionPercentagePerSecond = 0,
    marginX = 0,
    cursorElement,
    onStop = null
  } = {}) {
    this.translateXPerSecond = translateXPerSecond;
    this.minTranslateXPerSecond = minTranslateXPerSecond;
    this.fps = 60;
    this.targetElement = document.querySelector(targetElementSelector);
    this.partWidth = partWidth;
    this.xReductionPercentagePerSecond = xReductionPercentagePerSecond;
    this.marginX = marginX;
    this.centerCursorElement = cursorElement;
    this.onStop = onStop;

    this.parts = [];
  }

  init() {

    this.destroy();

    const pane = this.targetElement.querySelector('.roulette-pane');
    const partElements = pane.querySelectorAll('.roulette-part');
    const worldRect = {
      width: this.partWidth * partElements.length + ((this.marginX * 2) * (partElements.length + 0.5)),
      height: 60
    };

    pane.style.width = worldRect.width + 'px';

    pane.style.overflow = 'hidden';

    for (let i = 0; i < partElements.length ; i++) {
      let part = new Part(partElements[i], worldRect);

      part.xReductionPercentagePerSecond = this.xReductionPercentagePerSecond;
      part.marginX = this.marginX;
      part.x = (this.partWidth) * i + (this.marginX * i) + (this.marginX * (i + 1));

      this.parts.push(part);
      this.render();
    }

    if (this.centerCursorElement) {
      const width = this.centerCursorElement.offsetWidth;

      this.centerCursorElement.style.left = (worldRect.width / 2 - width / 2) + 'px';
    }
  }

  destroy() {
    for (let i = 0; i < this.parts.length ; i++) {
      this.parts[i].destroy();
    }

    this.parts = [];
  }

  start({stopTarget}) {
    this.stopTarget = stopTarget;

    this.stop();
    this.startTime = Date.now();
    this.prevTime = this.startTime;

    for (let i = 0; i < this.parts.length ; i++) {
      this.parts[i].translateXPerSecond = this.translateXPerSecond;
      this.parts[i].minTranslateXPerSecond = this.minTranslateXPerSecond;

      if (this.parts[i].partElement === this.stopTarget) {
        this.parts[i].isTarget = true;
        this.parts[i].onStopRequest = (stopElement) => this.onArrival(stopElement);
      } else {
        this.parts[i].isTarget = false;
      }
    }

    this.itv = setInterval(this.loop.bind(this), 1000 / this.fps);
  }

  stop() {
    if (this.itv) {
      clearInterval(this.itv);
    }
  }

  onArrival(stopElement) {
    this.stop();
    if (typeof this.onStop === 'function') {
      this.onStop(stopElement);
    }
  }

  loop() {
    const current = Date.now();
    const elapsed = current - this.startTime;
    const delta = current - this.prevTime;

    this.prevTime = current;

    this.processing(elapsed, delta, current);
    this.render();
  }

  processing(elapsed, delta, current) {
    for (let i = 0; i < this.parts.length ; i++) {
      this.parts[i].processing(elapsed, delta, current);
    }
  }

  render() {
    for (let i = 0; i < this.parts.length ; i++) {
      this.parts[i].render();
    }
  }
}

Roulette.Author = 'Seung Hun Han ( skyend@github, theskyend0@gmail.com )';
