---
type: method
interface: IDisplayDimension
member: GetAlternateTolPrecision2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetPrimaryPrecision2
  - IDisplayDimension.GetPrimaryTolPrecision2
keywords:
  - getalternatetolprecision2
  - idisplaydimension
  - display
  - dimension
  - alternate
  - tol
  - precision2
  - int32
  - precisions
  - vba
---

# IDisplayDimension.GetAlternateTolPrecision2

Gets the displayed precision for the dual tolerance portion of this dimension.

## Signature

```csharp
System.Int32 GetAlternateTolPrecision2()
```
## Parameters

None.

## Return Value

Precision setting as defined in swDimensionPrecisionSettings_e

## Remarks

If the return value equals swPrecisionFollowsDocumentSetting, then the precision being used is the document default for dual dimension values. You can retrieve the value using
IModelDocExtension::GetUserPreferenceInteger
with swDetailingAltLinearTolPrecision.
If the return value equals swTolerancePrecisionFollowsNominal, then the precision being used is the same as the precision being used for the dual dimension value. You can retrieve the value using
IDisplayDimension::GetAlternatePrecision2
.
Otherwise, the return value is the precision in the dimensions dual units.
Use
IDisplayDimension::SetPrecision2
to set precision values on this display dimension.

## Examples

- Get Precisions for a Dimension (VBA) (Get_Precisions_for_a_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetPrimaryPrecision2`
- `IDisplayDimension.GetPrimaryTolPrecision2`