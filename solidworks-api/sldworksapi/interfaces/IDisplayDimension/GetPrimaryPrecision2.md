---
type: method
interface: IDisplayDimension
member: GetPrimaryPrecision2
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
  - IDisplayDimension.GetPrimaryTolPrecision2
keywords:
  - getprimaryprecision2
  - idisplaydimension
  - display
  - dimension
  - primary
  - precision2
  - int32
  - precisions
  - vba
---

# IDisplayDimension.GetPrimaryPrecision2

Gets the primary dimension precision setting for this display dimension.

## Signature

```csharp
System.Int32 GetPrimaryPrecision2()
```
## Parameters

None.

## Return Value

Precision setting as defined by swDimensionPrecisionSettings_e

## Remarks

If the return value equals swPrecisionFollowsDocumentSetting, then the precision being used is the document default for dual dimension values. You can retrieve the value using
IModelDocExtension::GetUserPreferenceInteger
with swDetailingLinearDimPrecision or swDetailingAngularDimPrecision. Otherwise, the return value is the precision in the dimensions primary units.
Use
IDisplayDimension::SetPrecision2
to set precision values on this display dimension.

## Examples

- Get Precisions for a Dimension (VBA) (Get_Precisions_for_a_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetAlternatePrecision2`
- `IDisplayDimension.GetAlternateTolPrecision2`
- `IDisplayDimension.GetPrimaryTolPrecision2`