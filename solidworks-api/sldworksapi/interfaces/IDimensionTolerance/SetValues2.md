---
type: method
interface: IDimensionTolerance
member: SetValues2
returns: System.Boolean
parameters:
  -
    name: MinValue
    type: System.Double
    description: Dimension tolerance minimum value
  -
    name: MaxValue
    type: System.Double
    description: Dimension tolerance maximum value
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configurations to which to set the dimension tolerance minimum and maximum values as defined in swSetValueInConfiguration_e
  -
    name: Config_names
    type: System.Object
    description: Names of the configurations for which to set dimension tolerance values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setvalues2
  - idimensiontolerance
  - dimension
  - tolerance
  - values2
  - min
  - value
  - double
  - max
  - which
  - configurations
  - int32
  - config
  - names
  - object
  - boolean
  - change
  - configuration
  - vb
  - net
  - vba
---

# IDimensionTolerance.SetValues2

Sets the tolerance minimum and maximum values of a dimension.

## Signature

```csharp
System.Boolean SetValues2( 
   System.Double
MinValue
,
   System.Double
MaxValue
,
   System.Int32
WhichConfigurations
,
   System.Object
Config_names
)
```
## Parameters

- `MinValue` (System.Double): Dimension tolerance minimum value
- `MaxValue` (System.Double): Dimension tolerance maximum value
- `WhichConfigurations` (System.Int32): Configurations to which to set the dimension tolerance minimum and maximum values as defined in swSetValueInConfiguration_e
- `Config_names` (System.Object): Names of the configurations for which to set dimension tolerance values

## Return Value

True if the dimension tolerance values are set, false if not

## Remarks

You cannot set the dimension tolerance values if the
tolerance type
is
swTolType_e.swTolNONE
. Depending on the tolerance type, the dimension tolerance minimum and maximum values might not be visible.
To get the dimension tolerance...
Use...
Minimum value
IDimensionTolerance::GetMinValue
Maximum value
IDimensionTolerance::GetMaxValue
To see the effects of changing the dimension tolerance values, call
IModelView::GraphicsRedraw
.

## Examples

- Change Dimension Tolerance in a Configuration (C#) (Change_Dimension_Tolerance_in_Configuration_Example_CSharp.htm)
- Change Dimension Tolerance in a Configuration (VB.NET) (Change_Dimension_Tolerance_in_Configuration_Example_VBNET.htm)
- Change Dimension Tolerance in a Configuration (VBA) (Change_Dimension_Tolerance_in_Configuration_Example_VB.htm)