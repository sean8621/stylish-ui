import Message from "./src/message.vue";
import { h, render } from "vue";

let messageInstaceList: HTMLDivElement[] = [];

const MESSAGE_START_TOP = 56; //起始的高度
const MESSAGE_HEIGHT = 44; //组件高度
const MESSAGE_GAP = 16; //组件间距

const setDestoryClock = (element: HTMLElement, time = 3000) => {
  setTimeout(() => {
    destoryMessageElement(element);
  }, time);
};

const destoryMessageElement = (element: HTMLElement) => {
  if (!element.parentElement?.contains(element)) return;
  element.parentElement?.removeChild(element);
  messageInstaceList = messageInstaceList.filter(
    (item: HTMLElement) => item !== element
  );
  messageInstaceList.forEach((item: HTMLElement, index: number) => {
    item.style.top = `${
      MESSAGE_START_TOP + index * (MESSAGE_HEIGHT + MESSAGE_GAP)
    }px`;
  });
};

type MessageConfig = {
  duration?: number;
  message?: string;
  showClose?: boolean;
  type?: string;
};
export const SMessage = (config: MessageConfig) => {
  const VNode = h(Message, {
    ...config,
    onClose(element: HTMLElement) {
      destoryMessageElement(element);
    },
  });
  const container = document.createElement("div");
  container.setAttribute("class", "s-message-container");
  document.body.append(container);
  messageInstaceList.push(container);
  container.style.top =
    MESSAGE_START_TOP +
    (messageInstaceList.length - 1) * (MESSAGE_HEIGHT + MESSAGE_GAP) +
    "px";
  render(VNode, container);
  setDestoryClock(container, config.duration);
};

export default SMessage;
