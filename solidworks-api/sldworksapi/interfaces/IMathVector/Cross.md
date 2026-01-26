---
type: method
interface: IMathVector
member: Cross
returns: System.Object
parameters:
  -
    name: VectorObjIn
    type: System.Object
    description: Math vector to use to determine the cross product
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.ICross
keywords:
  - cross
  - imathvector
  - math
  - vector
  - obj
  - object
  - angle
  - between
  - plane
  - line
  - vba
---

# IMathVector.Cross

Gets the cross product between two math vectors.

## Signature

```csharp
System.Object Cross( 
   System.Object
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (System.Object): Math vector to use to determine the cross product

## Return Value

Newly created math vector

## Examples

- Get Angle Between Plane and Line (VBA) (Get_Angle_Between_Plane_and_Line_Example_VB.htm)

## See Also

- `IMathVector.ICross`