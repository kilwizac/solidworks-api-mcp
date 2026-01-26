---
type: method
interface: IModelDoc2
member: IGetAngularUnits
returns: System.Int16
parameters: []
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
  - IModelDoc2.IGetUnits
  - IModelDoc2.IGetUserUnit
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.LengthUnit
  - IModelDoc2.SetAngularUnits
  - IModelDoc2.SetUnits
keywords:
  - units
  - igetangularunits
  - imodeldoc2
  - model
  - doc2
  - angular
  - int16
---

# IModelDoc2.IGetAngularUnits

Gets the current angular unit settings.

## Signature

```csharp
System.Int16 IGetAngularUnits()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 5 shorts (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.LengthUnit`
- `IModelDoc2.SetAngularUnits`
- `IModelDoc2.SetUnits`