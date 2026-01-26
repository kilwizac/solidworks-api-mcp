---
type: property
interface: ISldWorks
member: FrameTop
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
  - ISldWorks.FrameWidth
keywords:
  - windows
  - solidworks
  - position
  - window
  - frametop
  - isldworks
  - sld
  - works
  - frame
  - top
  - int32
readonly: null
---

# ISldWorks.FrameTop

Gets or sets the top position of the SOLIDWORKS window.

## Signature

```csharp
System.Int32 FrameTop {get; set;}
```
## Parameters

None.

## Return Value

Top position of the SOLIDWORKS window in pixels

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
- `ISldWorks.FrameWidth`