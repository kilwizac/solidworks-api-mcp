---
type: property
interface: ISldWorks
member: FrameLeft
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
  - ISldWorks.FrameTop
  - ISldWorks.FrameWidth
keywords:
  - windows
  - solidworks
  - position
  - window
  - frameleft
  - isldworks
  - sld
  - works
  - frame
  - left
  - int32
readonly: null
---

# ISldWorks.FrameLeft

Gets or sets the left position of the SOLIDWORKS window.

## Signature

```csharp
System.Int32 FrameLeft {get; set;}
```
## Parameters

None.

## Return Value

Left position of SOLIDWORKS window in pixels

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
- `ISldWorks.FrameTop`
- `ISldWorks.FrameWidth`