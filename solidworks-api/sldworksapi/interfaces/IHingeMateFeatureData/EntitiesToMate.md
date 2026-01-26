---
type: property
interface: IHingeMateFeatureData
member: EntitiesToMate
returns: System.Object
parameters:
  -
    name: EntityType
    type: System.Int32
    description: Type of entity as defined in swHingeMateEntityType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - entitiestomate
  - ihingematefeaturedata
  - hinge
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

# IHingeMateFeatureData.EntitiesToMate

Gets or sets the entities to mate in this hinge mate.

## Signature

```csharp
System.Object EntitiesToMate( 
   System.Int32
EntityType
) {get; set;}
```
## Parameters

- `EntityType` (System.Int32): Type of entity as defined in swHingeMateEntityType_e

## Return Value

Array of mate entities (see Remarks )

## Remarks

If EntityType is set to swHingeMateEntityType_e.:
swHingeMateEntityType_Concentric, then select two mate entities as specified in the Remarks of
IConcentricMateFeatureData::EntitiesToMate
.
swHingeMateEntityType_Coincident, then select two mate entities:
plane
or planar
face
another plane or planar face,
edge
,
sketch point
,
reference point
, or
vertex
swHingeMateEntityType_Angle, then select two faces. This type is valid only if
IHingeMateFeatureData::AngleSelection
is set to true.
Instead of specifying this property, you can use
IModelDocExtension::SelectByID2
to pre-select the entities to mate using Mark = 1 for concentric entities, Mark = 32768 for coincident entities, and Mark = 65536 for angle faces. You can pre-select mate entities during mate creation, but not during mate editing.

## Examples

- IHingeMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHingeMateFeatureData)