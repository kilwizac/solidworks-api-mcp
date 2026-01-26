---
type: property
interface: IStraightElementData
member: FitType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - fittype
  - istraightelementdata
  - straight
  - element
  - data
  - fit
  - type
  - int32
readonly: null
---

# IStraightElementData.FitType

Gets or sets the fit type for this straight hole element.

## Signature

```csharp
System.Int32 FitType {get; set;}
```
## Parameters

None.

## Return Value

Fit type as defined in swStraightHoleFitType_e

## Remarks

This property is valid only if
IAdvancedHoleElementData::FastenerType
is set to
swWzdHoleStandardFastenerTypes_e
.swStandard*ScrewClearances.