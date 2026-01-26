---
type: method
interface: IModelDoc2
member: IGetUnits
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
  - IModelDoc2.IGetAngularUnits
  - IModelDoc2.IGetUserUnit
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.SetAngularUnits
  - IModelDoc2.SetUnits
keywords:
  - units
  - igetunits
  - imodeldoc2
  - model
  - doc2
  - int16
---

# IModelDoc2.IGetUnits

Gets the current unit settings, fraction base, fraction value, and significant digits.

## Signature

```csharp
System.Int16 IGetUnits()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 5 shorts (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The format of the returned data is an array of shorts:
[
LengthUnit, FractionBase, FractionValue, SignificantDigits, RoundToFraction
]
where:
LengthUnit
=  current model units as defined in
swLengthUnit_e
.
FractionBase
=  decimal or fraction as defined in
swFractionDisplay_e
; fractional units are only valid if the model units are set to swINCHES or swFEETINCHES.
FractionValue
= denominator value if using fractional units.
SignificantDigits
=  significant digits if using decimal units.
RoundToFraction
=  flag denoting whether or not to round to the fraction; for example, if 4 was the denominator value and the actual value was .27, it is
rounded to .25
You can also use
IModelDoc2::LengthUnit
, which provides access to the LengthUnit parameter.

## Examples

- Get and Set Units (C++) (Get_and_Set_Units_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.SetAngularUnits`
- `IModelDoc2.SetUnits`