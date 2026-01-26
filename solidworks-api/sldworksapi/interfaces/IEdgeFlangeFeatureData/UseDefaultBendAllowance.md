---
type: property
interface: IEdgeFlangeFeatureData
member: UseDefaultBendAllowance
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.GetCustomBendAllowance
  - IEdgeFlangeFeatureData.SetCustomBendAllowance
keywords:
  - bend
  - allowance
  - usedefaultbendallowance
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - use
  - default
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.UseDefaultBendAllowance

Gets or sets whether to use the default bend allowance for this edge flange.

## Signature

```csharp
System.Boolean UseDefaultBendAllowance {get; set;}
```
## Parameters

None.

## Return Value

True uses the default bend allowance (default), false uses a custom bend allowance

## Remarks

If this property is set to true, then the default KFactor is 0.5.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.GetCustomBendAllowance`
- `IEdgeFlangeFeatureData.SetCustomBendAllowance`