---
type: method
interface: IDimensionTolerance
member: GetMaxValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getmaxvalue
  - idimensiontolerance
  - dimension
  - tolerance
  - max
  - value
  - double
---

# IDimensionTolerance.GetMaxValue

Obsolete. Superseded by IDimensionTolerance::GetMaxValue2.

## Signature

```csharp
System.Double GetMaxValue()
```
## Parameters

None.

## Return Value

Tolerance maximum value

## Remarks

Depending on the
tolerance type
, the tolerance minimum and maximum values might not be visible.
To:
get the tolerance minimum value, use
IDimensionTolerance::GetMinValue
.
set the tolerance values, use
IDimensionTolerance::SetValues
.