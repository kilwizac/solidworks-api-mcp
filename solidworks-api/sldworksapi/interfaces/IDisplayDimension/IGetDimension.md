---
type: method
interface: IDisplayDimension
member: IGetDimension
returns: Dimension
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetDimension
  - IFeature.IParameter
  - IFeature.Parameter
  - IModelDoc2.IParameter
  - IModelDoc2.Parameter
keywords:
  - igetdimension
  - idisplaydimension
  - display
  - dimension
---

# IDisplayDimension.IGetDimension

Obsolete. Superseded by IDisplayDimension::GetDimension2.

## Signature

```csharp
Dimension IGetDimension()
```
## Parameters

None.

## Return Value

Pointer to an IDimension object

## Remarks

SOLIDWORKS can display a dimension more than once. For example, a base-extrude dimension can be brought into three different views on a drawing. These three dimensions are referred to as display dimensions and are represented by the
IDisplayDimension
object in the SOLIDWORKS API. The original base-extrude dimension is represented by the
IDimension
object in the SOLIDWORKS API.

## See Also

- `IDisplayDimension.GetDimension`
- `IFeature.IParameter`
- `IFeature.Parameter`
- `IModelDoc2.IParameter`
- `IModelDoc2.Parameter`