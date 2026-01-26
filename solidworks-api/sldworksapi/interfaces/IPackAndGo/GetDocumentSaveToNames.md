---
type: method
interface: IPackAndGo
member: GetDocumentSaveToNames
returns: System.Boolean
parameters:
  -
    name: PathNameList
    type: System.Object
    description: Array of strings containing the path and filenames to which to save the model's documents (see Remarks )
  -
    name: DocumentStatusList
    type: System.Object
    description: Array containing the types of documents as defined in swPackAndGoDocumentStatus_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IPackAndGo.IGetDocumentSaveToNames
  - IPackAndGo.ISetDocumentSaveToNames
keywords:
  - getdocumentsavetonames
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
  - status
  - boolean
  - assembly
  - vb
  - net
  - vba
---

# IPackAndGo.GetDocumentSaveToNames

Gets the paths and filenames to which to save the model's documents for Pack and Go set by IPackAndGo::SetDocumentSaveToNames.

## Signature

```csharp
System.Boolean GetDocumentSaveToNames( 
   out System.Object
PathNameList
,
   out System.Object
DocumentStatusList
)
```
## Parameters

- `PathNameList` (System.Object): Array of strings containing the path and filenames to which to save the model's documents (see Remarks )
- `DocumentStatusList` (System.Object): Array containing the types of documents as defined in swPackAndGoDocumentStatus_e

## Return Value

True if the paths and filenames of the model's documents are returned, false if not

## Remarks

The order and number of documents must match the order of the array returned by
IPackAndGo::GetDocumentNames
. If a
prefix
or
suffix
is set, then the filenames include it. You can set both a prefix and suffix for the filenames.

## Examples

- Pack and Go an Assembly (C#) (Pack_and_Go_an_Assembly_Example_CSharp.htm)
- Pack and Go an Assembly (VB.NET) (Pack_and_Go_an_Assembly_Example_VBNET.htm)
- Pack and Go an Assembly (VBA) (Pack_and_Go_an_Assembly_Example_VB.htm)

## See Also

- `IPackAndGo.IGetDocumentSaveToNames`
- `IPackAndGo.ISetDocumentSaveToNames`