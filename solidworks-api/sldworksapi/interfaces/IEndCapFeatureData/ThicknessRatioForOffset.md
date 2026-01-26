---
type: property
interface: IEndCapFeatureData
member: ThicknessRatioForOffset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IEndCapFeatureData.Thickness
keywords:
  - thicknessratioforoffset
  - iendcapfeaturedata
  - end
  - cap
  - feature
  - data
  - thickness
  - ratio
  - offset
  - double
readonly: null
---

# IEndCapFeatureData.ThicknessRatioForOffset

Gets or sets the offset distance of the end cap as a ratio of the thickness of the structural member being capped.

## Signature

```csharp
System.Double ThicknessRatioForOffset {get; set;}
```
## Parameters

None.

## Return Value

Ratio of the thickness

## Remarks

IEndCapFeatureData::UseThicknessRatioForOffset
must be set to true for this property to have an effect.

## Examples

- IEndCapFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEndCapFeatureData)

## See Also

- `IEndCapFeatureData.Thickness`