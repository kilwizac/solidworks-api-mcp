---
type: property
interface: ICosmeticWeldBeadFeatureData
member: FromToReverse
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.FromToStartPoint
  - ICosmeticWeldBeadFeatureData.FromToWeldLength
keywords:
  - fromtoreverse
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - reverse
  - boolean
readonly: null
---

# ICosmeticWeldBeadFeatureData.FromToReverse

Gets or sets whether to start the weld from the opposite end.

## Signature

```csharp
System.Boolean FromToReverse {get; set;}
```
## Parameters

None.

## Return Value

True if the weld starts at the end opposite to ICosmeticWeldBeadFeatureData::FromToStartPoint , false if not (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::FromToLength
is true.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)

## See Also

- `ICosmeticWeldBeadFeatureData.FromToStartPoint`
- `ICosmeticWeldBeadFeatureData.FromToWeldLength`