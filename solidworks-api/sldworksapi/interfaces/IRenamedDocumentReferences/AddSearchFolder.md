---
type: method
interface: IRenamedDocumentReferences
member: AddSearchFolder
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
  - IRenamedDocumentReferences.GetSearchPath
  - IRenamedDocumentReferences.IncludeFileLocations
  - IRenamedDocumentReferences.RemoveSearchFolder
keywords:
  - addsearchfolder
  - irenameddocumentreferences
  - renamed
  - document
  - references
  - add
  - search
  - folder
  - string
  - boolean
---

# IRenamedDocumentReferences.AddSearchFolder

Adds the specified folder in which to search for documents whose references to update.

## Signature

```csharp
System.Boolean AddSearchFolder( 
   System.String
Folder
)
```
## Parameters

- `Folder` (System.String): Folder in which to search for documents whose references to update

## Return Value

True if the specified folder is added to the search, false if not

## Remarks

This method is only available if
IRenamedDocumentReferences::UpdateWhereUsedReferences
is true.

## See Also

- `IRenamedDocumentReferences.GetSearchPath`
- `IRenamedDocumentReferences.IncludeFileLocations`
- `IRenamedDocumentReferences.RemoveSearchFolder`