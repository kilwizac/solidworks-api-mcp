---
type: method
interface: IModelDoc2
member: SetUnits
returns: void
parameters:
  -
    name: UType
    type: System.Int16
    description: Model units as defined in swLengthUnit_e
  -
    name: FractBase
    type: System.Int16
    description: Decimal or fraction as defined in swFractionDisplay_e
  -
    name: FractDenom
    type: System.Int16
    description: Denominator of the smallest inch fraction to be used, for example, 64 for 1/64; valid only if FractBase is set to swFRACTION (see Remarks )
  -
    name: SigDigits
    type: System.Int16
    description: Significant digits; valid only if FractBase is set to swDECIMAL
  -
    name: RoundToFraction
    type: System.Boolean
    description: Flag denoting whether or not to round to the fraction; for example, if 4 is the denominator value given in FractDenom and the actual value is 0.27, it is rounded to 0.25
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
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.SetAngularUnits
keywords:
  - units
  - setunits
  - imodeldoc2
  - model
  - doc2
  - type
  - int16
  - fract
  - base
  - denom
  - sig
  - digits
  - round
  - fraction
  - boolean
  - void
---

# IModelDoc2.SetUnits

Sets the units used by the end-user for the model.

## Signature

```csharp
void SetUnits( 
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
,
   System.Boolean
RoundToFraction
)
```
## Parameters

- `UType` (System.Int16): Model units as defined in swLengthUnit_e
- `FractBase` (System.Int16): Decimal or fraction as defined in swFractionDisplay_e
- `FractDenom` (System.Int16): Denominator of the smallest inch fraction to be used, for example, 64 for 1/64; valid only if FractBase is set to swFRACTION (see Remarks )
- `SigDigits` (System.Int16): Significant digits; valid only if FractBase is set to swDECIMAL
- `RoundToFraction` (System.Boolean): Flag denoting whether or not to round to the fraction; for example, if 4 is the denominator value given in FractDenom and the actual value is 0.27, it is rounded to 0.25

## Return Value

Unknown.

## Remarks

Fractional units are only valid if UType is set to swINCHES or swFEETINCHES.

## See Also

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.SetAngularUnits`