---
type: property
interface: IPackAndGo
member: FlattenToSingleFolder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPackAndGo.ISetDocumentSaveToNames
  - IPackAndGo.SetDocumentSaveToNames
  - IPackAndGo.SetSaveToName
keywords:
  - flattentosinglefolder
  - ipackandgo
  - pack
  - go
  - flatten
  - single
  - folder
  - boolean
  - assembly
  - vba
  - vb
  - net
readonly: null
---

# IPackAndGo.FlattenToSingleFolder

Gets or sets whether to save all files to the root directory of the Pack and Go destination folder.

## Signature

```csharp
System.Boolean FlattenToSingleFolder {get; set;}
```
## Parameters

None.

## Return Value

True to save all files to the root directory of the Pack and Go destination folder, false to save the files to subfolders in the destination folder that mirror the current model's folder structure

## Examples

- Pack and Go an Assembly (VBA) (Pack_and_Go_an_Assembly_Example_VB.htm)
- Pack and Go an Assembly (VB.NET) (Pack_and_Go_an_Assembly_Example_VBNET.htm)
- Pack and Go an Assembly (C#) (Pack_and_Go_an_Assembly_Example_CSharp.htm)

## See Also

- `IPackAndGo.ISetDocumentSaveToNames`
- `IPackAndGo.SetDocumentSaveToNames`
- `IPackAndGo.SetSaveToName`