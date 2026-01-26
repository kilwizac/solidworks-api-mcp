---
type: property
interface: ISurfaceKnitFeatureData
member: MaxValueForGapRange
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceKnitFeatureData.MinValueForGapRange
keywords:
  - maxvalueforgaprange
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - max
  - value
  - gap
  - range
  - double
  - create
  - vb
  - net
  - vba
readonly: null
---

# ISurfaceKnitFeatureData.MaxValueForGapRange

Gets or sets the maximum gap range for this Surface-Knit feature.

## Signature

```csharp
System.Double MaxValueForGapRange {get; set;}
```
## Parameters

None.

## Return Value

Maximum gap range; valid values are from 0.01 mm to 1 mm

## Remarks

ISurfaceKnitFeatureData::UseGapFilters
must be true for this property to have an effect.
Maximum gap should be in the range of
ISurfaceKnitFeatureData::KnitTolerance
to 1 mm.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Create Knit Surface Feature (VB.NET) (Create_Surface_Knit_Feature_Example_VBNET.htm)
- Create Knit Surface Feature (VBA) (Create_Surface_Knit_Feature_Example_VB6.htm)
- Create Knit Surface Feature (C#) (Create_Surface_Knit_Feature_Example_CSharp.htm)

## See Also

- `ISurfaceKnitFeatureData.MinValueForGapRange`