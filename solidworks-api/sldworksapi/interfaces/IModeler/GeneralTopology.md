---
type: property
interface: IModeler
member: GeneralTopology
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.GetManifoldBodiesCount
  - IModeler.IMakeManifoldBodies
  - IModeler.MakeManifoldBodies
keywords:
  - bodies
  - see
  - also
  - ibody2
  - general
  - non
  - manifold
  - generaltopology
  - imodeler
  - modeler
  - topology
  - boolean
  - create
  - convert
  - vb
  - net
  - vba
readonly: null
---

# IModeler.GeneralTopology

Gets or sets the Parasolid option to create general (non-manifold) bodies.

## Signature

```csharp
System.Boolean GeneralTopology {get; set;}
```
## Parameters

None.

## Return Value

True to create general bodies, false to not

## Remarks

SOLIDWORKS expects this property be false because SOLIDWORKS does not support the creation of general bodies. If you set this property to True, then set it back to false as soon as your intended operations complete.
To tessellate a general body, set
ITesssellation::MatchType
to swTesselationMatchFacetGeometry, which sets the Parasolid facet match to clipping facet boundaries to a common edge

## Examples

- Create and Convert Non-manifold Bodies (C#) (Create_and_Convert_Non-manifold_Bodies_Example_CSharp.htm)
- Create and Convert Non-manifold Bodies (VB.NET) (Create_and_Convert_Non-manifold_Bodies_Example_VBNET.htm)
- Create and Convert Non-manifold Bodies (VBA) (Create_and_Convert_Non-manifold_Bodies_Example_VB.htm)

## See Also

- `IModeler.GetManifoldBodiesCount`
- `IModeler.IMakeManifoldBodies`
- `IModeler.MakeManifoldBodies`