---
type: method
interface: IModelDoc2
member: CreateCenterLineVB
returns: void
parameters:
  -
    name: X1
    type: System.Double
    description: Location of first end point in meters
  -
    name: Y1
    type: System.Double
    description: Location of first end point in meters
  -
    name: Z1
    type: System.Double
    description: Location of first end point in meters
  -
    name: X2
    type: System.Double
    description: Location of second end point in meters
  -
    name: Y2
    type: System.Double
    description: Location of second end point in meters
  -
    name: Z2
    type: System.Double
    description: Location of second end point in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateCenterLine
  - IModelDoc2.ICreateCenterLine
keywords:
  - centerlines
  - see
  - also
  - icenterline
  - create
  - createcenterlinevb
  - imodeldoc2
  - model
  - doc2
  - center
  - line
  - vb
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - void
---

# IModelDoc2.CreateCenterLineVB

Creates a center line from P1 to P2 and can be used in Visual Basic for Applications (VBA) and other forms of Basic that do not support SafeArrays.

## Signature

```csharp
void CreateCenterLineVB( 
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
)
```
## Parameters

- `X1` (System.Double): Location of first end point in meters
- `Y1` (System.Double): Location of first end point in meters
- `Z1` (System.Double): Location of first end point in meters
- `X2` (System.Double): Location of second end point in meters
- `Y2` (System.Double): Location of second end point in meters
- `Z2` (System.Double): Location of second end point in meters

## Return Value

Unknown.

## Remarks

You can also create centerline construction geometry using
IModelDoc2::CreateLine2
and
ISketchSegment::ConstructionGeometry
.

## See Also

- `IModelDoc2.CreateCenterLine`
- `IModelDoc2.ICreateCenterLine`