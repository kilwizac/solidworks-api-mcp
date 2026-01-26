---
type: property
interface: ISpring
member: SectionProfile
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISpring.BaseProfile
  - ISpring.GetProfilePoints
  - ISpring.ProfileParameters
  - ISpring.ProfileType
  - ISpring.SectionProfileCenter
keywords:
  - sectionprofile
  - ispring
  - spring
  - section
  - profile
  - body2
readonly: null
---

# ISpring.SectionProfile

Gets or sets the section profile for the spring.

## Signature

```csharp
Body2 SectionProfile {get; set;}
```
## Parameters

None.

## Return Value

Body (see Remarks )

## Remarks

The profile refers to the body associated with a circular edge that determines the base diameter of the spring. For example, to create a spring on a circular sketch, use
ISketch::GetContourEdges
or
ISketch::IGetContours
and
IEdge::GetBody
.

## See Also

- `ISpring.BaseProfile`
- `ISpring.GetProfilePoints`
- `ISpring.ProfileParameters`
- `ISpring.ProfileType`
- `ISpring.SectionProfileCenter`