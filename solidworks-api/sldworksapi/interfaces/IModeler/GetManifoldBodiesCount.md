---
type: method
interface: IModeler
member: GetManifoldBodiesCount
returns: System.Int32
parameters:
  -
    name: NonManifoldIn
    type: Body2
    description: Non-manifold body
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
  - getmanifoldbodiescount
  - imodeler
  - modeler
  - count
  - body2
  - int32
---

# IModeler.GetManifoldBodiesCount

Gets the number of manifold bodies created from the specified non-manifold body.

## Signature

```csharp
System.Int32 GetManifoldBodiesCount( 
   Body2
NonManifoldIn
)
```
## Parameters

- `NonManifoldIn` (Body2): Non-manifold body

## Return Value

Number of manifold bodies

## Remarks

Call this method before calling
IModeler::IMakeManifoldBodies
.

## See Also

- `IModeler.GeneralTopology`
- `IModeler.MakeManifoldBodies`