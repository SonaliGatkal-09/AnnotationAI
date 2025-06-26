"use strict";
(self["webpackChunkanotate_imagesearch"] = self["webpackChunkanotate_imagesearch"] || []).push([[455],{

/***/ 455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Arrow: () => (/* binding */ Arrow2),
  Content: () => (/* binding */ Content2),
  HoverCard: () => (/* binding */ HoverCard),
  HoverCardArrow: () => (/* binding */ HoverCardArrow),
  HoverCardContent: () => (/* binding */ HoverCardContent),
  HoverCardPortal: () => (/* binding */ HoverCardPortal),
  HoverCardTrigger: () => (/* binding */ HoverCardTrigger),
  Portal: () => (/* binding */ dist_Portal),
  Root: () => (/* binding */ Root2),
  Trigger: () => (/* binding */ Trigger),
  createHoverCardScope: () => (/* binding */ createHoverCardScope)
});

// EXTERNAL MODULE: consume shared module (default) react@^8...3...1 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(6587);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(4744);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(4264);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(820);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(1764);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-popper/dist/index.mjs + 6 modules
var react_popper_dist = __webpack_require__(1580);
// EXTERNAL MODULE: consume shared module (default) react-dom@^8...3...1 (strict) (singleton) (fallback: ../../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(3349);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(8342);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(9633);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9500);
;// ../../node_modules/@radix-ui/react-hover-card/node_modules/@radix-ui/react-portal/dist/index.mjs
"use client";

// packages/react/portal/src/Portal.tsx





var PORTAL_NAME = "Portal";
var Portal = index_js_.forwardRef((props, forwardedRef) => {
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = index_js_.useState(false);
  (0,react_use_layout_effect_dist/* useLayoutEffect */.N)(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? react_dom_index_js_.createPortal(/* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.sG.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = (/* unused pure expression or super */ null && (Portal));

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(9680);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(7072);
// EXTERNAL MODULE: ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var react_use_escape_keydown_dist = __webpack_require__(3786);
;// ../../node_modules/@radix-ui/react-hover-card/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
"use client";

// packages/react/dismissable-layer/src/DismissableLayer.tsx







var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = index_js_.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = index_js_.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = index_js_.useContext(DismissableLayerContext);
    const [node, setNode] = index_js_.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = index_js_.useState({});
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.s)(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    (0,react_use_escape_keydown_dist/* useEscapeKeydown */.U)((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    index_js_.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    index_js_.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    index_js_.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_primitive_dist/* Primitive */.sG.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: (0,dist/* composeEventHandlers */.m)(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0,dist/* composeEventHandlers */.m)(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0,dist/* composeEventHandlers */.m)(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = index_js_.forwardRef((props, forwardedRef) => {
  const context = index_js_.useContext(DismissableLayerContext);
  const ref = index_js_.useRef(null);
  const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.s)(forwardedRef, ref);
  index_js_.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_primitive_dist/* Primitive */.sG.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
  const handlePointerDownOutside = (0,react_use_callback_ref_dist/* useCallbackRef */.c)(onPointerDownOutside);
  const isPointerInsideReactTreeRef = index_js_.useRef(false);
  const handleClickRef = index_js_.useRef(() => {
  });
  index_js_.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = (0,react_use_callback_ref_dist/* useCallbackRef */.c)(onFocusOutside);
  const isFocusInsideReactTreeRef = index_js_.useRef(false);
  index_js_.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    (0,react_primitive_dist/* dispatchDiscreteCustomEvent */.hO)(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var dist_Root = (/* unused pure expression or super */ null && (DismissableLayer));
var Branch = (/* unused pure expression or super */ null && (DismissableLayerBranch));

//# sourceMappingURL=index.mjs.map

;// ../../node_modules/@radix-ui/react-hover-card/dist/index.mjs
"use client";

// packages/react/hover-card/src/HoverCard.tsx












var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = (0,react_context_dist/* createContextScope */.A)(HOVERCARD_NAME, [
  react_popper_dist/* createPopperScope */.Bk
]);
var usePopperScope = (0,react_popper_dist/* createPopperScope */.Bk)();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard = (props) => {
  const {
    __scopeHoverCard,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    openDelay = 700,
    closeDelay = 300
  } = props;
  const popperScope = usePopperScope(__scopeHoverCard);
  const openTimerRef = index_js_.useRef(0);
  const closeTimerRef = index_js_.useRef(0);
  const hasSelectionRef = index_js_.useRef(false);
  const isPointerDownOnContentRef = index_js_.useRef(false);
  const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.i)({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const handleOpen = index_js_.useCallback(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);
  const handleClose = index_js_.useCallback(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) {
      closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
    }
  }, [closeDelay, setOpen]);
  const handleDismiss = index_js_.useCallback(() => setOpen(false), [setOpen]);
  index_js_.useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    HoverCardProvider,
    {
      scope: __scopeHoverCard,
      open,
      onOpenChange: setOpen,
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_popper_dist/* Root */.bL, { ...popperScope, children })
    }
  );
};
HoverCard.displayName = HOVERCARD_NAME;
var TRIGGER_NAME = "HoverCardTrigger";
var HoverCardTrigger = index_js_.forwardRef(
  (props, forwardedRef) => {
    const { __scopeHoverCard, ...triggerProps } = props;
    const context = useHoverCardContext(TRIGGER_NAME, __scopeHoverCard);
    const popperScope = usePopperScope(__scopeHoverCard);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_popper_dist/* Anchor */.Mz, { asChild: true, ...popperScope, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      react_primitive_dist/* Primitive */.sG.a,
      {
        "data-state": context.open ? "open" : "closed",
        ...triggerProps,
        ref: forwardedRef,
        onPointerEnter: (0,dist/* composeEventHandlers */.m)(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: (0,dist/* composeEventHandlers */.m)(props.onPointerLeave, excludeTouch(context.onClose)),
        onFocus: (0,dist/* composeEventHandlers */.m)(props.onFocus, context.onOpen),
        onBlur: (0,dist/* composeEventHandlers */.m)(props.onBlur, context.onClose),
        onTouchStart: (0,dist/* composeEventHandlers */.m)(props.onTouchStart, (event) => event.preventDefault())
      }
    ) });
  }
);
HoverCardTrigger.displayName = TRIGGER_NAME;
var dist_PORTAL_NAME = "HoverCardPortal";
var [PortalProvider, usePortalContext] = createHoverCardContext(dist_PORTAL_NAME, {
  forceMount: void 0
});
var HoverCardPortal = (props) => {
  const { __scopeHoverCard, forceMount, children, container } = props;
  const context = useHoverCardContext(dist_PORTAL_NAME, __scopeHoverCard);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(PortalProvider, { scope: __scopeHoverCard, forceMount, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.C, { present: forceMount || context.open, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Portal, { asChild: true, container, children }) }) });
};
HoverCardPortal.displayName = dist_PORTAL_NAME;
var CONTENT_NAME = "HoverCardContent";
var HoverCardContent = index_js_.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeHoverCard);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useHoverCardContext(CONTENT_NAME, props.__scopeHoverCard);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_presence_dist/* Presence */.C, { present: forceMount || context.open, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      HoverCardContentImpl,
      {
        "data-state": context.open ? "open" : "closed",
        ...contentProps,
        onPointerEnter: (0,dist/* composeEventHandlers */.m)(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: (0,dist/* composeEventHandlers */.m)(props.onPointerLeave, excludeTouch(context.onClose)),
        ref: forwardedRef
      }
    ) });
  }
);
HoverCardContent.displayName = CONTENT_NAME;
var HoverCardContentImpl = index_js_.forwardRef((props, forwardedRef) => {
  const {
    __scopeHoverCard,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props;
  const context = useHoverCardContext(CONTENT_NAME, __scopeHoverCard);
  const popperScope = usePopperScope(__scopeHoverCard);
  const ref = index_js_.useRef(null);
  const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.s)(forwardedRef, ref);
  const [containSelection, setContainSelection] = index_js_.useState(false);
  index_js_.useEffect(() => {
    if (containSelection) {
      const body = document.body;
      originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = originalBodyUserSelect;
        body.style.webkitUserSelect = originalBodyUserSelect;
      };
    }
  }, [containSelection]);
  index_js_.useEffect(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          const hasSelection = document.getSelection()?.toString() !== "";
          if (hasSelection) context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
  index_js_.useEffect(() => {
    if (ref.current) {
      const tabbables = getTabbableNodes(ref.current);
      tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    }
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    DismissableLayer,
    {
      asChild: true,
      disableOutsidePointerEvents: false,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside: (0,dist/* composeEventHandlers */.m)(onFocusOutside, (event) => {
        event.preventDefault();
      }),
      onDismiss: context.onDismiss,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        react_popper_dist/* Content */.UC,
        {
          ...popperScope,
          ...contentProps,
          onPointerDown: (0,dist/* composeEventHandlers */.m)(contentProps.onPointerDown, (event) => {
            if (event.currentTarget.contains(event.target)) {
              setContainSelection(true);
            }
            context.hasSelectionRef.current = false;
            context.isPointerDownOnContentRef.current = true;
          }),
          ref: composedRefs,
          style: {
            ...contentProps.style,
            userSelect: containSelection ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: containSelection ? "text" : void 0,
            // re-namespace exposed content custom properties
            ...{
              "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
              "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
              "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
            }
          }
        }
      )
    }
  );
});
var ARROW_NAME = "HoverCardArrow";
var HoverCardArrow = index_js_.forwardRef(
  (props, forwardedRef) => {
    const { __scopeHoverCard, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeHoverCard);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(react_popper_dist/* Arrow */.i3, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
HoverCardArrow.displayName = ARROW_NAME;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
var Root2 = HoverCard;
var Trigger = HoverCardTrigger;
var dist_Portal = HoverCardPortal;
var Content2 = HoverCardContent;
var Arrow2 = HoverCardArrow;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 9680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Presence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6587);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3349);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1764);
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9633);
"use client";

// packages/react/presence/src/Presence.tsx





// packages/react/presence/src/useStateMachine.tsx

function useStateMachine(initialState, machine) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}

// packages/react/presence/src/Presence.tsx
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);
  const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .s)(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  const stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  const prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present);
  const prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutEffect */ .N)(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__/* .useLayoutEffect */ .N)(() => {
    if (node) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => send("ANIMATION_END"));
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

//# sourceMappingURL=index.mjs.map


/***/ })

}]);
//# sourceMappingURL=455.js.map