---
type: property
interface: IMassProperty
member: SetCoordinateSystem
returns: System.Boolean
parameters:
  -
    name: Coords
    type: MathTransform
    description: Math transform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModelDoc2.GetCurrentCoordinateSystemName
  - IModelDoc2.InsertCoordinateSystem
  - IModelDocExtension.GetCoordinateSystemTransformByName
keywords:
  - setcoordinatesystem
  - imassproperty
  - mass
  - coordinate
  - coords
  - math
  - transform
  - boolean
readonly: null
---

# IMassProperty.SetCoordinateSystem

Sets the coordinate system to use when calculating mass properties for this model.

## Signature

```csharp
System.Boolean SetCoordinateSystem( 
   MathTransform
Coords
)
```
## Parameters

- `Coords` (MathTransform): Math transform

## Return Value

True if the coordinate system is set, false if not

## See Also

- `IModelDoc2.GetCurrentCoordinateSystemName`
- `IModelDoc2.InsertCoordinateSystem`
- `IModelDocExtension.GetCoordinateSystemTransformByName`