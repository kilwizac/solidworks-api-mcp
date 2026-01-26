---
type: property
interface: IStraightElementData
member: HoleFit
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - holefit
  - istraightelementdata
  - straight
  - element
  - data
  - hole
  - fit
  - string
readonly: null
---

# IStraightElementData.HoleFit

Gets or sets the hole fit for this straight hole element.

## Signature

```csharp
System.String HoleFit {get; set;}
```
## Parameters

None.

## Return Value

Hole fit (see Remarks )

## Remarks

This property is valid only if
IAdvancedHoleElementData::FastenerType
is set to
swWzdHoleStandardFastenerTypes_e
.swStandard*DowelHoles.
Set this property to one of the following:
C8, C9, C11, D8, D9, D10, D11, E7, E8, E9, F6, F7, F8, F9, G5, G6, G7, G8, G9, G10, H5, H6, H7, H8, H9, H10, H11, H12, H13, J6, J7, J8, J9, J10, J11, K6, K7, K8, M6, M7, M8, N6, N7, N8, N9, N10, N11, P6, P7, R7, S6, S7, T6, T7, U6, U7, V6, V7, X6, X7