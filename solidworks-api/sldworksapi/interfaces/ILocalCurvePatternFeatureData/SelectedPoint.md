---
type: property
interface: ILocalCurvePatternFeatureData
member: SelectedPoint
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - selectedpoint
  - ilocalcurvepatternfeaturedata
  - local
  - curve
  - pattern
  - feature
  - data
  - selected
  - point
  - object
readonly: null
---

# ILocalCurvePatternFeatureData.SelectedPoint

Gets or sets the reference point for this curve-driven component pattern feature.

## Signature

```csharp
System.Object SelectedPoint {get; set;}
```
## Parameters

None.

## Return Value

Reference point (see Remarks )

## Remarks

You can pre-select the reference point using Mark = 32 before creating the feature definition.
This property is valid only if
ILocalCurvePatternFeatureData::D1ReferencePoint
is set to
swLocalCurvePatternReferencePoint_e
.swLocalCurvePatternSelectedPoint.
See
Accessing Selections that Define Features
for additional details on using this property.
For more information, see the
Curve Driven Component Pattern
topic in the SOLIDWORKS Design user-interface help.