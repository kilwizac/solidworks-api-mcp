---
type: property
interface: IMirrorComponentFeatureData
member: CreateDerivedConfigurations
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - createderivedconfigurations
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - create
  - derived
  - configurations
  - boolean
readonly: null
---

# IMirrorComponentFeatureData.CreateDerivedConfigurations

Gets or sets whether to create a derived configuration of the opposite-hand components in the original assembly.

## Signature

```csharp
System.Boolean CreateDerivedConfigurations {get; set;}
```
## Parameters

None.

## Return Value

True to create a derived configuration of the opposite-hand components in the original assembly, false (default) to create new part files

## Remarks

This property is valid only:
If
IMirrorComponentFeatureData::OppositeHandComponents
is not Nothing or null.
At creation time. You cannot edit this property after it is set.
If this property is...
And
IMirrorComponentFeatureData::NameModifierType
is...
Then use...
True
swMirrorComponentName_Prefix
- or -
swMirrorComponentName_Suffix
IMirrorComponentFeatureData::NameModifier
to prepend a prefix or append a suffix to the configuration name of the original component to create a derived configuration name for the new opposite-hand versions.
True
swMirrorComponentName_Custom
IMirrorComponentFeatureData::MirroredComponentFilenames
to specify the derived configuration name.
False
swMirrorComponentName_Prefix
- or -
swMirrorComponentName_Suffix
IMirrorComponentFeatureData::NameModifier to prepend a prefix or append a suffix to the orginal component file name to create a new opposite-hand version file name.
False
swMirrorComponentName_Custom
IMirrorComponentFeatureData::MirroredComponentFilenames to specify the opposite-hand version file names.
If you set this property to false, you can also specify the following import features:
IMirrorComponentFeatureData::BreakLinksToOriginalPart
(if set to false, you can also set
IMirrorComponentFeatureData::DimXpertScheme
and/or
IMirrorComponentFeatureData::MirrorTransferOptions
)
IMirrorComponentFeatureData::PreserveZAxis
IMirrorComponentFeatureData::PropagateFromOriginalPart

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)