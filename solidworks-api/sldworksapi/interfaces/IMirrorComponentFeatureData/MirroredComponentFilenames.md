---
type: property
interface: IMirrorComponentFeatureData
member: MirroredComponentFilenames
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
  - mirroredcomponentfilenames
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - mirrored
  - filenames
  - object
readonly: null
---

# IMirrorComponentFeatureData.MirroredComponentFilenames

Gets or sets the file names of the opposite-hand component versions.

## Signature

```csharp
System.Object MirroredComponentFilenames {get; set;}
```
## Parameters

None.

## Return Value

Array of file names

## Remarks

This property is valid only if:
IMirrorComponentFeatureData::NameModifierType
is set to
swMirrorComponentNameModifier_e
.swMirrorComponentName_Custom,
- and -
IMirrorComponentFeatureData::OppositeHandComponents
is not Nothing or null.
If
IMirrorComponentFeatureData::CreateDerivedConfigurations
is:
True, then use this property to specify the configuration names to be added to the opposite-hand versions.
False, then use this property to specify file names to use to create the opposite-hand versions.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)