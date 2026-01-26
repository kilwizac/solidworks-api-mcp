---
type: property
interface: IMirrorComponentFeatureData
member: NameModifier
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
  - namemodifier
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - name
  - modifier
  - string
readonly: null
---

# IMirrorComponentFeatureData.NameModifier

Gets or sets the prefix or suffix to add to the file or configuration names of the components to be mirrored.

## Signature

```csharp
System.String NameModifier {get; set;}
```
## Parameters

None.

## Return Value

Prefix or suffix text; "Mirror" by default

## Remarks

This property is valid only if:
IMirrorComponentFeatureData::NameModifierType
is either
swMirrorComponentNameModifier_e
.swMirrorComponentName_Prefix or swMirrorComponentNameModifier_e.swMirrorComponentNameName_Suffix,
- and -
IMirrorComponentFeatureData::OppositeHandComponents
is not Nothing or null,
- and -
IMirrorComponentFeatureData::MirroredComponentFilenames
is not Nothing or null.
If
IMirrorComponentFeatureData::CreateDerivedConfigurations
is:
True, then this property prepends a prefix or appends a suffix to the configuration name of the original component to create new opposite-hand version configuration names.
False, then this property prepends a prefix or appends a suffix to the orginal component file name to create new opposite-hand version file names.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)