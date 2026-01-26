---
type: property
interface: IComponent2
member: Transform2
returns: MathTransform
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetSpecificTransform
  - IComponent2.GetTotalTransform
  - IComponent2.PresentationTransform
  - IComponent2.RemovePresentationTransform
  - IComponent2.SetTransformAndSolve2
keywords:
  - transform
  - components
  - see
  - also
  - icomponent2
  - transform2
  - component2
  - math
  - align
  - assembly
  - component
  - origin
  - planes
  - vba
  - combine
  - part
  - transforms
  - point
  - space
  - vb
  - net
readonly: null
---

# IComponent2.Transform2

Gets or sets the component transform.

## Signature

```csharp
MathTransform Transform2 {get; set;}
```
## Parameters

None.

## Return Value

Component transform

## Remarks

This property affects the underlying model geometry and the display of the component.
You must specify the transform in relation to the root component. This also applies when there is an in-context edit in progress. The transform is still with respect to the root component of the active assembly document, not with respect to the root component of the edit target. See
IConfiguration::GetRootComponent
and
IConfiguration::IGetRootComponent2
.
The destination component, or any component above it in the assembly tree, is moved so that the destination component's transform is set to the desired one.
You can call
IModelDoc2::Rebuild
with the swUpdateMates argument to rebuild the model after transforming a component. This is much faster than rebuilding all of the geometry for the model using the now obsolete IAssemblyDoc::EditRebuild.
This property lets you violate existing mate relationships. If you place a component at an invalid location based on the mate definitions, then IModelDoc2::Rebuild recalculates existing mate relationships and moves your components to the closest valid location.
After you change a component's transform, you can call
IAssemblyDoc::UpdateBox
to avoid clipping in shaded display mode.

## Examples

- Align Assembly Component to Assembly Origin and Planes (VBA) (Align_Assembly_Component_to_Assembly_Origin_and_Planes_Example_VB.htm)
- Combine Assembly Components into Part (VBA) (Combine_Assembly_Components_into_Part_Example_VB.htm)
- Get Transforms of Assembly Components (VBA) (Get_Transforms_of_Assembly_Components_Example_VB.htm)
- Transform Point from Component Space to Assembly Space (C#) (Transform_Point_from_Component_Space_to_Assembly_Space_Example_CSharp.htm)
- Transform Point from Component Space to Assembly Space (VB.NET) (Transform_Point_from_Component_Space_to_Assembly_Space_Example_VBNET.htm)
- Transform Point from Component Space to Assembly Space (VBA) (Transform_Point_from_Component_Space_to_Assembly_Space_Example_VB.htm)

## See Also

- `IComponent2.GetSpecificTransform`
- `IComponent2.GetTotalTransform`
- `IComponent2.PresentationTransform`
- `IComponent2.RemovePresentationTransform`
- `IComponent2.SetTransformAndSolve2`