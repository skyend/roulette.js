export default class Part {
  constructor(partElement, worldRect) {
    this.partElement = partElement;
    this.x = 0;
    this.y = 0;
    this.translateXPerSecond = 0;
    this.marginX = 0;
    this.xReductionPercentagePerSecond = 0;
    this.minTranslateXPerSecond = 0;
    this.isTarget = false;
    this.onStopRequest = null;

    this.worldRect = worldRect;
    this.paddingElement = partElement.cloneNode();
    this.paddingElement.innerHTML = this.partElement.innerHTML;
    this.paddingElement.style.display = 'none';
    this.partElement.parentNode.appendChild(this.paddingElement);
    this.width = this.partElement.offsetWidth;

    this.paddingX = 0;
    this.enabledPadding = false;
  }

  processing(elapsed, delta, current) {
    const velocity = this.translateXPerSecond / 1000;
    const stride = velocity * delta;

    if (this.worldRect.width < this.x + this.marginX) {
      this.x = (this.x + this.marginX) - this.worldRect.width;
    }

    if (this.x + this.marginX + this.width > this.worldRect.width) {
      this.enabledPadding = true;

      this.paddingX = this.width - (this.worldRect.width - this.x + this.width + this.marginX) + this.marginX;
    } else {
      this.enabledPadding = false;
    }

    this.x += stride;

    this.translateXPerSecond = Math.max(
      this.minTranslateXPerSecond,
      this.translateXPerSecond * (1 - this.xReductionPercentagePerSecond / 1000 * delta)
    );

    if (this.translateXPerSecond === this.minTranslateXPerSecond && this.isTarget) {

      if (this.x + this.marginX > this.worldRect.width / 2 - (this.width / 2) &&
        this.x + this.marginX < this.worldRect.width / 2 + (this.width / 2)) {
        if (typeof this.onStopRequest === 'function') {
          this.onStopRequest(this.partElement);
        }
      }
    }
  }

  render() {
    this.partElement.style.transform = 'translatex(' + this.x + 'px)';

    if (this.enabledPadding) {
      this.paddingElement.style.display = 'inline-block';
      this.paddingElement.style.transform = 'translatex(' + this.paddingX + 'px)';
    } else {
      this.paddingElement.style.display = 'none';
    }
  }

  destroy() {
    this.partElement.parentNode.removeChild(this.paddingElement);
  }
}
