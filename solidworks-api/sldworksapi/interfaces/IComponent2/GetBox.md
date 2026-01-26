---
type: method
interface: IComponent2
member: GetBox
returns: System.Object
parameters:
  -
    name: IncludeRefPlanes
    type: System.Boolean
    description: True includes reference planes with the returned bounding box, false does not
  -
    name: IncludeSketches
    type: System.Boolean
    description: True includes sketches with the returned bounding box, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.GetBox
  - IAssemblyDoc.IGetBox
  - IBody2.GetBodyBox
  - IBody2.IGetBodyBox
  - IComponent2.IGetBox
  - IFace2.GetBox
  - IFace2.IGetBox
  - IFeature.GetBox
  - IFeature.IGetBox
  - IModelDocExtension.GetVisibleBox
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
  - IPartDoc.GetPartBox
keywords:
  - bounding
  - box
  - components
  - see
  - also
  - icomponent2
  - getbox
  - component2
  - include
  - ref
  - planes
  - boolean
  - sketches
  - object
  - assembly
  - using
  - vba
  - vb
  - net
---

# IComponent2.GetBox

Gets the bounding box for component.

## Signature

```csharp
System.Object GetBox( 
   System.Boolean
IncludeRefPlanes
,
   System.Boolean
IncludeSketches
)
```
## Parameters

- `IncludeRefPlanes` (System.Boolean): True includes reference planes with the returned bounding box, false does not
- `IncludeSketches` (System.Boolean): True includes sketches with the returned bounding box, false does not

## Return Value

Object containing the two diagonal points that bound the component; the array contains 6 doubles

## Remarks

The resulting box encloses the object, but it might not be the tightest box.
The X, Y, Z points returned by SOLIDWORKS are the lower- and upper-diagonal corners that bound the component with the box sides parallel to the X, Y and Z axes. SOLIDWORKS returns box dimensions that enclose the component and are typically close to the minimum possible size.
The return value is an array of doubles as follows:
[
XCorner1, YCorner1, ZCorner1, XCorner2, YCorner2, ZCorner2
]
It is possible for this method to return a NULL VARIANT for Dispatch. This occurs if your application calls IComponent2::GetBox with a component that represented a subassembly and that subassembly is not loaded.
The user interface behavior is the same. When the user selects a subassembly that is not loaded, there is no selection box around the subassembly. However, once the subassembly is loaded, there is a selection box.
IMPORTANT:
The values returned are approximate and should not be used for comparison or calculation purposes. Furthermore, the bounding box may vary after rebuilding the model.

## Examples

- Get Assembly Bounding Box Using Components (VBA) (Get_Assembly_Bounding_Box_using_Components_Example_VB.htm)
- Get Assembly Bounding Box Using Components (C#) (Get_Assembly_Bounding_Box_Using_Components_Example_CSharp.htm)
- Get Assembly Bounding Box Using Components (VB.NET) (Get_Assembly_Bounding_Box_Using_Components_Example_VBNET.htm)

## See Also

- `IAssemblyDoc.GetBox`
- `IAssemblyDoc.IGetBox`
- `IBody2.GetBodyBox`
- `IBody2.IGetBodyBox`
- `IComponent2.IGetBox`
- `IFace2.GetBox`
- `IFace2.IGetBox`
- `IFeature.GetBox`
- `IFeature.IGetBox`
- `IModelDocExtension.GetVisibleBox`
- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`
- `IPartDoc.GetPartBox`