---
type: method
interface: IModelDoc2
member: GetAngularUnits
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetUnits
  - IModelDoc2.GetUserUnit
  - IModelDoc2.IGetAngularUnits
  - IModelDoc2.IGetUnits
  - IModelDoc2.IGetUserUnit
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.LengthUnit
  - IModelDoc2.SetAngularUnits
  - IModelDoc2.SetUnits
keywords:
  - units
  - getangularunits
  - imodeldoc2
  - model
  - doc2
  - angular
  - object
---

# IModelDoc2.GetAngularUnits

Gets the current angular unit settings.

## Signature

```csharp
System.Object GetAngularUnits()
```
## Parameters

None.

## Return Value

Array of 5 shorts (see Remarks )

## Remarks

The format of the returned data is an array of 5 shorts:
[
AngleUnit, FractionBase, FractionValue, SignificantDigits, RoundToFraction
]
where:
AngleUnit
=  current angular units. You can find the unit types in
swAngleUnit_e
.
FractionBase
=  Not currently supported. Do not use the return value in this field.
FractionValue
= Not currently supported. Do not use the return value in this field.
SignificantDigits
=  significant digits if using decimal units.
RoundToFraction
=  Not currently supported. Do not use the return value in this field.

## See Also

- `IModelDoc2.GetUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.LengthUnit`
- `IModelDoc2.SetAngularUnits`
- `IModelDoc2.SetUnits`