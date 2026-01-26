---
type: method
interface: IModelDoc2
member: SketchRectangleAtAnyAngle
returns: void
parameters:
  -
    name: Val1
    type: System.Double
    description: X value of corner 1
  -
    name: Val2
    type: System.Double
    description: Y value of corner 1
  -
    name: Z1
    type: System.Double
    description: Z value of corner 1
  -
    name: Val3
    type: System.Double
    description: X value of corner 2 defining the bottom line from corner 1
  -
    name: Val4
    type: System.Double
    description: Y value of corner 2 defining the bottom line from corner 1
  -
    name: Z2
    type: System.Double
    description: Z value of corner 2 defining the bottom line from corner 1
  -
    name: Val3x
    type: System.Double
    description: X value of corner 3; diagonal to corner 1
  -
    name: Val3y
    type: System.Double
    description: Y value of corner 3; diagonal to corner 1
  -
    name: Z3
    type: System.Double
    description: Z value of corner 3; diagonal to corner 1
  -
    name: Val5
    type: System.Boolean
    description: True to add automatic constraints to the rectangle geometry, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.SketchRectangle
keywords:
  - sketchrectangleatanyangle
  - imodeldoc2
  - model
  - doc2
  - sketch
  - rectangle
  - any
  - angle
  - val1
  - double
  - val2
  - z1
  - val3
  - val4
  - z2
  - val3x
  - val3y
  - z3
  - val5
  - boolean
  - void
---

# IModelDoc2.SketchRectangleAtAnyAngle

Obsolete. Superseded by ISketchManager::Create3PointCornerRectangle.

## Signature

```csharp
void SketchRectangleAtAnyAngle( 
   System.Double
Val1
,
   System.Double
Val2
,
   System.Double
Z1
,
   System.Double
Val3
,
   System.Double
Val4
,
   System.Double
Z2
,
   System.Double
Val3x
,
   System.Double
Val3y
,
   System.Double
Z3
,
   System.Boolean
Val5
)
```
## Parameters

- `Val1` (System.Double): X value of corner 1
- `Val2` (System.Double): Y value of corner 1
- `Z1` (System.Double): Z value of corner 1
- `Val3` (System.Double): X value of corner 2 defining the bottom line from corner 1
- `Val4` (System.Double): Y value of corner 2 defining the bottom line from corner 1
- `Z2` (System.Double): Z value of corner 2 defining the bottom line from corner 1
- `Val3x` (System.Double): X value of corner 3; diagonal to corner 1
- `Val3y` (System.Double): Y value of corner 3; diagonal to corner 1
- `Z3` (System.Double): Z value of corner 3; diagonal to corner 1
- `Val5` (System.Boolean): True to add automatic constraints to the rectangle geometry, false to not

## Return Value

Unknown.

## See Also

- `IModelDoc2.SketchRectangle`