---
type: property
interface: IMassProperty2
member: SetCoordinateSystem
returns: System.Boolean
parameters:
  -
    name: Coords
    type: System.Object
    description: Math transform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - setcoordinatesystem
  - imassproperty2
  - mass
  - property2
  - coordinate
  - coords
  - object
  - boolean
readonly: null
---

# IMassProperty2.SetCoordinateSystem

Sets the coordinate system to use when calculating mass properties for this model.

## Signature

```csharp
System.Boolean SetCoordinateSystem( 
   System.Object
Coords
)
```
## Parameters

- `Coords` (System.Object): Math transform

## Return Value

True if the coordinate system is set, false if not