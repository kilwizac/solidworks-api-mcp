---
type: property
interface: IDocumentSpecification
member: IgnoreHiddenComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.GetUnloadedComponentNames
  - IAssemblyDoc.HasUnloadedComponents
keywords:
  - ignorehiddencomponents
  - idocumentspecification
  - document
  - specification
  - ignore
  - hidden
  - components
  - boolean
  - whether
  - are
  - loaded
  - vb
  - net
  - vba
  - open
  - assembly
readonly: null
---

# IDocumentSpecification.IgnoreHiddenComponents

Gets or sets whether to load hidden components when opening an assembly or drawing document.

## Signature

```csharp
System.Boolean IgnoreHiddenComponents {get; set;}
```
## Parameters

None.

## Return Value

True to load hidden components, false to not

## Examples

- Get Whether Components Are Loaded (C#) (Get_Whether_Components_Are_Loaded_Example_CSharp.htm)
- Get Whether Components Are Loaded (VB.NET) (Get_Whether_Components_Are_Loaded_Example_VBNET.htm)
- Get Whether Components Are Loaded (VBA) (Get_Whether_Components_Are_Loaded_Example_VB.htm)
- Open Assembly Document (C#) (Open_Assembly_Document_Example_CSharp.htm)
- Open Assembly Document (VB.NET) (Open_Assembly_Document_Example_VBNET.htm)
- Open Assembly Document (VBA) (Open_Assembly_Document_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetUnloadedComponentNames`
- `IAssemblyDoc.HasUnloadedComponents`