---
type: method
interface: IModeler
member: MakeManifoldBodies
returns: System.Object
parameters:
  -
    name: NonManifoldIn
    type: Body2
    description: Non-manifold bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.GeneralTopology
  - IModeler.IMakeManifoldBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - general
  - non
  - manifold
  - makemanifoldbodies
  - imodeler
  - modeler
  - make
  - body2
  - object
  - create
  - convert
  - vb
  - net
  - vba
---

# IModeler.MakeManifoldBodies

Creates manifold bodies from the specified non-manifold body.

## Signature

```csharp
System.Object MakeManifoldBodies( 
   Body2
NonManifoldIn
)
```
## Parameters

- `NonManifoldIn` (Body2): Non-manifold bodies

## Return Value

Manifold bodies

## Examples

- Create and Convert Non-manifold Bodies (C#) (Create_and_Convert_Non-manifold_Bodies_Example_CSharp.htm)
- Create and Convert Non-manifold Bodies (VB.NET) (Create_and_Convert_Non-manifold_Bodies_Example_VBNET.htm)
- Create and Convert Non-manifold Bodies (VBA) (Create_and_Convert_Non-manifold_Bodies_Example_VB.htm)

## See Also

- `IModeler.GeneralTopology`
- `IModeler.IMakeManifoldBodies`