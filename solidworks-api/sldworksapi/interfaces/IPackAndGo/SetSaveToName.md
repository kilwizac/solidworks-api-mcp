---
type: method
interface: IPackAndGo
member: SetSaveToName
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
deprecated: true
since_version: unknown
categories:
  - file-io
  - ui
related:
  - IPackAndGo.FlattenToSingleFolder
  - IPackAndGo.GetSaveToName
keywords:
  - setsavetoname
  - ipackandgo
  - pack
  - go
  - save
  - name
  - override
  - boolean
  - string
---

# IPackAndGo.SetSaveToName

Obsolete. Superseded by IPackAndGo::SetSaveToName2.

## Signature

```csharp
System.Boolean SetSaveToName( 
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

## See Also

- `IPackAndGo.FlattenToSingleFolder`
- `IPackAndGo.GetSaveToName`