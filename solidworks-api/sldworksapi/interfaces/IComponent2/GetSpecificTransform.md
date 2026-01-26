---
type: method
interface: IComponent2
member: GetSpecificTransform
returns: System.Object
parameters:
  -
    name: IgnoreExplode
    type: System.Boolean
    description: True to get the component's collapsed transform when the assembly is exploded, false to get the component's exploded transform when the assembly is exploded
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetTotalTransform
  - IComponent2.PresentationTransform
  - IComponent2.SetTransformAndSolve2
  - IComponent2.Transform2
keywords:
  - components
  - see
  - also
  - icomponent2
  - transform
  - exploded
  - views
  - getspecifictransform
  - component2
  - specific
  - ignore
  - explode
  - boolean
  - object
  - collapsed
  - component
  - view
  - vb
  - net
  - vba
---

# IComponent2.GetSpecificTransform

Get the collapsed or exploded transform of a component when the assembly is exploded.

## Signature

```csharp
System.Object GetSpecificTransform( 
   System.Boolean
IgnoreExplode
)
```
## Parameters

- `IgnoreExplode` (System.Boolean): True to get the component's collapsed transform when the assembly is exploded, false to get the component's exploded transform when the assembly is exploded

## Return Value

Transform

## Examples

- Get Collapsed Transform of Component in Exploded View (C#) (Get_Collapsed_Transform_of_Component_in_Exploded_View_Example_CSharp.htm)
- Get Collapsed Transform of Component in Exploded View (VB.NET) (Get_Collapsed_Transform_of_Component_in_Exploded_View_Example_VBNET.htm)
- Get Collapsed Transform of Component in Exploded View (VBA) (Get_Collapsed_Transform_of_Component_in_Exploded_View_Example_VB.htm)

## See Also

- `IComponent2.GetTotalTransform`
- `IComponent2.PresentationTransform`
- `IComponent2.SetTransformAndSolve2`
- `IComponent2.Transform2`