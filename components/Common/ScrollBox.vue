<script setup>
const props = defineProps({
  autoWidth: {
    type: Boolean,
    default: () => false,
  },
  height: {
    type: Number,
    default: () => 200,
  },
  id: {
    type: String,
    required: true,
    default: () => 'id',
  },
  paused: {
    type: Boolean,
    default: () => false,
  },
  repeat: {
    type: Number,
    default: () => 10,
  },
  reverse: {
    type: Boolean,
    default: () => false,
  },
  space: {
    type: Number,
    default: () => 200,
  },
  speed: {
    type: Number,
    default: () => 1500,
  },
  vertical: {
    type: Boolean,
    default: () => false,
  },
  width: {
    type: Number,
    default: () => 100,
  },
});

let container = ref(null);
let containerWidth = ref(0);
let items = ref([]);
let itemsLength = ref(0);
const itemsWidth = ref([]);
let style = ref(null);

const styleElement = computed(() => `
      animation-duration: ${props.speed}ms;
      animation-direction: ${props.reverse ? 'reverse' : 'normal'};
      animation-play-state: ${props.paused ? 'paused' : 'running'};
      height: ${props.vertical ? props.height : 'auto'}
    `);

onMounted(() => {
  style = useCssModule();
  setContainer();
  setItems();
  setItemsLength();
  calculateContainerWidth();
  setContainerWidth();
  cloneItems();
});

function calculateContainerWidth() {
  for (let index = 0; index < itemsLength; index++) {
    itemsWidth.value.push(items[index].offsetWidth);
    setItemSpace(index);

    if (props.autoWidth) {
      setImageObjectFit(index);
    } else {
      setItemWidth(index);
    }
  }
  containerWidth = itemsWidth.value.reduce((a, b) => a + b, 0);
}

function cloneItems() {
  const repeatCounter = getRepeatCounter();
  for (let index = 0; index < repeatCounter; index++) {
    container.appendChild(items[index].cloneNode(true));
  }
}

function getRepeatCounter() {
  return items.length * props.repeat;
}

function setItems() {
  items = container.children;
}

function setItemsLength() {
  itemsLength = items.length;
}

function setItemSpace(index) {
  props.vertical ? items[index].style.marginBottom = `${props.space}px` : items[index].style.marginRight = `${props.space}px`;
}

function setItemWidth(index) {
  items[index].style.minWidth = `${props.width}px`;
}

function setImageObjectFit(index) {
  items[index].style.objectFit = 'contain';
}

function setContainer() {
  container = document.querySelector(`#${props.id} .${props.vertical ? style.marqueeSliderContainerVertical : style.marqueeSliderContainer}`);
}

function setContainerWidth() {
  if (props.vertical) {
    container.style.width = 'auto';
  } else {
    if (props.autoWidth) {
      container.style.width = `${
        itemsLength * (containerWidth / itemsLength + props.space)
      }px`;
    } else {
      container.style.width = `${itemsLength * (props.width + props.space)}px`;
    }
  }
}
</script>

<template>
    <div :id="id" :class="$style.marqueeSlider">
        <div
            :class="vertical ? $style.marqueeSliderContainerVertical : $style.marqueeSliderContainer"
            :style="styleElement
        ">
            <slot />
        </div>
    </div>
</template>

<style lang="css" module>
.marqueeSlider {
    overflow: hidden;
}

.marqueeSliderContainer {
    width: 100%;
    animation-name: horizontalAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: flex;
}

.marqueeSliderContainerVertical {
    height: fit-content;
    animation-name: verticalAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    display: flex;
    flex-direction: column;
}

@keyframes horizontalAnimation {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes verticalAnimation {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}
</style>
