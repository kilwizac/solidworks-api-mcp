---
type: method
interface: IComponent2
member: RemovePresentationTransform
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.EnablePresentation
  - IComponent2.GetTotalTransform
  - IComponent2.PresentationTransform
  - IComponent2.Transform2
keywords:
  - transform
  - components
  - removepresentationtransform
  - icomponent2
  - component2
  - remove
  - presentation
  - void
  - use
  - transforms
  - move
  - component
  - vba
---

# IComponent2.RemovePresentationTransform

Removes the presentation transform from this component.

## Signature

```csharp
void RemovePresentationTransform()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Set
IAssemblyDoc::EnablePresentation
to false after a user is finished with presentation transforms and has called IComponent2::RemovePresentationTransform, which removes any transform applied by
IComponent::PresentationTransform
.
After calling IComponent2::RemovePresentationTransfrom, the component is next drawn in a position consistent with its underlying geometry (
IComponent2::Transform2
).

## Examples

- Use Presentation Transforms to Move Component (VBA) (Use_Presentation_Transforms_to_Move_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.EnablePresentation`
- `IComponent2.GetTotalTransform`
- `IComponent2.PresentationTransform`
- `IComponent2.Transform2`