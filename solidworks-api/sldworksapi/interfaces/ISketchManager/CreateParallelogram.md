---
type: method
interface: ISketchManager
member: CreateParallelogram
returns: System.Object
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate for point 1
  -
    name: Y1
    type: System.Double
    description: coordinate for point 1
  -
    name: Z1
    type: System.Double
    description: Z coordinate for point 1
  -
    name: X2
    type: System.Double
    description: X coordinate for point 2
  -
    name: Y2
    type: System.Double
    description: Y coordinate for point 2
  -
    name: Z2
    type: System.Double
    description: Z coordinate for point 2
  -
    name: X3
    type: System.Double
    description: X coordinate for point 3
  -
    name: Y3
    type: System.Double
    description: Y coordinate for point 3
  -
    name: Z3
    type: System.Double
    description: Z coordinate for point 3
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - parallelograms
  - sketch
  - entities
  - parallelogram
  - see
  - also
  - isketch
  - createparallelogram
  - isketchmanager
  - manager
  - create
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - x3
  - y3
  - z3
  - object
---

# ISketchManager.CreateParallelogram

Creates a parallelogram.

## Signature

```csharp
System.Object CreateParallelogram( 
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
,
   System.Double
X3
,
   System.Double
Y3
,
   System.Double
Z3
)
```
## Parameters

- `X1` (System.Double): X coordinate for point 1
- `Y1` (System.Double): coordinate for point 1
- `Z1` (System.Double): Z coordinate for point 1
- `X2` (System.Double): X coordinate for point 2
- `Y2` (System.Double): Y coordinate for point 2
- `Z2` (System.Double): Z coordinate for point 2
- `X3` (System.Double): X coordinate for point 3
- `Y3` (System.Double): Y coordinate for point 3
- `Z3` (System.Double): Z coordinate for point 3

## Return Value

Array of sketch segments for the parallelogram