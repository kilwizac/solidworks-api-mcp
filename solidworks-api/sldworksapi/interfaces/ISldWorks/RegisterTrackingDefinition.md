---
type: method
interface: ISldWorks
member: RegisterTrackingDefinition
returns: System.Int32
parameters:
  -
    name: Name
    type: System.String
    description: Prefixed name that uniquely identifies tracking definitions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IBody2.GetTrackingIDs
  - IBody2.RemoveTrackingID
  - IBody2.SetTrackingID
  - IEdge.GetTrackingIDs
  - IEdge.RemoveTrackingID
  - IEdge.SetTrackingID
  - IFace2.GetTrackingIDs
  - IFace2.RemoveTrackingID
  - IFace2.SetTrackingID
  - ILoop2.GetTrackingIDs
  - ILoop2.RemoveTrackingID
  - ILoop2.SetTrackingID
  - IVertex.GetTrackingIDs
  - IVertex.RemoveTrackingID
  - IVertex.SetTrackingID
keywords:
  - tracking
  - ids
  - register
  - definitions
  - registertrackingdefinition
  - isldworks
  - sld
  - works
  - definition
  - name
  - string
  - int32
  - remove
  - body
  - vba
---

# ISldWorks.RegisterTrackingDefinition

Registers a tracking definition.

## Signature

```csharp
System.Int32 RegisterTrackingDefinition( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Prefixed name that uniquely identifies tracking definitions

## Return Value

Cookie that represents the tracking definition for use in other methods; a return value of -1 indicates that a tracking cookie was not generated; if a cookie has already been registered for this tracking definition, then that cookie is returned

## Remarks

Applications can use the same prefix as for an
IAttribute
,
IAttributeDef
, and third-party storage. The same application can register mutiple tracking definitions; for example,
abcMyTrackingDefinition1
and
abcMyTrackingDefinition2
.
This method should typically be called when an application is starting up. See
Tracking IDs
for more information.

## Examples

- Get, Set, and Remove Tracking IDs on Body (VBA) (Get_Set_And_Remove_Tracking_IDs_On_Body_Example_VB.htm)

## See Also

- `IBody2.GetTrackingIDs`
- `IBody2.RemoveTrackingID`
- `IBody2.SetTrackingID`
- `IEdge.GetTrackingIDs`
- `IEdge.RemoveTrackingID`
- `IEdge.SetTrackingID`
- `IFace2.GetTrackingIDs`
- `IFace2.RemoveTrackingID`
- `IFace2.SetTrackingID`
- `ILoop2.GetTrackingIDs`
- `ILoop2.RemoveTrackingID`
- `ILoop2.SetTrackingID`
- `IVertex.GetTrackingIDs`
- `IVertex.RemoveTrackingID`
- `IVertex.SetTrackingID`