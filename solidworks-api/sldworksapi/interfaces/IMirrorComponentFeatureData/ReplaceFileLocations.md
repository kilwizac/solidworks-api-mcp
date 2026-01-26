---
type: property
interface: IMirrorComponentFeatureData
member: ReplaceFileLocations
returns: System.Object
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
  - replacefilelocations
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - replace
  - file
  - locations
  - object
readonly: null
---

# IMirrorComponentFeatureData.ReplaceFileLocations

Gets or sets the file locations of existing files that are to be replaced with new opposite-hand versions.

## Signature

```csharp
System.Object ReplaceFileLocations {get; set;}
```
## Parameters

None.

## Return Value

Array of existing file paths

## Remarks

This property is valid only if:
IMirrorComponentFeatureData::CreateDerivedConfigurations
is false,
- and -
IMirrorComponentFeatureData::OppositeHandComponents
is not Nothing or null. There is a one-to-one mapping between this property's array and IMirrorComponentFeatureData::OppositeHandComponents.
If this property is not set, it defaults to the current assembly's folder.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)