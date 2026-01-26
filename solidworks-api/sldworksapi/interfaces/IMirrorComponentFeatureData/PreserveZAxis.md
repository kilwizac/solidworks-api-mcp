---
type: property
interface: IMirrorComponentFeatureData
member: PreserveZAxis
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
  - preservezaxis
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - preserve
  - axis
  - boolean
readonly: null
---

# IMirrorComponentFeatureData.PreserveZAxis

Gets or sets whether to preserve the orientation of the Z-axis in the opposite-hand versions.

## Signature

```csharp
System.Boolean PreserveZAxis {get; set;}
```
## Parameters

None.

## Return Value

True to preserve the orientation of the Z-axis, false to not

## Remarks

This property is valid only if
IMirrorComponentFeatureData::CreateDerivedConfigurations
is false.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)