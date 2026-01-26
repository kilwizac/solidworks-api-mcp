---
type: property
interface: IDocumentSpecification
member: ComponentList
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDocumentSpecification.InteractiveComponentSelection
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - icomponent2
  - selective
  - open
  - componentlist
  - idocumentspecification
  - document
  - specification
  - component
  - list
  - object
  - whether
  - are
  - loaded
  - vb
  - net
  - vba
  - assembly
readonly: null
---

# IDocumentSpecification.ComponentList

Gets or sets the selected components to load when opening an assembly document.

## Signature

```csharp
System.Object ComponentList {get; set;}
```
## Parameters

None.

## Return Value

Selected components to open when opening an assembly document (see Remarks )

## Remarks

Use
IDocumentSpecification::Selective
to specify to load only selected components when opening an assembly document.

## Examples

- Get Whether Components Are Loaded (C#) (Get_Whether_Components_Are_Loaded_Example_CSharp.htm)
- Get Whether Components Are Loaded (VB.NET) (Get_Whether_Components_Are_Loaded_Example_VBNET.htm)
- Get Whether Components Are Loaded (VBA) (Get_Whether_Components_Are_Loaded_Example_VB.htm)
- Open Assembly Document (C#) (Open_Assembly_Document_Example_CSharp.htm)
- Open Assembly Document (VB.NET) (Open_Assembly_Document_Example_VBNET.htm)
- Open Assembly Document (VBA) (Open_Assembly_Document_Example_VB.htm)

## See Also

- `IDocumentSpecification.InteractiveComponentSelection`