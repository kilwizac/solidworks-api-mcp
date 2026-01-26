---
type: method
interface: IPackAndGo
member: GetDocumentNames
returns: System.Boolean
parameters:
  -
    name: DocumentNames
    type: System.Object
    description: Array of strings of the original paths and filenames of all of the model's documents
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPackAndGo.GetDocumentNamesCount
  - IPackAndGo.IGetDocumentNames
keywords:
  - getdocumentnames
  - ipackandgo
  - pack
  - go
  - document
  - names
  - object
  - boolean
  - assembly
  - vb
  - net
  - vba
---

# IPackAndGo.GetDocumentNames

Gets the original paths and filenames of all of the model's documents for Pack and Go.

## Signature

```csharp
System.Boolean GetDocumentNames( 
   out System.Object
DocumentNames
)
```
## Parameters

- `DocumentNames` (System.Object): Array of strings of the original paths and filenames of all of the model's documents

## Return Value

True if the original paths and filenames of all of the model's documents are returned, false if not

## Remarks

To get the drawing documents of the model, set
IPackAndGo::IncludeDrawings
to true; otherwise, the paths and filenames of the model's drawing documents are not returned.

## Examples

- Pack and Go an Assembly (C#) (Pack_and_Go_an_Assembly_Example_CSharp.htm)
- Pack and Go an Assembly (VB.NET) (Pack_and_Go_an_Assembly_Example_VBNET.htm)
- Pack and Go an Assembly (VBA) (Pack_and_Go_an_Assembly_Example_VB.htm)

## See Also

- `IPackAndGo.GetDocumentNamesCount`
- `IPackAndGo.IGetDocumentNames`