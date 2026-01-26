---
type: property
interface: ICosmeticWeldBeadFeatureData
member: FromToWeldLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.FromToReverse
keywords:
  - fromtoweldlength
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - length
  - double
readonly: null
---

# ICosmeticWeldBeadFeatureData.FromToWeldLength

Gets or sets the length of the weld.

## Signature

```csharp
System.Double FromToWeldLength {get; set;}
```
## Parameters

None.

## Return Value

Length of this weld (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::FromToLength
is true.
The length of the weld is the distance from
ICosmeticWeldBeadFeatureData::FromToStartPoint
.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)

## See Also

- `ICosmeticWeldBeadFeatureData.FromToReverse`