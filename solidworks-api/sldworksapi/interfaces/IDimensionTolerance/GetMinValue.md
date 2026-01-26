---
type: method
interface: IDimensionTolerance
member: GetMinValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getminvalue
  - idimensiontolerance
  - dimension
  - tolerance
  - min
  - value
  - double
---

# IDimensionTolerance.GetMinValue

Obsolete. Superseded by IDimensionTolerance::GetMinValue2.

## Signature

```csharp
System.Double GetMinValue()
```
## Parameters

None.

## Return Value

Tolerance minimum value

## Remarks

Depending on the
tolerance type
, the tolerance minimum and maximum values might not be visible.
To:
get the tolerance maximum value, use
IDimensionTolerance::GetMaxValue
.
set the tolerance values, use
IDimensionTolerance::SetValues
.