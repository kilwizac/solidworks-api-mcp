---
type: property
interface: IRenamedDocumentReferences
member: IncludeFileLocations
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IRenamedDocumentReferences.AddSearchFolder
  - IRenamedDocumentReferences.GetSearchPath
  - IRenamedDocumentReferences.RemoveSearchFolder
keywords:
  - includefilelocations
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - include
  - file
  - locations
  - boolean
  - rename
  - component
  - update
  - vb
  - net
  - vba
readonly: null
---

# IRenamedDocumentReferences.IncludeFileLocations

Gets or sets whether to search the folders listed under Referenced Documents in Tools &gt; Options &gt; System Options &gt; File Locations.

## Signature

```csharp
System.Boolean IncludeFileLocations {get; set;}
```
## Parameters

None.

## Return Value

True to search the folders listed under Referenced Documents in Tools > Options > System Options > File Locations , false to not

## Remarks

This property is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.

## Examples

- Rename Component and Update References (C#) (Rename_Component_and_Update_References_Example_CSharp.htm)
- Rename Component and Update References (VB.NET) (Rename_Component_and_Update_References_Example_VBNET.htm)
- Rename Component and Update References (VBA) (Rename_Component_and_Update_References_Example_VB.htm)

## See Also

- `IRenamedDocumentReferences.AddSearchFolder`
- `IRenamedDocumentReferences.GetSearchPath`
- `IRenamedDocumentReferences.RemoveSearchFolder`