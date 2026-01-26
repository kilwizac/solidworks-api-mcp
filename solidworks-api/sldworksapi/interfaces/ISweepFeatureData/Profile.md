---
type: property
interface: ISweepFeatureData
member: Profile
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.CircularProfile
  - ISweepFeatureData.Direction
  - ISweepFeatureData.GetProfileType
keywords:
  - profile
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - object
readonly: null
---

# ISweepFeatureData.Profile

Gets and sets the sketch profile or tool body for this sweep feature.

## Signature

```csharp
System.Object Profile {get; set;}
```
## Parameters

None.

## Return Value

Sketch profile or tool body for this sweep feature (see Remarks )

## Remarks

If a...
Then the type of object is a...
Sketch profile
Face
,
edge
, or
curve
Tool body (see
NOTE
)
Body
that is convex, not merged with the main body and consists of one of the following:
A revolved feature that consist of analytical geometry only, such as lines and arcs
A cylindrical extruded feature
NOTE:
Tool bodies are supported in swept-cut features in SOLIDWORKS API 2017 FCS and later.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.CircularProfile`
- `ISweepFeatureData.Direction`
- `ISweepFeatureData.GetProfileType`