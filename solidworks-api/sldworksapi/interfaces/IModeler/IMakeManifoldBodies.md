---
type: method
interface: IModeler
member: IMakeManifoldBodies
returns: Body2
parameters:
  -
    name: NonManifoldIn
    type: Body2
    description: Non-manifold bodies
  -
    name: Count
    type: System.Int32
    description: Number of manifold bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.GeneralTopology
  - IModeler.MakeManifoldBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - general
  - non
  - manifold
  - imakemanifoldbodies
  - imodeler
  - modeler
  - make
  - body2
  - count
  - int32
---

# IModeler.IMakeManifoldBodies

Creates manifold bodies from the specified non-manifold body.

## Signature

```csharp
Body2 IMakeManifoldBodies( 
   Body2
NonManifoldIn
,
   System.Int32
Count
)
```
## Parameters

- `NonManifoldIn` (Body2): Non-manifold bodies
- `Count` (System.Int32): Number of manifold bodies

## Return Value

Manifold bodies

## Remarks

Call
IModeler::GetManifoldBodiesCount
before calling this method to determine the size of the array for that method.

## See Also

- `IModeler.GeneralTopology`
- `IModeler.MakeManifoldBodies`