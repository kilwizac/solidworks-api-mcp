---
type: method
interface: IDisplayDimension
member: SetPrecision2
returns: System.Int32
parameters:
  -
    name: Primary
    type: System.Int32
    description: Number of digits displayed after the decimal point in the dimension value (see Remarks )
  -
    name: Dual
    type: System.Int32
    description: Number of digits displayed after the decimal point in the dual dimension value
  -
    name: PrimaryTol
    type: System.Int32
    description: Number of digits displayed after the decimal point in the tolerance value (see Remarks )
  -
    name: DualTol
    type: System.Int32
    description: Number of digits displayed after the decimal point in the dual tolerance value
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setprecision2
  - idisplaydimension
  - display
  - dimension
  - precision2
  - primary
  - int32
  - dual
  - tol
---

# IDisplayDimension.SetPrecision2

Obsolete. Superseded by IDisplayDimension::SetPrecision3.

## Signature

```csharp
System.Int32 SetPrecision2( 
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

- `Primary` (System.Int32): Number of digits displayed after the decimal point in the dimension value (see Remarks )
- `Dual` (System.Int32): Number of digits displayed after the decimal point in the dual dimension value
- `PrimaryTol` (System.Int32): Number of digits displayed after the decimal point in the tolerance value (see Remarks )
- `DualTol` (System.Int32): Number of digits displayed after the decimal point in the dual tolerance value

## Return Value

Return status (see Remarks )

## Remarks

The specified precision values must be in the range from 0 to 8, which indicates the number of digits after the decimal place to display that value.
Alternatively, the precision values can be defined by
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
The return value indicates the success or failure of this method. In general, a value less than 0 indicates that the method failed and SOLIDWORKS did not set any precision values. A value of 0 indicates success. A value greater than 0 indicates that a problem occurred, but the method did not fail.
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