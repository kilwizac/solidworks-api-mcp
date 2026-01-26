---
type: method
interface: IModelDoc2
member: ViewRotYPlusNinety
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ViewOrientationUndo
  - IModelDoc2.ViewRotXMinusNinety
  - IModelDoc2.ViewRotXPlusNinety
  - IModelDoc2.ViewRotYMinusNinety
  - IModelDoc2.ViewRotate
  - IModelDoc2.ViewRotateminusx
  - IModelDoc2.ViewRotateminusy
  - IModelDoc2.ViewRotateminusz
  - IModelDoc2.ViewRotateplusx
  - IModelDoc2.ViewRotateplusy
  - IModelDoc2.ViewRotateplusz
  - IModelDoc2.ViewZoomTo2
  - IModelDoc2.ViewZoomToSelection
  - IModelDoc2.ViewZoomin
  - IModelDoc2.ViewZoomout
  - IModelDoc2.ViewZoomto
  - IModelDoc2.ViewZoomtofit2
  - IModelDocExtension.ViewZoomToSheet
keywords:
  - view
  - orientation
  - rotate
  - viewrotyplusninety
  - imodeldoc2
  - model
  - doc2
  - rot
  - plus
  - ninety
  - void
  - vba
  - vb
  - net
---

# IModelDoc2.ViewRotYPlusNinety

Dynamically rotates the view by 90 about y.

## Signature

```csharp
void ViewRotYPlusNinety()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To increase the speed of dynamic view changes with hidden-edge display or hidden-grey display, use
IModelView::StartDynamics
and
IModelView::StopDynamics
.

## Examples

- Rotate Model (VBA) (Rotate_Model_Example_VB.htm)
- Rotate Model (VB.NET) (Rotate_Model_Example_VBNET.htm)
- Rotate Model (C#) (Rotate_Model_Example_CSharp.htm)

## See Also

- `IModelDoc2.ViewOrientationUndo`
- `IModelDoc2.ViewRotXMinusNinety`
- `IModelDoc2.ViewRotXPlusNinety`
- `IModelDoc2.ViewRotYMinusNinety`
- `IModelDoc2.ViewRotate`
- `IModelDoc2.ViewRotateminusx`
- `IModelDoc2.ViewRotateminusy`
- `IModelDoc2.ViewRotateminusz`
- `IModelDoc2.ViewRotateplusx`
- `IModelDoc2.ViewRotateplusy`
- `IModelDoc2.ViewRotateplusz`
- `IModelDoc2.ViewZoomTo2`
- `IModelDoc2.ViewZoomToSelection`
- `IModelDoc2.ViewZoomin`
- `IModelDoc2.ViewZoomout`
- `IModelDoc2.ViewZoomto`
- `IModelDoc2.ViewZoomtofit2`
- `IModelDocExtension.ViewZoomToSheet`