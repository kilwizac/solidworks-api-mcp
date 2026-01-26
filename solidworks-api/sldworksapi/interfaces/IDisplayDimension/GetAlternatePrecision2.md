---
type: method
interface: IDisplayDimension
member: GetAlternatePrecision2
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
  - getalternateprecision2
  - idisplaydimension
  - display
  - dimension
  - alternate
  - precision2
  - int32
  - precisions
  - vba
---

# IDisplayDimension.GetAlternatePrecision2

Gets the displayed precision for the dual portion of this dimension.

## Signature

```csharp
System.Int32 GetAlternatePrecision2()
```
## Parameters

None.

## Return Value

Precision setting as defined in swDimensionPrecisionSettings_e

## Remarks

If the return value equals swPrecisionFollowsDocumentSetting, then the precision used is the document default for dual dimension values. You can retrieve the value using
IModelDocExtension::GetUserPreferenceInteger
with swDetailingAltLinearDimPrecision. Otherwise, the return value is the precision in the dimensions dual units.
Use
IDisplayDimension::SetPrecision2
to set precision values on this display dimension.

## Examples

- Get Precisions for a Dimension (VBA) (Get_Precisions_for_a_Dimension_Example_VB.htm)

## See Also

- `IDisplayDimension.GetPrimaryPrecision2`
- `IDisplayDimension.GetPrimaryTolPrecision2`