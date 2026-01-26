---
type: property
interface: ISweepFeatureData
member: MaintainTangency
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.EndTangencyType
  - ISweepFeatureData.StartTangencyType
keywords:
  - tangent
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - tangency
  - maintaintangency
  - sweep
  - feature
  - data
  - maintain
  - boolean
readonly: null
---

# ISweepFeatureData.MaintainTangency

Gets or sets whether to merge tangent faces in this sweep feature.

## Signature

```csharp
System.Boolean MaintainTangency {get; set;}
```
## Parameters

None.

## Return Value

True to merge tangent faces, false to not (see Remarks )

## Remarks

If the sweep profile has tangent segments, true causes the corresponding surfaces in the resulting sweep to be tangent. Faces that can be represented as a plane, cylinder, or cone are maintained. Other adjacent faces are merged, and the profiles are approximated. Sketch arcs may be converted to splines.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.EndTangencyType`
- `ISweepFeatureData.StartTangencyType`