---
type: property
interface: IDocumentSpecification
member: InteractiveComponentSelection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IDocumentSpecification.Selective
keywords:
  - selective
  - open
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - interactivecomponentselection
  - idocumentspecification
  - document
  - specification
  - interactive
  - component
  - selection
  - boolean
readonly: null
---

# IDocumentSpecification.InteractiveComponentSelection

Gets whether to display the Selective Open dialog, which allows the interactive user to either select and open specific components or open all of the displayed components.

## Signature

```csharp
System.Boolean InteractiveComponentSelection {get; set;}
```
## Parameters

None.

## Return Value

True to display the Selective Open dialog to the interactive user, false to not (default)

## Remarks

This property is not valid for opening
3D
EXPERIENCE files using
SOLIDWORKS Design Augmented
.
If this property is set to true, than any components added to the components list by
IDocumentSpecification::ComponentList
are ignored.

## See Also

- `IDocumentSpecification.Selective`