---
type: property
interface: IMirrorComponentFeatureData
member: NameModifierType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IMirrorComponentFeatureData.NameModifier
keywords:
  - namemodifiertype
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - name
  - modifier
  - type
  - int32
readonly: null
---

# IMirrorComponentFeatureData.NameModifierType

Gets or sets the type of modifier to apply to the opposite-hand version file name.

## Signature

```csharp
System.Int32 NameModifierType {get; set;}
```
## Parameters

None.

## Return Value

Type of file name modifier as defined in swMirrorComponentNameModifier_e

## Remarks

This property is valid only if:
IMirrorComponentFeatureData::OppositeHandComponents
is not Nothing or null,
- and -
IMirrorComponentFeatureData::MirroredComponentFilenames
is not Nothing or null.
If this property is not set, then it defaults to swMirrorComponentNameModifier_e.swMirrorComponentName_Prefix.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)

## See Also

- `IMirrorComponentFeatureData.NameModifier`