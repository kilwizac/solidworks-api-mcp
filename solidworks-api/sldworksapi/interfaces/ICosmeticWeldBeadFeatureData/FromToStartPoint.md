---
type: property
interface: ICosmeticWeldBeadFeatureData
member: FromToStartPoint
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticWeldBeadFeatureData.FromToReverse
  - ICosmeticWeldBeadFeatureData.FromToWeldLength
keywords:
  - fromtostartpoint
  - icosmeticweldbeadfeaturedata
  - cosmetic
  - weld
  - bead
  - feature
  - data
  - start
  - point
  - double
readonly: null
---

# ICosmeticWeldBeadFeatureData.FromToStartPoint

Gets or sets the position of the first weld bead with respect to the end of the selected face or edge.

## Signature

```csharp
System.Double FromToStartPoint {get; set;}
```
## Parameters

None.

## Return Value

Position of the first weld bead (see Remarks )

## Remarks

This property is valid only if
ICosmeticWeldBeadFeatureData::FromToLength
is true.

## Examples

- ICosmeticWeldBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticWeldBeadFeatureData)

## See Also

- `ICosmeticWeldBeadFeatureData.FromToReverse`
- `ICosmeticWeldBeadFeatureData.FromToWeldLength`