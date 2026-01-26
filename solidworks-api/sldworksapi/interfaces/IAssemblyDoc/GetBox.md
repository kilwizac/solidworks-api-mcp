---
type: method
interface: IAssemblyDoc
member: GetBox
returns: System.Object
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
  - IAssemblyDoc.IGetBox
  - IAssemblyDoc.UpdateBox
  - IBody2.GetBodyBox
  - IBody2.IGetBodyBox
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
  - assemblies
  - see
  - also
  - iassemblydoc
  - bounding
  - box
  - getbox
  - assembly
  - doc
  - options
  - int32
  - object
  - using
  - vb
  - net
  - vba
  - recalculate
---

# IAssemblyDoc.GetBox

Gets the bounding box.

## Signature

```csharp
System.Object GetBox( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Type of bounding box as defined by swBoundingBoxOptions_e

## Return Value

Object containing the two diagonal points that bound the component; the array contains 6 doubles (see Remarks )

## Remarks

IMPORTANT:
The values returned are approximate and should not be used for comparison
or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.The resulting box encloses the object, but it might not be the tightest box.
The X, Y, Z points returned by SOLIDWORKS are the lower- and upper-diagonal corners that bound the component with the box sides parallel to the X, Y and Z axes. SOLIDWORKS returns box dimensions that enclose the object and are typically close to the minimum possible size.
The return value is an array of doubles as follows:
[
XCorner1, YCorner1, ZCorner1, XCorner2, YCorner2, ZCorner2
]

## Examples

- Get Assembly Bounding Box Using Assembly (C#) (Get_Assembly_Bounding_Box_Using_Assembly_Example_CSharp.htm)
- Get Assembly Bounding Box Using Assembly (VB.NET) (Get_Assembly_Bounding_Box_Using_Assembly_Example_VBNET.htm)
- Get Assembly Bounding Box Using Assembly (VBA) (Get_Assembly_Bounding_Box_using_Assembly_Example_VB.htm)
- Recalculate Bounding Box (C#) (Recalculate_Bounding_Box_Example_CSharp.htm)
- Recalculate Bounding Box (VB.NET) (Recalculate_Bounding_Box_Example_VBNET.htm)
- Recalculate Bounding Box (VBA) (Recalculate_Bounding_Box_Example_VB.htm)

## See Also

- `IAssemblyDoc.IGetBox`
- `IAssemblyDoc.UpdateBox`
- `IBody2.GetBodyBox`
- `IBody2.IGetBodyBox`
- `IComponent2.GetBox`
- `IComponent2.IGetBox`
- `IFace2.GetBox`
- `IFace2.IGetBox`
- `IFeature.GetBox`
- `IFeature.IGetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`