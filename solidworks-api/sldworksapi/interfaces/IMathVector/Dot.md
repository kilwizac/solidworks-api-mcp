---
type: method
interface: IMathVector
member: Dot
returns: System.Double
parameters:
  -
    name: VectorObjIn
    type: System.Object
    description: Math vector to use to determine the dot value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.IDot
keywords:
  - dot
  - imathvector
  - math
  - vector
  - obj
  - object
  - double
  - angle
  - hole
  - not
  - normal
  - face
  - vba
---

# IMathVector.Dot

Gets the value of the dot product between two math vectors.

## Signature

```csharp
System.Double Dot( 
   System.Object
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (System.Object): Math vector to use to determine the dot value

## Return Value

Value of the dot product

## Examples

- Get Angle of Hole Not Normal to Face (VBA) (Get_Angle_of_Hole_Not_Normal_to_a_Face_Example_VB.htm)

## See Also

- `IMathVector.IDot`