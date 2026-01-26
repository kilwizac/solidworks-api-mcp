---
type: method
interface: IBody2
member: GetCoincidenceTransform
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
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getcoincidencetransform
  - ibody2
  - body2
  - coincidence
  - transform
  - body
  - disp
  - object
  - xform
  - math
  - boolean
---

# IBody2.GetCoincidenceTransform

Obsolete. Superseded by IBody2::GetCoincidenceTransform2.

## Signature

```csharp
System.Boolean GetCoincidenceTransform( 
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

True if the bodies (the body on which the method is invoked and the input body) can coincide by applying appropriate transforms, false if not