---
type: method
interface: IRenamedDocumentReferences
member: RemoveSearchFolder
returns: System.Boolean
parameters:
  -
    name: Folder
    type: System.String
    description: Folder in which to search for documents whose references to update
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenamedDocumentReferences.AddSearchFolder
  - IRenamedDocumentReferences.GetSearchPath
  - IRenamedDocumentReferences.IncludeFileLocations
keywords:
  - removesearchfolder
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - remove
  - search
  - folder
  - string
  - boolean
---

# IRenamedDocumentReferences.RemoveSearchFolder

Removes the specified folder in which to search for documents whose references to update.

## Signature

```csharp
System.Boolean RemoveSearchFolder( 
   System.String
Folder
)
```
## Parameters

- `Folder` (System.String): Folder in which to search for documents whose references to update

## Return Value

True if the specified folder is removed from the search, false if not

## Remarks

This method is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.

## See Also

- `IRenamedDocumentReferences.AddSearchFolder`
- `IRenamedDocumentReferences.GetSearchPath`
- `IRenamedDocumentReferences.IncludeFileLocations`