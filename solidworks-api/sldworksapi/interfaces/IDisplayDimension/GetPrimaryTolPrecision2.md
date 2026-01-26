---
type: method
interface: IDisplayDimension
member: GetPrimaryTolPrecision2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetAlternatePrecision2
  - IDisplayDimension.GetAlternateTolPrecision2
keywords:
  - getprimarytolprecision2
  - idisplaydimension
  - display
  - dimension
  - primary
  - tol
  - precision2
  - int32
  - precisions
  - vba
---

# IDisplayDimension.GetPrimaryTolPrecision2

Gets the primary tolerance precision setting for this display dimension.

## Signature

```csharp
System.Int32 GetPrimaryTolPrecision2()
```
## Parameters

None.

## Return Value

Precision setting as defined by swDimensionPrecisionSettings_e

## Remarks

If the return value equals swPrecisionFollowsDocumentSetting, then the precision being used is the document default for dual dimension values. You can retrieve the value using
IModelDocExtension::GetUserPreferenceInteger
with swDetailingLinearTolPrecision or swDetailingAngularTolPrecision.
If the return value is swTolerancePrecisionFollowsNominal, then the precision being used is the same as the precision being used for the dimension value. You can retrieve the value using
IDisplayDimension::GetPrimaryPrecision2
Otherwise, the return value is the precision in the dimensions primary units.
Use
IDisplayDimension::SetPrecision2
to set the precision values on this display dimension.

## Examples

- Get Precisions for a Dimension (VBA) (Get_Precisions_for_a_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetAlternatePrecision2`
- `IDisplayDimension.GetAlternateTolPrecision2`