import { gsap } from 'gsap'
import { TimelineMax as Timeline, Power1 } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);



let prevPath = null;

const getDefaultTimeline = (node: any, delay: any) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelector('.content');
    const contentInner = node.querySelector('.content--inner');

    timeline
        .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn });
        // .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut });
        // .from(contentInner, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });

    return timeline;
};

const getHomeTimeline = (node: any, delay: any) => {
    const timeline = new Timeline({ paused: true });
    const texts = node.querySelectorAll('h1 > div');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay });
        // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut });

    return timeline;
};

export const play = (pathname: any, node: any, appears: any) => {
    const delay = appears ? 0 : 0.5;
    let timeline: any;

    // if (pathname === '/')
    //     timeline = getHomeTimeline(node, delay);
    // else
        timeline = getDefaultTimeline(node, delay);

    (<any>window)
        .loadPromise
        .then(() => requestAnimationFrame(() => timeline.play()))
};

export const exit = (node: any) => {
    const timeline = new Timeline({ paused: true });

    timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
    timeline.play();
};


export const animateModal = (node: any, appears: any) => {
    const delay = appears ? 0 : 0.5;

    const timeline = new Timeline({ paused: true });
    const modal = node.querySelectorAll('.login-modal');

    timeline
        .from(node, 0.3, { display: 'block', autoAlpha: 0, delay, ease: Power1.easeIn })
        .from(modal, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut });

    requestAnimationFrame(() => timeline.play())
};