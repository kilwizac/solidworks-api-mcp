---
type: property
interface: ISweepFeatureData
member: TangentPropagation
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.EndTangencyType
  - ISweepFeatureData.MaintainTangency
  - ISweepFeatureData.StartTangencyType
keywords:
  - tangent
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - tangency
  - tangentpropagation
  - sweep
  - feature
  - data
  - propagation
  - boolean
readonly: null
---

# ISweepFeatureData.TangentPropagation

Gets or sets whether to propagate the sweep to the next tangent edge for this sweep feature.

## Signature

```csharp
System.Boolean TangentPropagation {get; set;}
```
## Parameters

None.

## Return Value

True to propagate the sweep to the next tangent edge, false to cause the sweep to occur only on the selected edge; to propagate to the next edge, the next edge must be tangent to the current edge

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.EndTangencyType`
- `ISweepFeatureData.MaintainTangency`
- `ISweepFeatureData.StartTangencyType`