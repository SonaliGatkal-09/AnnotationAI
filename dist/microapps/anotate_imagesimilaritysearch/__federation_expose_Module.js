"use strict";
(self["webpackChunkanotate_imagesimilaritysearch"] = self["webpackChunkanotate_imagesimilaritysearch"] || []).push([[1825,4206,4936,6587,7063,8968,9500],{

/***/ 5288:
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
;// ./src/app/components/ImageCard.tsx




const ImageCard = ({
  src,
  alt: _alt = "Image",
  title,
  similarity,
  onView,
  onEdit,
  onDelete
}) => {
  const [isHovered, setIsHovered] = (0,index_js_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "image-card group bg-white rounded-lg overflow-hidden",
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "relative aspect-square overflow-hidden",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: src,
        alt: _alt,
        className: "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end",
        children: [similarity !== undefined && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full w-fit mb-2",
          children: [Math.round(similarity * 100), "% match"]
        }), title && /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "text-white font-medium truncate text-sm",
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex gap-1 mt-2",
          children: [onView && /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
            size: "icon",
            variant: "secondary",
            className: "h-7 w-7",
            onClick: e => {
              e.stopPropagation();
              onView();
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Maximize2, {
              className: "h-3.5 w-3.5"
            })
          }), onEdit && /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
            size: "icon",
            variant: "secondary",
            className: "h-7 w-7",
            onClick: e => {
              e.stopPropagation();
              onEdit();
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Edit, {
              className: "h-3.5 w-3.5"
            })
          }), onDelete && /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
            size: "icon",
            variant: "destructive",
            className: "h-7 w-7",
            onClick: e => {
              e.stopPropagation();
              onDelete();
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Trash2, {
              className: "h-3.5 w-3.5"
            })
          })]
        })]
      })]
    })
  });
};
;// ./src/app/components/similaritysearchcomponent.tsx







// Sample data for demonstration

const sampleSimilarImages = [{
  id: 1,
  src: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a",
  title: "Sunset at the beach",
  similarity: 0.92
}, {
  id: 2,
  src: "https://images.unsplash.com/photo-1579762593131-b8945254345c",
  title: "Mountain landscape",
  similarity: 0.87
}, {
  id: 3,
  src: "https://images.unsplash.com/photo-1584559582128-b8be739912e0",
  title: "Urban cityscape",
  similarity: 0.76
}, {
  id: 4,
  src: "https://images.unsplash.com/photo-1564979045531-fa386a275b27",
  title: "Forest pathway",
  similarity: 0.68
}, {
  id: 5,
  src: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6",
  title: "Ocean view",
  similarity: 0.61
}, {
  id: 6,
  src: "https://images.unsplash.com/photo-1611816055460-618287c870bd",
  title: "Desert landscape",
  similarity: 0.57
}];
const modelOptions = [{
  value: "resnet50",
  label: "ResNet-50",
  category: "Image Embedding"
}, {
  value: "efficientnet",
  label: "EfficientNet-B0",
  category: "Image Embedding"
}, {
  value: "vit",
  label: "Vision Transformer",
  category: "Image Embedding"
}];
const SimilaritySearch = () => {
  const [selectedModel, setSelectedModel] = (0,index_js_.useState)("resnet50");
  const [similarityThreshold, setSimilarityThreshold] = (0,index_js_.useState)([0.5]);
  const [uploadedImage, setUploadedImage] = (0,index_js_.useState)(null);
  const [isLoading, setIsLoading] = (0,index_js_.useState)(false);
  const [results, setResults] = (0,index_js_.useState)([]);
  const handleImageUpload = e => {
    var _e$target$files;
    const file = (_e$target$files = e.target.files) == null ? void 0 : _e$target$files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        var _e$target;
        const result = (_e$target = e.target) == null ? void 0 : _e$target.result;
        setUploadedImage(result);

        // Simulate search delay
        setIsLoading(true);
        setTimeout(() => {
          setResults(sampleSimilarImages);
          setIsLoading(false);
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };
  const filteredResults = results.filter(image => image.similarity >= similarityThreshold[0]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Card, {
      className: "mb-6",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.CardHeader, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardTitle, {
          className: "text-xl",
          children: "Image Similarity Search"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardDescription, {
          children: "Find visually similar images using image embedding models"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardContent, {
        className: "space-y-4",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col lg:flex-row gap-6",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: `flex-1 border-2 border-dashed rounded-lg ${uploadedImage ? "" : "border-muted-foreground/25"}`,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              htmlFor: "image-upload",
              className: `flex flex-col items-center justify-center h-60 md:h-80 cursor-pointer ${uploadedImage ? "p-4" : "p-6"}`,
              children: uploadedImage ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-full",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: uploadedImage,
                  alt: "Uploaded image",
                  className: "w-full h-full object-contain"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                  variant: "outline",
                  className: "absolute bottom-2 right-2",
                  onClick: e => {
                    e.preventDefault();
                    setUploadedImage(null);
                    setResults([]);
                  },
                  children: "Replace"
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-3 text-center",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "rounded-full bg-muted p-3",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Upload, {
                      className: "h-6 w-6 text-muted-foreground"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                      className: "text-base font-medium",
                      children: "Drag and drop an image, or click to browse"
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children: "JPG, PNG or WEBP up to 10MB"
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  id: "image-upload",
                  type: "file",
                  accept: "image/*",
                  className: "sr-only",
                  onChange: handleImageUpload
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "space-y-4 lg:w-1/3",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
                className: "text-sm font-medium mb-2",
                children: "Select embedding model"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.ModelSelector, {
                options: modelOptions,
                value: selectedModel,
                onValueChange: setSelectedModel
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between mb-2",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
                  className: "text-sm font-medium",
                  children: "Similarity threshold"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Badge, {
                  variant: "secondary",
                  children: [Math.round(similarityThreshold[0] * 100), "%"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Slider, {
                value: similarityThreshold,
                onValueChange: setSimilarityThreshold,
                min: 0,
                max: 1,
                step: 0.01
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "pt-4",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                variant: "default",
                className: "w-full",
                disabled: !uploadedImage || isLoading,
                onClick: () => {
                  setIsLoading(true);
                  // Simulate search delay
                  setTimeout(() => {
                    setResults(sampleSimilarImages);
                    setIsLoading(false);
                  }, 1000);
                },
                children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.RefreshCw, {
                    className: "mr-2 h-4 w-4 animate-spin"
                  }), "Finding matches..."]
                }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Image, {
                    className: "mr-2 h-4 w-4"
                  }), "Find similar images"]
                })
              })
            })]
          })]
        })
      })]
    }), uploadedImage && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "text-lg font-medium",
          children: "Similar images"
        }), filteredResults.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "text-sm text-muted-foreground",
          children: [filteredResults.length, " matches above ", Math.round(similarityThreshold[0] * 100), "% threshold"]
        }) : null]
      }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        children: [1, 2, 3, 4].map(i => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "aspect-square bg-muted animate-pulse rounded-lg"
        }, i))
      }) : filteredResults.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
        children: filteredResults.map(image => /*#__PURE__*/(0,jsx_runtime.jsx)(ImageCard, {
          src: image.src,
          alt: image.title,
          title: image.title,
          similarity: image.similarity,
          onView: () => console.log("View", image.id),
          onEdit: () => console.log("Edit", image.id)
        }, image.id))
      }) : results.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "text-center py-12",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "text-lg font-medium mb-2",
          children: "No matches found above threshold"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "text-muted-foreground mb-4",
          children: "Try lowering the similarity threshold to see more results"
        })]
      }) : null]
    })]
  });
};
;// ./src/app/app.tsx


function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SimilaritySearch, {})
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