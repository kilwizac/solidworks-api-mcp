---
type: method
interface: IDimensionTolerance
member: SetValues
returns: System.Boolean
parameters:
  -
    name: MinValue
    type: System.Double
    description: Tolerance minimum value
  -
    name: MaxValue
    type: System.Double
    description: Tolerance maximum value
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setvalues
  - idimensiontolerance
  - dimension
  - tolerance
  - values
  - min
  - value
  - double
  - max
  - boolean
---

# IDimensionTolerance.SetValues

Obsolete. Superseded by IDimensionTolerance::SetValues2.

## Signature

```csharp
System.Boolean SetValues( 
   System.Double
MinValue
,
   System.Double
MaxValue
)
```
## Parameters

- `MinValue` (System.Double): Tolerance minimum value
- `MaxValue` (System.Double): Tolerance maximum value

## Return Value

True if the minimum and maximum tolerance values are set, false if not

## Remarks

You cannot set the dimension tolerance values if the
tolerance type
is
swTolType_e.swTolNONE
. Depending on the tolerance type, the dimension tolerance minimum and maximum values might not be visible.
To get tolerance...
Use...
Minimum value
IDimensionTolerance::GetMinValue
Maximum value
IDimensionTolerance::GetMaxValue
To see the effects of changing the tolerance values, call
IModelDoc2::GraphicsRedraw2
.