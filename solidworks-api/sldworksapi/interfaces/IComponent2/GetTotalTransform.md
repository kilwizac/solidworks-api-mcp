---
type: method
interface: IComponent2
member: GetTotalTransform
returns: MathTransform
parameters:
  -
    name: IncludePresentationXform
    type: System.Boolean
    description: True to combine the transforms, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.EnablePresentation
  - IComponent2.GetSpecificTransform
  - IComponent2.PresentationTransform
  - IComponent2.RemovePresentationTransform
  - IComponent2.SetTransformAndSolve2
  - IComponent2.Transform2
keywords:
  - transform
  - components
  - see
  - also
  - icomponent2
  - gettotaltransform
  - component2
  - total
  - include
  - presentation
  - xform
  - boolean
  - math
---

# IComponent2.GetTotalTransform

Combines the original transform of this component with the presentation transform of this component.

## Signature

```csharp
MathTransform GetTotalTransform( 
   System.Boolean
IncludePresentationXform
)
```
## Parameters

- `IncludePresentationXform` (System.Boolean): True to combine the transforms, false to not

## Return Value

Pointer to the IMathTransform object

## See Also

- `IAssemblyDoc.EnablePresentation`
- `IComponent2.GetSpecificTransform`
- `IComponent2.PresentationTransform`
- `IComponent2.RemovePresentationTransform`
- `IComponent2.SetTransformAndSolve2`
- `IComponent2.Transform2`