---
type: method
interface: IModelDoc2
member: ICreateCenterLine
returns: void
parameters:
  -
    name: P1
    type: System.Double
    description: Array of 3 doubles (x1, y1, z1) in meters that describe the first point of the line
  -
    name: P2
    type: System.Double
    description: Array of 3 doubles (x2, y2, z2) in meters that describe the second point of the line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateCenterLine
keywords:
  - centerlines
  - see
  - also
  - icenterline
  - create
  - icreatecenterline
  - imodeldoc2
  - model
  - doc2
  - center
  - line
  - p1
  - double
  - p2
  - void
---

# IModelDoc2.ICreateCenterLine

Creates a center line from P1 to P2.

## Signature

```csharp
void ICreateCenterLine( 
   ref System.Double
P1
,
   ref System.Double
P2
)
```
## Parameters

- `P1` (System.Double): Array of 3 doubles (x1, y1, z1) in meters that describe the first point of the line
- `P2` (System.Double): Array of 3 doubles (x2, y2, z2) in meters that describe the second point of the line

## Return Value

True if success, false if not

## Remarks

Use
IModelDoc2::CreateCenterLineVB
for Visual Basic for Applications (VBA) and other forms of Basic that do not support SafeArrays.
You can also create centerline construction geometry using
IModelDoc2::ICreateLine2
and
ISketchSegment::ConstructionGeometry
.

## See Also

- `IModelDoc2.CreateCenterLine`