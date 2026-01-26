---
type: method
interface: IModelDoc
member: ICreateClippedSplines
returns: EnumSketchSegments
parameters:
  -
    name: PropArray
    type: System.Int32
    description: 
  -
    name: KnotsArray
    type: System.Double
    description: 
  -
    name: CntrlPntCoordArray
    type: System.Double
    description: 
  -
    name: X1
    type: System.Double
    description: 
  -
    name: Y1
    type: System.Double
    description: 
  -
    name: X2
    type: System.Double
    description: 
  -
    name: Y2
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - icreateclippedsplines
  - imodeldoc
  - model
  - doc
  - create
  - clipped
  - splines
  - prop
  - array
  - int32
  - knots
  - double
  - cntrl
  - pnt
  - coord
  - x1
  - y1
  - x2
  - y2
  - sketch
  - segments
---

# IModelDoc.ICreateClippedSplines

Obsolete. Superseded by IModelDoc2::ICreateClippedSplines.

## Signature

```csharp
EnumSketchSegments ICreateClippedSplines( 
   ref System.Int32
PropArray
,
   ref System.Double
KnotsArray
,
   ref System.Double
CntrlPntCoordArray
,
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
X2
,
   System.Double
Y2
)
```
## Parameters

- `PropArray` (System.Int32): 
- `KnotsArray` (System.Double): 
- `CntrlPntCoordArray` (System.Double): 
- `X1` (System.Double): 
- `Y1` (System.Double): 
- `X2` (System.Double): 
- `Y2` (System.Double): 

## Return Value

Unknown.