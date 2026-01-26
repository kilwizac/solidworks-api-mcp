---
type: property
interface: ISldWorks
member: FrameHeight
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
  - ISldWorks.FrameLeft
  - ISldWorks.FrameTop
  - ISldWorks.FrameWidth
keywords:
  - windows
  - solidworks
  - position
  - window
  - frameheight
  - isldworks
  - sld
  - works
  - frame
  - height
  - int32
readonly: null
---

# ISldWorks.FrameHeight

Get or sets the height of the SOLIDWORKS window.

## Signature

```csharp
System.Int32 FrameHeight {get; set;}
```
## Parameters

None.

## Return Value

Height of the SOLIDWORKS window in pixels

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
- `ISldWorks.FrameLeft`
- `ISldWorks.FrameTop`
- `ISldWorks.FrameWidth`