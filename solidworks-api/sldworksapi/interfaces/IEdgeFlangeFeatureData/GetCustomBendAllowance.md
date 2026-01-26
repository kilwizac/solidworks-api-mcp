---
type: method
interface: IEdgeFlangeFeatureData
member: GetCustomBendAllowance
returns: CustomBendAllowance
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.SetCustomBendAllowance
  - IEdgeFlangeFeatureData.UseDefaultBendAllowance
keywords:
  - custom
  - bend
  - allowance
  - getcustombendallowance
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
---

# IEdgeFlangeFeatureData.GetCustomBendAllowance

Gets the custom bend allowance for this edge flange.

## Signature

```csharp
CustomBendAllowance GetCustomBendAllowance()
```
## Parameters

None.

## Return Value

Pointer to the ICustomBendAllowance object

## Remarks

This method is valid only if
IEdgeFlangeFeatureData::UseDefaultBendAllowance
is set to false.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.SetCustomBendAllowance`
- `IEdgeFlangeFeatureData.UseDefaultBendAllowance`