"use strict";
(self["webpackChunkanotate_imagecreation"] = self["webpackChunkanotate_imagecreation"] || []).push([[1825,4206,4936,6587,7063,8968,9500],{

/***/ 1473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ app)
});

// EXTERNAL MODULE: consume shared module (default) react@^8...3...1 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(6587);
// EXTERNAL MODULE: consume shared module (default) lucide-react@!=0...4.6.2...0 (strict) (singleton) (fallback: ../../node_modules/lucide-react/dist/esm/lucide-react.js)
var lucide_react_js_ = __webpack_require__(7758);
// EXTERNAL MODULE: consume shared module (default) @bosch-annotate/anotate-controls@>=..0...1 (singleton) (fallback: ../../libs/controls/src/index.ts)
var index_ts_ = __webpack_require__(8847);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9500);
;// ./src/app/components/ImageGeneration.tsx







const modelOptions = [{
  value: "stable-diffusion-xl",
  label: "Stable Diffusion XL",
  description: "High quality image generation",
  category: "Text-to-Image"
}, {
  value: "stable-diffusion-3",
  label: "Stable Diffusion 3",
  description: "Latest generation model",
  category: "Text-to-Image"
}, {
  value: "midjourney-v5",
  label: "Midjourney v5",
  description: "Artistic style generation",
  category: "Text-to-Image"
}];

// Sample generated images for demonstration
const sampleGeneratedImages = ["https://images.unsplash.com/photo-1579353977828-2a4eab540b9a", "https://images.unsplash.com/photo-1579762593131-b8945254345c", "https://images.unsplash.com/photo-1584559582128-b8be739912e0", "https://images.unsplash.com/photo-1564979045531-fa386a275b27"];
const ImageGenerator = () => {
  var _modelOptions$find;
  const [prompt, setPrompt] = (0,index_js_.useState)("");
  const [negativePrompt, setNegativePrompt] = (0,index_js_.useState)("");
  const [selectedModel, setSelectedModel] = (0,index_js_.useState)("stable-diffusion-xl");
  const [numImages, setNumImages] = (0,index_js_.useState)([4]);
  const [guidance, setGuidance] = (0,index_js_.useState)([7.5]);
  const [isGenerating, setIsGenerating] = (0,index_js_.useState)(false);
  const [generatedImages, setGeneratedImages] = (0,index_js_.useState)([]);
  const [copied, setCopied] = (0,index_js_.useState)(false);
  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);

    // Simulate generation delay
    setTimeout(() => {
      setGeneratedImages(sampleGeneratedImages.slice(0, numImages[0]));
      setIsGenerating(false);
    }, 3000);
  };
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const promptSuggestions = ["A professional photograph of a car on a mountain road at sunrise", "An aerial view of a city with skyscrapers and parks", "A close-up photo of a cat with green eyes looking at the camera", "A plate of food in a restaurant with soft background lighting"];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Card, {
      className: "mb-6",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.CardHeader, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardTitle, {
          className: "text-xl",
          children: "Generate Synthetic Images"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardDescription, {
          children: "Create realistic images using stable diffusion models"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardContent, {
        className: "space-y-4",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Tabs, {
          defaultValue: "text-to-image",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.TabsList, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
              value: "text-to-image",
              children: "Text to Image"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
              value: "image-to-image",
              disabled: true,
              children: "Image to Image"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
              value: "inpainting",
              disabled: true,
              children: "Inpainting"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.TabsContent, {
            value: "text-to-image",
            className: "space-y-4 pt-4",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "mb-2",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.ModelSelector, {
                  options: modelOptions,
                  value: selectedModel,
                  onValueChange: setSelectedModel
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-xs text-muted-foreground",
                children: ["Using ", (_modelOptions$find = modelOptions.find(m => m.value === selectedModel)) == null ? void 0 : _modelOptions$find.description]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  className: "text-sm font-medium",
                  children: "Prompt"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                  variant: "ghost",
                  size: "sm",
                  className: "h-5 text-xs gap-1",
                  onClick: handleCopyPrompt,
                  children: copied ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Check, {
                      className: "h-3 w-3"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: "Copied"
                    })]
                  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Copy, {
                      className: "h-3 w-3"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: "Copy"
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Textarea, {
                placeholder: "Describe the image you want to generate in detail...",
                value: prompt,
                onChange: e => setPrompt(e.target.value),
                className: "resize-none h-24"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                className: "text-sm font-medium",
                children: "Negative prompt"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Textarea, {
                placeholder: "Elements to exclude from the generated image...",
                value: negativePrompt,
                onChange: e => setNegativePrompt(e.target.value),
                className: "resize-none h-16"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Separator, {}), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                    className: "text-sm font-medium",
                    children: "Number of images"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: "text-sm text-muted-foreground",
                    children: numImages[0]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Slider, {
                  value: numImages,
                  onValueChange: setNumImages,
                  min: 1,
                  max: 4,
                  step: 1
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                    className: "text-sm font-medium",
                    children: "Guidance scale"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: "text-sm text-muted-foreground",
                    children: guidance[0]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Slider, {
                  value: guidance,
                  onValueChange: setGuidance,
                  min: 1,
                  max: 20,
                  step: 0.5
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "pt-2",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                onClick: handleGenerate,
                className: "w-full",
                disabled: isGenerating || !prompt,
                children: isGenerating ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.RefreshCw, {
                    className: "mr-2 h-4 w-4 animate-spin"
                  }), "Generating..."]
                }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Wand2, {
                    className: "mr-2 h-4 w-4"
                  }), "Generate"]
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.CardFooter, {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "text-sm text-muted-foreground mb-2",
          children: "Try these example prompts:"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "flex flex-wrap gap-2",
          children: promptSuggestions.map((suggestion, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Button, {
            variant: "outline",
            size: "sm",
            className: "text-xs",
            onClick: () => setPrompt(suggestion),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Sparkles, {
              className: "mr-1 h-3 w-3"
            }), suggestion.slice(0, 30), "..."]
          }, index))
        })]
      })]
    }), generatedImages.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "text-lg font-medium",
          children: "Generated Images"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Button, {
          variant: "outline",
          size: "sm",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Download, {
            className: "mr-2 h-4 w-4"
          }), "Download All"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: generatedImages.map((src, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "relative rounded-lg overflow-hidden border",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            src: src,
            alt: `Generated image ${index + 1}`,
            className: "w-full aspect-square object-cover"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "absolute bottom-0 right-0 p-2",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
              size: "icon",
              variant: "secondary",
              className: "rounded-full",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Download, {
                className: "h-4 w-4"
              })
            })
          })]
        }, index))
      })]
    })]
  });
};
;// ./src/app/app.tsx


function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGenerator, {})
  });
}
/* harmony default export */ const app = (App);
;// ./src/remote-entry.ts


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
//# sourceMappingURL=__federation_expose_Module.js.map