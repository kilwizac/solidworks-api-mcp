---
type: property
interface: IMirrorComponentFeatureData
member: PlaceFilesInOneFolder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
  - file-io
related: []
keywords:
  - placefilesinonefolder
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - place
  - files
  - one
  - folder
  - boolean
readonly: null
---

# IMirrorComponentFeatureData.PlaceFilesInOneFolder

Gets or sets whether to place the opposite-hand versions in one folder.

## Signature

```csharp
System.Boolean PlaceFilesInOneFolder {get; set;}
```
## Parameters

None.

## Return Value

True to place the opposite-hand files in one folder, false to not

## Remarks

This property is valid only if
IMirrorComponentFeatureData::CreateDerivedConfigurations
is false.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)