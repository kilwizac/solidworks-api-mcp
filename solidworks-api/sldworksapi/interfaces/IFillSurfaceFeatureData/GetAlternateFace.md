---
type: method
interface: IFillSurfaceFeatureData
member: GetAlternateFace
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - getalternateface
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - alternate
  - face
  - face2
---

# IFillSurfaceFeatureData.GetAlternateFace

Gets an alternate face to use as the boundary face for the curvature control of the patch.

## Signature

```csharp
Face2 GetAlternateFace()
```
## Parameters

None.

## Return Value

Pointer to the alternate face, the IFace2 object

## Remarks

This method is valid only when the contact type is tangent and edges are used to define the patch boundary. If an edge has two faces, then this method returns the face with which the resultant feature geometry is tangent.
Use
IFillSurfaceFeatureData::GetCurvatureControl
to determine the contact type.
See
Accessing Selections that Define Features
for additional details on using this method.