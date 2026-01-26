---
type: property
interface: IStraightElementData
member: Filter
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - filter
  - istraightelementdata
  - straight
  - element
  - data
  - int32
readonly: null
---

# IStraightElementData.Filter

Gets or sets the filter for this straight hole element.

## Signature

```csharp
System.Int32 Filter {get; set;}
```
## Parameters

None.

## Return Value

Filter as defined in swStraightHoleFilter_e

## Remarks

This property is valid only if
IAdvancedHoleElementData::Standard
is set to
swWzdHoleStandards_e
:
swStandardPEMInch
- or -
swStandardPEMMetric