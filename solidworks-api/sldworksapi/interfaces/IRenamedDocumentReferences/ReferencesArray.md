---
type: method
interface: IRenamedDocumentReferences
member: ReferencesArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenamedDocumentReferences.RemoveReference
keywords:
  - referencesarray
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - array
  - object
  - rename
  - component
  - update
  - vb
  - net
  - vba
---

# IRenamedDocumentReferences.ReferencesArray

Gets the pathnames of the documents with references to this renamed document.

## Signature

```csharp
System.Object ReferencesArray()
```
## Parameters

None.

## Return Value

Array of strings of the pathnames of the documents with references to this renamed document

## Remarks

This method is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.

## Examples

- Rename Component and Update References (C#) (Rename_Component_and_Update_References_Example_CSharp.htm)
- Rename Component and Update References (VB.NET) (Rename_Component_and_Update_References_Example_VBNET.htm)
- Rename Component and Update References (VBA) (Rename_Component_and_Update_References_Example_VB.htm)

## See Also

- `IRenamedDocumentReferences.RemoveReference`