---
type: method
interface: IPackAndGo
member: SetDocumentSaveToNames
returns: System.Boolean
parameters:
  -
    name: PathNameList
    type: System.Object
    description: Array of paths and filenames to which to save the model's documents
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IPackAndGo.FlattenToSingleFolder
  - IPackAndGo.GetDocumentSaveToNames
  - IPackAndGo.ISetDocumentSaveToNames
keywords:
  - setdocumentsavetonames
  - ipackandgo
  - pack
  - go
  - document
  - save
  - names
  - path
  - name
  - list
  - object
  - boolean
---

# IPackAndGo.SetDocumentSaveToNames

Sets the paths and filenames of the documents for Pack and Go.

## Signature

```csharp
System.Boolean SetDocumentSaveToNames( 
   System.Object
PathNameList
)
```
## Parameters

- `PathNameList` (System.Object): Array of paths and filenames to which to save the model's documents

## Return Value

True if the paths and filenames are set, false if not

## Remarks

The number, order, and type of documents to save must match the array returned by
IPackAndGo::GetDocumentNames
. You cannot change the filename of a document if the document is a virtual component. Duplicate files are not allowed.
To remove a file from Pack and Go, specify an empty string for that file's element in the PathNameList array. To override the paths and filenames set by this method, use
IPackAndGo::SetSaveToName
.

## See Also

- `IPackAndGo.FlattenToSingleFolder`
- `IPackAndGo.GetDocumentSaveToNames`
- `IPackAndGo.ISetDocumentSaveToNames`