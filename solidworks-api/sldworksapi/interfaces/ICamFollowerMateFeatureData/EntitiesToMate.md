---
type: property
interface: ICamFollowerMateFeatureData
member: EntitiesToMate
returns: System.Object
parameters:
  -
    name: EntityType
    type: System.Int32
    description: Type of cam entity to mate as defined in swCamMateEntityType_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - entitiestomate
  - icamfollowermatefeaturedata
  - cam
  - follower
  - mate
  - feature
  - data
  - entities
  - entity
  - type
  - int32
  - object
readonly: null
---

# ICamFollowerMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this cam-follower mate.

## Signature

```csharp
System.Object EntitiesToMate( 
   System.Int32
EntityType
) {get; set;}
```
## Parameters

- `EntityType` (System.Int32): Type of cam entity to mate as defined in swCamMateEntityType_e (see Remarks )

## Return Value

Array of entities to mate (see Remarks )

## Remarks

Use this property with EntityType set to swCamMateEntityType_e.:
CamPath, to get or set the cam
faces
to mate.
CamFollower, to get or set the cam-follower face or
vertex
to mate.
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1 for the cam face and Mark = 8 for the cam follower face or vertex. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- ICamFollowerMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICamFollowerMateFeatureData)