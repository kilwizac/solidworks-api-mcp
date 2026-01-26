---
type: method
interface: IPackAndGo
member: RemoveExternalDocuments
returns: System.Boolean
parameters:
  -
    name: DocumentNames
    type: System.Object
    description: Array of the paths and filenames of the non-SOLIDWORKS files to remove from Pack and Go
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPackAndGo.AddExternalDocuments
  - IPackAndGo.GetDocumentNames
  - IPackAndGo.GetDocumentNamesCount
  - IPackAndGo.IGetDocumentNames
keywords:
  - removeexternaldocuments
  - ipackandgo
  - pack
  - go
  - remove
  - external
  - documents
  - document
  - names
  - object
  - boolean
  - add
  - files
  - vb
  - net
  - vba
---

# IPackAndGo.RemoveExternalDocuments

Removes the specified non-SOLIDWORKS files from Pack and Go.

## Signature

```csharp
System.Boolean RemoveExternalDocuments( 
   System.Object
DocumentNames
)
```
## Parameters

- `DocumentNames` (System.Object): Array of the paths and filenames of the non-SOLIDWORKS files to remove from Pack and Go

## Return Value

True if all of the specified non-SOLIDWORKS files are removed from Pack and Go, false if not

## Remarks

In C# applications, you must wrap the array of objects for the DocumentNames parameter using the .NET Framework BStrWrapper class.

## Examples

- Add and Remove Files from Pack and Go (C#) (Add_and_Remove_Files_from_Pack_and_Go_Example_CSharp.htm)
- Add and Remove Files from Pack and Go (VB.NET) (Add_and_Remove_Files_from_Pack_and_Go_Example_VBNET.htm)
- Add and Remove Files from Pack and Go (VBA) (Add_and_Remove_Files_from_Pack_and_Go_Example_VB.htm)

## See Also

- `IPackAndGo.AddExternalDocuments`
- `IPackAndGo.GetDocumentNames`
- `IPackAndGo.GetDocumentNamesCount`
- `IPackAndGo.IGetDocumentNames`