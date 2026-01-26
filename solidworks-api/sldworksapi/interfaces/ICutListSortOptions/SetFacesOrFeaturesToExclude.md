---
type: method
interface: ICutListSortOptions
member: SetFacesOrFeaturesToExclude
returns: System.Int32
parameters:
  -
    name: Entities
    type: System.Object
    description: Array of IFace2 or IFeature to exclude
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - ICutListSortOptions.GetFacesOrFeaturesToExclude
keywords:
  - setfacesorfeaturestoexclude
  - icutlistsortoptions
  - cut
  - list
  - sort
  - options
  - faces
  - features
  - exclude
  - entities
  - object
  - int32
---

# ICutListSortOptions.SetFacesOrFeaturesToExclude

Sets the faces or features to exclude from cut list sorting.

## Signature

```csharp
System.Int32 SetFacesOrFeaturesToExclude( 
   System.Object
Entities
)
```
## Parameters

- `Entities` (System.Object): Array of IFace2 or IFeature to exclude

## Return Value

Error code as defined in swCutListExclusionStatus_e

## Remarks

In order to avoid cut list sorting issues using
IBodyFolder::SortCutList
, the Entities array must contain entities of selection type BODYFEATURE or FACE.
Faces and features you cannot exclude:
Chamfers that remove an entire face.
Suppressed features.
Features that create new bodies from sketches, such as boss-extrude, revolve, and sweep.
Certain sheet metal features.

## See Also

- `ICutListSortOptions.GetFacesOrFeaturesToExclude`