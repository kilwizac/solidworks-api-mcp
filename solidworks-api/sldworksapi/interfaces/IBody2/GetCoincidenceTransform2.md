---
type: method
interface: IBody2
member: GetCoincidenceTransform2
returns: System.Boolean
parameters:
  -
    name: BodyDispIn
    type: System.Object
    description: Input body
  -
    name: Xform
    type: MathTransform
    description: Pointer to the transformation matrix
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - tranformation
  - matrix
  - transform
  - getcoincidencetransform2
  - body2
  - coincidence
  - transform2
  - body
  - disp
  - object
  - xform
  - math
  - boolean
  - calculate
  - transformations
  - part
  - vb
  - net
  - vba
---

# IBody2.GetCoincidenceTransform2

Calculates the transformation matrix, which would make the input body coincident with this body if the transformation matrix is applied.

## Signature

```csharp
System.Boolean GetCoincidenceTransform2( 
   System.Object
BodyDispIn
,
   out MathTransform
Xform
)
```
## Parameters

- `BodyDispIn` (System.Object): Input body
- `Xform` (MathTransform): Pointer to the transformation matrix

## Return Value

True if this body and the input body can coincide by applying the transformation matrix, false if not

## Examples

- Calculate Transformations in Part (C#) (Calculate_Transformations_in_Part_Example_CSharp.htm)
- Calculate Transformations in Part (VB.NET) (Calculate_Transformations_in_Part_Example_VBNET.htm)
- Calculate Transformations in Part (VBA) (Calculate_Transformations_in_Part_Example_VB.htm)