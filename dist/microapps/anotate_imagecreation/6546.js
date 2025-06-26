"use strict";
(self["webpackChunkanotate_imagecreation"] = self["webpackChunkanotate_imagecreation"] || []).push([[16,492,505,981,1825,1929,2827,2873,2886,3349,3362,3493,4206,4301,4310,5254,5267,5730,5743,6546,6587,6682,6691,6695,7063,7635,7648,7884,8111,8124,8968,9072,9076,9367,9500],{

/***/ 6272:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrow: () => (/* binding */ Arrow2),
/* harmony export */   CheckboxItem: () => (/* binding */ CheckboxItem2),
/* harmony export */   Content: () => (/* binding */ Content2),
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu),
/* harmony export */   ContextMenuArrow: () => (/* binding */ ContextMenuArrow),
/* harmony export */   ContextMenuCheckboxItem: () => (/* binding */ ContextMenuCheckboxItem),
/* harmony export */   ContextMenuContent: () => (/* binding */ ContextMenuContent),
/* harmony export */   ContextMenuGroup: () => (/* binding */ ContextMenuGroup),
/* harmony export */   ContextMenuItem: () => (/* binding */ ContextMenuItem),
/* harmony export */   ContextMenuItemIndicator: () => (/* binding */ ContextMenuItemIndicator),
/* harmony export */   ContextMenuLabel: () => (/* binding */ ContextMenuLabel),
/* harmony export */   ContextMenuPortal: () => (/* binding */ ContextMenuPortal),
/* harmony export */   ContextMenuRadioGroup: () => (/* binding */ ContextMenuRadioGroup),
/* harmony export */   ContextMenuRadioItem: () => (/* binding */ ContextMenuRadioItem),
/* harmony export */   ContextMenuSeparator: () => (/* binding */ ContextMenuSeparator),
/* harmony export */   ContextMenuSub: () => (/* binding */ ContextMenuSub),
/* harmony export */   ContextMenuSubContent: () => (/* binding */ ContextMenuSubContent),
/* harmony export */   ContextMenuSubTrigger: () => (/* binding */ ContextMenuSubTrigger),
/* harmony export */   ContextMenuTrigger: () => (/* binding */ ContextMenuTrigger),
/* harmony export */   Group: () => (/* binding */ Group2),
/* harmony export */   Item: () => (/* binding */ Item2),
/* harmony export */   ItemIndicator: () => (/* binding */ ItemIndicator2),
/* harmony export */   Label: () => (/* binding */ Label2),
/* harmony export */   Portal: () => (/* binding */ Portal2),
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup2),
/* harmony export */   RadioItem: () => (/* binding */ RadioItem2),
/* harmony export */   Root: () => (/* binding */ Root2),
/* harmony export */   Separator: () => (/* binding */ Separator2),
/* harmony export */   Sub: () => (/* binding */ Sub2),
/* harmony export */   SubContent: () => (/* binding */ SubContent2),
/* harmony export */   SubTrigger: () => (/* binding */ SubTrigger2),
/* harmony export */   Trigger: () => (/* binding */ Trigger),
/* harmony export */   createContextMenuScope: () => (/* binding */ createContextMenuScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6587);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4744);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4264);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8342);
/* harmony import */ var _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9779);
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7072);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
"use client";

// packages/react/context-menu/src/ContextMenu.tsx









var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .A)(CONTEXT_MENU_NAME, [
  _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .createMenuScope */ .UE
]);
var useMenuScope = (0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .createMenuScope */ .UE)();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = (props) => {
  const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const menuScope = useMenuScope(__scopeContextMenu);
  const handleOpenChangeProp = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__/* .useCallbackRef */ .c)(onOpenChange);
  const handleOpenChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (open2) => {
      setOpen(open2);
      handleOpenChangeProp(open2);
    },
    [handleOpenChangeProp]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open,
      onOpenChange: handleOpenChange,
      modal,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .bL,
        {
          ...menuScope,
          dir,
          open,
          onOpenChange: handleOpenChange,
          modal,
          children
        }
      )
    }
  );
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME = "ContextMenuTrigger";
var ContextMenuTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
    const context = useContextMenuContext(TRIGGER_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const pointRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ x: 0, y: 0 });
    const virtualRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...pointRef.current })
    });
    const longPressTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const clearLongPress = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
      () => window.clearTimeout(longPressTimerRef.current),
      []
    );
    const handleOpen = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY };
      context.onOpenChange(true);
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => clearLongPress, [clearLongPress]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Anchor */ .Mz, { ...menuScope, virtualRef }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__/* .Primitive */ .sG.span,
        {
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          style: { WebkitTouchCallout: "none", ...props.style },
          onContextMenu: disabled ? props.onContextMenu : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .m)(props.onContextMenu, (event) => {
            clearLongPress();
            handleOpen(event);
            event.preventDefault();
          }),
          onPointerDown: disabled ? props.onPointerDown : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .m)(
            props.onPointerDown,
            whenTouchOrPen((event) => {
              clearLongPress();
              longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
            })
          ),
          onPointerMove: disabled ? props.onPointerMove : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .m)(props.onPointerMove, whenTouchOrPen(clearLongPress)),
          onPointerCancel: disabled ? props.onPointerCancel : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .m)(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
          onPointerUp: disabled ? props.onPointerUp : (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .m)(props.onPointerUp, whenTouchOrPen(clearLongPress))
        }
      )
    ] });
  }
);
ContextMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "ContextMenuPortal";
var ContextMenuPortal = (props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Portal */ .ZL, { ...menuScope, ...portalProps });
};
ContextMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "ContextMenuContent";
var ContextMenuContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...contentProps } = props;
    const context = useContextMenuContext(CONTENT_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .UC,
      {
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
        },
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
ContextMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "ContextMenuGroup";
var ContextMenuGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Group */ .YJ, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
ContextMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "ContextMenuLabel";
var ContextMenuLabel = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Label */ .JU, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
ContextMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "ContextMenuItem";
var ContextMenuItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .q7, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
ContextMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem";
var ContextMenuCheckboxItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .CheckboxItem */ .H_, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "ContextMenuRadioGroup";
var ContextMenuRadioGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .z6, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "ContextMenuRadioItem";
var ContextMenuRadioItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .RadioItem */ .hN, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "ContextMenuItemIndicator";
var ContextMenuItemIndicator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .ItemIndicator */ .VF, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "ContextMenuSeparator";
var ContextMenuSeparator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Separator */ .wv, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
ContextMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "ContextMenuArrow";
var ContextMenuArrow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Arrow */ .i3, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
ContextMenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "ContextMenuSub";
var ContextMenuSub = (props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  const [open, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__/* .useControllableState */ .i)({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .Sub */ .Pb, { ...menuScope, open, onOpenChange: setOpen, children });
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "ContextMenuSubTrigger";
var ContextMenuSubTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubTrigger */ .ZP, { ...menuScope, ...triggerItemProps, ref: forwardedRef });
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "ContextMenuSubContent";
var ContextMenuSubContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__/* .SubContent */ .G5,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME;
function whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
var Root2 = ContextMenu;
var Trigger = ContextMenuTrigger;
var Portal2 = ContextMenuPortal;
var Content2 = ContextMenuContent;
var Group2 = ContextMenuGroup;
var Label2 = ContextMenuLabel;
var Item2 = ContextMenuItem;
var CheckboxItem2 = ContextMenuCheckboxItem;
var RadioGroup2 = ContextMenuRadioGroup;
var RadioItem2 = ContextMenuRadioItem;
var ItemIndicator2 = ContextMenuItemIndicator;
var Separator2 = ContextMenuSeparator;
var Arrow2 = ContextMenuArrow;
var Sub2 = ContextMenuSub;
var SubTrigger2 = ContextMenuSubTrigger;
var SubContent2 = ContextMenuSubContent;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 8736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6587),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 9500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(8736);
} else // removed by dead control flow
{}


/***/ })

}]);
//# sourceMappingURL=6546.js.map