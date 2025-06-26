"use strict";
(self["webpackChunkanotate_imagedetection"] = self["webpackChunkanotate_imagedetection"] || []).push([[16,492,1825,1929,2873,3349,4206,4301,4310,4312,5254,5730,6587,6682,6691,7063,7635,8111,8968,9072,9367,9500],{

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

/***/ 4312:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^8...3...1 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(6587);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(1886);
// EXTERNAL MODULE: consume shared module (default) lucide-react@!=0...4.6.2...0 (strict) (singleton) (fallback: ../../node_modules/lucide-react/dist/esm/lucide-react.js)
var lucide_react_js_ = __webpack_require__(7758);
// EXTERNAL MODULE: consume shared module (default) @bosch-annotate/anotate-controls@>=..0...1 (singleton) (fallback: ../../libs/controls/src/index.ts)
var index_ts_ = __webpack_require__(8847);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9209);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(9500);
;// ./src/app/components/AnnotationCanvas.tsx






const AnnotationCanvas = ({
  imageSrc,
  boxes: _boxes = [],
  onBoxChange,
  editable: _editable = true,
  className
}) => {
  const canvasRef = (0,index_js_.useRef)(null);
  const imageRef = (0,index_js_.useRef)(null);
  const [activeBoxId, setActiveBoxId] = (0,index_js_.useState)(null);
  const [imageLoaded, setImageLoaded] = (0,index_js_.useState)(false);
  const [imageSize, setImageSize] = (0,index_js_.useState)({
    width: 0,
    height: 0
  });
  const [isDrawing, setIsDrawing] = (0,index_js_.useState)(false);
  const [startPos, setStartPos] = (0,index_js_.useState)({
    x: 0,
    y: 0
  });
  (0,index_js_.useEffect)(() => {
    if (imageRef.current && imageRef.current.complete) {
      setImageLoaded(true);
      setImageSize({
        width: imageRef.current.width,
        height: imageRef.current.height
      });
    }
  }, []);
  const handleImageLoad = () => {
    setImageLoaded(true);
    if (imageRef.current) {
      setImageSize({
        width: imageRef.current.width,
        height: imageRef.current.height
      });
    }
  };
  const handleBoxClick = boxId => {
    if (!_editable) return;
    setActiveBoxId(activeBoxId === boxId ? null : boxId);
  };
  const handleMouseDown = e => {
    if (!_editable || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if we're clicking inside an existing box
    const clickedBox = (_boxes || []).find(box => {
      const boxX = box.x * imageSize.width;
      const boxY = box.y * imageSize.height;
      const boxWidth = box.width * imageSize.width;
      const boxHeight = box.height * imageSize.height;
      return x >= boxX && x <= boxX + boxWidth && y >= boxY && y <= boxY + boxHeight;
    });
    if (clickedBox) {
      handleBoxClick(clickedBox.id);
      return;
    }

    // Otherwise start drawing a new box
    setIsDrawing(true);
    setStartPos({
      x,
      y
    });
  };
  const handleMouseMove = e => {
    if (!isDrawing || !canvasRef.current || !_editable) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, imageSize.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, imageSize.height));

    // Update the temporary drawing box
    const tempBox = document.getElementById("temp-box");
    if (tempBox) {
      const width = x - startPos.x;
      const height = y - startPos.y;
      if (width > 0 && height > 0) {
        tempBox.style.left = `${startPos.x}px`;
        tempBox.style.top = `${startPos.y}px`;
        tempBox.style.width = `${width}px`;
        tempBox.style.height = `${height}px`;
        tempBox.style.display = "block";
      } else if (width < 0 && height > 0) {
        tempBox.style.left = `${x}px`;
        tempBox.style.top = `${startPos.y}px`;
        tempBox.style.width = `${Math.abs(width)}px`;
        tempBox.style.height = `${height}px`;
        tempBox.style.display = "block";
      } else if (width > 0 && height < 0) {
        tempBox.style.left = `${startPos.x}px`;
        tempBox.style.top = `${y}px`;
        tempBox.style.width = `${width}px`;
        tempBox.style.height = `${Math.abs(height)}px`;
        tempBox.style.display = "block";
      } else {
        tempBox.style.left = `${x}px`;
        tempBox.style.top = `${y}px`;
        tempBox.style.width = `${Math.abs(width)}px`;
        tempBox.style.height = `${Math.abs(height)}px`;
        tempBox.style.display = "block";
      }
    }
  };
  const handleMouseUp = e => {
    if (!isDrawing || !canvasRef.current || !_editable) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, imageSize.width));
    const y = Math.max(0, Math.min(e.clientY - rect.top, imageSize.height));

    // Minimum size check
    const width = Math.abs(x - startPos.x);
    const height = Math.abs(y - startPos.y);
    if (width > 10 && height > 10) {
      // Calculate normalized coordinates
      const left = Math.min(startPos.x, x) / imageSize.width;
      const top = Math.min(startPos.y, y) / imageSize.height;
      const boxWidth = width / imageSize.width;
      const boxHeight = height / imageSize.height;

      // Create new box
      const newBox = {
        id: `box-${Date.now()}`,
        x: left,
        y: top,
        width: boxWidth,
        height: boxHeight,
        label: "unlabeled",
        color: getRandomColor()
      };
      const updatedBoxes = [...(_boxes || []), newBox];
      onBoxChange && onBoxChange(updatedBoxes);
      setActiveBoxId(newBox.id);
    }

    // Hide temporary box
    const tempBox = document.getElementById("temp-box");
    if (tempBox) {
      tempBox.style.display = "none";
    }
    setIsDrawing(false);
  };
  const getRandomColor = () => {
    const colors = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#E5DEFF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const deleteBox = (id, e) => {
    e.stopPropagation();
    const updatedBoxes = (_boxes || []).filter(box => box.id !== id);
    onBoxChange && onBoxChange(updatedBoxes);
    if (activeBoxId === id) {
      setActiveBoxId(null);
    }
  };
  const updateBoxLabel = (id, label) => {
    const updatedBoxes = (_boxes || []).map(box => box.id === id ? (0,esm_extends/* default */.A)({}, box, {
      label
    }) : box);
    onBoxChange && onBoxChange(updatedBoxes);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,index_ts_.cn)("annotation-canvas", className),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: canvasRef,
      className: "relative overflow-hidden",
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: () => setIsDrawing(false),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        ref: imageRef,
        src: imageSrc,
        alt: "Annotation canvas",
        className: "max-w-full h-auto",
        onLoad: handleImageLoad
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        id: "temp-box",
        className: "absolute border-2 border-dashed border-studio-purple bg-studio-purple/20 pointer-events-none",
        style: {
          display: "none"
        }
      }), imageLoaded && (_boxes || []).map(box => {
        const boxStyle = {
          left: `${box.x * imageSize.width}px`,
          top: `${box.y * imageSize.height}px`,
          width: `${box.width * imageSize.width}px`,
          height: `${box.height * imageSize.height}px`,
          borderColor: box.color,
          backgroundColor: `${box.color}20`
        };
        const isActive = activeBoxId === box.id;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: `absolute border-2 cursor-pointer transition-all ${isActive ? "border-white shadow-lg" : ""}`,
          style: boxStyle,
          onClick: () => handleBoxClick(box.id),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: `absolute -top-7 left-0 bg-black/70 text-white text-xs px-2 py-1 rounded-t-md whitespace-nowrap flex items-center gap-1 ${isActive ? "bg-studio-purple" : ""}`,
            children: isActive && _editable ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                type: "text",
                value: box.label,
                onChange: e => updateBoxLabel(box.id, e.target.value),
                className: "bg-transparent outline-none text-white w-24",
                onClick: e => e.stopPropagation()
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                size: "icon",
                variant: "ghost",
                className: "h-4 w-4 text-white hover:text-white",
                onClick: e => deleteBox(box.id, e),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.X, {
                  className: "h-3 w-3"
                })
              })]
            }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [box.label, box.confidence !== undefined && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: "ml-1 text-gray-300",
                children: ["(", Math.round(box.confidence * 100), "%)"]
              })]
            })
          })
        }, box.id);
      })]
    })
  });
};
;// ./src/app/components/ObjectDetection.tsx








const modelOptions = [{
  value: "yolov8s",
  label: "YOLOv8 Small",
  category: "Object Detection"
}, {
  value: "yolov8m",
  label: "YOLOv8 Medium",
  category: "Object Detection"
}, {
  value: "yolov8l",
  label: "YOLOv8 Large",
  category: "Object Detection"
}, {
  value: "yolov8x",
  label: "YOLOv8 XLarge",
  category: "Object Detection"
}, {
  value: "detr",
  label: "DETR ResNet-50",
  category: "Object Detection"
}, {
  value: "faster-rcnn",
  label: "Faster R-CNN",
  category: "Object Detection"
}];

// Sample object detection results
const sampleDetections = [{
  id: "box-1",
  x: 0.2,
  y: 0.3,
  width: 0.4,
  height: 0.3,
  label: "person",
  confidence: 0.92,
  color: "#9b87f5"
}, {
  id: "box-2",
  x: 0.6,
  y: 0.5,
  width: 0.3,
  height: 0.2,
  label: "car",
  confidence: 0.87,
  color: "#7E69AB"
}];
const ObjectDetection = () => {
  const [uploadedImage, setUploadedImage] = (0,index_js_.useState)(null);
  const [selectedModel, setSelectedModel] = (0,index_js_.useState)("yolov8s");
  const [isProcessing, setIsProcessing] = (0,index_js_.useState)(false);
  const [annotations, setAnnotations] = (0,index_js_.useState)([]);
  const [activeTab, setActiveTab] = (0,index_js_.useState)("detect");
  const handleImageUpload = e => {
    var _e$target$files;
    const file = (_e$target$files = e.target.files) == null ? void 0 : _e$target$files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        var _e$target;
        const result = (_e$target = e.target) == null ? void 0 : _e$target.result;
        setUploadedImage(result);
        setAnnotations([]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDetection = () => {
    if (!uploadedImage) return;
    setIsProcessing(true);

    // Simulate detection delay
    setTimeout(() => {
      setAnnotations(sampleDetections || []);
      setIsProcessing(false);
    }, 2000);
  };
  const handleClearAnnotations = () => {
    setAnnotations([]);
  };
  const handleBoxChange = updatedBoxes => {
    setAnnotations(updatedBoxes || []);
  };
  const colors = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#E5DEFF"];
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "w-full",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Card, {
      className: "mb-6",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.CardHeader, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardTitle, {
          className: "text-xl",
          children: "Object Detection and Annotation"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardDescription, {
          children: "Detect objects in images and create annotations with SOTA models"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.CardContent, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Tabs, {
          value: activeTab,
          onValueChange: setActiveTab,
          className: "w-full",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.TabsList, {
            className: "grid grid-cols-2 w-[300px] mb-6",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
              value: "detect",
              children: "Detect Objects"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.TabsTrigger, {
              value: "annotate",
              children: "Manual Annotation"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col lg:flex-row gap-6",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "mb-4",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
                  htmlFor: "detection-image-upload",
                  className: `flex flex-col items-center justify-center h-60 border-2 border-dashed rounded-lg cursor-pointer ${uploadedImage ? "border-muted" : "border-muted-foreground/25"}`,
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
                        setAnnotations([]);
                      },
                      size: "sm",
                      children: "Replace"
                    })]
                  }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex flex-col items-center justify-center gap-2 text-center p-6",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "rounded-full bg-muted p-2",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Upload, {
                          className: "h-5 w-5 text-muted-foreground"
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                          className: "font-medium",
                          children: "Click to upload an image"
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: "JPG, PNG or WEBP"
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                      id: "detection-image-upload",
                      type: "file",
                      accept: "image/*",
                      className: "sr-only",
                      onChange: handleImageUpload
                    })]
                  })
                })
              }), uploadedImage && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "space-y-4",
                  children: [activeTab === "detect" && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.ModelSelector, {
                        options: modelOptions,
                        value: selectedModel,
                        onValueChange: setSelectedModel
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Select a model for object detection"
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex gap-2",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                        variant: "default",
                        className: "flex-1",
                        disabled: isProcessing || !uploadedImage,
                        onClick: handleDetection,
                        children: isProcessing ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.RefreshCw, {
                            className: "mr-2 h-4 w-4 animate-spin"
                          }), "Processing..."]
                        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Box, {
                            className: "mr-2 h-4 w-4"
                          }), "Detect Objects"]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                        variant: "outline",
                        disabled: annotations.length === 0,
                        onClick: handleClearAnnotations,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Trash2, {
                          className: "h-4 w-4"
                        })
                      })]
                    })]
                  }), activeTab === "annotate" && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      className: "flex justify-between items-center",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                        className: "text-sm",
                        children: "Draw bounding boxes directly on the image"
                      })
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      className: "flex flex-wrap gap-2",
                      children: (colors || []).map((color, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "w-8 h-8 rounded-full border cursor-pointer",
                        style: {
                          backgroundColor: color
                        }
                      }, index))
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex gap-2",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Button, {
                        variant: "default",
                        className: "flex-1",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Save, {
                          className: "mr-2 h-4 w-4"
                        }), "Save Annotations"]
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                        variant: "outline",
                        disabled: annotations.length === 0,
                        onClick: handleClearAnnotations,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Trash2, {
                          className: "h-4 w-4"
                        })
                      })]
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "flex-1",
              children: uploadedImage ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "mb-3 flex justify-between",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
                    className: "text-md font-medium",
                    children: activeTab === "detect" ? "Detection Results" : "Manual Annotation"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)(index_ts_.Badge, {
                    variant: "outline",
                    children: [annotations.length, " ", annotations.length === 1 ? "object" : "objects"]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(AnnotationCanvas, {
                  imageSrc: uploadedImage,
                  boxes: annotations,
                  onBoxChange: handleBoxChange,
                  editable: true
                }), annotations.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "mt-4",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
                    className: "text-sm font-medium mb-2",
                    children: "Detected Objects"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: "space-y-2",
                    children: (annotations || []).map(box => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                          className: "w-3 h-3 rounded-full",
                          style: {
                            backgroundColor: box.color
                          }
                        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                          className: "font-medium",
                          children: box.label
                        }), box.confidence !== undefined && /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                          className: "text-xs text-muted-foreground",
                          children: [Math.round(box.confidence * 100), "% confidence"]
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.Button, {
                        size: "icon",
                        variant: "ghost",
                        className: "h-8 w-8",
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Eye, {
                          className: "h-4 w-4"
                        })
                      })]
                    }, box.id))
                  })]
                })]
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "border rounded-lg h-full flex items-center justify-center p-6 text-center",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "max-w-xs",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(lucide_react_js_.Box, {
                    className: "h-8 w-8 mx-auto text-muted-foreground mb-3"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
                    className: "text-lg font-medium mb-1",
                    children: "No image selected"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Upload an image to detect objects or create annotations"
                  })]
                })
              })
            })]
          })]
        })
      })]
    })
  });
};
;// ./src/app/app.tsx


function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ObjectDetection, {})
  });
}
/* harmony default export */ const app = (App);
;// ./src/bootstrap.tsx




const root = client/* createRoot */.H(document.getElementById('root'));
root.render(/*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {})
}));

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

/***/ 9209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ 9500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(8736);
} else // removed by dead control flow
{}


/***/ })

}]);
//# sourceMappingURL=4312.js.map