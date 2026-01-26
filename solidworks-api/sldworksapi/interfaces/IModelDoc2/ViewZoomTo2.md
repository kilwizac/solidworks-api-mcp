---
type: method
interface: IModelDoc2
member: ViewZoomTo2
returns: void
parameters:
  -
    name: X1
    type: System.Double
    description: X value for the lower-left point of the zoom area
  -
    name: Y1
    type: System.Double
    description: Y value for the lower- left point of the zoom area
  -
    name: Z1
    type: System.Double
    description: Z value for the lower-left point of the zoom area
  -
    name: X2
    type: System.Double
    description: X value for the upper-right point of the zoom area
  -
    name: Y2
    type: System.Double
    description: Y value for the upper-right point of the zoom area
  -
    name: Z2
    type: System.Double
    description: Z value for the upper-right point of the zoom area
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
  - IModelDoc2.ViewRotYPlusNinety
  - IModelDoc2.ViewRotate
  - IModelDoc2.ViewRotateminusx
  - IModelDoc2.ViewRotateminusy
  - IModelDoc2.ViewRotateminusz
  - IModelDoc2.ViewRotateplusx
  - IModelDoc2.ViewRotateplusy
  - IModelDoc2.ViewRotateplusz
  - IModelDoc2.ViewZoomToSelection
  - IModelDoc2.ViewZoomin
  - IModelDoc2.ViewZoomout
  - IModelDoc2.ViewZoomto
  - IModelDoc2.ViewZoomtofit2
  - IModelDocExtension.ViewZoomToSheet
keywords:
  - zoom
  - region
  - view
  - orientation
  - viewzoomto2
  - imodeldoc2
  - model
  - doc2
  - to2
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - void
  - vba
---

# IModelDoc2.ViewZoomTo2

Zooms to the specified region.

## Signature

```csharp
void ViewZoomTo2( 
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
)
```
## Parameters

- `X1` (System.Double): X value for the lower-left point of the zoom area
- `Y1` (System.Double): Y value for the lower- left point of the zoom area
- `Z1` (System.Double): Z value for the lower-left point of the zoom area
- `X2` (System.Double): X value for the upper-right point of the zoom area
- `Y2` (System.Double): Y value for the upper-right point of the zoom area
- `Z2` (System.Double): Z value for the upper-right point of the zoom area

## Return Value

Unknown.

## Examples

- Zoom To Region (VBA) (Zoom_to_Region_Example_VB.htm)

## See Also

- `IModelDoc2.ViewOrientationUndo`
- `IModelDoc2.ViewRotXMinusNinety`
- `IModelDoc2.ViewRotXPlusNinety`
- `IModelDoc2.ViewRotYMinusNinety`
- `IModelDoc2.ViewRotYPlusNinety`
- `IModelDoc2.ViewRotate`
- `IModelDoc2.ViewRotateminusx`
- `IModelDoc2.ViewRotateminusy`
- `IModelDoc2.ViewRotateminusz`
- `IModelDoc2.ViewRotateplusx`
- `IModelDoc2.ViewRotateplusy`
- `IModelDoc2.ViewRotateplusz`
- `IModelDoc2.ViewZoomToSelection`
- `IModelDoc2.ViewZoomin`
- `IModelDoc2.ViewZoomout`
- `IModelDoc2.ViewZoomto`
- `IModelDoc2.ViewZoomtofit2`
- `IModelDocExtension.ViewZoomToSheet`