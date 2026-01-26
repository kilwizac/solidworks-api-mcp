---
type: method
interface: IPackAndGo
member: IGetDocumentSaveToNames
returns: System.Boolean
parameters:
  -
    name: NameCount
    type: System.Int32
    description: Number of documents comprising the model
  -
    name: NameList
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings containing the paths and filenames of the model's documents VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: StatusList
    type: System.Int32
    description: Array containing the types of documents as defined in swPackAndGoDocumentStatus_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IPackAndGo.GetDocumentSaveToNames
  - IPackAndGo.ISetDocumentSaveToNames
keywords:
  - igetdocumentsavetonames
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
  - status
  - boolean
---

# IPackAndGo.IGetDocumentSaveToNames

Gets the paths and filenames to which to save the model's documents for Pack and Go set by IPackAndGo::ISetDocumentSaveToNames.

## Signature

```csharp
System.Boolean IGetDocumentSaveToNames( 
   System.Int32
NameCount
,
   out System.String
NameList
,
   out System.Int32
StatusList
)
```
## Parameters

- `NameCount` (System.Int32): Number of documents comprising the model
- `NameList` (System.String): in-process, unmanaged C++: Pointer to an array of strings containing the paths and filenames of the model's documents VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `StatusList` (System.Int32): Array containing the types of documents as defined in swPackAndGoDocumentStatus_e

## Return Value

True if the paths and filenames of the model's documents are returned, false if not

## Remarks

Before calling this method, call
IPackAndGo::GetDocumentNamesCount
to get the value of NameCount.

## See Also

- `IPackAndGo.GetDocumentSaveToNames`
- `IPackAndGo.ISetDocumentSaveToNames`