---
type: method
interface: IRenamedDocumentReferences
member: GetSearchPath
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenamedDocumentReferences.AddSearchFolder
  - IRenamedDocumentReferences.IncludeFileLocations
  - IRenamedDocumentReferences.RemoveSearchFolder
keywords:
  - getsearchpath
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - search
  - path
  - object
  - rename
  - component
  - update
  - vb
  - net
  - vba
---

# IRenamedDocumentReferences.GetSearchPath

Gets the folders to search.

## Signature

```csharp
System.Object GetSearchPath()
```
## Parameters

None.

## Return Value

Array of strings of the folders to search

## Remarks

This method is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.

## Examples

- Rename Component and Update References (C#) (Rename_Component_and_Update_References_Example_CSharp.htm)
- Rename Component and Update References (VB.NET) (Rename_Component_and_Update_References_Example_VBNET.htm)
- Rename Component and Update References (VBA) (Rename_Component_and_Update_References_Example_VB.htm)

## See Also

- `IRenamedDocumentReferences.AddSearchFolder`
- `IRenamedDocumentReferences.IncludeFileLocations`
- `IRenamedDocumentReferences.RemoveSearchFolder`