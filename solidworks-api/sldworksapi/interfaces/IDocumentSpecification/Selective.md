---
type: property
interface: IDocumentSpecification
member: Selective
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - IAssemblyDoc.GetUnloadedComponentNames
  - IAssemblyDoc.HasUnloadedComponents
  - IComponent2.GetHiddenUnloadedChildrenCount
  - IComponent2.GetUnloadedComponentNames
  - IComponent2.HasUnloadedComponents
  - IDocumentSpecification.InteractiveComponentSelection
keywords:
  - quick
  - view
  - selective
  - open
  - assemblies
  - see
  - also
  - iassemblydoc
  - drawings
  - idrawingdoc
  - parts
  - ipartdoc
  - components
  - idocumentspecification
  - document
  - specification
  - boolean
  - whether
  - are
  - loaded
  - vb
  - net
  - vba
  - assembly
readonly: null
---

# IDocumentSpecification.Selective

Gets or sets whether to open a document in Quick view (parts and drawings) or Quick view / Selective (assemblies) mode.

## Signature

```csharp
System.Boolean Selective {get; set;}
```
## Parameters

None.

## Return Value

True to open the document kadov_tag{{<spaces>}} kadov_tag{{</spaces>}} in Quick view / Selective open mode, false to not

## Remarks

Use
IDocumentSpecification::ComponentList
to specify the selected components to load when opening the assembly document.

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
- `IComponent2.GetHiddenUnloadedChildrenCount`
- `IComponent2.GetUnloadedComponentNames`
- `IComponent2.HasUnloadedComponents`
- `IDocumentSpecification.InteractiveComponentSelection`