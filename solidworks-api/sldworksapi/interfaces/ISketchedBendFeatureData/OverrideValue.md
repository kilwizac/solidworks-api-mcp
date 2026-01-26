---
type: property
interface: ISketchedBendFeatureData
member: OverrideValue
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchedBendFeatureData.BendAngle
keywords:
  - overridevalue
  - isketchedbendfeaturedata
  - sketched
  - bend
  - feature
  - data
  - override
  - value
  - boolean
readonly: true
---

# ISketchedBendFeatureData.OverrideValue

Gets whether the bend angle of this sketched bend is overridden by a custom bend angle.

## Signature

```csharp
System.Boolean OverrideValue {get;}
```
## Parameters

None.

## Return Value

True if the bend angle is overridden by a custom bend angle, false if the bend angle is from a gauge table

## Remarks

This property:
is valid only when a sheet metal gauge table has been selected for a parent sheet metal feature (e.g., lofted bend, swept flange, or base flange).
cannot be set. Rather, it is calculated from the bend angle value. If the bend angle is in the gauge table, then this property is set to false. If the bend angle is not in the gauge table, then it is considered a custom value, and this property is set to true.

## See Also

- `ISketchedBendFeatureData.BendAngle`