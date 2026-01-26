---
type: method
interface: IPackAndGo
member: SetSaveToName2
returns: System.Boolean
parameters:
  -
    name: Override
    type: System.Boolean
    description: True to override the paths and filenames of the documents set by IPackAndGo::SetDocumentSaveToNames or IPackAndGo::ISetDocumentSaveToNames , false to not
  -
    name: SaveToName
    type: System.String
    description: Path or the path and filename of the Zip file to use to override the paths and filenames of the documents set by IPackAndGo::SetDocumentSaveToNames or IPackAndGo::ISetDocumentSaveToNames
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IPackAndGo.FlattenToSingleFolder
  - IPackAndGo.GetSaveToName
keywords:
  - setsavetoname2
  - ipackandgo
  - pack
  - go
  - save
  - name2
  - override
  - boolean
  - name
  - string
  - add
  - remove
  - files
  - vba
  - vb
  - net
---

# IPackAndGo.SetSaveToName2

Overrides the paths and filenames of the documents set by IPackAndGo::SetDocumentSaveToNames or IPackAndGo::ISetDocumentSaveToNames with the specified path or the path and name of the Zip file.

## Signature

```csharp
System.Boolean SetSaveToName2( 
   System.Boolean
Override
,
   System.String
SaveToName
)
```
## Parameters

- `Override` (System.Boolean): True to override the paths and filenames of the documents set by IPackAndGo::SetDocumentSaveToNames or IPackAndGo::ISetDocumentSaveToNames , false to not
- `SaveToName` (System.String): Path or the path and filename of the Zip file to use to override the paths and filenames of the documents set by IPackAndGo::SetDocumentSaveToNames or IPackAndGo::ISetDocumentSaveToNames

## Return Value

True if the paths and filenames of the documents set by IPackAndGo::SetDocumentSaveToNames or IPackAndGo::ISetDocumentSaveToNames are overridden, false if not

## Remarks

The difference between this method and the now obsolete IPackAndGo::SetSaveToName is that this method supports saving to minimal folders. It saves to any folder structure as defined by
IPackAndGo::FolderStructureOption
.

## Examples

- Add and Remove Files from Pack and Go (VBA) (Add_and_Remove_Files_from_Pack_and_Go_Example_VB.htm)
- Add and Remove Files from Pack and Go (VB.NET) (Add_and_Remove_Files_from_Pack_and_Go_Example_VBNET.htm)
- Add and Remove Files from Pack and Go (C#) (Add_and_Remove_Files_from_Pack_and_Go_Example_CSharp.htm)

## See Also

- `IPackAndGo.FlattenToSingleFolder`
- `IPackAndGo.GetSaveToName`