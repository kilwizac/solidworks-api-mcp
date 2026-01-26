---
type: property
interface: IComponent2
member: PresentationTransform
returns: MathTransform
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetSpecificTransform
keywords:
  - transform
  - components
  - see
  - also
  - icomponent2
  - presentationtransform
  - component2
  - presentation
  - math
  - use
  - transforms
  - move
  - component
  - vba
readonly: null
---

# IComponent2.PresentationTransform

Gets or sets the component transform.

## Signature

```csharp
MathTransform PresentationTransform {get; set;}
```
## Parameters

None.

## Return Value

Component transform

## Remarks

This property affects the graphical display; it does not affect the underlying model geometry.
This property:
gets or sets the component transform for graphical display.
ignores all mate and in-context relationships. Only the display of the component on the screen is affected.
does not apply the transform to component geometry.
does not display any changes. To display changes, call
IModelDoc2::GraphicsRedraw2
.
This property's functionality is for graphical purposes only and does not affect solid models. For example, if you want to animate the explode steps for an assembly, then maintaining assembly mate and in-context relationships is not needed or desirable.
You must first enable a presentation transform by setting
IAssemblyDoc::EnablePresentation
to true.
IComponent2::RemovePresentationTransform
removes any transform applied by IComponent2::PresentationTransform. Set IAssemblyDoc::EnablePresentation to false after calling IComponent2::RemovePresentationTransform. After calling this method, the component is next drawn in a position consistent with its underlying geometry (
IComponent2::Transform2
).

## Examples

- Use Presentation Transforms to Move Component (VBA) (Use_Presentation_Transforms_to_Move_Component_Example_VB.htm)

## See Also

- `IComponent2.GetSpecificTransform`