---
type: method
interface: IMathVector
member: MultiplyTransform
returns: System.Object
parameters:
  -
    name: TransformObjIn
    type: System.Object
    description: Math transform by which to multiply the math vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathVector.IMultiplyTransform
keywords:
  - multiplytransform
  - imathvector
  - math
  - vector
  - multiply
  - transform
  - obj
  - object
  - angle
  - between
  - plane
  - line
  - vba
---

# IMathVector.MultiplyTransform

Multiplies this math vector by the specified math transform.

## Signature

```csharp
System.Object MultiplyTransform( 
   System.Object
TransformObjIn
)
```
## Parameters

- `TransformObjIn` (System.Object): Math transform by which to multiply the math vector

## Return Value

Newly created math vector or NULL if the operation fails

## Examples

- Get Angle Between Plane and Line (VBA) (Get_Angle_Between_Plane_and_Line_Example_VB.htm)

## See Also

- `IMathVector.IMultiplyTransform`