---
type: property
interface: IMirrorComponentFeatureData
member: MirrorComponentsFolderLocation
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - mirrorcomponentsfolderlocation
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - components
  - folder
  - location
  - string
readonly: null
---

# IMirrorComponentFeatureData.MirrorComponentsFolderLocation

Gets or sets the existing folder where all opposite-hand versions are saved.

## Signature

```csharp
System.String MirrorComponentsFolderLocation {get; set;}
```
## Parameters

None.

## Return Value

Existing folder name

## Remarks

This property is valid only if
IMirrorComponentFeatureData::PlaceFilesInOneFolder
is true.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)