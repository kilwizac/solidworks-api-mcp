---
type: method
interface: IRenamedDocumentReferences
member: RemoveReference
returns: System.Boolean
parameters:
  -
    name: Reference
    type: System.String
    description: Pathname of the reference to the renamed document to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - removereference
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - remove
  - reference
  - string
  - boolean
---

# IRenamedDocumentReferences.RemoveReference

Removes the specified reference from the list of references to update.

## Signature

```csharp
System.Boolean RemoveReference( 
   System.String
Reference
)
```
## Parameters

- `Reference` (System.String): Pathname of the reference to the renamed document to remove

## Return Value

True if the reference to the renamed document is removed, false if not

## Remarks

This method is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.
Removing a reference results in that reference referencing the old file name of the document and not the new name of the document.