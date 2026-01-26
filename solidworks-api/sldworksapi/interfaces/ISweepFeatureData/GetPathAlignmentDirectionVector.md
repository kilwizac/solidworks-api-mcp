---
type: method
interface: ISweepFeatureData
member: GetPathAlignmentDirectionVector
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of direction vector as defined in swSelectType_e : swSelDATAMAXES (axis) swSelDATUMPLANES (plane) swSelEDGES (edge) swSelFACES (face)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetPathType
  - ISweepFeatureData.Path
  - ISweepFeatureData.PathAlignmentType
  - ISweepFeatureData.SetPathAlignmentDirectionVector
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - path
  - getpathalignmentdirectionvector
  - sweep
  - feature
  - data
  - alignment
  - direction
  - vector
  - type
  - int32
  - object
---

# ISweepFeatureData.GetPathAlignmentDirectionVector

Gets the direction vector of the specified type for this sweep feature.

## Signature

```csharp
System.Object GetPathAlignmentDirectionVector( 
   out System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of direction vector as defined in swSelectType_e : swSelDATAMAXES (axis) swSelDATUMPLANES (plane) swSelEDGES (edge) swSelFACES (face)

## Return Value

Plane , planar face , line , edge , cylinder , axis , or a pair of vertices that defines the direction

## Remarks

This method is valid only if:
ISweepFeatureData:TwistControlType
is set to
swTwistControlType_e
.swTwistControlFollowPath.
- and -
ISweepFeatureData::PathAlignmentType
is set to
swTangencyType_e
.swTangencyDirectionVector.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISweepFeatureData.GetPathType`
- `ISweepFeatureData.Path`
- `ISweepFeatureData.PathAlignmentType`
- `ISweepFeatureData.SetPathAlignmentDirectionVector`