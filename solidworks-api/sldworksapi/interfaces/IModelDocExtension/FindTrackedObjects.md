---
type: method
interface: IModelDocExtension
member: FindTrackedObjects
returns: System.Object
parameters:
  -
    name: TrackingCookie
    type: System.Int32
    description: Cookie obtained from ISldWorks::RegisterTrackingDefinition
  -
    name: SearchObject
    type: System.Object
    description: Body or face to search for tracking IDs; if empty, then all bodies in the document are searched
  -
    name: TypesFilter
    type: System.Object
    description: Array of the type of entities for which to search as defined by swTopoEntity_e ; valid values are swTopoVertex, swTopoEdge, swTopoLoop, swTopoFace, and swTopoBody; if empty or set to 0, then all types are searched
  -
    name: TrackingIDs
    type: System.Object
    description: Array of tracking IDs for which to search; if empty, then search for all tracking IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IBody2.GetTrackingIDs
  - IBody2.GetTrackingIDsCount
  - IBody2.IGetTrackingIDs
  - IBody2.RemoveTrackingID
  - IBody2.SetTrackingID
  - IEdge.GetTrackingIDs
  - IEdge.GetTrackingIDsCount
  - IEdge.IGetTrackingIDs
  - IEdge.RemoveTrackingID
  - IEdge.SetTrackingID
  - IFace2.GetTrackingIDs
  - IFace2.GetTrackingIDsCount
  - IFace2.IGetTrackingIDs
  - IFace2.RemoveTrackingID
  - IFace2.SetTrackingID
  - ILoop2.GetTrackingIDs
  - ILoop2.GetTrackingIDsCount
  - ILoop2.IGetTrackingIDs
  - ILoop2.RemoveTrackingID
  - ILoop2.SetTrackingID
  - IVertex.GetTrackingIDs
  - IVertex.GetTrackingIDsCount
  - IVertex.IGetTrackingIDs
  - IVertex.RemoveTrackingID
  - IVertex.SetTrackingID
keywords:
  - tracking
  - ids
  - find
  - findtrackedobjects
  - imodeldocextension
  - model
  - doc
  - extension
  - tracked
  - objects
  - cookie
  - int32
  - search
  - object
  - types
  - filter
  - ds
---

# IModelDocExtension.FindTrackedObjects

Finds the tracking IDs assigned to entities in this document.

## Signature

```csharp
System.Object FindTrackedObjects( 
   System.Int32
TrackingCookie
,
   System.Object
SearchObject
,
   System.Object
TypesFilter
,
   System.Object
TrackingIDs
)
```
## Parameters

- `TrackingCookie` (System.Int32): Cookie obtained from ISldWorks::RegisterTrackingDefinition
- `SearchObject` (System.Object): Body or face to search for tracking IDs; if empty, then all bodies in the document are searched
- `TypesFilter` (System.Object): Array of the type of entities for which to search as defined by swTopoEntity_e ; valid values are swTopoVertex, swTopoEdge, swTopoLoop, swTopoFace, and swTopoBody; if empty or set to 0, then all types are searched
- `TrackingIDs` (System.Object): Array of tracking IDs for which to search; if empty, then search for all tracking IDs

## Return Value

Array of objects found that match the specified tracking cookie, types, and tracking IDs; this list can be empty if no matches are found

## Remarks

You can set tracking IDs on
bodies
,
faces
,
edges
,
loops
, and
vertices
in parts and assemblies only; you cannot set tracking IDs on these entities in drawings. See
Tracking IDs
for more information.

## See Also

- `IBody2.GetTrackingIDs`
- `IBody2.GetTrackingIDsCount`
- `IBody2.IGetTrackingIDs`
- `IBody2.RemoveTrackingID`
- `IBody2.SetTrackingID`
- `IEdge.GetTrackingIDs`
- `IEdge.GetTrackingIDsCount`
- `IEdge.IGetTrackingIDs`
- `IEdge.RemoveTrackingID`
- `IEdge.SetTrackingID`
- `IFace2.GetTrackingIDs`
- `IFace2.GetTrackingIDsCount`
- `IFace2.IGetTrackingIDs`
- `IFace2.RemoveTrackingID`
- `IFace2.SetTrackingID`
- `ILoop2.GetTrackingIDs`
- `ILoop2.GetTrackingIDsCount`
- `ILoop2.IGetTrackingIDs`
- `ILoop2.RemoveTrackingID`
- `ILoop2.SetTrackingID`
- `IVertex.GetTrackingIDs`
- `IVertex.GetTrackingIDsCount`
- `IVertex.IGetTrackingIDs`
- `IVertex.RemoveTrackingID`
- `IVertex.SetTrackingID`