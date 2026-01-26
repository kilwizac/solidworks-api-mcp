---
type: method
interface: IFace2
member: IGetBox
returns: System.Double
parameters: []
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
  - IBody2.IGetBodyBox
  - IComponent2.GetBox
  - IComponent2.IGetBox
  - IFace2.GetBox
  - IFeature.GetBox
  - IFeature.IGetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - bounding
  - box
  - faces
  - face
  - see
  - also
  - iface2
  - igetbox
  - face2
  - double
---

# IFace2.IGetBox

Gets the box boundaries for this face.

## Signature

```csharp
System.Double IGetBox()
```
## Parameters

None.

## Return Value

Two diagonal points that bound the component in the form of a pointer to an array of 6 doubles

## Remarks

IMPORTANT:
The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.
The resulting box encloses the object, but it might not be the tightest box.
This method returns X,Y,Z points that are the lower and upper diagonal corners that bound the face with the box sides parallel to the X, Y and Z axes. The box dimensions enclose the face and are typically close to the minimum possible size, but this is not guaranteed.
The return value is an array of doubles as follows:
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
- `IFeature.GetBox`
- `IFeature.IGetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`