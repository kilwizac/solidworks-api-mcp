---
type: property
interface: IComponent2
member: IGetMaterialPropertyValuesForFace
returns: System.Double
parameters:
  -
    name: FaceIn
    type: System.Object
    description: Pointer to the face from which to get its color
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - geometry
related: []
keywords:
  - igetmaterialpropertyvaluesforface
  - icomponent2
  - component2
  - material
  - values
  - face
  - object
  - double
readonly: null
---

# IComponent2.IGetMaterialPropertyValuesForFace

Gets the color of the specified face.

## Signature

```csharp
System.Double IGetMaterialPropertyValuesForFace( 
   System.Object
FaceIn
)
```
## Parameters

- `FaceIn` (System.Object): Pointer to the face from which to get its color

## Return Value

Color of the face