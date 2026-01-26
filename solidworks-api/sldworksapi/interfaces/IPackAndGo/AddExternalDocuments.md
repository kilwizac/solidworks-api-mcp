---
type: method
interface: IPackAndGo
member: AddExternalDocuments
returns: System.Boolean
parameters:
  -
    name: DocumentNames
    type: System.Object
    description: Array of paths and filenames of non-SOLIDWORKS files to add to Pack and Go
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelDocExtension.GetRenderCustomReferences
  - IModelDocExtension.GetRenderStockReferences
  - IPackAndGo.GetExternalDocuments
  - IPackAndGo.RemoveExternalDocuments
keywords:
  - addexternaldocuments
  - ipackandgo
  - pack
  - go
  - add
  - external
  - documents
  - document
  - names
  - object
  - boolean
  - remove
  - files
  - vb
  - net
  - vba
---

# IPackAndGo.AddExternalDocuments

Adds non-SOLIDWORKS files to Pack and Go.

## Signature

```csharp
System.Boolean AddExternalDocuments( 
   System.Object
DocumentNames
)
```
## Parameters

- `DocumentNames` (System.Object): Array of paths and filenames of non-SOLIDWORKS files to add to Pack and Go

## Return Value

True if the files are added to Pack and Go, false if not

## Remarks

Duplicate files are not allowed. You can add any type of non-SOLIDWORKS file.

## Examples

- Add and Remove Files from Pack And Go (C#) (Add_and_Remove_Files_from_Pack_and_Go_Example_CSharp.htm)
- Add and Remove Files from Pack and Go (VB.NET) (Add_and_Remove_Files_from_Pack_and_Go_Example_VBNET.htm)
- Add and Remove Files from Pack and Go (VBA) (Add_and_Remove_Files_from_Pack_and_Go_Example_VB.htm)

## See Also

- `IModelDocExtension.GetRenderCustomReferences`
- `IModelDocExtension.GetRenderStockReferences`
- `IPackAndGo.GetExternalDocuments`
- `IPackAndGo.RemoveExternalDocuments`