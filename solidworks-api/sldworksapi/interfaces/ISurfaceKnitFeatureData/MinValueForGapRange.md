---
type: property
interface: ISurfaceKnitFeatureData
member: MinValueForGapRange
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceKnitFeatureData.MaxValueForGapRange
keywords:
  - minvalueforgaprange
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - min
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

# ISurfaceKnitFeatureData.MinValueForGapRange

Gets or sets the minimum gap range for this Surface-Knit feature.

## Signature

```csharp
System.Double MinValueForGapRange {get; set;}
```
## Parameters

None.

## Return Value

Minimum gap range; valid values are from 0.0001 mm to 0.01 mm

## Remarks

ISurfaceKnitFeatureData::UseGapFilters
must be true for this property to have an effect.
The minimum gap should be in the range of 0.0001 mm to
ISurfaceKnitFeatureData::KnitTolerance
.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Create Knit Surface Feature (VB.NET) (Create_Surface_Knit_Feature_Example_VBNET.htm)
- Create Knit Surface Feature (VBA) (Create_Surface_Knit_Feature_Example_VB6.htm)
- Create Knit Surface Feature (C#) (Create_Surface_Knit_Feature_Example_CSharp.htm)

## See Also

- `ISurfaceKnitFeatureData.MaxValueForGapRange`