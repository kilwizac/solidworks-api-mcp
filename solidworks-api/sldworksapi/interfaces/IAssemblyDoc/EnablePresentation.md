---
type: property
interface: IAssemblyDoc
member: EnablePresentation
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IComponent2.GetTotalTransform
  - IComponent2.RemovePresentationTransform
  - IComponent2.Transform2
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - presentation
  - mode
  - enablepresentation
  - assembly
  - doc
  - enable
  - boolean
readonly: null
---

# IAssemblyDoc.EnablePresentation

Gets or sets whether the assembly is in presentation mode.

## Signature

```csharp
System.Boolean EnablePresentation {get; set;}
```
## Parameters

None.

## Return Value

True enables presentation mode, false disables it

## Remarks

Call this property before calling
IComponent2::PresentationTransform
because presentation transforms are effective only in this mode. This property prohibits reconfiguring the FeatureManager design tree when SOLIDWORKS is using the presentation transforms. This property also prohibits selections in the model view.

## See Also

- `IComponent2.GetTotalTransform`
- `IComponent2.RemovePresentationTransform`
- `IComponent2.Transform2`