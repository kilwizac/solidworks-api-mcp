---
type: property
interface: IBody2
member: IGetMaterialPropertyValuesForFace
returns: System.Double
parameters:
  -
    name: FaceIn
    type: System.Object
    description: Face from which to get its color
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetMaterialIdName2
  - IBody2.GetMaterialPropertyName
  - IBody2.GetMaterialUserName2
  - IBody2.IMaterialPropertyValues2
  - IBody2.IRemoveMaterialProperty
  - IBody2.MaterialPropertyValues2
  - IBody2.RemoveMaterialProperty
  - IBody2.SetMaterialIdName2
  - IBody2.SetMaterialProperty
  - IBody2.SetMaterialUserName2
  - IComponent2.IGetMaterialPropertyValuesForFace
keywords:
  - material
  - color
  - igetmaterialpropertyvaluesforface
  - ibody2
  - body2
  - values
  - face
  - object
  - double
readonly: null
---

# IBody2.IGetMaterialPropertyValuesForFace

Gets the color of the specified face.

## Signature

```csharp
System.Double IGetMaterialPropertyValuesForFace( 
   System.Object
FaceIn
)
```
## Parameters

- `FaceIn` (System.Object): Face from which to get its color

## Return Value

Color of the face

## See Also

- `IBody2.GetMaterialIdName2`
- `IBody2.GetMaterialPropertyName`
- `IBody2.GetMaterialUserName2`
- `IBody2.IMaterialPropertyValues2`
- `IBody2.IRemoveMaterialProperty`
- `IBody2.MaterialPropertyValues2`
- `IBody2.RemoveMaterialProperty`
- `IBody2.SetMaterialIdName2`
- `IBody2.SetMaterialProperty`
- `IBody2.SetMaterialUserName2`
- `IComponent2.IGetMaterialPropertyValuesForFace`