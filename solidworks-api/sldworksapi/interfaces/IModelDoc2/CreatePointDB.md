---
type: method
interface: IModelDoc2
member: CreatePointDB
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: 
  -
    name: Y
    type: System.Double
    description: 
  -
    name: Z
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - createpointdb
  - imodeldoc2
  - model
  - doc2
  - create
  - point
  - db
  - double
  - boolean
---

# IModelDoc2.CreatePointDB

Obsolete. Superseded by IModelDoc2::CreatePoint2 and IModelDoc2::ICreatePoint2.

## Signature

```csharp
System.Boolean CreatePointDB( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): 
- `Y` (System.Double): 
- `Z` (System.Double): 

## Return Value

Unknown.

## Remarks

IMPORTANT:
This method ignores the z value when adding a point to a 3D sketch. Thus, update your code to use the more current method, IModelDoc2::CreatePoint2 or IModelDoc2::ICreatePoint2.