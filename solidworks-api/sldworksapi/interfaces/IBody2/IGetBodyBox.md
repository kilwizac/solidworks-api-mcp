---
type: method
interface: IBody2
member: IGetBodyBox
returns: void
parameters:
  -
    name: BoxCorners
    type: System.Double
    description: Pointer to an array of 6 doubles representing the extents of the bounding box (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IAssemblyDoc.GetBox
  - IAssemblyDoc.IGetBox
  - IBody2.GetBodyBox
  - IComponent2.GetBox
  - IComponent2.IGetBox
  - IFace2.GetBox
  - IFace2.IGetBox
  - IFeature.GetBox
  - IFeature.IGetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - bounding
  - box
  - bodies
  - igetbodybox
  - ibody2
  - body2
  - body
  - corners
  - double
  - void
---

# IBody2.IGetBodyBox

Gets the bounding box for this body.

## Signature

```csharp
void IGetBodyBox( 
   ref System.Double
BoxCorners
)
```
## Parameters

- `BoxCorners` (System.Double): Pointer to an array of 6 doubles representing the extents of the bounding box (see Remarks )

## Return Value

Unknown.

## Remarks

The X,Y,Z points returned by SOLIDWORKS are the lower and upper diagonal corners which bound the body with the box sides parallel to the X, Y and Z axes. The box dimensions returned by SOLIDWORKS enclose the body and are typically close to the minimum possible size (this is typical, but not always true).
The return value is an array of doubles as follows:
[
XCorner1, YCorner1, ZCorner1, XCorner2, YCorner2, ZCorner2
]
IMPORTANT:
The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.

## See Also

- `IAssemblyDoc.GetBox`
- `IAssemblyDoc.IGetBox`
- `IBody2.GetBodyBox`
- `IComponent2.GetBox`
- `IComponent2.IGetBox`
- `IFace2.GetBox`
- `IFace2.IGetBox`
- `IFeature.GetBox`
- `IFeature.IGetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`