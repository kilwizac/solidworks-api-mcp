---
type: method
interface: IPackAndGo
member: IGetDocumentNames
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of model's documents
  -
    name: DocumentNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings containing the original paths and filenames of the model's documents VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPackAndGo.GetDocumentNames
keywords:
  - igetdocumentnames
  - ipackandgo
  - pack
  - go
  - document
  - names
  - count
  - int32
  - string
  - boolean
---

# IPackAndGo.IGetDocumentNames

Gets the original paths and filenames of all of the model's documents for Pack and Go.

## Signature

```csharp
System.Boolean IGetDocumentNames( 
   System.Int32
Count
,
   out System.String
DocumentNames
)
```
## Parameters

- `Count` (System.Int32): Number of model's documents
- `DocumentNames` (System.String): in-process, unmanaged C++: Pointer to an array of strings containing the original paths and filenames of the model's documents VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the original paths and filenames of the model's documents are returned, false if not

## Remarks

Before calling this method, call
IPackAndGo::GetDocumentNamesCount
to get the value of Count.
To get the drawing documents of the model, set
IPackAndGo::IncludeDrawings
to true; otherwise, the paths and filenames of the model's drawing documents are not returned.

## See Also

- `IPackAndGo.GetDocumentNames`