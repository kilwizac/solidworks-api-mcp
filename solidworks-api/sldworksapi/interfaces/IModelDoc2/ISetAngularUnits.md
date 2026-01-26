---
type: method
interface: IModelDoc2
member: ISetAngularUnits
returns: void
parameters:
  -
    name: UType
    type: System.Int16
    description: Angular units as defined in swAngleUnit_e
  -
    name: FractBase
    type: System.Int16
    description: Not supported; however, input to this field is required but is not used
  -
    name: FractDenom
    type: System.Int16
    description: Not supported; however, input to this field is required but is not used
  -
    name: SigDigits
    type: System.Int16
    description: Significant digits if using decimal units
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetAngularUnits
  - IModelDoc2.GetUnits
  - IModelDoc2.GetUserUnit
  - IModelDoc2.IGetAngularUnits
  - IModelDoc2.IGetUnits
  - IModelDoc2.IGetUserUnit
  - IModelDoc2.LengthUnit
  - IModelDoc2.SetAngularUnits
  - IModelDoc2.SetUnits
keywords:
  - units
  - isetangularunits
  - imodeldoc2
  - model
  - doc2
  - angular
  - type
  - int16
  - fract
  - base
  - denom
  - sig
  - digits
  - void
---

# IModelDoc2.ISetAngularUnits

Sets the current angular units.

## Signature

```csharp
void ISetAngularUnits( 
   System.Int16
UType
,
   System.Int16
FractBase
,
   System.Int16
FractDenom
,
   System.Int16
SigDigits
)
```
## Parameters

- `UType` (System.Int16): Angular units as defined in swAngleUnit_e
- `FractBase` (System.Int16): Not supported; however, input to this field is required but is not used
- `FractDenom` (System.Int16): Not supported; however, input to this field is required but is not used
- `SigDigits` (System.Int16): Significant digits if using decimal units

## Return Value

Unknown.

## See Also

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.LengthUnit`
- `IModelDoc2.SetAngularUnits`
- `IModelDoc2.SetUnits`