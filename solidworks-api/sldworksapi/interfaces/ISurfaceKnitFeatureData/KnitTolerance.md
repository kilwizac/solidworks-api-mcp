---
type: property
interface: ISurfaceKnitFeatureData
member: KnitTolerance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - knittolerance
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - tolerance
  - double
  - create
  - vb
  - net
  - vba
readonly: null
---

# ISurfaceKnitFeatureData.KnitTolerance

Gets or sets the knit tolerance for this Surface-Knit feature.

## Signature

```csharp
System.Double KnitTolerance {get; set;}
```
## Parameters

None.

## Return Value

Knit tolerance (see Remarks )

## Remarks

ISurfaceKnitFeatureData::UseGapFilters
must be true for this property to have an effect.
A knit tolerance's:
lower limit is 0.0001 mm
upper limit is 0.1 mm
The knit tolerance value should be in a gap range such that:
(
Minimum gap
) <= (Knit tolerance) <= MIN(0.1 mm,
Maximum gap
)
See
Accessing Selections that Define Features
for additional details.

## Examples

- Create Knit Surface Feature (VB.NET) (Create_Surface_Knit_Feature_Example_VBNET.htm)
- Create Knit Surface Feature (VBA) (Create_Surface_Knit_Feature_Example_VB6.htm)
- Create Knit Surface Feature (C#) (Create_Surface_Knit_Feature_Example_CSharp.htm)