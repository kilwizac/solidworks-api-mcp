---
type: method
interface: ISweepFeatureData
member: SetPathAlignmentDirectionVector
returns: void
parameters:
  -
    name: Dir
    type: System.Object
    description: Plane , planar face , line , edge , cylinder , axis , or a pair of vertices that defines the direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.GetPathAlignmentDirectionVector
  - ISweepFeatureData.GetPathType
  - ISweepFeatureData.Path
keywords:
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - path
  - setpathalignmentdirectionvector
  - sweep
  - feature
  - data
  - alignment
  - direction
  - vector
  - dir
  - object
  - void
---

# ISweepFeatureData.SetPathAlignmentDirectionVector

Sets the direction vector for path alignment in this sweep feature.

## Signature

```csharp
void SetPathAlignmentDirectionVector( 
   System.Object
Dir
)
```
## Parameters

- `Dir` (System.Object): Plane , planar face , line , edge , cylinder , axis , or a pair of vertices that defines the direction

## Return Value

Unknown.

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

- `ISweepFeatureData.GetPathAlignmentDirectionVector`
- `ISweepFeatureData.GetPathType`
- `ISweepFeatureData.Path`