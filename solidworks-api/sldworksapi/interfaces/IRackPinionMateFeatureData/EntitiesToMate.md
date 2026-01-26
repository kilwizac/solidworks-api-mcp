---
type: property
interface: IRackPinionMateFeatureData
member: EntitiesToMate
returns: System.Object
parameters:
  -
    name: EntityType
    type: System.Int32
    description: Entity type to mate as defined in swRackPinionMateEntityType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - entitiestomate
  - irackpinionmatefeaturedata
  - rack
  - pinion
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

# IRackPinionMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this rack and pinion mate feature.

## Signature

```csharp
System.Object EntitiesToMate( 
   System.Int32
EntityType
) {get; set;}
```
## Parameters

- `EntityType` (System.Int32): Entity type to mate as defined in swRackPinionMateEntityType_e

## Return Value

Array of entities to mate (see Remarks )

## Remarks

If EntityType is set to swRackPinionMateEntityType_e.:
swRackPinionMateEntityType_Pinion, then set the array with a a cylindrical
face
, circular
edge
or
arc
, sketch circle,
axis
, or revolved
surface
.
swRackPinionMateEntityType_Rack, then set the array with a linear edge,
sketch line
,
centerline
, axis, or cylindrical face.
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 64 for the rack and Mark = 128 for the pinion. You can pre-select mate entities during mate creation, but not during mate editing.