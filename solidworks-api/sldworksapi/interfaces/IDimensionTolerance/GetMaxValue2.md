---
type: method
interface: IDimensionTolerance
member: GetMaxValue2
returns: System.Int32
parameters:
  -
    name: ToleranceValue
    type: System.Double
    description: Tolerance maximum value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getmaxvalue2
  - idimensiontolerance
  - dimension
  - tolerance
  - max
  - value2
  - value
  - double
  - int32
  - vb
  - net
  - vba
---

# IDimensionTolerance.GetMaxValue2

Gets the tolerance maximum value.

## Signature

```csharp
System.Int32 GetMaxValue2( 
   out System.Double
ToleranceValue
)
```
## Parameters

- `ToleranceValue` (System.Double): Tolerance maximum value

## Return Value

Status of tolerance maximum value as defined in swDimensionToleranceWarning_e

## Remarks

Depending on the
tolerance type
, the tolerance minimum and maximum values might not be visible.
To:
get the tolerance minimum value, use
IDimensionTolerance::GetMinValue2
.
set the tolerance values, use
IDimensionTolerance::SetValues2
.

## Examples

- Get Dimension Tolerance (C#) (Get_Dimension_Tolerance_Example_CSharp.htm)
- Get Dimension Tolerance (VB.NET) (Get_Dimension_Tolerance_Example_VBNET.htm)
- Get Dimension Tolerance (VBA) (Get_Dimension_Tolerance_Example_VB.htm)