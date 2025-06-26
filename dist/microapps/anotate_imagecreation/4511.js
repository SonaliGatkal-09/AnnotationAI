"use strict";
(self["webpackChunkanotate_imagecreation"] = self["webpackChunkanotate_imagecreation"] || []).push([[16,492,1929,2873,3349,4301,4310,4511,5254,5730,6682,6691,7635,8111,9072],{

/***/ 5963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrow: () => (/* binding */ Arrow2),
/* harmony export */   CheckboxItem: () => (/* binding */ CheckboxItem2),
/* harmony export */   Content: () => (/* binding */ Content2),
/* harmony export */   Group: () => (/* binding */ Group2),
/* harmony export */   Item: () => (/* binding */ Item3),
/* harmony export */   ItemIndicator: () => (/* binding */ ItemIndicator2),
/* harmony export */   Label: () => (/* binding */ Label2),
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   Menubar: () => (/* binding */ Menubar),
/* harmony export */   MenubarArrow: () => (/* binding */ MenubarArrow),
/* harmony export */   MenubarCheckboxItem: () => (/* binding */ MenubarCheckboxItem),
/* harmony export */   MenubarContent: () => (/* binding */ MenubarContent),
/* harmony export */   MenubarGroup: () => (/* binding */ MenubarGroup),
/* harmony export */   MenubarItem: () => (/* binding */ MenubarItem),
/* harmony export */   MenubarItemIndicator: () => (/* binding */ MenubarItemIndicator),
/* harmony export */   MenubarLabel: () => (/* binding */ MenubarLabel),
/* harmony export */   MenubarMenu: () => (/* binding */ MenubarMenu),
/* harmony export */   MenubarPortal: () => (/* binding */ MenubarPortal),
/* harmony export */   MenubarRadioGroup: () => (/* binding */ MenubarRadioGroup),
/* harmony export */   MenubarRadioItem: () => (/* binding */ MenubarRadioItem),
/* harmony export */   MenubarSeparator: () => (/* binding */ MenubarSeparator),
/* harmony export */   MenubarSub: () => (/* binding */ MenubarSub),
/* harmony export */   MenubarSubContent: () => (/* binding */ MenubarSubContent),
/* harmony export */   MenubarSubTrigger: () => (/* binding */ MenubarSubTrigger),
/* harmony export */   MenubarTrigger: () => (/* binding */ MenubarTrigger),
/* harmony export */   Portal: () => (/* binding */ Portal2),
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup2),
/* harmony export */   RadioItem: () => (/* binding */ RadioItem2),
/* harmony export */   Root: () => (/* binding */ Root3),
/* harmony export */   Separator: () => (/* binding */ Separator2),
/* harmony export */   Sub: () => (/* binding */ Sub2),
/* harmony export */   SubContent: () => (/* binding */ SubContent2),
/* harmony export */   SubTrigger: () => (/* binding */ SubTrigger2),
/* harmony export */   Trigger: () => (/* binding */ Trigger),
/* harmony export */   createMenubarScope: () => (/* binding */ createMenubarScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6587);
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3885);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2338);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4744);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1764);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4264);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8148);
/* harmony import */ var _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9779);
/* harmony import */ var _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9061);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8342);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9500);
"use client";

// packages/react/menubar/src/Menubar.tsx














var MENUBAR_NAME = "Menubar";
var [Collection, useCollection, createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__/* .createCollection */ .N)(MENUBAR_NAME);
var [createMenubarContext, createMenubarScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__/* .createContextScope */ .A)(MENUBAR_NAME, [
  createCollectionScope,
  _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_4__/* .createRovingFocusGroupScope */ .RG
]);
var useMenuScope = (0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .createMenuScope */ .UE)();
var useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_4__/* .createRovingFocusGroupScope */ .RG)();
var [MenubarContextProvider, useMenubarContext] = createMenubarContext(MENUBAR_NAME);
var Menubar = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenubar,
      value: valueProp,
      onValueChange,
      defaultValue,
      loop = true,
      dir,
      ...menubarProps
    } = props;
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_6__/* .useDirection */ .jH)(dir);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenubar);
    const [value = "", setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__/* .useControllableState */ .i)({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    const [currentTabStopId, setCurrentTabStopId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      MenubarContextProvider,
      {
        scope: __scopeMenubar,
        value,
        onMenuOpen: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
          (value2) => {
            setValue(value2);
            setCurrentTabStopId(value2);
          },
          [setValue]
        ),
        onMenuClose: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => setValue(""), [setValue]),
        onMenuToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
          (value2) => {
            setValue((prevValue) => Boolean(prevValue) ? "" : value2);
            setCurrentTabStopId(value2);
          },
          [setValue]
        ),
        dir: direction,
        loop,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Provider, { scope: __scopeMenubar, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Slot, { scope: __scopeMenubar, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_4__/* .Root */ .bL,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation: "horizontal",
            loop,
            dir: direction,
            currentTabStopId,
            onCurrentTabStopIdChange: setCurrentTabStopId,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__/* .Primitive */ .sG.div, { role: "menubar", ...menubarProps, ref: forwardedRef })
          }
        ) }) })
      }
    );
  }
);
Menubar.displayName = MENUBAR_NAME;
var MENU_NAME = "MenubarMenu";
var [MenubarMenuProvider, useMenubarMenuContext] = createMenubarContext(MENU_NAME);
var MenubarMenu = (props) => {
  const { __scopeMenubar, value: valueProp, ...menuProps } = props;
  const autoValue = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .B)();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const context = useMenubarContext(MENU_NAME, __scopeMenubar);
  const menuScope = useMenuScope(__scopeMenubar);
  const triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const wasKeyboardTriggerOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const open = context.value === value;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!open) wasKeyboardTriggerOpenRef.current = false;
  }, [open]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    MenubarMenuProvider,
    {
      scope: __scopeMenubar,
      value,
      triggerId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .B)(),
      triggerRef,
      contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_9__/* .useId */ .B)(),
      wasKeyboardTriggerOpenRef,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
        _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Root */ .bL,
        {
          ...menuScope,
          open,
          onOpenChange: (open2) => {
            if (!open2) context.onMenuClose();
          },
          modal: false,
          dir: context.dir,
          ...menuProps
        }
      )
    }
  );
};
MenubarMenu.displayName = MENU_NAME;
var TRIGGER_NAME = "MenubarTrigger";
var MenubarTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, disabled = false, ...triggerProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenubar);
    const menuScope = useMenuScope(__scopeMenubar);
    const context = useMenubarContext(TRIGGER_NAME, __scopeMenubar);
    const menuContext = useMenubarMenuContext(TRIGGER_NAME, __scopeMenubar);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__/* .useComposedRefs */ .s)(forwardedRef, ref, menuContext.triggerRef);
    const [isFocused, setIsFocused] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const open = context.value === menuContext.value;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.ItemSlot, { scope: __scopeMenubar, value: menuContext.value, disabled, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_4__/* .Item */ .q7,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        tabStopId: menuContext.value,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Anchor */ .Mz, { asChild: true, ...menuScope, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__/* .Primitive */ .sG.button,
          {
            type: "button",
            role: "menuitem",
            id: menuContext.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": open,
            "aria-controls": open ? menuContext.contentId : void 0,
            "data-highlighted": isFocused ? "" : void 0,
            "data-state": open ? "open" : "closed",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            ...triggerProps,
            ref: composedRefs,
            onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onPointerDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onMenuOpen(menuContext.value);
                if (!open) event.preventDefault();
              }
            }),
            onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onPointerEnter, () => {
              const menubarOpen = Boolean(context.value);
              if (menubarOpen && !open) {
                context.onMenuOpen(menuContext.value);
                ref.current?.focus();
              }
            }),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onKeyDown, (event) => {
              if (disabled) return;
              if (["Enter", " "].includes(event.key)) context.onMenuToggle(menuContext.value);
              if (event.key === "ArrowDown") context.onMenuOpen(menuContext.value);
              if (["Enter", " ", "ArrowDown"].includes(event.key)) {
                menuContext.wasKeyboardTriggerOpenRef.current = true;
                event.preventDefault();
              }
            }),
            onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onFocus, () => setIsFocused(true)),
            onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    ) });
  }
);
MenubarTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "MenubarPortal";
var MenubarPortal = (props) => {
  const { __scopeMenubar, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Portal */ .ZL, { ...menuScope, ...portalProps });
};
MenubarPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenubarContent";
var MenubarContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, align = "start", ...contentProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    const context = useMenubarContext(CONTENT_NAME, __scopeMenubar);
    const menuContext = useMenubarMenuContext(CONTENT_NAME, __scopeMenubar);
    const getItems = useCollection(__scopeMenubar);
    const hasInteractedOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Content */ .UC,
      {
        id: menuContext.contentId,
        "aria-labelledby": menuContext.triggerId,
        "data-radix-menubar-content": "",
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        align,
        onCloseAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onCloseAutoFocus, (event) => {
          const menubarOpen = Boolean(context.value);
          if (!menubarOpen && !hasInteractedOutsideRef.current) {
            menuContext.triggerRef.current?.focus();
          }
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onFocusOutside, (event) => {
          const target = event.target;
          const isMenubarTrigger = getItems().some((item) => item.ref.current?.contains(target));
          if (isMenubarTrigger) event.preventDefault();
        }),
        onInteractOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(props.onInteractOutside, () => {
          hasInteractedOutsideRef.current = true;
        }),
        onEntryFocus: (event) => {
          if (!menuContext.wasKeyboardTriggerOpenRef.current) event.preventDefault();
        },
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_11__/* .composeEventHandlers */ .m)(
          props.onKeyDown,
          (event) => {
            if (["ArrowRight", "ArrowLeft"].includes(event.key)) {
              const target = event.target;
              const targetIsSubTrigger = target.hasAttribute("data-radix-menubar-subtrigger");
              const isKeyDownInsideSubMenu = target.closest("[data-radix-menubar-content]") !== event.currentTarget;
              const prevMenuKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
              const isPrevKey = prevMenuKey === event.key;
              const isNextKey = !isPrevKey;
              if (isNextKey && targetIsSubTrigger) return;
              if (isKeyDownInsideSubMenu && isPrevKey) return;
              const items = getItems().filter((item) => !item.disabled);
              let candidateValues = items.map((item) => item.value);
              if (isPrevKey) candidateValues.reverse();
              const currentIndex = candidateValues.indexOf(menuContext.value);
              candidateValues = context.loop ? wrapArray(candidateValues, currentIndex + 1) : candidateValues.slice(currentIndex + 1);
              const [nextValue] = candidateValues;
              if (nextValue) context.onMenuOpen(nextValue);
            }
          },
          { checkForDefaultPrevented: false }
        ),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
            "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
MenubarContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenubarGroup";
var MenubarGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Group */ .YJ, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
MenubarGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenubarLabel";
var MenubarLabel = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Label */ .JU, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
MenubarLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenubarItem";
var MenubarItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Item */ .q7, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
MenubarItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "MenubarCheckboxItem";
var MenubarCheckboxItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...checkboxItemProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .CheckboxItem */ .H_, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
  }
);
MenubarCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenubarRadioGroup";
var MenubarRadioGroup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...radioGroupProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .RadioGroup */ .z6, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
  }
);
MenubarRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenubarRadioItem";
var MenubarRadioItem = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...radioItemProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .RadioItem */ .hN, { ...menuScope, ...radioItemProps, ref: forwardedRef });
  }
);
MenubarRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "MenubarItemIndicator";
var MenubarItemIndicator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { __scopeMenubar, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .ItemIndicator */ .VF, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
MenubarItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "MenubarSeparator";
var MenubarSeparator = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...separatorProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Separator */ .wv, { ...menuScope, ...separatorProps, ref: forwardedRef });
  }
);
MenubarSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenubarArrow";
var MenubarArrow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Arrow */ .i3, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
MenubarArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenubarSub";
var MenubarSub = (props) => {
  const { __scopeMenubar, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeMenubar);
  const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__/* .useControllableState */ .i)({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .Sub */ .Pb, { ...menuScope, open, onOpenChange: setOpen, children });
};
MenubarSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenubarSubTrigger";
var MenubarSubTrigger = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...subTriggerProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .SubTrigger */ .ZP,
      {
        "data-radix-menubar-subtrigger": "",
        ...menuScope,
        ...subTriggerProps,
        ref: forwardedRef
      }
    );
  }
);
MenubarSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenubarSubContent";
var MenubarSubContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenubar, ...subContentProps } = props;
    const menuScope = useMenuScope(__scopeMenubar);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_5__/* .SubContent */ .G5,
      {
        ...menuScope,
        "data-radix-menubar-content": "",
        ...subContentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
            "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
MenubarSubContent.displayName = SUB_CONTENT_NAME;
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root3 = Menubar;
var Menu = MenubarMenu;
var Trigger = MenubarTrigger;
var Portal2 = MenubarPortal;
var Content2 = MenubarContent;
var Group2 = MenubarGroup;
var Label2 = MenubarLabel;
var Item3 = MenubarItem;
var CheckboxItem2 = MenubarCheckboxItem;
var RadioGroup2 = MenubarRadioGroup;
var RadioItem2 = MenubarRadioItem;
var ItemIndicator2 = MenubarItemIndicator;
var Separator2 = MenubarSeparator;
var Arrow2 = MenubarArrow;
var Sub2 = MenubarSub;
var SubTrigger2 = MenubarSubTrigger;
var SubContent2 = MenubarSubContent;

//# sourceMappingURL=index.mjs.map


/***/ })

}]);
//# sourceMappingURL=4511.js.map