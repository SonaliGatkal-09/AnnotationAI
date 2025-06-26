"use strict";
(self["webpackChunkanotate_imagesearch"] = self["webpackChunkanotate_imagesearch"] || []).push([[16,492,1825,1929,2873,3349,4206,4301,4310,5254,5730,6587,6682,6691,7063,7635,8111,8968,9057,9072,9367,9500],{

/***/ 1886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(3349);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else // removed by dead control flow
{ var i; }


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

/***/ 9057:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^8...3...1 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(6587);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(1886);
// EXTERNAL MODULE: consume shared module (default) lucide-react@!=0...4.6.2...0 (strict) (singleton) (fallback: ../../node_modules/lucide-react/dist/esm/lucide-react.js)
var lucide_react_js_ = __webpack_require__(7758);
// EXTERNAL MODULE: consume shared module (default) @bosch-annotate/anotate-controls@>=..0...1 (singleton) (fallback: ../../libs/controls/src/index.ts)
var index_ts_ = __webpack_require__(8847);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9500);
;// ./src/app/components/SearchBar.tsx



const SearchBar = ({
  placeholder: _placeholder = "Search images...",
  onSearch,
  value: _value = "",
  onChange
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch && onSearch(_value || "");
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    onSubmit: handleSubmit,
    className: "flex w-full max-w-3xl gap-2",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "relative flex-grow",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Search, {
        className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Input, {
        type: "text",
        placeholder: _placeholder,
        className: "pl-9 pr-12 py-6 text-base rounded-lg border-muted",
        value: _value,
        onChange: onChange
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
      type: "submit",
      className: "px-6",
      children: "Search"
    })]
  });
};
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
;// ./src/app/components/ImageSearch.tsx









// Sample data for demonstration

const sampleImages = [{
  id: 1,
  src: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a",
  title: "Sunset at the beach"
}, {
  id: 2,
  src: "https://images.unsplash.com/photo-1579762593131-b8945254345c",
  title: "Mountain landscape"
}, {
  id: 3,
  src: "https://images.unsplash.com/photo-1584559582128-b8be739912e0",
  title: "Urban cityscape"
}, {
  id: 4,
  src: "https://images.unsplash.com/photo-1564979045531-fa386a275b27",
  title: "Forest pathway"
}, {
  id: 5,
  src: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6",
  title: "Ocean view"
}, {
  id: 6,
  src: "https://images.unsplash.com/photo-1611816055460-618287c870bd",
  title: "Desert landscape"
}];
const modelOptions = [{
  value: "clip-vit-base",
  label: "CLIP ViT-B/32",
  category: "Vector Embedding"
}, {
  value: "clip-vit-large",
  label: "CLIP ViT-L/14",
  category: "Vector Embedding"
}, {
  value: "open-clip",
  label: "OpenCLIP ViT-H/14",
  category: "Vector Embedding"
}];
const ImageSearch = () => {
  var _modelOptions$find;
  const [searchQuery, setSearchQuery] = (0,index_js_.useState)("");
  const [selectedModel, setSelectedModel] = (0,index_js_.useState)("clip-vit-base");
  const [searchResults, setSearchResults] = (0,index_js_.useState)([]);
  const [isLoading, setIsLoading] = (0,index_js_.useState)(false);
  const [activeTab, setActiveTab] = (0,index_js_.useState)("semantic");
  const handleSearch = query => {
    if (!query.trim()) return;
    setIsLoading(true);
    setSearchQuery(query);

    // Simulate search delay
    setTimeout(() => {
      // In a real app, this would call an API with the embeddings model
      setSearchResults(sampleImages || []);
      setIsLoading(false);
    }, 1000);
  };
  const handleSearchInputChange = e => {
    setSearchQuery(e.target.value || "");
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Card, {
      className: "mb-6",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardHeader, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardTitle, {
              className: "text-xl",
              children: "Prompt-based Image Search"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardDescription, {
              children: "Use natural language to search for images based on semantic meaning"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Badge, {
              variant: "outline",
              className: "gap-1",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Info, {
                className: "h-3 w-3"
              }), "Using ", ((_modelOptions$find = modelOptions.find(m => m.value === selectedModel)) == null ? void 0 : _modelOptions$find.label) || "Default Model"]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardContent, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "space-y-4",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Tabs, {
            value: activeTab,
            onValueChange: setActiveTab,
            className: "w-full",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.TabsList, {
              className: "grid grid-cols-2 w-[300px]",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
                value: "semantic",
                children: "Semantic Search"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
                value: "metadata",
                children: "Metadata Search"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsContent, {
              value: "semantic",
              className: "pt-4",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchBar, {
                      placeholder: "Describe the images you're looking for...",
                      value: searchQuery,
                      onChange: handleSearchInputChange,
                      onSearch: handleSearch
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "w-full sm:w-60",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.ModelSelector, {
                      options: modelOptions,
                      value: selectedModel,
                      onValueChange: setSelectedModel
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "text-sm text-muted-foreground",
                  children: "Try: \"sunset over mountains\", \"people working in office\", \"food on a plate\""
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsContent, {
              value: "metadata",
              className: "pt-4",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SearchBar, {
                  placeholder: "Search by file name, tags, or other metadata..."
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "text-sm text-muted-foreground",
                  children: "Search by filename, creation date, size, tags and other metadata"
                })]
              })
            })]
          })
        })
      })]
    }), searchQuery && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "space-y-3",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
          className: "text-lg font-medium",
          children: ["Results for \"", searchQuery, "\""]
        }), searchResults && searchResults.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "text-sm text-muted-foreground",
          children: [searchResults.length, " results"]
        })]
      }), isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        children: [1, 2, 3, 4].map(i => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "aspect-square bg-muted animate-pulse rounded-lg"
        }, i))
      }) : searchResults && searchResults.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
        children: searchResults.map(image => /*#__PURE__*/(0,jsx_runtime.jsx)(ImageCard, {
          src: image.src,
          alt: image.title,
          title: image.title,
          onView: () => console.log("View", image.id),
          onEdit: () => console.log("Edit", image.id)
        }, image.id))
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "text-center py-12",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "text-lg font-medium mb-2",
          children: "No results found"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "text-muted-foreground mb-4",
          children: "Try adjusting your search query or select a different embedding model"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
          onClick: () => setSearchQuery(""),
          children: "Clear search"
        })]
      })]
    })]
  });
};
;// ./src/app/app.tsx


function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ImageSearch, {})
  });
}
/* harmony default export */ const app = (App);
;// ./src/bootstrap.tsx




const root = client/* createRoot */.H(document.getElementById('root'));
root.render(/*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {})
}));

/***/ }),

/***/ 9500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(8736);
} else // removed by dead control flow
{}


/***/ })

}]);
//# sourceMappingURL=9057.js.map