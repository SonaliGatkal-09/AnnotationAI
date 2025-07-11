"use strict";
(self["webpackChunkanotate_imagesimilaritysearch"] = self["webpackChunkanotate_imagesimilaritysearch"] || []).push([[1243],{

/***/ 1243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Drawer: () => (/* binding */ Drawer),
/* harmony export */   NestedRoot: () => (/* binding */ NestedRoot),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6141);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6587);
'use client';
function __insertCSS(code) {
  if (!code || typeof document == 'undefined') return
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style')
  style.type = 'text/css'
  head.appendChild(style)
  ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
}





const DrawerContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext({
    drawerRef: {
        current: null
    },
    overlayRef: {
        current: null
    },
    onPress: ()=>{},
    onRelease: ()=>{},
    onDrag: ()=>{},
    onNestedDrag: ()=>{},
    onNestedOpenChange: ()=>{},
    onNestedRelease: ()=>{},
    openProp: undefined,
    dismissible: false,
    isOpen: false,
    isDragging: false,
    keyboardIsOpen: {
        current: false
    },
    snapPointsOffset: null,
    snapPoints: null,
    modal: false,
    shouldFade: false,
    activeSnapPoint: null,
    onOpenChange: ()=>{},
    setActiveSnapPoint: ()=>{},
    closeDrawer: ()=>{},
    direction: 'bottom',
    shouldScaleBackground: false,
    setBackgroundColorOnScale: true,
    noBodyStyles: false
});
const useDrawerContext = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawerContext must be used within a Drawer.Root');
    }
    return context;
};

__insertCSS("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.data-vaul-dragging .data-vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-vaul-snap-points=false][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}");

// This code comes from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/overlays/src/usePreventScroll.ts
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function chain$1(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks){
            if (typeof callback === 'function') {
                callback(...args);
            }
        }
    };
}
function isMac() {
    return testPlatform(/^Mac/);
}
function isIPhone() {
    return testPlatform(/^iPhone/);
}
function isIPad() {
    return testPlatform(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
    return isIPhone() || isIPad();
}
function testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : undefined;
}
// @ts-ignore
const visualViewport = typeof document !== 'undefined' && window.visualViewport;
function isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getScrollParent(node) {
    if (isScrollable(node)) {
        node = node.parentElement;
    }
    while(node && !isScrollable(node)){
        node = node.parentElement;
    }
    return node || document.scrollingElement || document.documentElement;
}
// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let preventScrollCount = 0;
let restore;
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */ function usePreventScroll(options = {}) {
    let { isDisabled } = options;
    useIsomorphicLayoutEffect(()=>{
        if (isDisabled) {
            return;
        }
        preventScrollCount++;
        if (preventScrollCount === 1) {
            if (isIOS()) {
                restore = preventScrollMobileSafari();
            } else {
                restore = preventScrollStandard();
            }
        }
        return ()=>{
            preventScrollCount--;
            if (preventScrollCount === 0) {
                restore();
            }
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function preventScrollStandard() {
    return chain$1(setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = getScrollParent(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) {
            return;
        }
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (bottom === 0) {
            return;
        }
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
            e.preventDefault();
        }
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if (isInput(target) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if (isInput(target)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if (visualViewport) {
                    if (visualViewport.height < window.innerHeight) {
                        // If the keyboard is already visible, do this after one additional frame
                        // to wait for the transform to be removed.
                        requestAnimationFrame(()=>{
                            scrollIntoView(target);
                        });
                    } else {
                        // Otherwise, wait for the visual viewport to resize before scrolling so we can
                        // measure the correct position to scroll to.
                        visualViewport.addEventListener('resize', ()=>scrollIntoView(target), {
                            once: true
                        });
                    }
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = chain$1(setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = chain$1(addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), addEvent(document, 'focus', onFocus, true), addEvent(window, 'scroll', onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function addEvent(target, event, handler, options) {
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = getScrollParent(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            let targetBottom = target.getBoundingClientRect().bottom;
            const keyboardHeight = scrollable.getBoundingClientRect().bottom;
            if (targetBottom > keyboardHeight) {
                scrollable.scrollTop += targetTop - scrollableTop;
            }
        }
        // @ts-ignore
        target = scrollable.parentElement;
    }
}
function isInput(target) {
    return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}

// This code comes from https://github.com/radix-ui/primitives/tree/main/packages/react/compose-refs
/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>refs.forEach((ref)=>setRef(ref, node));
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return react__WEBPACK_IMPORTED_MODULE_1__.useCallback(composeRefs(...refs), refs);
}

const cache = new WeakMap();
function set(el, styles, ignoreCache = false) {
    if (!el || !(el instanceof HTMLElement)) return;
    let originalStyles = {};
    Object.entries(styles).forEach(([key, value])=>{
        if (key.startsWith('--')) {
            el.style.setProperty(key, value);
            return;
        }
        originalStyles[key] = el.style[key];
        el.style[key] = value;
    });
    if (ignoreCache) return;
    cache.set(el, originalStyles);
}
const isVertical = (direction)=>{
    switch(direction){
        case 'top':
        case 'bottom':
            return true;
        case 'left':
        case 'right':
            return false;
        default:
            return direction;
    }
};
function getTranslate(element, direction) {
    if (!element) {
        return null;
    }
    const style = window.getComputedStyle(element);
    const transform = // @ts-ignore
    style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
        return parseFloat(mat[1].split(', ')[isVertical(direction) ? 13 : 12]);
    }
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[isVertical(direction) ? 5 : 4]) : null;
}
function dampenValue(v) {
    return 8 * (Math.log(v + 1) - 2);
}
function assignStyle(element, style) {
    if (!element) return ()=>{};
    const prevStyle = element.style.cssText;
    Object.assign(element.style, style);
    return ()=>{
        element.style.cssText = prevStyle;
    };
}
/**
 * Receives functions as arguments and returns a new function that calls all.
 */ function chain(...fns) {
    return (...args)=>{
        for (const fn of fns){
            if (typeof fn === 'function') {
                // @ts-ignore
                fn(...args);
            }
        }
    };
}

const TRANSITIONS = {
    DURATION: 0.5,
    EASE: [
        0.32,
        0.72,
        0,
        1
    ]
};
const VELOCITY_THRESHOLD = 0.4;
const CLOSE_THRESHOLD = 0.25;
const SCROLL_LOCK_TIMEOUT = 100;
const BORDER_RADIUS = 8;
const NESTED_DISPLACEMENT = 16;
const WINDOW_TOP_OFFSET = 26;
const DRAG_CLASS = 'vaul-dragging';

// This code comes from https://github.com/radix-ui/primitives/blob/main/packages/react/use-controllable-state/src/useControllableState.tsx
function useCallbackRef(callback) {
    const callbackRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(callback);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        callbackRef.current = callback;
    });
    // https://github.com/facebook/react/issues/19240
    return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>(...args)=>callbackRef.current == null ? void 0 : callbackRef.current.call(callbackRef, ...args), []);
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(value);
    const handleChange = useCallbackRef(onChange);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = useCallbackRef(onChange);
    const setValue = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else {
            setUncontrolledProp(nextValue);
        }
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}

function useSnapPoints({ activeSnapPointProp, setActiveSnapPointProp, snapPoints, drawerRef, overlayRef, fadeFromIndex, onSnapPointChange, direction = 'bottom' }) {
    const [activeSnapPoint, setActiveSnapPoint] = useControllableState({
        prop: activeSnapPointProp,
        defaultProp: snapPoints == null ? void 0 : snapPoints[0],
        onChange: setActiveSnapPointProp
    });
    const [windowDimensions, setWindowDimensions] = react__WEBPACK_IMPORTED_MODULE_1__.useState(typeof window !== 'undefined' ? {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    } : undefined);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        function onResize() {
            setWindowDimensions({
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            });
        }
        window.addEventListener('resize', onResize);
        return ()=>window.removeEventListener('resize', onResize);
    }, []);
    const isLastSnapPoint = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>activeSnapPoint === (snapPoints == null ? void 0 : snapPoints[snapPoints.length - 1]) || null, [
        snapPoints,
        activeSnapPoint
    ]);
    const shouldFade = snapPoints && snapPoints.length > 0 && (fadeFromIndex || fadeFromIndex === 0) && !Number.isNaN(fadeFromIndex) && snapPoints[fadeFromIndex] === activeSnapPoint || !snapPoints;
    const activeSnapPointIndex = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>snapPoints == null ? void 0 : snapPoints.findIndex((snapPoint)=>snapPoint === activeSnapPoint), [
        snapPoints,
        activeSnapPoint
    ]);
    const snapPointsOffset = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>{
        var _snapPoints_map;
        return (_snapPoints_map = snapPoints == null ? void 0 : snapPoints.map((snapPoint)=>{
            const isPx = typeof snapPoint === 'string';
            let snapPointAsNumber = 0;
            if (isPx) {
                snapPointAsNumber = parseInt(snapPoint, 10);
            }
            if (isVertical(direction)) {
                const height = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * windowDimensions.innerHeight : 0;
                if (windowDimensions) {
                    return direction === 'bottom' ? windowDimensions.innerHeight - height : -windowDimensions.innerHeight + height;
                }
                return height;
            }
            const width = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * windowDimensions.innerWidth : 0;
            if (windowDimensions) {
                return direction === 'right' ? windowDimensions.innerWidth - width : -windowDimensions.innerWidth + width;
            }
            return width;
        })) != null ? _snapPoints_map : [];
    }, [
        snapPoints,
        windowDimensions
    ]);
    const activeSnapPointOffset = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(()=>activeSnapPointIndex !== null ? snapPointsOffset == null ? void 0 : snapPointsOffset[activeSnapPointIndex] : null, [
        snapPointsOffset,
        activeSnapPointIndex
    ]);
    const snapToPoint = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((dimension)=>{
        var _snapPointsOffset_findIndex;
        const newSnapPointIndex = (_snapPointsOffset_findIndex = snapPointsOffset == null ? void 0 : snapPointsOffset.findIndex((snapPointDim)=>snapPointDim === dimension)) != null ? _snapPointsOffset_findIndex : null;
        onSnapPointChange(newSnapPointIndex);
        set(drawerRef.current, {
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
            transform: isVertical(direction) ? `translate3d(0, ${dimension}px, 0)` : `translate3d(${dimension}px, 0, 0)`
        });
        if (snapPointsOffset && newSnapPointIndex !== snapPointsOffset.length - 1 && newSnapPointIndex !== fadeFromIndex) {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                opacity: '0'
            });
        } else {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                opacity: '1'
            });
        }
        setActiveSnapPoint(newSnapPointIndex !== null ? snapPoints == null ? void 0 : snapPoints[newSnapPointIndex] : null);
    }, [
        drawerRef.current,
        snapPoints,
        snapPointsOffset,
        fadeFromIndex,
        overlayRef,
        setActiveSnapPoint
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (activeSnapPoint || activeSnapPointProp) {
            var _snapPoints_findIndex;
            const newIndex = (_snapPoints_findIndex = snapPoints == null ? void 0 : snapPoints.findIndex((snapPoint)=>snapPoint === activeSnapPointProp || snapPoint === activeSnapPoint)) != null ? _snapPoints_findIndex : -1;
            if (snapPointsOffset && newIndex !== -1 && typeof snapPointsOffset[newIndex] === 'number') {
                snapToPoint(snapPointsOffset[newIndex]);
            }
        }
    }, [
        activeSnapPoint,
        activeSnapPointProp,
        snapPoints,
        snapPointsOffset,
        snapToPoint
    ]);
    function onRelease({ draggedDistance, closeDrawer, velocity, dismissible }) {
        if (fadeFromIndex === undefined) return;
        const currentPosition = direction === 'bottom' || direction === 'right' ? (activeSnapPointOffset != null ? activeSnapPointOffset : 0) - draggedDistance : (activeSnapPointOffset != null ? activeSnapPointOffset : 0) + draggedDistance;
        const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
        const isFirst = activeSnapPointIndex === 0;
        const hasDraggedUp = draggedDistance > 0;
        if (isOverlaySnapPoint) {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`
            });
        }
        if (velocity > 2 && !hasDraggedUp) {
            if (dismissible) closeDrawer();
            else snapToPoint(snapPointsOffset[0]); // snap to initial point
            return;
        }
        if (velocity > 2 && hasDraggedUp && snapPointsOffset && snapPoints) {
            snapToPoint(snapPointsOffset[snapPoints.length - 1]);
            return;
        }
        // Find the closest snap point to the current position
        const closestSnapPoint = snapPointsOffset == null ? void 0 : snapPointsOffset.reduce((prev, curr)=>{
            if (typeof prev !== 'number' || typeof curr !== 'number') return prev;
            return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
        });
        const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * 0.4) {
            const dragDirection = hasDraggedUp ? 1 : -1; // 1 = up, -1 = down
            // Don't do anything if we swipe upwards while being on the last snap point
            if (dragDirection > 0 && isLastSnapPoint) {
                snapToPoint(snapPointsOffset[snapPoints.length - 1]);
                return;
            }
            if (isFirst && dragDirection < 0 && dismissible) {
                closeDrawer();
            }
            if (activeSnapPointIndex === null) return;
            snapToPoint(snapPointsOffset[activeSnapPointIndex + dragDirection]);
            return;
        }
        snapToPoint(closestSnapPoint);
    }
    function onDrag({ draggedDistance }) {
        if (activeSnapPointOffset === null) return;
        const newValue = direction === 'bottom' || direction === 'right' ? activeSnapPointOffset - draggedDistance : activeSnapPointOffset + draggedDistance;
        // Don't do anything if we exceed the last(biggest) snap point
        if ((direction === 'bottom' || direction === 'right') && newValue < snapPointsOffset[snapPointsOffset.length - 1]) {
            return;
        }
        if ((direction === 'top' || direction === 'left') && newValue > snapPointsOffset[snapPointsOffset.length - 1]) {
            return;
        }
        set(drawerRef.current, {
            transform: isVertical(direction) ? `translate3d(0, ${newValue}px, 0)` : `translate3d(${newValue}px, 0, 0)`
        });
    }
    function getPercentageDragged(absDraggedDistance, isDraggingDown) {
        if (!snapPoints || typeof activeSnapPointIndex !== 'number' || !snapPointsOffset || fadeFromIndex === undefined) return null;
        // If this is true we are dragging to a snap point that is supposed to have an overlay
        const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
        const isOverlaySnapPointOrHigher = activeSnapPointIndex >= fadeFromIndex;
        if (isOverlaySnapPointOrHigher && isDraggingDown) {
            return 0;
        }
        // Don't animate, but still use this one if we are dragging away from the overlaySnapPoint
        if (isOverlaySnapPoint && !isDraggingDown) return 1;
        if (!shouldFade && !isOverlaySnapPoint) return null;
        // Either fadeFrom index or the one before
        const targetSnapPointIndex = isOverlaySnapPoint ? activeSnapPointIndex + 1 : activeSnapPointIndex - 1;
        // Get the distance from overlaySnapPoint to the one before or vice-versa to calculate the opacity percentage accordingly
        const snapPointDistance = isOverlaySnapPoint ? snapPointsOffset[targetSnapPointIndex] - snapPointsOffset[targetSnapPointIndex - 1] : snapPointsOffset[targetSnapPointIndex + 1] - snapPointsOffset[targetSnapPointIndex];
        const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);
        if (isOverlaySnapPoint) {
            return 1 - percentageDragged;
        } else {
            return percentageDragged;
        }
    }
    return {
        isLastSnapPoint,
        activeSnapPoint,
        shouldFade,
        getPercentageDragged,
        setActiveSnapPoint,
        activeSnapPointIndex,
        onRelease,
        onDrag,
        snapPointsOffset
    };
}

const noop = ()=>()=>{};
function useScaleBackground() {
    const { direction, isOpen, shouldScaleBackground, setBackgroundColorOnScale, noBodyStyles } = useDrawerContext();
    const timeoutIdRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const initialBackgroundColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>document.body.style.backgroundColor, []);
    function getScale() {
        return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (isOpen && shouldScaleBackground) {
            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
            const wrapper = document.querySelector('[data-vaul-drawer-wrapper]');
            const bodyAndWrapperCleanup = chain(setBackgroundColorOnScale && !noBodyStyles ? assignStyle(document.body, {
                background: 'black'
            }) : noop, assignStyle(wrapper, {
                transformOrigin: isVertical(direction) ? 'top' : 'left',
                transitionProperty: 'transform, border-radius',
                transitionDuration: `${TRANSITIONS.DURATION}s`,
                transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(',')})`
            }));
            const wrapperStylesCleanup = assignStyle(wrapper, {
                borderRadius: `${BORDER_RADIUS}px`,
                overflow: 'hidden',
                ...isVertical(direction) ? {
                    transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
                } : {
                    transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
                }
            });
            return ()=>{
                wrapperStylesCleanup();
                timeoutIdRef.current = window.setTimeout(()=>{
                    bodyAndWrapperCleanup();
                    if (initialBackgroundColor) {
                        document.body.style.background = initialBackgroundColor;
                    } else {
                        document.body.style.removeProperty('background');
                    }
                }, TRANSITIONS.DURATION * 1000);
            };
        }
    }, [
        isOpen,
        shouldScaleBackground,
        initialBackgroundColor
    ]);
}

function Root({ open: openProp, onOpenChange, children, onDrag: onDragProp, onRelease: onReleaseProp, snapPoints, shouldScaleBackground = false, setBackgroundColorOnScale = true, closeThreshold = CLOSE_THRESHOLD, scrollLockTimeout = SCROLL_LOCK_TIMEOUT, dismissible = true, fadeFromIndex = snapPoints && snapPoints.length - 1, activeSnapPoint: activeSnapPointProp, setActiveSnapPoint: setActiveSnapPointProp, fixed, modal = true, onClose, noBodyStyles, direction = 'bottom', defaultOpen = false, repositionInputs = true }) {
    var _drawerRef_current;
    const [isOpen = false, setIsOpen] = useControllableState({
        defaultProp: defaultOpen,
        prop: openProp,
        onChange: onOpenChange
    });
    const [hasBeenOpened, setHasBeenOpened] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [isDragging, setIsDragging] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [justReleased, setJustReleased] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const overlayRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const openTime = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const dragStartTime = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const dragEndTime = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const lastTimeDragPrevented = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const isAllowedToDrag = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
    const nestedOpenChangeTimer = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const pointerStart = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
    const keyboardIsOpen = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
    const previousDiffFromInitial = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
    const drawerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const drawerHeightRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0);
    const initialDrawerHeight = react__WEBPACK_IMPORTED_MODULE_1__.useRef(0);
    const onSnapPointChange = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((activeSnapPointIndex)=>{
        // Change openTime ref when we reach the last snap point to prevent dragging for 500ms incase it's scrollable.
        if (snapPoints && activeSnapPointIndex === snapPointsOffset.length - 1) openTime.current = new Date();
    }, []);
    const { activeSnapPoint, activeSnapPointIndex, setActiveSnapPoint, onRelease: onReleaseSnapPoints, snapPointsOffset, onDrag: onDragSnapPoints, shouldFade, getPercentageDragged: getSnapPointsPercentageDragged } = useSnapPoints({
        snapPoints,
        activeSnapPointProp,
        setActiveSnapPointProp,
        drawerRef,
        fadeFromIndex,
        overlayRef,
        onSnapPointChange,
        direction
    });
    usePreventScroll({
        isDisabled: !isOpen || isDragging || !modal || justReleased || !hasBeenOpened || !repositionInputs
    });
    function getScale() {
        return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }
    function onPress(event) {
        var _drawerRef_current;
        if (!dismissible && !snapPoints) return;
        if (drawerRef.current && !drawerRef.current.contains(event.target)) return;
        drawerHeightRef.current = ((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0;
        setIsDragging(true);
        dragStartTime.current = new Date();
        // iOS doesn't trigger mouseUp after scrolling so we need to listen to touched in order to disallow dragging
        if (isIOS()) {
            window.addEventListener('touchend', ()=>isAllowedToDrag.current = false, {
                once: true
            });
        }
        // Ensure we maintain correct pointer capture even when going outside of the drawer
        event.target.setPointerCapture(event.pointerId);
        pointerStart.current = isVertical(direction) ? event.clientY : event.clientX;
    }
    function shouldDrag(el, isDraggingInDirection) {
        var _window_getSelection;
        let element = el;
        const highlightedText = (_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString();
        const swipeAmount = drawerRef.current ? getTranslate(drawerRef.current, direction) : null;
        const date = new Date();
        if (element.hasAttribute('data-vaul-no-drag') || element.closest('[data-vaul-no-drag]')) {
            return false;
        }
        if (direction === 'right' || direction === 'left') {
            return true;
        }
        // Allow scrolling when animating
        if (openTime.current && date.getTime() - openTime.current.getTime() < 500) {
            return false;
        }
        if (swipeAmount !== null) {
            if (direction === 'bottom' ? swipeAmount > 0 : swipeAmount < 0) {
                return true;
            }
        }
        // Don't drag if there's highlighted text
        if (highlightedText && highlightedText.length > 0) {
            return false;
        }
        // Disallow dragging if drawer was scrolled within `scrollLockTimeout`
        if (lastTimeDragPrevented.current && date.getTime() - lastTimeDragPrevented.current.getTime() < scrollLockTimeout && swipeAmount === 0) {
            lastTimeDragPrevented.current = date;
            return false;
        }
        if (isDraggingInDirection) {
            lastTimeDragPrevented.current = date;
            // We are dragging down so we should allow scrolling
            return false;
        }
        // Keep climbing up the DOM tree as long as there's a parent
        while(element){
            // Check if the element is scrollable
            if (element.scrollHeight > element.clientHeight) {
                if (element.scrollTop !== 0) {
                    lastTimeDragPrevented.current = new Date();
                    // The element is scrollable and not scrolled to the top, so don't drag
                    return false;
                }
                if (element.getAttribute('role') === 'dialog') {
                    return true;
                }
            }
            // Move up to the parent element
            element = element.parentNode;
        }
        // No scrollable parents not scrolled to the top found, so drag
        return true;
    }
    function onDrag(event) {
        if (!drawerRef.current) {
            return;
        }
        // We need to know how much of the drawer has been dragged in percentages so that we can transform background accordingly
        if (isDragging) {
            const directionMultiplier = direction === 'bottom' || direction === 'right' ? 1 : -1;
            const draggedDistance = (pointerStart.current - (isVertical(direction) ? event.clientY : event.clientX)) * directionMultiplier;
            const isDraggingInDirection = draggedDistance > 0;
            // Pre condition for disallowing dragging in the close direction.
            const noCloseSnapPointsPreCondition = snapPoints && !dismissible && !isDraggingInDirection;
            // Disallow dragging down to close when first snap point is the active one and dismissible prop is set to false.
            if (noCloseSnapPointsPreCondition && activeSnapPointIndex === 0) return;
            // We need to capture last time when drag with scroll was triggered and have a timeout between
            const absDraggedDistance = Math.abs(draggedDistance);
            const wrapper = document.querySelector('[data-vaul-drawer-wrapper]');
            // Calculate the percentage dragged, where 1 is the closed position
            let percentageDragged = absDraggedDistance / drawerHeightRef.current;
            const snapPointPercentageDragged = getSnapPointsPercentageDragged(absDraggedDistance, isDraggingInDirection);
            if (snapPointPercentageDragged !== null) {
                percentageDragged = snapPointPercentageDragged;
            }
            // Disallow close dragging beyond the smallest snap point.
            if (noCloseSnapPointsPreCondition && percentageDragged >= 1) {
                return;
            }
            if (!isAllowedToDrag.current && !shouldDrag(event.target, isDraggingInDirection)) return;
            drawerRef.current.classList.add(DRAG_CLASS);
            // If shouldDrag gave true once after pressing down on the drawer, we set isAllowedToDrag to true and it will remain true until we let go, there's no reason to disable dragging mid way, ever, and that's the solution to it
            isAllowedToDrag.current = true;
            set(drawerRef.current, {
                transition: 'none'
            });
            set(overlayRef.current, {
                transition: 'none'
            });
            if (snapPoints) {
                onDragSnapPoints({
                    draggedDistance
                });
            }
            // Run this only if snapPoints are not defined or if we are at the last snap point (highest one)
            if (isDraggingInDirection && !snapPoints) {
                const dampenedDraggedDistance = dampenValue(draggedDistance);
                const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;
                set(drawerRef.current, {
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
                return;
            }
            const opacityValue = 1 - percentageDragged;
            if (shouldFade || fadeFromIndex && activeSnapPointIndex === fadeFromIndex - 1) {
                onDragProp == null ? void 0 : onDragProp(event, percentageDragged);
                set(overlayRef.current, {
                    opacity: `${opacityValue}`,
                    transition: 'none'
                }, true);
            }
            if (wrapper && overlayRef.current && shouldScaleBackground) {
                // Calculate percentageDragged as a fraction (0 to 1)
                const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);
                const borderRadiusValue = 8 - percentageDragged * 8;
                const translateValue = Math.max(0, 14 - percentageDragged * 14);
                set(wrapper, {
                    borderRadius: `${borderRadiusValue}px`,
                    transform: isVertical(direction) ? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)` : `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,
                    transition: 'none'
                }, true);
            }
            if (!snapPoints) {
                const translateValue = absDraggedDistance * directionMultiplier;
                set(drawerRef.current, {
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
            }
        }
    }
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        var _window_visualViewport;
        function onVisualViewportChange() {
            if (!drawerRef.current) return;
            const focusedElement = document.activeElement;
            if (isInput(focusedElement) || keyboardIsOpen.current) {
                var _window_visualViewport;
                const visualViewportHeight = ((_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.height) || 0;
                // This is the height of the keyboard
                let diffFromInitial = window.innerHeight - visualViewportHeight;
                const drawerHeight = drawerRef.current.getBoundingClientRect().height || 0;
                if (!initialDrawerHeight.current) {
                    initialDrawerHeight.current = drawerHeight;
                }
                const offsetFromTop = drawerRef.current.getBoundingClientRect().top;
                // visualViewport height may change due to some subtle changes to the keyboard. Checking if the height changed by 60 or more will make sure that they keyboard really changed its open state.
                if (Math.abs(previousDiffFromInitial.current - diffFromInitial) > 60) {
                    keyboardIsOpen.current = !keyboardIsOpen.current;
                }
                if (snapPoints && snapPoints.length > 0 && snapPointsOffset && activeSnapPointIndex) {
                    const activeSnapPointHeight = snapPointsOffset[activeSnapPointIndex] || 0;
                    diffFromInitial += activeSnapPointHeight;
                }
                previousDiffFromInitial.current = diffFromInitial;
                // We don't have to change the height if the input is in view, when we are here we are in the opened keyboard state so we can correctly check if the input is in view
                if (drawerHeight > visualViewportHeight || keyboardIsOpen.current) {
                    const height = drawerRef.current.getBoundingClientRect().height;
                    let newDrawerHeight = height;
                    if (height > visualViewportHeight) {
                        newDrawerHeight = visualViewportHeight - WINDOW_TOP_OFFSET;
                    }
                    // When fixed, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open
                    if (fixed) {
                        drawerRef.current.style.height = `${height - Math.max(diffFromInitial, 0)}px`;
                    } else {
                        drawerRef.current.style.height = `${Math.max(newDrawerHeight, visualViewportHeight - offsetFromTop)}px`;
                    }
                } else {
                    drawerRef.current.style.height = `${initialDrawerHeight.current}px`;
                }
                if (snapPoints && snapPoints.length > 0 && !keyboardIsOpen.current) {
                    drawerRef.current.style.bottom = `0px`;
                } else {
                    // Negative bottom value would never make sense
                    drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
                }
            }
        }
        (_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.addEventListener('resize', onVisualViewportChange);
        return ()=>{
            var _window_visualViewport;
            return (_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.removeEventListener('resize', onVisualViewportChange);
        };
    }, [
        activeSnapPointIndex,
        snapPoints,
        snapPointsOffset
    ]);
    function closeDrawer() {
        cancelDrag();
        onClose == null ? void 0 : onClose();
        setIsOpen(false);
        setTimeout(()=>{
            if (snapPoints) {
                setActiveSnapPoint(snapPoints[0]);
            }
        }, TRANSITIONS.DURATION * 1000); // seconds to ms
    }
    function resetDrawer() {
        if (!drawerRef.current) return;
        const wrapper = document.querySelector('[data-vaul-drawer-wrapper]');
        const currentSwipeAmount = getTranslate(drawerRef.current, direction);
        set(drawerRef.current, {
            transform: 'translate3d(0, 0, 0)',
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`
        });
        set(overlayRef.current, {
            transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
            opacity: '1'
        });
        // Don't reset background if swiped upwards
        if (shouldScaleBackground && currentSwipeAmount && currentSwipeAmount > 0 && isOpen) {
            set(wrapper, {
                borderRadius: `${BORDER_RADIUS}px`,
                overflow: 'hidden',
                ...isVertical(direction) ? {
                    transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                    transformOrigin: 'top'
                } : {
                    transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                    transformOrigin: 'left'
                },
                transitionProperty: 'transform, border-radius',
                transitionDuration: `${TRANSITIONS.DURATION}s`,
                transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(',')})`
            }, true);
        }
    }
    function cancelDrag() {
        if (!isDragging || !drawerRef.current) return;
        drawerRef.current.classList.remove(DRAG_CLASS);
        isAllowedToDrag.current = false;
        setIsDragging(false);
        dragEndTime.current = new Date();
    }
    function onRelease(event) {
        if (!isDragging || !drawerRef.current) return;
        drawerRef.current.classList.remove(DRAG_CLASS);
        isAllowedToDrag.current = false;
        setIsDragging(false);
        dragEndTime.current = new Date();
        const swipeAmount = getTranslate(drawerRef.current, direction);
        if (!shouldDrag(event.target, false) || !swipeAmount || Number.isNaN(swipeAmount)) return;
        if (dragStartTime.current === null) return;
        const timeTaken = dragEndTime.current.getTime() - dragStartTime.current.getTime();
        const distMoved = pointerStart.current - (isVertical(direction) ? event.clientY : event.clientX);
        const velocity = Math.abs(distMoved) / timeTaken;
        if (velocity > 0.05) {
            // `justReleased` is needed to prevent the drawer from focusing on an input when the drag ends, as it's not the intent most of the time.
            setJustReleased(true);
            setTimeout(()=>{
                setJustReleased(false);
            }, 200);
        }
        if (snapPoints) {
            const directionMultiplier = direction === 'bottom' || direction === 'right' ? 1 : -1;
            onReleaseSnapPoints({
                draggedDistance: distMoved * directionMultiplier,
                closeDrawer,
                velocity,
                dismissible
            });
            onReleaseProp == null ? void 0 : onReleaseProp(event, true);
            return;
        }
        // Moved upwards, don't do anything
        if (direction === 'bottom' || direction === 'right' ? distMoved > 0 : distMoved < 0) {
            resetDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, true);
            return;
        }
        if (velocity > VELOCITY_THRESHOLD) {
            closeDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, false);
            return;
        }
        var _drawerRef_current_getBoundingClientRect_height;
        const visibleDrawerHeight = Math.min((_drawerRef_current_getBoundingClientRect_height = drawerRef.current.getBoundingClientRect().height) != null ? _drawerRef_current_getBoundingClientRect_height : 0, window.innerHeight);
        if (swipeAmount >= visibleDrawerHeight * closeThreshold) {
            closeDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, false);
            return;
        }
        onReleaseProp == null ? void 0 : onReleaseProp(event, true);
        resetDrawer();
    }
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        // Trigger enter animation without using CSS animation
        if (isOpen) {
            set(document.documentElement, {
                scrollBehavior: 'auto'
            });
            openTime.current = new Date();
        }
    }, [
        isOpen
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (drawerRef.current) {
            var _drawerRef_current;
            // Find all scrollable elements inside our drawer and assign a class to it so that we can disable overflow when dragging to prevent pointermove not being captured
            const children = drawerRef == null ? void 0 : (_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.querySelectorAll('*');
            children == null ? void 0 : children.forEach((child)=>{
                const htmlChild = child;
                if (htmlChild.scrollHeight > htmlChild.clientHeight || htmlChild.scrollWidth > htmlChild.clientWidth) {
                    htmlChild.classList.add('vaul-scrollable');
                }
            });
        }
    }, [
        isOpen
    ]);
    function onNestedOpenChange(o) {
        const scale = o ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;
        const y = o ? -NESTED_DISPLACEMENT : 0;
        if (nestedOpenChangeTimer.current) {
            window.clearTimeout(nestedOpenChangeTimer.current);
        }
        set(drawerRef.current, {
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
            transform: `scale(${scale}) translate3d(0, ${y}px, 0)`
        });
        if (!o && drawerRef.current) {
            nestedOpenChangeTimer.current = setTimeout(()=>{
                const translateValue = getTranslate(drawerRef.current, direction);
                set(drawerRef.current, {
                    transition: 'none',
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
            }, 500);
        }
    }
    function onNestedDrag(_event, percentageDragged) {
        if (percentageDragged < 0) return;
        const initialDim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        const initialScale = (initialDim - NESTED_DISPLACEMENT) / initialDim;
        const newScale = initialScale + percentageDragged * (1 - initialScale);
        const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;
        set(drawerRef.current, {
            transform: isVertical(direction) ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)` : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
            transition: 'none'
        });
    }
    function onNestedRelease(_event, o) {
        const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
        const translate = o ? -NESTED_DISPLACEMENT : 0;
        if (o) {
            set(drawerRef.current, {
                transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${translate}px, 0)` : `scale(${scale}) translate3d(${translate}px, 0, 0)`
            });
        }
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Root, {
        defaultOpen: defaultOpen,
        modal: modal,
        onOpenChange: (open)=>{
            if (open) {
                setHasBeenOpened(true);
            }
            setIsOpen(open);
        },
        open: isOpen
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(DrawerContext.Provider, {
        value: {
            activeSnapPoint,
            snapPoints,
            setActiveSnapPoint,
            drawerRef,
            overlayRef,
            onOpenChange,
            onPress,
            onRelease,
            onDrag,
            dismissible,
            isOpen,
            isDragging,
            shouldFade,
            closeDrawer,
            onNestedDrag,
            onNestedOpenChange,
            onNestedRelease,
            keyboardIsOpen,
            modal,
            snapPointsOffset,
            direction,
            shouldScaleBackground,
            setBackgroundColorOnScale,
            noBodyStyles
        }
    }, children));
}
const Overlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({ children, ...rest }, ref) {
    const { overlayRef, snapPoints, onRelease, shouldFade, isOpen } = useDrawerContext();
    const composedRef = useComposedRefs(ref, overlayRef);
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Overlay, {
        onMouseUp: onRelease,
        ref: composedRef,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": isOpen && hasSnapPoints ? 'true' : 'false',
        "data-vaul-snap-points-overlay": isOpen && shouldFade ? 'true' : 'false',
        ...rest
    });
});
Overlay.displayName = 'Drawer.Overlay';
const Content = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function({ onOpenAutoFocus, onPointerDownOutside, onAnimationEnd, style, ...rest }, ref) {
    const { drawerRef, onPress, onRelease, onDrag, keyboardIsOpen, snapPointsOffset, modal, isOpen, direction, snapPoints } = useDrawerContext();
    // Needed to use transition instead of animations
    const [delayedSnapPoints, setDelayedSnapPoints] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const composedRef = useComposedRefs(ref, drawerRef);
    const pointerStartRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const wasBeyondThePointRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    useScaleBackground();
    const isDeltaInDirection = (delta, direction, threshold = 0)=>{
        if (wasBeyondThePointRef.current) return true;
        const deltaY = Math.abs(delta.y);
        const deltaX = Math.abs(delta.x);
        const isDeltaX = deltaX > deltaY;
        const dFactor = [
            'bottom',
            'right'
        ].includes(direction) ? 1 : -1;
        if (direction === 'left' || direction === 'right') {
            const isReverseDirection = delta.x * dFactor < 0;
            if (!isReverseDirection && deltaX >= 0 && deltaX <= threshold) {
                return isDeltaX;
            }
        } else {
            const isReverseDirection = delta.y * dFactor < 0;
            if (!isReverseDirection && deltaY >= 0 && deltaY <= threshold) {
                return !isDeltaX;
            }
        }
        wasBeyondThePointRef.current = true;
        return true;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (hasSnapPoints) {
            window.requestAnimationFrame(()=>{
                setDelayedSnapPoints(true);
            });
        }
    }, []);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Content, {
        "data-vaul-drawer-direction": direction,
        "data-vaul-drawer": "",
        "data-vaul-delayed-snap-points": delayedSnapPoints ? 'true' : 'false',
        "data-vaul-snap-points": isOpen && hasSnapPoints ? 'true' : 'false',
        ...rest,
        ref: composedRef,
        style: snapPointsOffset && snapPointsOffset.length > 0 ? {
            '--snap-point-height': `${snapPointsOffset[0]}px`,
            ...style
        } : style,
        onOpenAutoFocus: (e)=>{
            if (onOpenAutoFocus) {
                onOpenAutoFocus(e);
            } else {
                var _drawerRef_current;
                e.preventDefault();
                (_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.focus();
            }
        },
        onPointerDown: (event)=>{
            rest.onPointerDown == null ? void 0 : rest.onPointerDown.call(rest, event);
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
            onPress(event);
        },
        onPointerDownOutside: (e)=>{
            onPointerDownOutside == null ? void 0 : onPointerDownOutside(e);
            if (!modal || e.defaultPrevented) {
                e.preventDefault();
                return;
            }
            if (keyboardIsOpen.current) {
                keyboardIsOpen.current = false;
            }
        },
        onFocusOutside: (e)=>{
            if (!modal) {
                e.preventDefault();
                return;
            }
        },
        onEscapeKeyDown: (e)=>{
            if (!modal) {
                e.preventDefault();
                return;
            }
        },
        onPointerMove: (event)=>{
            rest.onPointerMove == null ? void 0 : rest.onPointerMove.call(rest, event);
            if (!pointerStartRef.current) return;
            const yPosition = event.clientY - pointerStartRef.current.y;
            const xPosition = event.clientX - pointerStartRef.current.x;
            const swipeStartThreshold = event.pointerType === 'touch' ? 10 : 2;
            const delta = {
                x: xPosition,
                y: yPosition
            };
            const isAllowedToSwipe = isDeltaInDirection(delta, direction, swipeStartThreshold);
            if (isAllowedToSwipe) onDrag(event);
            else if (Math.abs(xPosition) > swipeStartThreshold || Math.abs(yPosition) > swipeStartThreshold) {
                pointerStartRef.current = null;
            }
        },
        onPointerUp: (event)=>{
            rest.onPointerUp == null ? void 0 : rest.onPointerUp.call(rest, event);
            pointerStartRef.current = null;
            wasBeyondThePointRef.current = false;
            onRelease(event);
        }
    });
});
Content.displayName = 'Drawer.Content';
function NestedRoot({ onDrag, onOpenChange, ...rest }) {
    const { onNestedDrag, onNestedOpenChange, onNestedRelease } = useDrawerContext();
    if (!onNestedDrag) {
        throw new Error('Drawer.NestedRoot must be placed in another drawer');
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(Root, {
        nested: true,
        onClose: ()=>{
            onNestedOpenChange(false);
        },
        onDrag: (e, p)=>{
            onNestedDrag(e, p);
            onDrag == null ? void 0 : onDrag(e, p);
        },
        onOpenChange: (o)=>{
            if (o) {
                onNestedOpenChange(o);
            }
            onOpenChange == null ? void 0 : onOpenChange(o);
        },
        onRelease: onNestedRelease,
        ...rest
    });
}
const Drawer = {
    Root,
    NestedRoot,
    Content,
    Overlay,
    Trigger: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Trigger,
    Portal: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Portal,
    Close: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Close,
    Title: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Title,
    Description: _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_0__.Description
};




/***/ })

}]);
//# sourceMappingURL=1243.js.map