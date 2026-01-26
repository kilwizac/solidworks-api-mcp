---
type: method
interface: IFace2
member: IGetFeature
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IFace2.GetFeatureId
keywords:
  - face
  - see
  - also
  - iface2
  - feature
  - ifeature
  - igetfeature
  - face2
---

# IFace2.IGetFeature

Gets the feature that owns this face.

## Signature

```csharp
Feature IGetFeature()
```
## Parameters

None.

## Return Value

Pointer to the owning feature

## Remarks

In SOLIDWORKS, a face:
is the result of evaluating a feature.
can be owned by several features.
IFeature::GetFaces
or
IFeature::IGetFaces2
returns all of the faces owned by a feature. This is different from the faces highlighted in the user interface when the feature is selected. The user interface filters out multiple feature faces. This filter is only for display purposes.
To filter out multiple feature faces using the SOLIDWORKS API, you must call
IFace2::GetFeature
or IFace2::IGetFeature. Only the oldest feature from the face is returned, that is, the first owning feature in the FeatureManager design tree.

## See Also

- `IFace2.GetFeatureId`