---
type: property
interface: ISldWorks
member: FrameWidth
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelView.FrameHeight
  - IModelView.FrameLeft
  - IModelView.FrameState
  - IModelView.FrameTop
  - IModelView.FrameWidth
  - ISldWorks.FrameHeight
  - ISldWorks.FrameLeft
  - ISldWorks.FrameTop
keywords:
  - windows
  - solidworks
  - position
  - window
  - framewidth
  - isldworks
  - sld
  - works
  - frame
  - width
  - int32
readonly: null
---

# ISldWorks.FrameWidth

Gets or sets the width of the frame of the SOLIDWORKS window.

## Signature

```csharp
System.Int32 FrameWidth {get; set;}
```
## Parameters

None.

## Return Value

Width of the SOLIDWORKS window in pixels

## Remarks

This property is valid only if
ISldWorks::FrameState
is
swWindowState_e
.swWindowNormal.

## See Also

- `IModelView.FrameHeight`
- `IModelView.FrameLeft`
- `IModelView.FrameState`
- `IModelView.FrameTop`
- `IModelView.FrameWidth`
- `ISldWorks.FrameHeight`
- `ISldWorks.FrameLeft`
- `ISldWorks.FrameTop`