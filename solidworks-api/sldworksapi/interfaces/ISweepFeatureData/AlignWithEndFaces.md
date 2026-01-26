---
type: property
interface: ISweepFeatureData
member: AlignWithEndFaces
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - alignwithendfaces
  - isweepfeaturedata
  - sweep
  - feature
  - data
  - align
  - end
  - faces
  - boolean
readonly: null
---

# ISweepFeatureData.AlignWithEndFaces

Gets or sets whether to align this sweep with the end faces.

## Signature

```csharp
System.Boolean AlignWithEndFaces {get; set;}
```
## Parameters

None.

## Return Value

True aligns the sweep with the end faces (default for swept-cut and swept-boss), false does not (default for swept-surface) (see Remarks )

## Remarks

You must set this property to false if
ISweepFeatureData::TwistControlType
is set to
swTwistControlType_e
.swTwistControlConstantTwistAlongPath.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)