---
type: method
interface: IAssemblyDoc
member: IGetBox
returns: System.Double
parameters:
  -
    name: Options
    type: System.Int32
    description: Type of bounding box as defined by swBoundingBoxOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetBox
  - IAssemblyDoc.UpdateBox
  - IBody2.GetBodyBox
  - IBody2.IGetBodyBox
  - IComponent2.GetBox
  - IComponent2.IGetBox
  - IFace.GetBox
  - IFace.IGetBox
  - IFeature.GetBox
  - IFeature.IGetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - bounding
  - box
  - assemblies
  - igetbox
  - iassemblydoc
  - assembly
  - doc
  - options
  - int32
  - double
---

# IAssemblyDoc.IGetBox

Gets the bounding box.

## Signature

```csharp
System.Double IGetBox( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Type of bounding box as defined by swBoundingBoxOptions_e

## Return Value

Two diagonal points that bound the object; the format is a pointer to an array of 6 doubles (see Remarks )

## Remarks

IMPORTANT:
The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.The resulting box encloses the object, but it might not be the tightest box.
The X, Y, Z points returned by SOLIDWORKS are the lower- and upper-diagonal corners that bound the component with the box sides parallel to the X, Y and Z axes. SOLIDWORKS returns box dimensions that enclose the object and are typically close to the minimum possible size.
The return value is an array of doubles as follows:
[
XCorner1, YCorner1, ZCorner1, XCorner2, YCorner2, ZCorner2
]

## See Also

- `IAssemblyDoc.GetBox`
- `IAssemblyDoc.UpdateBox`
- `IBody2.GetBodyBox`
- `IBody2.IGetBodyBox`
- `IComponent2.GetBox`
- `IComponent2.IGetBox`
- `IFace.GetBox`
- `IFace.IGetBox`
- `IFeature.GetBox`
- `IFeature.IGetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`