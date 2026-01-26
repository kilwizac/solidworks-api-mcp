---
type: method
interface: IDisplayDimension
member: SetPrecision3
returns: System.Int32
parameters:
  -
    name: Primary
    type: System.Int32
    description: Number of digits displayed after the decimal point in the primary precision value (see Remarks )
  -
    name: Dual
    type: System.Int32
    description: Number of digits displayed after the decimal point in the dual precision value
  -
    name: PrimaryTol
    type: System.Int32
    description: Number of digits displayed after the decimal point in the primary tolerance value (see Remarks )
  -
    name: DualTol
    type: System.Int32
    description: Number of digits displayed after the decimal point in the dual tolerance value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetAlternatePrecision2
  - IDisplayDimension.GetAlternateTolPrecision2
  - IDisplayDimension.GetPrimaryPrecision2
  - IDisplayDimension.GetPrimaryTolPrecision2
keywords:
  - setprecision3
  - idisplaydimension
  - display
  - dimension
  - precision3
  - primary
  - int32
  - dual
  - tol
---

# IDisplayDimension.SetPrecision3

Sets the number of digits to display after the decimal point for precision and tolerance values in this display dimension.

## Signature

```csharp
System.Int32 SetPrecision3( 
   System.Int32
Primary
,
   System.Int32
Dual
,
   System.Int32
PrimaryTol
,
   System.Int32
DualTol
)
```
## Parameters

- `Primary` (System.Int32): Number of digits displayed after the decimal point in the primary precision value (see Remarks )
- `Dual` (System.Int32): Number of digits displayed after the decimal point in the dual precision value
- `PrimaryTol` (System.Int32): Number of digits displayed after the decimal point in the primary tolerance value (see Remarks )
- `DualTol` (System.Int32): Number of digits displayed after the decimal point in the dual tolerance value

## Return Value

Return status (see Remarks )

## Remarks

The specified values must be in the range from 0 to 8, which indicates the number of digits after the decimal place to display that value.
Alternatively, the values can be defined by
swDimensionPrecisionSettings_e
.
Parameter
swDimensionPrecisionSettings_e value
Result
Primary
Dual
PrimaryTol
DualTol
swDoNotChangePrecisionSetting
The current setting is not changed.
Primary
Dual
PrimaryTol
DualTol
swPrecisionFollowsDocumentSetting
The number of decimal places to display adheres to the document setting.
Use
IModelDocExtension::GetUserPreferenceInteger
/
IModelDocExtension::SetUserPreferenceInteger
.swDetailingLinearDimPrecision, swDetailingAngularDimPrecision, or swDetailingAltLinearDimPrecision to get or set that value.
PrimaryTol
DualTol
swTolerancePrecisionFollowsNominal
The number of decimal places to display is the same as for the dimension or dual dimension value.
This method does not support setting the Primary and PrimaryTol values for
hole callouts
. Use
ICalloutLengthVariable::Precision
and
ICalloutLengthVariable::TolerancePrecision
to set these values for hole callouts. However, you must use this method to set Dual and DualTol values for hole callouts, because Dual and DualTol are global settings.
The return value indicates the success or failure of this method. In general, a value less than 0 indicates that the method failed and SOLIDWORKS did not set any precision values. A value of 0 indicates success. A value greater than 0 indicates that a problem occurred, but that the method did not fail.
-1
Method failed; no precision values were set.
0
Method was successful; all precision values were set.
1
Primary precision value was invalid.
2
Alternate precision value was invalid.
3
Primary tolerance precision value was invalid.
4
Alternate tolerance precision value was invalid.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.GetAlternatePrecision2`
- `IDisplayDimension.GetAlternateTolPrecision2`
- `IDisplayDimension.GetPrimaryPrecision2`
- `IDisplayDimension.GetPrimaryTolPrecision2`