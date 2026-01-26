---
type: property
interface: IStraightElementData
member: ShaftFit
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - shaftfit
  - istraightelementdata
  - straight
  - element
  - data
  - shaft
  - fit
  - string
readonly: null
---

# IStraightElementData.ShaftFit

Gets or sets the shaft fit for this straight hole element.

## Signature

```csharp
System.String ShaftFit {get; set;}
```
## Parameters

None.

## Return Value

Shaft fit (see Remarks )

## Remarks

This property is valid only if
IAdvancedHoleElementData::FastenerType
is set to
swWzdHoleStandardFastenerTypes_e
.swStandard*DowelHoles.
Set this property to one of the following:
c8, c9, c11, d8, d9, d10, d11, e7, e8, e9, f6, f7, f8, g4, g5, g6, g7, h5, h6, h7, h8, h9, h10, h11, h12, h13, j5, j6, j7, j8, j9, j10, j11, k5, k6, k7, k8, k9, k10, k11, m5, m6, m7, n5, n6, n7, p5, p6, p7, r5, r6, r7, s5, s6, s7, t5, t6, t7, u5, u6, u7, v5, v6, v7, x5, x6, x7