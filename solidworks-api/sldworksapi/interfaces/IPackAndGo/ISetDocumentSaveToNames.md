---
type: method
interface: IPackAndGo
member: ISetDocumentSaveToNames
returns: System.Boolean
parameters:
  -
    name: NameCount
    type: System.Int32
    description: Number of documents comprising the model
  -
    name: NameList
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings containing the paths and filenames to which to save the model's documents VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IPackAndGo.IGetDocumentSaveToNames
  - IPackAndGo.SetDocumentSaveToNames
keywords:
  - isetdocumentsavetonames
  - ipackandgo
  - pack
  - go
  - document
  - save
  - names
  - name
  - count
  - int32
  - list
  - string
  - boolean
---

# IPackAndGo.ISetDocumentSaveToNames

Sets the paths and filenames of the documents to save in Pack and Go.

## Signature

```csharp
System.Boolean ISetDocumentSaveToNames( 
   System.Int32
NameCount
,
   ref System.String
NameList
)
```
## Parameters

- `NameCount` (System.Int32): Number of documents comprising the model
- `NameList` (System.String): in-process, unmanaged C++: Pointer to an array of strings containing the paths and filenames to which to save the model's documents VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the paths and filenames are set, false if not

## Remarks

The number, order, and type of documents must match the array returned by
IPackAndGo::IGetDocumentNames
. You cannot change the filename of a document if the document is a virtual component. Duplicate files are not allowed.
To remove a file from Pack and Go, specify an empty string for that file's element in the NameList array. To override the paths and filenames set by this method, use
IPackAndGo::SetSaveToName
.

## See Also

- `IPackAndGo.IGetDocumentSaveToNames`
- `IPackAndGo.SetDocumentSaveToNames`