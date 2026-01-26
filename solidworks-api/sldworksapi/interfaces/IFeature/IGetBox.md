---
type: method
interface: IFeature
member: IGetBox
returns: System.Boolean
parameters:
  -
    name: BBox
    type: System.Double
    description: Array containing the two diagonal points
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAssemblyDoc.GetBox
  - IAssemblyDoc.IGetBox
  - IBody2.GetBodyBox
  - IBody2.IGetBodyBox
  - IComponent2.GetBox
  - IComponent2.IGetBox
  - IFace2.GetBox
  - IFace2.IGetBox
  - IFeature.GetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - bounding
  - box
  - features
  - igetbox
  - ifeature
  - feature
  - double
  - boolean
---

# IFeature.IGetBox

Gets the bounding box for this feature.

## Signature

```csharp
System.Boolean IGetBox( 
   out System.Double
BBox
)
```
## Parameters

- `BBox` (System.Double): Array containing the two diagonal points

## Return Value

True if the operation was successful, false if not

## Remarks

IMPORTANT:
The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.
The resulting box encloses the object, but it might not be the tightest box.
The two X, Y, Z points returned are the lower- and upper-diagonal corners that bound the feature. The box is aligned with the model coordinate system. The box dimensions enclose the feature. However, the box might not be the minimum bounding box for the model.
The return value is an array of 6 doubles as follows:
[
XCorner1, YCorner1, ZCorner1, XCorner2, YCorner2, ZCorner2
]

## See Also

- `IAssemblyDoc.GetBox`
- `IAssemblyDoc.IGetBox`
- `IBody2.GetBodyBox`
- `IBody2.IGetBodyBox`
- `IComponent2.GetBox`
- `IComponent2.IGetBox`
- `IFace2.GetBox`
- `IFace2.IGetBox`
- `IFeature.GetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`