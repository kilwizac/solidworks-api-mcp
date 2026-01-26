---
type: method
interface: IMathPoint
member: AddVector
returns: System.Object
parameters:
  -
    name: VectorObjIn
    type: System.Object
    description: Math vector by which to translate this math point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathPoint.IAddVector
  - IMathPoint.ISubtractVector
  - IMathPoint.SubtractVector
keywords:
  - addvector
  - imathpoint
  - math
  - point
  - add
  - vector
  - obj
  - object
  - locate
  - apex
  - conical
  - face
  - vba
---

# IMathPoint.AddVector

Translates a math point by a math vector to create a new math point.

## Signature

```csharp
System.Object AddVector( 
   System.Object
VectorObjIn
)
```
## Parameters

- `VectorObjIn` (System.Object): Math vector by which to translate this math point

## Return Value

Newly created translated math point or NULL if the operation fails

## Examples

- Locate Apex of Conical Face (VBA) (Locate_Apex_of_Conical_Face_Example_VB.htm)

## See Also

- `IMathPoint.IAddVector`
- `IMathPoint.ISubtractVector`
- `IMathPoint.SubtractVector`