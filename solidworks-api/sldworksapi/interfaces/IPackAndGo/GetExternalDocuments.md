---
type: method
interface: IPackAndGo
member: GetExternalDocuments
returns: System.Boolean
parameters:
  -
    name: DocumentNames
    type: System.Object
    description: Array of strings of the paths and filenames of the non-SOLIDWORKS files added to Pack and Go
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPackAndGo.AddExternalDocuments
keywords:
  - getexternaldocuments
  - ipackandgo
  - pack
  - go
  - external
  - documents
  - document
  - names
  - object
  - boolean
---

# IPackAndGo.GetExternalDocuments

Gets the paths and filenames of the non-SOLIDWORKS files added to Pack And Go.

## Signature

```csharp
System.Boolean GetExternalDocuments( 
   out System.Object
DocumentNames
)
```
## Parameters

- `DocumentNames` (System.Object): Array of strings of the paths and filenames of the non-SOLIDWORKS files added to Pack and Go

## Return Value

True if the paths and filenames of the non-SOLIDWORKS files are returned, false if not

## See Also

- `IPackAndGo.AddExternalDocuments`