---
type: method
interface: ISketch
member: GetReferenceEntity
returns: System.Object
parameters:
  -
    name: LEntityType
    type: System.Int32
    description: Entity type as defined in swSelectType_e (only swSelFACES and swSelDATUMPLANES are valid values for this method)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - see
  - also
  - isketch
  - reference
  - entities
  - entity
  - ientity
  - getreferenceentity
  - type
  - int32
  - object
  - plane
  - which
  - created
  - vba
  - face
---

# ISketch.GetReferenceEntity

Gets the entity on which this sketch was created.

## Signature

```csharp
System.Object GetReferenceEntity( 
   out System.Int32
LEntityType
)
```
## Parameters

- `LEntityType` (System.Int32): Entity type as defined in swSelectType_e (only swSelFACES and swSelDATUMPLANES are valid values for this method)

## Return Value

Either a reference plane or a face , depending on the value of lEntityType

## Remarks

If the sketch resides on a face that is consumed by subsequent features, then this method returns NULL and swSelNOTHING. To get to the face, edit the sketch using
IModelDoc2::EditSketch
.

## Examples

- Get Plane On Which Sketch Created (VBA) (Get_Plane_on_which_Sketch_Created_Example_VB.htm)
- Get Plane or Face for Sketch (VBA) (Get_Plane_or_Face_for_Sketch_Example_VB.htm)